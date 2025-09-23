import express from 'express';
import { greet } from '@example/utils';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.send({ message: greet('Release Please') });
});

app.listen(port, () => {
  console.log(`web listening on http://localhost:${port}`);
});
