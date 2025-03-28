

const http = require('http')
const fs = require('fs');


function createNumber(res) {
    var counter = 0
    for (let i = 0; i < 100; i++) {
        counter ++
        
        res.write(counter.toString() + '\n');
    }
}

const server = http.createServer(function (req , res) {
    var query = require('url').parse(req.url).query 
    var app = require('querystring').parse(query).file + ".txt";

    res.writeHead(200, {'Content-Type': 'text/plain'});
    

    setTimeout(function() {
        console.log(`opening file${app}`);
        fs.readFile(app , 'utf8' , (err , data) => {
            if(err){
                res.write(`when open file , we have error${err}`)
            }
            else{res.write(data)}
            res.end()
            
        })
    } , 2000 )
    createNumber(res)
})

const port = 3000 
server.listen(port)
console.log(`server is running be http://localhost:${port}`);
