import { useState, useEffect, useRef } from 'react';
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
import globoplay from '../../assets/globoplay.jpg';
import disney from '../../assets/disney.webp';

// ----------CLASSICOS---------------
import cidadaokane from '../../assets/cidadao-kane.jpg';
import casablanca from '../../assets/casablanca.webp';
import poderosochefao from '../../assets/poderosochefao.webp';
import ventolevou from '../../assets/ventolevou.jpg';
import psicose from '../../assets/psicose.jpg';
import odisseianoespaco from '../../assets/odisseianoespaco.webp';
import cantandonachuva from '../../assets/cantandonachuva.webp';
import listadechindler from '../../assets/listadeschindler.webp';
import pulpfiction from '../../assets/pulpfiction.jpg';
import startwarsiv from '../../assets/starwarsiv.jpg';

// --------BILHETERIAS----------------

import avatar from '../../assets/avatar.webp'

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const carrosselRef = useRef(null);
  const carrosselBilheteriaRef = useRef(null);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  // -------------------CLASSICOS--------------------

  const rolar = (direcao) => {
    const largura = carrosselRef.current.clientWidth;
    if (direcao === 'esquerda') {
      carrosselRef.current.scrollBy({ left: -largura, behavior: 'smooth' });
    } else {
      carrosselRef.current.scrollBy({ left: largura, behavior: 'smooth' });
    }
  };

  // ----------BILHETERIAS---------------------

  const rolarBilheteria = (direcao) => {
    const largura = carrosselBilheteriaRef.current.clientWidth;
    if (direcao === 'esquerda') {
      carrosselBilheteriaRef.current.scrollBy({ left: -largura, behavior: 'smooth' });
    } else {
      carrosselBilheteriaRef.current.scrollBy({ left: largura, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header>
        <nav>
          <div className="logo-container">
            <h1>Cine10</h1>
          </div>

          <div className={`text-container ${menuOpen ? 'open' : ''}`}>
            <a href="#classicos">Clássicos</a>
            <a href="#">Bilheterias</a>
            <a href="#">Oscars</a>
            <a href="#">Melhores avaliados</a>
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

        {/* --------------------CONTAINER DOS CLÁSSICOS---------------------- */}
        <div id="classicos">
          <h1 id='top-10-h1' data-aos="fade-up" data-aos-duration="1000">Os 10 maiores clássicos</h1>
        </div>

        <section className="container-top-10-principal">
          {/* Botão seta esquerda */}
          <button className="seta seta-esquerda" onClick={() => rolar('esquerda')}>
            ❮
          </button>

          <div className="carrossel-top-10" ref={carrosselRef}>

            {/* CARD 1 */}
            <div className='container-top-10' data-aos="fade-up" data-aos-duration="1400">
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
                  <a href="https://www.netflix.com/search?q=o%20poderoso%20chef%C3%A3o&jbv=60011152" target='_blank'>
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
                <a href="https://www.youtube.com/watch?v=7E9CD3Hucws" target='_blank'>
                  <img src={odisseianoespaco} alt="Clássico 4" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>6 - 2001: Uma odisseia no espaço (1968) </h1>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://www.hbomax.com/br/pt/lapsed" target='_blank'>
                    <img src={hbomax} alt="Oldflix" />
                  </a>
                  <a href="https://tv.apple.com/br/movie/2001-uma-odisseia-no-espaco/umc.cmc.1au04fbnh3q5i2p6sy0ik4rkz" target='_blank'>
                    <img src={appletv} alt="Prime Video" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 7 */}
            <div className='container-top-10' data-aos="fade-up" data-aos-duration="1800">
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=s7z_NgOTQu8" target='_blank'>
                  <img src={cantandonachuva} alt="Clássico 4" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>7 - Cantando na chuva (1952)</h1>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://www.hbomax.com/br/pt/lapsed" target='_blank'>
                    <img src={hbomax} alt="Oldflix" />
                  </a>
                  <a href="https://tv.apple.com/br/movie/cantando-na-chuva/umc.cmc.4y40uv6tngxx1wfrh78p8yzft" target='_blank'>
                    <img src={appletv} alt="Prime Video" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 8 */}
            <div className='container-top-10' data-aos="fade-up" data-aos-duration="1800">
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=GAf0nGq_FXQ" target='_blank'>
                  <img src={listadechindler} alt="Clássico 4" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>8 - A lista de Schindler (1993)</h1>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://tv.apple.com/us/movie/schindlers-list/umc.cmc.53hzoo3z0ufjb6wsxgspp2jlf" target='_blank'>
                    <img src={appletv} alt="Prime Video" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 9 */}
            <div className='container-top-10' data-aos="fade-up" data-aos-duration="1800">
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=s7EdQ4FqbhY" target='_blank'>
                  <img src={pulpfiction} alt="Clássico 4" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>9 - Pulp Fiction (1994) 4</h1>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://tv.apple.com/br/movie/pulp-fiction-tempo-de-violencia/umc.cmc.1hfvw2p79f9qdeydow8nmrn7t" target='_blank'>
                    <img src={appletv} alt="Prime Video" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 10 */}
            <div className='container-top-10' data-aos="fade-up" data-aos-duration="1800">
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=vZ734NWnAHA" target='_blank'>
                  <img src={startwarsiv} alt="Clássico 4" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>10 - Star Wars: Episódio IV - Uma Nova Esperança (1977)</h1>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://www.disneyplus.com/pt-br/browse/entity-9a280e53-fcc0-4e17-a02c-b1f40913eb0b?utm_source=chatgpt.com" target='_blank'>
                    <img src={disney} alt="Oldflix" />
                  </a>
                  <a href="https://tv.apple.com/pt/movie/star-wars-uma-nova-esperanca/umc.cmc.2o65qvudvwq1l1rqjlbyfszwn" target='_blank'>
                    <img src={appletv} alt="Prime Video" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Botão seta direita */}
          <button className="seta seta-direita" onClick={() => rolar('direita')}>
            ❯
          </button>
        </section>


        {/* --------------------CONTAINER DAS BILHETERIAS---------------------- */}
        
        <h1 id='top-10-h1-bilheterias' data-aos="fade-up" data-aos-duration="1000">
            Os 10 maiores sucessos de bilheteria
        </h1>

        <section className="container-top-10-principal" id="bilheterias">
          {/* Botão seta esquerda */}
          <button className="seta-bilheterias seta-esquerda-bilheterias" onClick={() => rolarBilheteria('esquerda')}>
            ❮
          </button>

          <div className="carrossel-top-10" ref={carrosselBilheteriaRef}>
            {/* Aqui vão os cards de bilheteria — usa o mesmo padrão dos clássicos */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=5PSNL1qE6VY" target='_blank'>
                  <img src={avatar} alt="Avatar" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>1 - Avatar (2009)</h1>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://www.disneyplus.com" target='_blank'>
                    <img src={disney} alt="Disney+" />
                  </a>
                </div>
              </div>
            </div>

            {/* Repete a estrutura acima para os outros 9 filmes */}
          </div>

          {/* Botão seta direita */}
          <button className="seta-bilheterias seta-direita-bilheterias" onClick={() => rolarBilheteria('direita')}>
            ❯
          </button>
        </section>


      </main>

      <footer></footer>
    </>
  );
}

export default Home;
