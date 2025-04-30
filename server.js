import http from 'http'
const port = 3000;
function lauchserver(index, about){
    const server = http.createServer((req, res) => {
        if (req.url === "/") res.end(index);
        if (req.url === "/about") res.end(about)
        if (req.url !== "/" || req.url !== "/about") {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Not Found page non trouvee </h1>');
        }
     });
    server.listen(port, (err) => {
        if(err) throw err;
        console.log(`Server is running on port ${port}`);
    })    
 }
 export default lauchserver
