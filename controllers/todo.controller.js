const todos = [];

// Create a new todo
exports.create = (req, res) => {
    const { title, importance } = req.body;
    const id = todos.length + 1;
    const createdAt = new Date();
    const newTodo = {
        id,
        title,
        importance,
        createdAt,
        completed: false,
        completedAt: null,
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
}

// Read all todos
exports.read = (req, res) => {
    res.json(todos);
}

// Update a todo by ID
exports.updateTodo = (req, res) => {
    const { id } = req.params;
    const { title, importance, completed } = req.body;
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
    if (todoIndex === -1) {
        return res.status(404).json({ message: "Todo not found" });
    }

    // Update title and importance
    todos[todoIndex].title = title || todos[todoIndex].title;
    todos[todoIndex].importance = importance || todos[todoIndex].importance;

    
    if (completed !== undefined) {
        todos[todoIndex].completed = completed;
        
        if (completed) {
            todos[todoIndex].completedAt = new Date();
        } else {
            todos[todoIndex].completedAt = null; // Reset completedAt if the todo is marked as incomplete
        }
    }

    res.json(todos[todoIndex]);
}
