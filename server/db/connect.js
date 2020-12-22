const mysql = require('mysql');
const util = require('util');

if (process.env.NODE_ENV === 'development') {
  try {
    (async () => await require('dotenv/config'))();
  } catch (err) {
    return;
  }
}
//db

const dbName = 'dbmsproject';

const config = {
  production: {
    port: 3306,
    database: {
      host: "us-cdbr-east-02.cleardb.com",
      user: "b597a36a62bfb1",
      password: "584ef1e9",
      database:'heroku_62c76f8cf73d61a'
    },
  },
  local: {
    port: 3306,
    database: {
      host: 'localhost',
      user: 'root',
      password: 'piyush',
    },
  },
};

config.conn = mysql.createPool(
  config.production.database
  // config.local.database
);
config.conn.query = util.promisify(config.conn.query);
config.initDB = (async () => {
  try {
    // await config.conn.query('USE miniproject');
    await config.conn.query('USE heroku_62c76f8cf73d61a');
    const connection = await config.conn.query('SELECT * from users');
    console.log('db initialized');
    // console.log(connection);
  } catch (e) {
    // console.log(e);
    await config.conn.query('USE miniproject');
  }
})();

module.exports = config;
