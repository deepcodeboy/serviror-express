const express = require("express");
const UserSchema = require("../models/user");

const router = express.Router();

//CREAR USUARIO
router.post("/users", (req, res) => {
  const user = UserSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


//OBTENER TODOS LOS USUARIOS
router.get("/users", (req, res) => {
  UserSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


//OBTENER UN USUARIO
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  UserSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


//ELIMINAR USUARIO
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  UserSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


//ACTUALIZAR USUARIO
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  UserSchema
    .updateOne({ _id: id }, { $set: { name, age, email} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;