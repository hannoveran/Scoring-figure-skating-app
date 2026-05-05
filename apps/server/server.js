const sequelize = require('./config/db');
const app = require('./app');

const PORT = 3001;

async function start() {
  try {
    await sequelize.authenticate();
    console.log('DB connected');

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (e) {
    console.error(e);
  }
}

start();
