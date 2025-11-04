import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import bcrypt from "bcrypt";

const app = express();

// --- CORS configurado para seu front no Vercel ---
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // Permite requisições internas (como Postman)
    if (
      origin.includes('vercel.app') ||  // Permite qualquer domínio da Vercel
      origin === 'https://cine10.vercel.app' // Seu domínio principal
    ) {
      callback(null, true);
    } else {
      callback(new Error('CORS bloqueado para esta origem: ' + origin));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// --- Caminho do JSON dentro de dist (Render) ---
const usuariosPath = path.join(__dirname, "usuarios.json");

function lerUsuarios() {
    const data = fs.readFileSync(usuariosPath, "utf-8");
    return JSON.parse(data);
}

function salvarUsuarios(usuarios: any) {
    fs.writeFileSync(usuariosPath, JSON.stringify(usuarios, null, 2));
}

// --- Rotas ---

// Cadastro
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

// Login
app.post("/login", async (req, res) => {
    const { email, senha } = req.body;
    const usuarios = lerUsuarios();

    const usuario = usuarios.find((u: any) => u.email === email);
    if (!usuario) return res.status(400).json({ message: "Usuário não encontrado" });

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) return res.status(401).json({ message: "Senha incorreta" });

    res.status(200).json({ message: "Login realizado com sucesso!", nome: usuario.nome });
});

// Teste de servidor
app.get("/", (req, res) => {
    res.send("🚀 Servidor do Cine10 rodando!");
});

// --- Porta ---
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
