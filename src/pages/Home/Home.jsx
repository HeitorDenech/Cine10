import { useState, useEffect } from 'react';
import './Home.css';
// import logo from '../../assets/logo.png';
// import logo_branca from '../../assets/logo_branca.png';
import logo_branca_sem_fundo from '../../assets/logo_branca_sem_fundo.png';
import 'aos/dist/aos.css'; // CSS do AOS
import AOS from 'aos';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // inicializa AOS corretamente no React
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  console.log('Estado do menuOpen:', menuOpen); // <-- aqui vemos se o estado muda

  return (
    <>
      <header>
        <nav>
          <div className="logo-container">
            <img src={logo_branca_sem_fundo} alt="Cine10 Logo" className="logo" />
          </div>

          <div className={`text-container ${menuOpen ? 'open' : ''}`}>
            <a href="#">Clássicos</a>
            <a href="#">Filmes</a>
            <a href="#">Séries</a>
          </div>

          <div className="contato-container">
            <button>
              <i className="bi bi-chat-left-text"></i>
            </button>
          </div>

          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="bi bi-list"></i>
          </div>
          
        </nav>
      </header>

      <main>
        <section className='introducao-container'>
          <div className='title-introducao-container' data-aos="fade-up" data-aos-duration="1000">
            <h1>Explore, aproveite e inspire-se.</h1>
          </div>
          <div className='text-introducao-container' data-aos="fade-up" data-aos-duration="1500">
            <p>As listas mais completas, as críticas mais confiáveis, e os clássicos que você não pode perder.</p>
          </div>
        </section>
      </main>

      <footer>
        {/* Footer vazio por enquanto */}
      </footer>
    </>
  )
}

export default Home;
