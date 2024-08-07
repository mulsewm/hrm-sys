const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const candidateRoutes = require('./routes/candidateRoutes');
const companyRoutes =require('./routes/companyRoutes')
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api/candidates', candidateRoutes);
app.use('/api', companyRoutes);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


