const { urlencoded } = require("body-parser")

var productosModel = require("../Modelos/productosModel.js").productosModel
var productosController = {}

productosController.save = function(request, response) {

    // var post = {
        // cod_cat: request.body.cod_cat,
        // nombre: request.body.nombre
        //estado: request.body.estado
    // }

    // if (cod_cat.length <= 5) {
        // response.json({ mensaje: "el campo cod_cat es muy largo, debe ser menor de 6 caracteres" })
        // return false
    // }

    //if (post.cod_cat == undefined || post.cod_cat == null || post.cod_cat == "") {
        //response.json({ mensaje: "el campo cod_cat es obligatorio" })
        //return false
        //}
    
    // if (nombre.length 3, 50.) {
        // response.json({ mensaje: "el campo cod_cat es muy largo, debe ser menor de 6 caracteres" })
        // return false
        // }     

    // if (post.nombre == undefined || post.nombre == null || post.nombre == "" [a-zA-Z]) {
        // response.json({ mensaje: "el nombre es obligatorio" })
        // return false
        // }

    //if (typeof post.estado != "boolean") {
        //response.json({ state:false, mensaje: "el campo estado es obligatorio" })
        //return false
        //}
    // var post = {
        // cod_cat: request.body.cod_cat,
        // nombre: request.body.nombre

    // if (nombre.length 4, 50.) {
        // response.json({ mensaje: "el campo cod_cat es muy largo, debe ser menor de 6 caracteres" })
        // return false
        // }     
        
    // response.json(post)




}


module.exports.productosController = productosController