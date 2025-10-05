import { useState, useEffect } from 'react';
import './Home.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

import logo_branca_sem_fundo from '../../assets/logo_branca_sem_fundo.png';
import cidadaokane from '../../assets/cidadao-kane.jpg';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <header>
        <nav>
          {/* Logo */}
          <div className="logo-container">
            <img src={logo_branca_sem_fundo} alt="Cine10 Logo" className="logo" />
          </div>

          {/* Links da navbar */}
          <div className={`text-container ${menuOpen ? 'open' : ''}`}>
            <a href="#">Clássicos</a>
            <a href="#">Filmes</a>
            <a href="#">Séries</a>
          </div>

          {/* Botão de contato */}
          <div className="contato-container">
            <button>
              <i className="bi bi-chat-left-text"></i>
            </button>
          </div>

          {/* Ícone de menu mobile */}
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="bi bi-list"></i>
          </div>
        </nav>
      </header>

      <main>

        <section className="introducao-container">

          <div className="title-introducao-container" data-aos="fade-up" data-aos-duration="1000">
            <h1>Explore, aproveite e inspire-se.</h1>
          </div>

          <div className="text-introducao-container" data-aos="fade-up" data-aos-duration="1500">
            <p>As listas mais completas, as críticas mais confiáveis, e os clássicos que você não pode perder.</p>
          </div>

        </section>


        {/* --------------------CONTAINERS-CLASSICOS---------------------- */}


        <h1 id='classicos-h1' data-aos="fade-up" data-aos-duration="1000">Os 10 maiores clássicos<i id="classicos-i" class="bi bi-arrow-right"></i></h1>

        <section className="container-classicos-principal">

          <div className='container-classicos' data-aos="fade-up" data-aos-duration="1200">

            <div className='container-classicos-imagem'>
              <img src={cidadaokane} alt="" />
            </div>

            <div className='container-classicos-texto'>

            </div>

          </div>

        </section>


      </main>

      <footer></footer>
    </>
  );
}

export default Home;
