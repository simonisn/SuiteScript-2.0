var express,
    app,
    port;

express = require('express');
app = express();

app.use(express.static('./public'));

port = process.env.PORT || 8080;

app.listen(port, function () {
    console.log('Listening on port', port);
});