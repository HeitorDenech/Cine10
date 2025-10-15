import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import bcrypt from "bcrypt";

// Se o JSON vai ficar dentro de dist
const caminhoUsuarios = path.join(__dirname, 'usuarios.json');
const usuarios = JSON.parse(fs.readFileSync(caminhoUsuarios, 'utf-8'));
const app = express(); // <-- criar o app primeiro

app.use(cors());
app.use(express.json());

const usuariosPath = path.join(__dirname, "usuarios.json");

function lerUsuarios() {
    const data = fs.readFileSync(usuariosPath, "utf-8");
    return JSON.parse(data);
}

function salvarUsuarios(usuarios: any) {
    fs.writeFileSync(usuariosPath, JSON.stringify(usuarios, null, 2));
}

// Rota de cadastro
app.post("/cadastro", async (req, res) => {
    const { nome, email, senha } = req.body;
    const usuarios = lerUsuarios();

    if (usuarios.find((u: any) => u.email === email)) {
        return res.status(400).json({ message: "Email já cadastrado" });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);
    usuarios.push({ nome, email, senha: senhaCriptografada });

    salvarUsuarios(usuarios);
    res.status(201).json({ message: "Cadastro realizado com sucesso!" });
});

// Rota de login
app.post("/login", async (req, res) => {
    const { email, senha } = req.body;
    const usuarios = lerUsuarios();

    const usuario = usuarios.find((u: any) => u.email === email);
    if (!usuario) return res.status(400).json({ message: "Usuário não encontrado" });

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) return res.status(401).json({ message: "Senha incorreta" });

    res.status(200).json({ message: "Login realizado com sucesso!", nome: usuario.nome });
});

app.get("/", (req, res) => {
    res.send("🚀 Servidor do Cine10 rodando!");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});