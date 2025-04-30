// exo 1
// import http from 'http'
// const port = 3000;
//     const server = http.createServer((req, res) => {
//          res.write("hello world");
//          res.end();
//          console.log(req.url);
//          console.log(req.method);
//      });
//     server.listen(port, (err) => {
//         if(err) throw err;
//         console.log(`Server is running on port ${port}`);
//     })    

// exo 2
// import http from 'http';
// import fs from 'fs';
// import lauchserver from './server.js';
// let port = 3000;
// const readFile = () => {
//     const index = fs.readFileSync('./index.html', 'utf-8' , (err , data) =>  {
//         console.log(data)
//     })
//     const about = fs.readFileSync('./about.html', 'utf-8' , (err , data) =>  {
//         console.log(data)
//     })

//     lauchserver(index, about);
// }
// readFile();
// exo 3
const express = require('express');
const app = express();
const port = 3000;

app.get('/search', (req, res) => {
    const queryValue = req.query.q;
    res.json({ query: queryValue });
});

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});

