# Todo List Application

A simple, beginner-friendly full-stack Todo List application built with React and Node.js/Express.

## Project Structure

```
todolist/
├── backend/
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── index.js
│       ├── index.css
│       ├── App.js
│       └── components/
│           ├── AddTodo.js
│           ├── TodoList.js
│           └── TodoItem.js
└── README.md
```

## Features

- ✅ Add a new todo
- ✅ View all todos
- ✅ Mark todo as completed
- ✅ Delete a todo
- ✅ Simple, clean UI
- ✅ No authentication required
- ✅ In-memory data storage

## Technology Stack

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **CORS** - Cross-Origin Resource Sharing middleware

### Frontend
- **React 18** - UI library
- **React Hooks** - State management
- **Fetch API** - HTTP requests

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation & Setup

#### 1. Backend Setup

Navigate to the backend folder and install dependencies:

```bash
cd backend
npm install
```

Start the backend server:

```bash
npm start
```

The server will run on **http://localhost:5000**

You should see:
```
Server running on http://localhost:5000
```

#### 2. Frontend Setup

In a new terminal, navigate to the frontend folder and install dependencies:

```bash
cd frontend
npm install
```

Start the React development server:

```bash
npm start
```

The frontend will automatically open at **http://localhost:3000**

## Using the App

1. **Add a Todo**: Type text in the input field and click "Add" button
2. **Complete a Todo**: Click the checkbox next to a todo to mark it as completed
3. **Delete a Todo**: Click the "Delete" button to remove a todo

## API Endpoints

### GET /todos
Returns all todos

**Response:**
```json
[
  { "id": 1, "text": "Learn React", "completed": false },
  { "id": 2, "text": "Build a Todo App", "completed": true }
]
```

### POST /todos
Add a new todo

**Request:**
```json
{ "text": "New todo text" }
```

**Response:**
```json
{ "id": 3, "text": "New todo text", "completed": false }
```

### PUT /todos/:id
Toggle the completed status of a todo

**Response:**
```json
{ "id": 1, "text": "Learn React", "completed": true }
```

### DELETE /todos/:id
Delete a todo by ID

**Response:**
```json
{ "id": 1, "text": "Learn React", "completed": true }
```

## Running Both Servers

You need two terminal windows:

**Terminal 1 (Backend):**
```bash
cd backend
npm start
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm start
```

## Troubleshooting

### Backend won't start
- Make sure you're in the `backend` folder
- Check if port 5000 is in use: `netstat -ano | findstr :5000` (Windows)
- Kill the process using that port if needed

### Frontend won't connect to backend
- Make sure backend is running on port 5000
- Check browser console for errors
- Verify CORS is enabled in the backend

### Port 3000 already in use
- The frontend will automatically try the next available port
- Or manually specify a different port: `PORT=3001 npm start`

## Code Overview

### Backend (server.js)
- Simple Express server with CORS enabled
- In-memory array to store todos
- Four REST endpoints for CRUD operations
- Basic error handling

### Frontend Components

**App.js**
- Main component that manages all todos
- Fetches todos on mount
- Handles add, toggle, and delete operations

**AddTodo.js**
- Form component to add new todos
- Resets input after submission

**TodoList.js**
- Displays all todos
- Shows empty state message

**TodoItem.js**
- Individual todo item
- Checkbox to toggle completion
- Delete button

## Notes

- Todos are stored in memory and will be lost on server restart
- No persistence layer (no database)
- No user authentication
- Simple styling with inline CSS only
- Clean, minimal, beginner-friendly code

- just a comit
- another one