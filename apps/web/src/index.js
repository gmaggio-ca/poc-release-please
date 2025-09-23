import express from 'express';
import { greet } from '@example/utils';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  
  // Read version from environment variable or default to 'development'
  const version = process.env.VERSION || 'development';
  res.send({ message: greet(`Release Please: ${version} !`) });
});

app.listen(port, () => {
  console.log(`Web listening on http://localhost:${port}`);
});
