var usersDB = require('../db/users');

exports.getProblems = function (req, res) {
    usersDB.getProblems(function (err, users) {
        res.send(users);
    });
}

exports.addProblem = function (req, res) {
    console.log("Nuevo problema");
    var titulo = req.body.titulo;
    var fecha = req.body.fecha;
    var url_img = req.body.url_img;
    var descripcion = req.body.descripcion;
    var longitud = req.body.longitud;
    var latitud = req.body.latitud;
    var id_usuario = req.body.id_usuario;
    var nombre_usuario = req.body.nombre_usuario;
    usersDB.createProblem(titulo, fecha, url_img, descripcion, longitud, latitud, id_usuario, nombre_usuario, function (err, result) {
        res.status(201).send();
    });
}

exports.deleteProblem = function (req, res) {
    var userId = req.params.userId;
    usersDB.deleteProblem(userId, function (err, result) {
        res.status(204).send();
    });
}

// usuario

exports.addUser = function (req, res) {
    var nombre = req.body.nombre;
    var correo = req.body.correo;
    var contraseña = req.body.contraseña;
    console.log(req.body);
    usersDB.createUser(nombre, correo, contraseña, function (err, result) {
        res.status(201).send(result);
    });
}

exports.verificarUser = async function (req, res) {
    console.log("Entra a verificar");
    var correo = req.body.email;
    var contraseña = req.body.password;
    var aux = await usersDB.validateUser(correo, contraseña);
    console.log("es: ",aux);
    
    res.send(aux);
}