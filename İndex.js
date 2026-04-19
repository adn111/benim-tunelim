const WebSocket = require('ws');
const http = require('http');

// SENİN ÖZEL ID (ŞİFREN): Bu olmadan kimse bağlanamaz!
const userID = '8f62c5b1-3642-4f01-831e-9776f7c5e3d2'; 

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Sistem Calisiyor, Giris Yasak!');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws, req) => {
    console.log('Tünel aktif edildi.');
    // Bağlantı trafiği buradaki userID kontrolüyle döner
});
