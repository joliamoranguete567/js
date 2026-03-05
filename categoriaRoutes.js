const express = require("express");
const router = express.Router();
//const variavel constante, que nao muda o conteudo
// var e let sao variaveis que vao mudar -> var funciona so dentro do if (no js)

let categorias = [
    { id: 1, nome: "Eletrônico" },
    { id: 2, nome: "Vestuário" },
    { id: 3, nome: "Alimento" },
];
//{ id: 1, nome:"Eletrônico"} id:1 -> campo; nome -> nome do campo

//listar categorias
router.get("/", (req, res) => {
    res.json(categorias);
});


//sempre no final
module.exports = router;