// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('root')
// })

// // /data/([\$])book

// app.all('/secret', (req, res, next) => {
//   console.log('Accessing the secret section ...');
//   next();
// })

// app.get('/about', (req, res) => {
//   res.send('about')
// })

// app.get('/random.text', (req, res) => {
//   res.send('random.text')
// })

// app.get('/ab?cd', (req, res) => {
//   res.send('ab?cd')
// })

// app.get('/ab*cd', (req, res) => {
//   res.send('ab*cd')
// })

// app.get('/ab(cd)?e', (req, res) => {
//   res.send('ab(cd)?e')
// })

// app.get(/a/, (req, res) => {
//   res.send('/a/')
// })

// app.get(/.*fly$/, (req, res) => {
//   res.send('/.*fly$/')
// })

// app.get('/flights/:from/:to', (req, res) => {
//   res.send(req.params)
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// const cat = require('./routes/cat.routes')
// app.use('/c', cat)

const express = require('express');
const app = express();
const catsRouter = require('./routes/cat.routes');

app.use(express.json());
app.use('/cats', catsRouter);



// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
    }
);
