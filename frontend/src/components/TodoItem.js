function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '12px',
        marginBottom: '8px',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px',
        border: '1px solid #eee',
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        style={{
          width: '18px',
          height: '18px',
          cursor: 'pointer',
        }}
      />

      <span
        style={{
          flex: 1,
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? '#999' : 'inherit',
        }}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        style={{
          padding: '6px 12px',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
