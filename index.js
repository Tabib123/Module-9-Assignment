const express = require('express');
const app = express();

app.listen(process.env.RUNNING_PORT, () => {
  console.log(`Server listening on port ${process.env.RUNNING_PORT}`);
});