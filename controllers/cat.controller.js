const cats = ['cat1','meow'];

// delete is a reserved keyword.


exports.create = (req, res) => {
    const { name } = req.body;
    cats.push(name);
    res.status(201).json({ name });
}

