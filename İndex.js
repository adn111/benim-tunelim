const http = require('http');
const WebSocket = require('ws');

const server = http.createServer((req, res) => {
    // Vercel'in '404' vermesini engellemek için her şeye 200 basıyoruz
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Sistem 200 OK - Baglanti Acik');
});

const wss = new WebSocket.Server({ noServer: true });

server.on('upgrade', (request, socket, head) => {
    // Tünel bağlantısını burada yakalıyoruz
    wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
    });
});

wss.on('connection', (ws) => {
    ws.on('message', (data) => {
        // Veri akışı buraya düşecek
    });
});
