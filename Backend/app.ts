import * as express from 'express';

const app = express();
const port = 11069;

app.get('/', (req, res) => {
  console.log('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
