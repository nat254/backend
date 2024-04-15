const cats = [];

// delete is a reserved keyword.


exports.create = (req, res) => {
    const { name } = req.params;
    cats.push(name);
    res.send("added");
}

exports.read = (req, res) => {
    res.send(cats);
}

exports.post = (req, res) => {
    res.send("post");
}