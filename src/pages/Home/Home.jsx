import { useState, useEffect } from 'react';
import './Home.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

import logo_branca_sem_fundo from '../../assets/logo_branca_sem_fundo.png';

// ----------PLATAFORMAS---------------

import oldflix from '../../assets/oldflix-removebg-preview.png';
import primevideo from '../../assets/prime-video-logo-preta.jpg';
import hbomax from '../../assets/hbomax.jpg';
import appletv from '../../assets/appletv.webp';
import netflix from '../../assets/netflix.webp';
import globoplay from '../../assets/globoplay.jpg'

// ----------CLASSICOS---------------

import cidadaokane from '../../assets/cidadao-kane.jpg';
import casablanca from '../../assets/casablanca.webp';
import poderosochefao from '../../assets/poderosochefao.webp';
import ventolevou from '../../assets/ventolevou.jpg'
import psicose from '../../assets/psicose.jpg'
import odisseianoespaco from '../../assets/odisseianoespaco.webp'
import cantandonachuva from '../../assets/cantandonachuva.webp'

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true, // anima só uma vez
    });
  }, []);

  return (
    <>
      <header>
        <nav>
          {/* Logo */}
          <div className="logo-container">
            {/* <img src={logo_branca_sem_fundo} alt="Cine10 Logo" className="logo" /> */}
            <h1>Cine10</h1>
          </div>

          {/* Links da navbar */}
          <div className={`text-container ${menuOpen ? 'open' : ''}`}>
            <a href="#">Clássicos</a>
            <a href="#">Bilheterias</a>
            <a href="#">Oscars</a>
            <a href="#">Melhores avaliados</a>
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
            <p>As listas mais completas, as críticas mais confiáveis e os clássicos que todo amante do cinema precisa conhecer.</p>
          </div>

          <div data-aos="fade-up" data-aos-duration="1500">
            <div className='btn-introducao-container'>
              <button id="btn-sobre">Leia sobre nós</button>
              <button id="btn-login">Cadastro</button>
            </div>
          </div>

        </section>


        {/* --------------------CONTAINERS-CLASSICOS---------------------- */}


        <h1 id='top-10-h1' data-aos="fade-up" data-aos-duration="1000">Os 10 maiores clássicos</h1>

        <section className="container-top-10-principal">

          <div className="carrossel-top-10">

            {/* CARD 1 */}
            <div className='container-top-10' data-aos="fade-up" data-aos-duration="1200">
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=8dxh3lwdOFw" target='_blank'>
                  <img src={cidadaokane} alt="Cidadão Kane" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>1 - Cidadão Kane (1941)</h1>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://oldflix.com.br/" target='_blank'>
                    <img src={oldflix} alt="Oldflix" />
                  </a>
                  <a href="https://www.primevideo.com/" target='_blank'>
                    <img src={primevideo} alt="Prime Video" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className='container-top-10' data-aos="fade-up" data-aos-duration="1400">
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=MF7JH_54d8c" target='_blank'>
                  <img src={casablanca} alt="Clássico 2" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>2 - Casablanca (1942)</h1>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://www.primevideo.com/-/pt/detail/Casablanca/0RVLUAB5A9Y0HQGESYBUOGU5SD?utm_source=chatgpt.com/" target='_blank'>
                    <img src={primevideo} alt="Prime Video" />
                  </a>
                  <a href="https://www.hbomax.com/br/pt/lapsed" target='_blank'>
                    <img src={hbomax} alt="Prime Video" />
                  </a>
                  <a href="https://tv.apple.com/br/movie/casablanca/umc.cmc.6i7o1550iyqet6xexqniqyp4k?at=1000l3V2&ct=microsoft_tv&itscg=30200&itsct=justwatch_tv&playableId=tvs.sbd.9001%3A582668909" target='_blank'>
                    <img src={appletv} alt="Prime Video" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className='container-top-10' data-aos="fade-up" data-aos-duration="1600">
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=SaHZHU-44XA" target='_blank'>
                  <img src={poderosochefao} alt="Clássico 3" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>3 - O poderoso chefão (1972)</h1>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://oldflix.com.br/" target='_blank'>
                    <img src={netflix} alt="Oldflix" />
                  </a>
                  <a href="https://www.primevideo.com/-/pt/detail/O-Poderoso-Chef%C3%A3o/0L45IM106OK0SH586P7WW9F96I?utm_source=chatgpt.com" target='_blank'>
                    <img src={primevideo} alt="Prime Video" />
                  </a>
                  <a href="https://tv.apple.com/br/movie/o-poderoso-chefao/umc.cmc.3ew9fykdnpfaq9t2jq5da011c" target='_blank'>
                    <img src={appletv} alt="Apple TV" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 4 */}
            <div className='container-top-10' data-aos="fade-up" data-aos-duration="1800">
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=KxYVSblvWQk" target='_blank'>
                  <img src={ventolevou} alt="Clássico 4" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>4 - ... E o vento levou</h1>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://www.primevideo.com/-/pt/detail/E-o-Vento-Levou/0NHEKJ1RE0VB21OE2XXWIBR00N?utm_source=chatgpt.com" target='_blank'>
                    <img src={primevideo} alt="Prime Video" />
                  </a>
                  <a href="https://tv.apple.com/br/movie/e-o-vento-levou/umc.cmc.yrquc45v8733x85h5klgxbeh" target='_blank'>
                    <img src={appletv} alt="Oldflix" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 5 */}
            <div className='container-top-10' data-aos="fade-up" data-aos-duration="1800">
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=BwVKSGu8wEA" target='_blank'>
                  <img src={psicose} alt="Clássico 4" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>5 - Psicose (1960)</h1>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://oldflix.com.br/" target='_blank'>
                    <img src={oldflix} alt="Oldflix" />
                  </a>
                  <a href="https://globoplay.globo.com/psicose/t/6TsJTJjf16/?utm_source=chatgpt.com" target='_blank'>
                    <img src={globoplay} alt="Globo Play" />
                  </a>
                  <a href="https://tv.apple.com/br/movie/psicose/umc.cmc.4v3c9578iqv2wvizz23izdkx3" target='_blank'>
                    <img src={appletv} alt="Apple TV" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 6 */}
            <div className='container-top-10' data-aos="fade-up" data-aos-duration="1800">
              <div className='container-top-10-imagem'>
                <a href="" target='_blank'>
                  <img src={odisseianoespaco} alt="Clássico 4" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>6 - 2001: Uma odisseia no espaço (1968) </h1>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://oldflix.com.br/" target='_blank'>
                    <img src={hbomax} alt="Oldflix" />
                  </a>
                  <a href="https://www.primevideo.com/" target='_blank'>
                    <img src={appletv} alt="Prime Video" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 7 */}
            <div className='container-top-10' data-aos="fade-up" data-aos-duration="1800">
              <div className='container-top-10-imagem'>
                <a href="" target='_blank'>
                  <img src={cantandonachuva} alt="Clássico 4" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>7 - Cantando na chuva (1952)</h1>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                    <p>Plataforma não encontrada</p>
                </div>
              </div>
            </div>

            {/* CARD 8 */}
            <div className='container-top-10' data-aos="fade-up" data-aos-duration="1800">
              <div className='container-top-10-imagem'>
                <a href="" target='_blank'>
                  <img src={cantandonachuva} alt="Clássico 4" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>8 - A lista de Schindler (1993)</h1>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://oldflix.com.br/" target='_blank'>
                    <img src={oldflix} alt="Oldflix" />
                  </a>
                  <a href="https://www.primevideo.com/" target='_blank'>
                    <img src={primevideo} alt="Prime Video" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 9 */}
            <div className='container-top-10' data-aos="fade-up" data-aos-duration="1800">
              <div className='container-top-10-imagem'>
                <a href="" target='_blank'>
                  <img src={cantandonachuva} alt="Clássico 4" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>9 - Pulp Fiction (1994) 4</h1>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://oldflix.com.br/" target='_blank'>
                    <img src={oldflix} alt="Oldflix" />
                  </a>
                  <a href="https://www.primevideo.com/" target='_blank'>
                    <img src={primevideo} alt="Prime Video" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 10 */}
            <div className='container-top-10' data-aos="fade-up" data-aos-duration="1800">
              <div className='container-top-10-imagem'>
                <a href="" target='_blank'>
                  <img src={cantandonachuva} alt="Clássico 4" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>10 - Star Wars: Episódio IV - Uma Nova Esperança (1977)</h1>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://oldflix.com.br/" target='_blank'>
                    <img src={oldflix} alt="Oldflix" />
                  </a>
                  <a href="https://www.primevideo.com/" target='_blank'>
                    <img src={primevideo} alt="Prime Video" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </section>



      </main>

      <footer></footer>
    </>
  );
}

export default Home;
