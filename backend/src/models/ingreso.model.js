const db = require("../config/db");

const Ingreso = {
  getAll: (callback) => {
    db.query("SELECT * FROM ingresos ORDER BY fecha DESC", callback);
  },
  create: (data, callback) => {
    db.query(
      "INSERT INTO ingresos (descripcion, monto, fecha) VALUES (?, ?, ?)",
      [data.descripcion, data.monto, data.fecha],
      callback
    );
  },
};

module.exports = Ingreso;
