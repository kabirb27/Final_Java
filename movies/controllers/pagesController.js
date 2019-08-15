
exports.show = (req, res) => {
    
    const path = (req.path === '/') ? '/home' : req.path;
  
    // Render that path
    res.render(`pages${path}`);
  }