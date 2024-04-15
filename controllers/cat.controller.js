const cats = [];

// delete is a reserved keyword.


exports.create = (req, res) => {
    const { id, name } = req.params;
    const newCat = { id: parseInt(id), name };
    cats.push(newCat);
    res.status(201).json(newCat);
}

exports.read = (req, res) => {
    res.send(cats);
}

// Function to update a cat's name (using PUT method)
exports.update = (req, res) => {
    const { id } = req.params;
    const { name } = req.params;
    const catIndex = cats.findIndex(cat => cat.id === parseInt(id));
    if (catIndex === -1) {
      return res.status(404).json({ message: "Cat not found" });
    }
    cats[catIndex].name = name;
    res.json(cats[catIndex]);
}



// Function to delete a cat (using DELETE method)
exports.deleteCat = (req, res) => {
    const { id } = req.params;
    const catIndex = cats.findIndex(cat => cat.id === parseInt(id));
    if (catIndex === -1) {
      return res.status(404).json({ message: "Cat name deleted" });
    }
    cats.splice(catIndex, 1);
    res.sendStatus(204);
}