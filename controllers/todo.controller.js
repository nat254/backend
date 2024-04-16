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