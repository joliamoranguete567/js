const express = require("express");
const router = express.Router();
//const variavel constante, que nao muda o conteudo
// var e let sao variaveis que vao mudar -> var funciona so dentro do if (no js)

let fornecedor = [
    { id: 1, nome: "ariel" },
    { id: 2, nome: "júlia" },
    { id: 3, nome: "heloisa" },
];
//{ id: 1, nome:"Eletrônico"} id:1 -> campo; nome -> nome do campo

//listar categorias
router.get("/", (req, res) => {
    res.json(fornecedor);
});


//sempre no final
module.exports = router;