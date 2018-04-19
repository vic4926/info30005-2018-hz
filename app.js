const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.static('web-v2.0'));

app.listen(PORT, function(){
    console.log(`Express listening on port ${PORT}`);
});