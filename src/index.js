const app  = require('./server')

app.listen(app.get("port"));
console.log('[Yewb] Server on port', app.get('port'))
