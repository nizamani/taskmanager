# Task Manager

A full-stack Task Manager application using **NestJS** for the backend and **Next.js** for the frontend.

- **NestJS** handles task creation, updating, deletion, and retrieval from a PostgreSQL database.
- **Next.js** displays tasks in a user-friendly frontend interface.

---

## Repository Structure

- `taskmanager/be` – Backend (NestJS)
- `taskmanager/fe` – Frontend (Next.js)

---

## Database Setup

Before starting the NestJS server, run the following SQL to create the `tasks` table in your PostgreSQL database:

```sql
CREATE TABLE tasks (
    id        INTEGER   DEFAULT nextval('main.table_name_id_seq'::regclass) NOT NULL PRIMARY KEY,
    title     VARCHAR,
    completed SMALLINT,
    createdat TIMESTAMP DEFAULT now() NOT NULL
);
```

---

## API Endpoints (NestJS)

### GET `/api/tasks`
Fetch all tasks.  
**Example:** `http://localhost:3000/api/tasks`

---

### POST `/api/tasks`
Create a new task.

**Request Body:**
```json
{
  "title": "example99"
}
```

---

### PUT `/api/tasks/:id`
Update a task by ID.

**Example:** `http://localhost:3000/api/tasks/4`

**Request Body:**
```json
{
  "title": "example4",
  "completed": 1
}
```

---

### DELETE `/api/tasks/:id`
Delete a task by ID.  
**Example:** `http://localhost:3000/api/tasks/4`

---

## How to Run

### Backend (NestJS)
Navigate to the backend directory:

```bash
cd taskmanager/be
npm install
npm run start:dev
```

### Frontend (Next.js)
Navigate to the frontend directory:

```bash
cd taskmanager/fe
npm install
npm run dev
```

---

## Open in Browser

Once both servers are running:

- Frontend: [http://localhost:3001](http://localhost:3001)
- Backend API: [http://localhost:3000/api/tasks](http://localhost:3000/api/tasks)
