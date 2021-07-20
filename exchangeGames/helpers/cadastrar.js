const fs = require('fs');
const path = require('path');
const cadastroJson = path.join('model/usuarios.json');

module.exports.cadastrar = function (usuario) {
    const gravar = JSON.stringify(usuario);
    fs.writeFileSync(cadastroJson, gravar);
};