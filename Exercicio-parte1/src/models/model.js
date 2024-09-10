const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '../data');
const filePath = path.join(dirPath, 'usuarios.json');

class Usuario {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }

  static salvar(usuario) {
    const usuarios = Usuario.listar();
    usuarios.push(usuario);

    // Verifica se o diretório 'data' existe, senão cria
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }

    // Grava os dados no arquivo JSON
    fs.writeFileSync(filePath, JSON.stringify(usuarios));
  }

  static listar() {
    // Se o arquivo não existe, retorna um array vazio
    if (!fs.existsSync(filePath)) {
      return [];
    }
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
  }

  static excluir(email) {
    let usuarios = Usuario.listar();
    usuarios = usuarios.filter((u) => u.email !== email);
    fs.writeFileSync(filePath, JSON.stringify(usuarios));
  }

  static contarEmails() {
    const usuarios = Usuario.listar();
    return usuarios.length;
  }
}

module.exports = Usuario;
