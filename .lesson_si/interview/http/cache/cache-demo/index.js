const http = require('http');
const fs = require('fs');

http.createServer(function(request, response) {
    if (request.url === '/') {
        // index.html
        // async 异步 sync 同步
        // fs.readFile('test.html', 'utf-8', (err, data) => {

        // })
        // 性能差点
        const html = fs.readFileSync('test.html', 'utf-8');
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.end(html)
    }
    if(request.url === '/script.js'){
        const js = fs.readFileSync('script.js','utf-8');
        response.writeHead(200,{
            'Content-Type':'text/javascript',
            expires:new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
            // 'Cache-Contorl':'max-age=20,public'
        })
        const script = fs.readFileSync('script.js','utf-8');q
        response.end(script);
    }

})
.listen(8888)