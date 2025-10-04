import { useState } from 'react';
import './Home.css'
// import logo from '../../assets/logo.png';
// import logo_branca from '../../assets/logo_branca.png';
import logo_branca_sem_fundo from '../../assets/logo_branca_sem_fundo.png';
import 'aos/dist/aos.css'; // CSS do AOS
import AOS from 'aos';

AOS.init(); // inicializa o AOS sem duração global

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <nav>
          <div className="logo-container">
            <img src={logo_branca_sem_fundo} alt="Cine10 Logo" className="logo" />
          </div>

          <div className={`text-container ${menuOpen ? 'open' : ''}`}>
            <a href="">Clássicos</a>
            <a href="">Filmes</a>
            <a href="">Séries</a>
          </div>


          <div className='contato-container'>
            <button>
              <i className="bi bi-chat-left-text"></i>
            </button>
          </div>

          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="bi bi-list"></i>
          </div>
        </nav>
      </header>

      <main></main>
      <footer></footer>
    </>
  )
}

export default Home
