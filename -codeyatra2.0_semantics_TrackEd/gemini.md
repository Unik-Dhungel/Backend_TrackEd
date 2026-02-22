# Project Map & State Tracking

## North Star
Build a fully functional MVP of TrackEd, a smart campus platform for Nepali colleges, demonstrating the end-to-end teacher-student workflow.

## Integrations
- Supabase Auth (User authentication, JWT)
- Supabase PostgreSQL (Database, Source of Truth)
- Supabase Storage (Syllabus, Notes, Assignments uploads)

## Source of Truth
- Primary DB: Supabase PostgreSQL
- File Storage: Supabase Storage Buckets

## Behavioral Rules
- Assignment grading is manual.
- Notes are editable by teachers; inline comments are private to students.
- Students can access only their submissions/comments.
- Teachers access only their subjects and associated students.
- Backend enforces assignment deadlines.
- Data Leakage Prevention: Row Level Security (RLS) or backend validation strictly enforces role-based access control.

## Data Schemas
### Supabase PostgreSQL Tables
- `users`: `id` (uuid, refs auth.users), `role` (enum: 'teacher', 'student'), `full_name` (text), `email` (text)
- `subjects`: `id` (uuid), `title` (text), `description` (text), `teacher_id` (uuid, refs users)
- `enrollments`: `id` (uuid), `student_id` (uuid, refs users), `subject_id` (uuid, refs subjects)
- `notes`: `id` (uuid), `subject_id` (uuid, refs subjects), `title` (text), `content_url` (text), `created_at` (timestamp)
- `student_notes`: `id` (uuid), `note_id` (uuid, refs notes), `student_id` (uuid, refs users), `private_comment` (text), `created_at` (timestamp)
- `assignments`: `id` (uuid), `subject_id` (uuid, refs subjects), `title` (text), `description` (text), `due_date` (timestamp), `created_at` (timestamp)
- `submissions`: `id` (uuid), `assignment_id` (uuid, refs assignments), `student_id` (uuid, refs users), `file_url` (text), `status` (enum: 'submitted', 'graded'), `grade` (numeric), `feedback` (text), `submitted_at` (timestamp)
- `attendance`: `id` (uuid), `subject_id` (uuid, refs subjects), `student_id` (uuid, refs users), `date` (date), `status` (enum: 'present', 'absent', 'late')

### Expected API Payload Shapes
#### `GET /api/subjects` (Teacher or Student context)
**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "title": "Database Management",
      "description": "Intro to DB",
      "teacher_id": "uuid"
    }
  ]
}
```

#### `POST /api/assignments` (Teacher only)
**Request:**
```json
{
  "subject_id": "uuid",
  "title": "Assignment 1",
  "description": "Design an ER Diagram",
  "due_date": "2026-03-01T23:59:59Z"
}
```
**Response:** `{"success": true, "data": {...}}`

#### `POST /api/submissions` (Student only)
**Request:**
```json
{
  "assignment_id": "uuid",
  "file_url": "https://supabase.../file.pdf"
}
```
**Response:** `{"success": true, "data": {...}}`
