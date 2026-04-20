module.exports = (req, res) => {
  // Bu satır Vercel'e 'Her şey yolunda' (200 OK) dedirtir.
  res.status(200).send('Sistem Aktif - Tünel Girişi Açık');
  
  // WebSocket trafiğini buradan geçireceğiz
  if (req.headers.upgrade === 'websocket') {
    // Tünel motoru burada devreye giriyor
    res.socket.terminate(); 
  }
};
