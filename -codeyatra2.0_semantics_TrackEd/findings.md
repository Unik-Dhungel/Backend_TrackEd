# TrackEd Findings & Research

- **Target Architecture**: Node.js & Express API connecting to Supabase for Auth & Database.
- **Workflow constraints**: Teachers are the only ones who can grade, assignments have due dates, students can see their own submissions only, etc.
- **Data Source**: Supabase PostgreSQL is the source of truth.
- **RLS Architecture Decision**: Since the database relies on JWTs but the Express logic requires complex role-handling, we use the custom `getAuthClient()` method to proxy the user's JWT strictly down to Supabase to enforce DB-level Row Level Security natively while validating role access at the Express Layer.
- **Deliverables**: Node.js backend repo, DB schema script, sample data, setup instructions.
