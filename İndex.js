const WebSocket = require('ws');
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Sistem Aktif');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('Bağlantı başarılı');
    ws.on('message', (data) => {
        // Tünel trafiği
    });
});
