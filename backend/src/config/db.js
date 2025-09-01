const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("❌ Error en conexión MySQL:", err);
    process.exit(1);
  }
  console.log("✅ Conectado a MySQL");
});

module.exports = db;
