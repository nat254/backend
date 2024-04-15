const cats = ['cat1','meow'];

// delete is a reserved keyword.


exports.create = (req, res) => {
    const { name } = req.body;
    cats.push(name);
    res.status(201).json({ name });
}

exports.read = (req, res) => {
    res.send(cats);
}

// Function to update a cat's name (using PUT method)
exports.update = (req, res) => {
    const { id, name } = req.params;

    // Check if the index is within the bounds of the array
    if (id >= 0 && id < cats.length) {
        cats[id] = name;
        res.send("Cat name updated");
    } else {
        res.status(404).send("Cat not found");
    }
}