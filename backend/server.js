const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage
let todos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Build a Todo App', completed: false },
];
let nextId = 3;

// GET /todos - Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// POST /todos - Add a new todo
app.post('/todos', (req, res) => {
  const { text } = req.body;

  if (!text || text.trim() === '') {
    return res.status(400).json({ error: 'Text is required' });
  }

  const newTodo = {
    id: nextId++,
    text: text.trim(),
    completed: false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT /todos/:id - Toggle completed status
app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const todo = todos.find((t) => t.id === parseInt(id));

  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  todo.completed = !todo.completed;
  res.json(todo);
});

// DELETE /todos/:id - Delete a todo
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((t) => t.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  const deletedTodo = todos.splice(index, 1);
  res.json(deletedTodo[0]);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
