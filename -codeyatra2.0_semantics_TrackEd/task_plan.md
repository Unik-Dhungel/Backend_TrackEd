# TrackEd Task Plan (Blueprint)

## Phase 1: B - Blueprint
- [x] Discovery (Requirements gathered from user prompt)
- [x] Data-First Rule: JSON Schema and DB Schema defined in `gemini.md`
- [x] Initialize Project Memory (`task_plan.md`, `findings.md`, `progress.md`, `gemini.md`)

## Phase 2: L - Link
- [x] Initialize Node.js project and install dependencies (`express`, `dotenv`, `cors`, `@supabase/supabase-js`)
- [x] Set up Folder Structure (`routes`, `controllers`, `middlewares`, `models`, `utils`, `config`)
- [x] Create `.env` for configuration
- [x] Implement Supabase client setup in `config/dbConfig.js`
- [x] Verify connection to Supabase (Database & Auth)

## Phase 3: A - Architect (The 3-Layer Build)
- [x] Set up generic Express server (`server.js`)
- [x] Implement Authentication middleware (Verifying Supabase JWT)
- [x] Implement Subjects features (Routes, Controllers)
- [x] Implement Notes features
- [x] Implement Student Notes (Inline comments)
- [x] Implement Assignments features
- [x] Implement Submissions features (with deadlines enforcement)
- [ ] Implement Attendance features

## Phase 4: S - Stylize (Refinement)
- [ ] Standardize API success/error JSON responses
- [ ] Add request validation
- [ ] Format terminal logging and outputs for readability

## Phase 5: T - Trigger (Deployment / Delivery)
- [x] Provide DB schema SQL for Supabase setup
- [x] Provide sample data script or instructions
- [x] Document setup instructions in README.md
- [x] Deliver the working local repository
