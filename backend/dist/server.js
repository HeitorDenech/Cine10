"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const bcrypt_1 = __importDefault(require("bcrypt"));
// Se o JSON vai ficar dentro de dist
const caminhoUsuarios = path_1.default.join(__dirname, 'usuarios.json');
const usuarios = JSON.parse(fs_1.default.readFileSync(caminhoUsuarios, 'utf-8'));
const app = (0, express_1.default)(); // <-- criar o app primeiro
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const usuariosPath = path_1.default.join(__dirname, "usuarios.json");
function lerUsuarios() {
    const data = fs_1.default.readFileSync(usuariosPath, "utf-8");
    return JSON.parse(data);
}
function salvarUsuarios(usuarios) {
    fs_1.default.writeFileSync(usuariosPath, JSON.stringify(usuarios, null, 2));
}
// Rota de cadastro
app.post("/cadastro", async (req, res) => {
    const { nome, email, senha } = req.body;
    const usuarios = lerUsuarios();
    if (usuarios.find((u) => u.email === email)) {
        return res.status(400).json({ message: "Email já cadastrado" });
    }
    const senhaCriptografada = await bcrypt_1.default.hash(senha, 10);
    usuarios.push({ nome, email, senha: senhaCriptografada });
    salvarUsuarios(usuarios);
    res.status(201).json({ message: "Cadastro realizado com sucesso!" });
});
// Rota de login
app.post("/login", async (req, res) => {
    const { email, senha } = req.body;
    const usuarios = lerUsuarios();
    const usuario = usuarios.find((u) => u.email === email);
    if (!usuario)
        return res.status(400).json({ message: "Usuário não encontrado" });
    const senhaValida = await bcrypt_1.default.compare(senha, usuario.senha);
    if (!senhaValida)
        return res.status(401).json({ message: "Senha incorreta" });
    res.status(200).json({ message: "Login realizado com sucesso!", nome: usuario.nome });
});
app.get("/", (req, res) => {
    res.send("🚀 Servidor do Cine10 rodando!");
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
