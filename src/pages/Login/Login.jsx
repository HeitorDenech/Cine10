import './Login.css';
import logo_branca_sem_fundo from '../../assets/logo_branca_sem_fundo.png';
import series from '../../assets/series.jpg'

function Login() {
  return (
    <section className='pagina-login'>
      <div className='login-container'>
        {/* <img src={logo_branca_sem_fundo} alt="" /> */}
        <h1>Sign in</h1>
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Insira sua senha' />
        <button>Entrar</button>
        <div className='login-text'>
          <p>Novo no Cine10?</p><a href="">Cadastre-se</a>
        </div>
      </div>
    </section>
  );
}

export default Login;
