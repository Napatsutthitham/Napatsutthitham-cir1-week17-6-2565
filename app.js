const http = require('http')
http.createServer(function (require, res) {
    //Get:http://localhost:5000/
    if (require.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Welcome to home page');
        return res.end()
    }

    //Get:http://localhost:5000/about
    else if (require.url == '/') {     
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('Welcome to About page');
            return res.end()
        }
        //Get:http://localhost:5000/Admin
    else if (require.url == '/'){ 
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Welcome to Admin page');
        return res.end()
    }  


    else if(require.url == '/') { 
        //Get:http://localhost:5000/xxx
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('not FOND 404');
            return res.end()
   }     

 listen(5000);
})
