const WebSocket = require('ws');
const { createServer } = require('http');

const userID = '8f62c5b1-3642-4f01-831e-9776f7c5e3d2';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Tunnel is Running...');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Bağlantı sağlandı!');
  ws.on('error', () => ws.terminate());
  
  // Veri akışını canlı tutmak için boş mesaj gönderimi
  const timer = setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) ws.ping();
    else clearInterval(timer);
  }, 30000);
});
