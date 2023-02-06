const http = require('http')

//New Call back function
//http://localhost:5000
const server = http.createServer((require, res)=>{
    res.writeHeader(200, {'Content-Type':'text/html'})
    res.write('<h1>Hllo World!</h1>')
    return res.end()

    
})
//http://localhost:5000
server.listen(5000,() => {
    console.log('Server runing at http:localhost:5000') 
});



//old Call back function
//http://localhost/
//http.createServer((require, res)=>{
//   res.setHeader('Content-Type', 'text/plain')
//   res.statusCode = 200
//   res.end
//})