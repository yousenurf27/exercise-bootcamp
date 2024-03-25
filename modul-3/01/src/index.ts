import express from 'express';
import exmapleController from './controller/example-controller';

const PORT = 8000;

const app = express();

app.get('/api', (req, res) => {
  res.send('Hi there, This is Express.js API');
});

app.use('/example', exmapleController)

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
