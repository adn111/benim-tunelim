const http = require('http');
const WebSocket = require('ws');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200);
        res.end('Server is Live');
    }
});

const wss = new WebSocket.Server({ noServer: true });

server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
    });
});

wss.on('connection', (ws) => {
    ws.on('message', (data) => {

    });
});
