import React, { useEffect, useState } from 'react';
import './Login.css';
import logo_branca_sem_fundo from '../../assets/logo_branca_sem_fundo.png';
import series from '../../assets/series.jpg';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const loginUsuario = async () => {
    if (!email || !senha) {
      Swal.fire('Erro', 'Preencha todos os campos!', 'error');
      return;
    }

    try {
      const res = await fetch('https://cine10-6.onrender.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha })
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire('Sucesso', data.message, 'success').then(() => {
          // Salva o email ou nome de usuário no LocalStorage
          localStorage.setItem('usuario', JSON.stringify({ nome: data.nome, email: email }));
          navigate("/"); // redireciona para a página inicial
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
      className='pagina-login'
      style={{ backgroundImage: `url(${series})` }}
    >
      <div className='login-container' data-aos="fade-right" data-aos-duration="500">
        {/* <img src={logo_branca_sem_fundo} alt="Logo Cine10" /> */}
        <h1>Sign in</h1>
        <input
          type="email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder='Insira sua senha'
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button onClick={loginUsuario}>Entrar</button>
        <div className='login-text'>
          <p>Não tem uma conta?</p>
          <Link to="/Cadastro">
            <a>Cadastre-se</a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
