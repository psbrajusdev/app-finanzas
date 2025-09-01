const Ingreso = require("../models/ingreso.model");

exports.getIngresos = (req, res) => {
  Ingreso.getAll((err, rows) => {
    if (err) return res.status(500).json({ error: err });
    res.json(rows);
  });
};

exports.createIngreso = (req, res) => {
  const { descripcion, monto, fecha } = req.body;
  Ingreso.create({ descripcion, monto, fecha }, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id: result.insertId, descripcion, monto, fecha });
  });
};
