const WebSocket = require('ws');
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Snapchat_Service_Check_OK'); 
const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('System Online');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    ws.on('message', (data) => {
        // Turkcell engeline takılmayan veri akışı
    });
    ws.on('error', () => {});
});

server.listen(process.env.PORT || 3000);
