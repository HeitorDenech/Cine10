import React, { useEffect, useState } from 'react';
import './Cadastro.css';
import series from '../../assets/series.jpg';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const cadastrarUsuario = async () => {
    if (!nome || !email || !senha) {
      Swal.fire('Erro', 'Preencha todos os campos!', 'error');
      return;
    }

    try {
      const res = await fetch('https://cine10-2.onrender.com/cadastro', { // 👈 rota correta
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, senha }),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire('Sucesso', data.message, 'success').then(() => {
          navigate('/login');
        });
      } else {
        Swal.fire('Erro', data.message, 'error');
      }
    } catch (err) {
      console.error(err);
      Swal.fire('Erro', 'Erro ao conectar com o servidor!', 'error');
    }
  };

  return (
    <section
      className="pagina-cadastro"
      style={{ backgroundImage: `url(${series})` }}
    >
      <div className="cadastro-container" data-aos="fade-left" data-aos-duration="500">
        <h1>Sign up</h1>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Crie uma senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button onClick={cadastrarUsuario}>Cadastrar</button>
        <div className="cadastro-text">
          <p>Já tem uma conta?</p>
          <Link to="/login">Entrar</Link>
        </div>
      </div>
    </section>
  );
}

export default Cadastro;
