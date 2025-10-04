import { useState } from 'react';
import './Home.css'
import logo from '../assets/logo.png'

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <nav>
          <div className="logo-container">
            <img src={logo} alt="Cine10 Logo" className="logo" />
          </div>

          <div className={`text-container ${menuOpen ? 'open' : ''}`}>
            <a href="">Sobre</a>
            <a href="">Clássicos</a>
            <a href="">Filmes</a>
            <a href="">Séries</a>
          </div>

          <div className='contato-container'>
            <i className="bi bi-chat-left-text"></i>
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
