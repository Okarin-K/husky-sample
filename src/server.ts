import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(process.env['APP_PORT'], () => console.log('listen to server.'));
