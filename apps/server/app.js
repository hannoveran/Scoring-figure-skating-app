const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// routes
const competitionRoutes = require('./routes/competitionRoutes');
const resultsRoutes = require('./routes/resultsRoutes');

app.use('/competitions', competitionRoutes);
app.use('/results', resultsRoutes);

module.exports = app;

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
