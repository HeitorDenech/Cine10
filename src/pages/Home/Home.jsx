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
import uol from '../../assets/uol.jpg'
import paramount from '../../assets/paramount.avif'

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
import ultimato from '../../assets/ultimato.webp'
import avataragua from '../../assets/avataragua.jpeg'
import titanic from '../../assets/titanic.jpg'
import despertardaforca from '../../assets/despertardaforca.webp'
import guerrainfinita from '../../assets/guerrainfinita.webp'
import semvoltapracasa from '../../assets/semvoltapracasa.jpg'
import jurassicworld from '../../assets/jurassicworld.jpg'
import reileao from '../../assets/reileao.jpg'
import vingadores from '../../assets/vingadores.webp'


// -------------OSCARS------------------

import senhordosaneis from '../../assets/senhor-dos-aneis.jpg'
import benhur from '../../assets/ben-hur.webp'
import amorsublimeamor from '../../assets/amorsublimeamor.jpg'
import gigi from '../../assets/gigi.webp'
import oultimoimperador from '../../assets/oultimoimperador.webp'
import opacienteingles from '../../assets/opacienteingles.jpg'
import umpassodaeternidade from '../../assets/umpassodaeternidade.jpg'
import sindicatodosladroes from '../../assets/sindicatodosladroes.jpg'

// ----------------FILMES-IMDB----------------------

import umsonhodeliberdade from '../../assets/umsonhodeliberdade.jpg'
import batmancavaleirodastrevas from '../../assets/batmancavaleirodastrevas.webp'
import poderosochefao2 from '../../assets/poderosochefao2.jpg'
import homenseumasentenca from '../../assets/homeneumasentenca.jpg'
import asociedadedoanel from '../../assets/asociedadedoanel.jpg'
import treshomensemconflito from '../../assets/treshomensemconflito.webp'

// --------------------------------------------------

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const carrosselRef = useRef(null);
  const carrosselBilheteriaRef = useRef(null);
  const carrosselOscarsRef = useRef(null);
  const carrosselMelhoresAvaliadosRef = useRef(null)

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

  // ----------BILHETERIAS-------------------------

  const rolarBilheteria = (direcao) => {
    const largura = carrosselBilheteriaRef.current.clientWidth;
    if (direcao === 'esquerda') {
      carrosselBilheteriaRef.current.scrollBy({ left: -largura, behavior: 'smooth' });
    } else {
      carrosselBilheteriaRef.current.scrollBy({ left: largura, behavior: 'smooth' });
    }
  };

  // -----------OSCARS-----------------------------

  const rolarOscars = (direcao) => {
    const largura = carrosselOscarsRef.current.clientWidth;
    if (direcao === 'esquerda') {
      carrosselOscarsRef.current.scrollBy({ left: -largura, behavior: 'smooth' });
    } else {
      carrosselOscarsRef.current.scrollBy({ left: largura, behavior: 'smooth' });
    }
  };

  // -----------MELHORES-AVALIADOS-----------------------------

  const rolarMelhoresAvaliados = (direcao) => {
    const largura = carrosselMelhoresAvaliadosRef.current.clientWidth;
    if (direcao === 'esquerda') {
      carrosselMelhoresAvaliadosRef.current.scrollBy({ left: -largura, behavior: 'smooth' });
    } else {
      carrosselMelhoresAvaliadosRef.current.scrollBy({ left: largura, behavior: 'smooth' });
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
            <a href="#classicos" onClick={() => setMenuOpen(false)}>Clássicos</a>
            <a href="#bilheterias" onClick={() => setMenuOpen(false)}>Bilheterias</a>
            <a href="#oscars" onClick={() => setMenuOpen(false)}>Oscars</a>
            <a href="melhores-avaliados" onClick={() => setMenuOpen(false)}>Melhores avaliados</a>
            <a href="#" onClick={() => setMenuOpen(false)}>Séries</a>
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
          <h1 id='top-10-h1'>Os 10 maiores clássicos</h1>
        </div>

        <section className="container-top-10-principal">
          {/* Botão seta esquerda */}
          <button className="seta seta-esquerda" onClick={() => rolar('esquerda')}>
            ❮
          </button>

          <div className="carrossel-top-10" ref={carrosselRef}>

            {/* CARD 1 */}
            <div className='container-top-10'>
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
            <div className='container-top-10'>
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
            <div className='container-top-10'>
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
            <div className='container-top-10'>
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
            <div className='container-top-10'>
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
            <div className='container-top-10'>
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
            <div className='container-top-10'>
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
            <div className='container-top-10'>
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
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=s7EdQ4FqbhY" target='_blank'>
                  <img src={pulpfiction} alt="Clássico 4" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>9 - Pulp Fiction (1994)</h1>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://tv.apple.com/br/movie/pulp-fiction-tempo-de-violencia/umc.cmc.1hfvw2p79f9qdeydow8nmrn7t" target='_blank'>
                    <img src={appletv} alt="Prime Video" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 10 */}
            <div className='container-top-10'>
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

        <div id="bilheterias">
          <h1 id='top-10-h1'>As 10 maiores bilheterias</h1>
        </div>

        <section className="container-top-10-principal">
          {/* Botão seta esquerda */}
          <button className="seta seta-esquerda" onClick={() => rolarBilheteria('esquerda')}>
            ❮
          </button>

          {/* Carrossel com TODOS os cards dentro */}
          <div className="carrossel-top-10" ref={carrosselBilheteriaRef}>

            {/* CARD 1 */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=5PSNL1qE6VY" target='_blank'>
                  <img src={avatar} alt="Avatar" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>1 - Avatar (2009)</h1>
                <span>US$ 2.923.710</span>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://www.disneyplus.com/pt-br/browse/entity-357d8505-b9bc-41e3-9f27-0414738df143" target='_blank'>
                    <img src={disney} alt="Disney+" />
                  </a>
                  <a href="https://www.primevideo.com/-/pt/detail/Avatar/0LCOF5S7YR0UEA8EYW31TA7OF7" target='_blank'>
                    <img src={primevideo} alt="PrimeVideo" />
                  </a>
                  <a href="https://tv.apple.com/br/movie/avatar/umc.cmc.1hmaf5hccvdvn71dc5hr7mgcj" target='_blank'>
                    <img src={appletv} alt="AppleTV" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=TcMBFSGVi1c" target='_blank'>
                  <img src={ultimato} alt="Vingadores: Ultimato" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>2 - Vingadores: Ultimato (2019)</h1>
                <span>US$ 2.799.439</span>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://www.disneyplus.com/pt-br/browse/entity-b39aa962-be56-4b09-a536-98617031717f" target='_blank'>
                    <img src={disney} alt="Disney+" />
                  </a>
                  <a href="https://www.primevideo.com/-/pt/detail/Vingadores-Ultimato/0P5699HX4S6UTRBOYYMCIGWTK3" target='_blank'>
                    <img src={primevideo} alt="PrimeVideo" />
                  </a>
                  <a href="https://tv.apple.com/br/movie/vingadores-ultimato/umc.cmc.4ao9tm6b6rz4sy7yj5v13ltf8" target='_blank'>
                    <img src={appletv} alt="AppleTV" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=YE7VzlLtp-4" target='_blank'>
                  <img src={avataragua} alt="Avatar: O Caminho da Água" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>3 - Avatar: O Caminho da Água (2022)</h1>
                <span>US$ 2.320.250</span>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://www.disneyplus.com/pt-br/browse/entity-357d8505-b9bc-41e3-9f27-0414738df143?utm_source=chatgpt.com" target='_blank'>
                    <img src={disney} alt="Disney+" />
                  </a>
                  <a href="https://www.primevideo.com/-/pt/detail/Avatar/0LCOF5S7YR0UEA8EYW31TA7OF7" target='_blank'>
                    <img src={primevideo} alt="PrimeVideo" />
                  </a>
                  <a href="https://tv.apple.com/br/movie/avatar/umc.cmc.1hmaf5hccvdvn71dc5hr7mgcj" target='_blank'>
                    <img src={appletv} alt="AppleTV" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 4 */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=IH6_CA_ocqY" target='_blank'>
                  <img src={titanic} alt="Titanic" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>4 - Titanic (1997)</h1>
                <span>US$ 2.264.743</span>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://www.disneyplus.com/pt-br/browse/entity-ed94de01-f394-4d37-9888-1186bd143ec8?utm_source=chatgpt.com" target='_blank'>
                    <img src={disney} alt="Disney+" />
                  </a>
                  <a href="https://www.primevideo.com/-/pt/detail/Titanic/0R7Q0SWNO615THQW59FZZBSGUD?utm_source=chatgpt.com" target='_blank'>
                    <img src={primevideo} alt="PrimeVideo" />
                  </a>
                  <a href="https://tv.apple.com/br/movie/titanic/umc.cmc.2xfg89gkgo2469x0985e0eqq7" target='_blank'>
                    <img src={appletv} alt="AppleTV" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 5 */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=4r0287tUEgk" target='_blank'>
                  <img src={despertardaforca} alt="Star Wars: O despertar da força" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>5 - Star Wars: O Despertar da Força (2015)</h1>
                <span>US$ 2.068.223</span>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://www.disneyplus.com/pt-br/browse/entity-2854a94d-3702-40bd-97a4-12d55a809188?utm_source=chatgpt.com" target='_blank'>
                    <img src={disney} alt="Disney+" />
                  </a>
                  <a href="https://tv.apple.com/br/movie/star-wars-o-despertar-da-forca/umc.cmc.61i3yveu7xby4chfkqved19ka" target='_blank'>
                    <img src={appletv} alt="AppleTV" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 6 */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=4jGRyEa2jhE" target='_blank'>
                  <img src={guerrainfinita} alt="Vingadores: Guerra Infinita" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>6 - Vingadores: Guerra Infinita (2018)</h1>
                <span>US$ 2.048.359</span>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://www.disneyplus.com/pt-br/browse/entity-9a136e06-852a-41bf-b71d-fa061cb43225?utm_source=chatgpt.com" target='_blank'>
                    <img src={disney} alt="Disney+" />
                  </a>
                  <a href="https://www.primevideo.com/detail/Avengers-Infinity-War/0JTDAMFQF938HK16LTN698UJ7I/ref%3Datv_nb_lcl_pt_BR?ie=UTF8&language=pt_BR&utm_source=chatgpt.com" target='_blank'>
                    <img src={primevideo} alt="PrimeVideo" />
                  </a>
                  <a href="https://tv.apple.com/br/movie/vingadores-guerra-infinita/umc.cmc.2do0xuo1u4tjmqbfz1p42a0p9" target='_blank'>
                    <img src={appletv} alt="AppleTV" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 7 */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=bHzGeci_8wc" target='_blank'>
                  <img src={semvoltapracasa} alt="Homem Aranha: Sem volta pra casa" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>7 - Homem-Aranha: Sem Volta para Casa (2021)</h1>
                <span>US$ 1.922.598</span>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://tv.apple.com/br/movie/homem-aranha-sem-volta-para-casa/umc.cmc.2qf7xc5hds0m5jgx4roago580" target='_blank'>
                    <img src={appletv} alt="AppleTV" />
                  </a>
                  <a href="https://www.netflix.com/br/TITLE/81465707?utm_source=chatgpt.com" target='_blank'>
                    <img src={netflix} alt="Netflix" />
                  </a>
                  <a href="https://www.primevideo.com/-/pt/detail/Homem-Aranha-Sem-Volta-para-Casa/0GC8T3GTI8I9NMQUCNXJ8BLPK7?utm_source=chatgpt.com" target='_blank'>
                    <img src={primevideo} alt="PrimeVideo" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 8 */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=RFinNxS5KN4" target='_blank'>
                  <img src={jurassicworld} alt="Jurassic World" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>8 - Jurassic World (2015)</h1>
                <span>US$ 1.671.537</span>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://www.primevideo.com/-/pt/detail/Jurassic-World---O-Mundo-dos-Dinossauros/0KEKSTSQLSZRHAQQDLF83OP4AO?utm_source=chatgpt.com" target='_blank'>
                    <img src={primevideo} alt="PrimeVideo" />
                  </a>
                  <a href="https://tv.apple.com/br/movie/jurassic-world/umc.cmc.6x263wzi05ds2h4oen54w8881?l=en" target='_blank'>
                    <img src={appletv} alt="AppleTV" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 9 */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=WBDAsucUg58" target='_blank'>
                  <img src={reileao} alt="O Rei Leão" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>9 - O Rei Leão (2019)</h1>
                <span>US$ 1.663.075</span>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://www.disneyplus.com/pt-br/browse/entity-87524f44-a8ea-4b08-b4d8-39103bed3eaa?utm_source=chatgpt.com" target='_blank'>
                    <img src={disney} alt="Disney+" />
                  </a>
                  <a href="https://www.primevideo.com/-/pt/detail/O-Rei-Le%C3%A3o/0JIS2E140I8USLXR5KTW6ZGAZY?utm_source=chatgpt.com" target='_blank'>
                    <img src={primevideo} alt="PrimeVideo" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 10 */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=KeNEGtsCWEk" target='_blank'>
                  <img src={vingadores} alt="Vingadores" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>10 - Vingadores (2012)</h1>
                <span>US$ 1.518.815</span>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://www.disneyplus.com/pt-br/browse/entity-3a5596d6-5133-4a8e-8d21-00e1531a4e0f?utm_source=chatgpt.com" target='_blank'>
                    <img src={disney} alt="Disney+" />
                  </a>
                  <a href="https://tv.apple.com/br/movie/the-avengers---os-vingadores/umc.cmc.7i757ymuvffa02onn3uva0emx" target='_blank'>
                    <img src={appletv} alt="AppleTV" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Botão seta direita */}
          <button className="seta seta-direita" onClick={() => rolarBilheteria('direita')}>
            ❯
          </button>
        </section>

        {/* --------------------CONTAINER DOS OSCARS---------------------- */}

        <div id="oscars">
          <h1 id='top-10-h1'>Os 10 filmes com mais Oscars</h1>
        </div>

        <section className="container-top-10-principal">
          {/* Botão seta esquerda */}
          <button className="seta seta-esquerda" onClick={() => rolarOscars('esquerda')}>
            ❮
          </button>

          {/* Carrossel com TODOS os cards dentro */}
          <div className="carrossel-top-10" ref={carrosselOscarsRef}>

            {/* CARD 1 */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=r5X-hFf6Bwo" target='_blank'>
                  <img src={senhordosaneis} alt="O Senhor dos Anéis: O Retorno do Rei" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>1 - O Senhor dos Anéis: O Retorno do Rei (2003)</h1>
                <span>🏆 11 Oscars</span>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://play.hbomax.com/movie/ad704585-6774-4d37-8c61-1bd41154173f?utm_source=chatgpt.com" target='_blank'>
                    <img src={hbomax} alt="HBO Max+" />
                  </a>
                  <a href="https://www.primevideo.com/-/pt/detail/O-Senhor-dos-An%C3%A9is-O-Retorno-do-Rei/0NSGBFYAQDZQKEC8BBWKT8GILJ?utm_source=chatgpt.com" target='_blank'>
                    <img src={primevideo} alt="PrimeVideo" />
                  </a>
                  <a href="https://tv.apple.com/br/movie/the-lord-of-the-rings-the-return-of-the-king/umc.cmc.57s6i23z9ry0zsgwwc2mxjqi6" target='_blank'>
                    <img src={appletv} alt="AppleTV" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=IH6_CA_ocqY" target='_blank'>
                  <img src={titanic} alt="Titanic" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>2 - Titanic (1997)</h1>
                <span>🏆 11 Oscars</span>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://www.disneyplus.com/pt-br/browse/entity-ed94de01-f394-4d37-9888-1186bd143ec8?utm_source=chatgpt.com" target='_blank'>
                    <img src={disney} alt="Disney+" />
                  </a>
                  <a href="https://www.primevideo.com/-/pt/detail/Titanic/0R7Q0SWNO615THQW59FZZBSGUD?utm_source=chatgpt.com" target='_blank'>
                    <img src={primevideo} alt="PrimeVideo" />
                  </a>
                  <a href="https://tv.apple.com/br/movie/titanic/umc.cmc.2xfg89gkgo2469x0985e0eqq7" target='_blank'>
                    <img src={appletv} alt="AppleTV" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=NR1ZHKw09n8" target='_blank'>
                  <img src={benhur} alt="Ben Hur" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>3 - Ben-Hur (1959)</h1>
                <span>🏆 11 Oscars</span>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://www.primevideo.com/-/pt/detail/Ben-Hur/0LTQ8E8PAEPPLI88E2WOL56Q3Z?utm_source=chatgpt.com" target='_blank'>
                    <img src={primevideo} alt="PrimeVideo" />
                  </a>
                  <a href="https://tv.apple.com/br/movie/ben-hur/umc.cmc.523sgjwmhal494z5qfp0xz51g" target='_blank'>
                    <img src={appletv} alt="AppleTV" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 4 */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=SZnexg3PTSg" target='_blank'>
                  <img src={amorsublimeamor} alt="Amor, sublime Amor" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>4 - Amor, Sublime Amor (West Side Story) (1961)</h1>
                <span>🏆 10 Oscars</span>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://www.primevideo.com/-/pt/detail/Titanic/0R7Q0SWNO615THQW59FZZBSGUD?utm_source=chatgpt.com" target='_blank'>
                    <img src={primevideo} alt="PrimeVideo" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 5 */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=rH8aVaeHqq4" target='_blank'>
                  <img src={gigi} alt="Gigia" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>5 - Gigi (1958)</h1>
                <span>🏆 9 Oscars</span>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://www.primevideo.com/detail/Gigi-1958/0RQYWFJ9OH5UEOSV4GPA6IF8LH?utm_source=chatgpt.com" target='_blank'>
                    <img src={primevideo} alt="PrimeVideo" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 6 */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=A4cH6g1wD5g" target='_blank'>
                  <img src={oultimoimperador} alt="O último Imperador" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>6 - O Último Imperador (1987)</h1>
                <span>🏆 9 Oscars</span>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://tv.apple.com/br/movie/o-ultimo-imperador/umc.cmc.2lxa6rziv7drzecqhv6xmnhz1" target='_blank'>
                    <img src={appletv} alt="AppleTV" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 7 */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=bHzGeci_8wc" target='_blank'>
                  <img src={opacienteingles} alt="O Paciente Inglês" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>7 - O Paciente Inglês (The English Patient) (1996)</h1>
                <span>🏆 9 Oscars</span>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://tv.apple.com/br/movie/homem-aranha-sem-volta-para-casa/umc.cmc.2qf7xc5hds0m5jgx4roago580" target='_blank'>
                    <img src={appletv} alt="AppleTV" />
                  </a>
                  <a href="https://www.netflix.com/br/TITLE/81465707?utm_source=chatgpt.com" target='_blank'>
                    <img src={netflix} alt="Netflix" />
                  </a>
                  <a href="https://www.primevideo.com/-/pt/detail/Homem-Aranha-Sem-Volta-para-Casa/0GC8T3GTI8I9NMQUCNXJ8BLPK7?utm_source=chatgpt.com" target='_blank'>
                    <img src={primevideo} alt="PrimeVideo" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 8 */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=KxYVSblvWQk" target='_blank'>
                  <img src={ventolevou} alt="E o Vento Levou" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>8 - E o Vento Levou (Gone with the Wind) (1939)</h1>
                <span>🏆 8 Oscars</span>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://www.primevideo.com/-/pt/detail/E-o-Vento-Levou/0NHEKJ1RE0VB21OE2XXWIBR00N?utm_source=chatgpt.com" target='_blank'>
                    <img src={primevideo} alt="PrimeVideo" />
                  </a>
                  <a href="https://tv.apple.com/br/movie/e-o-vento-levou/umc.cmc.yrquc45v8733x85h5klgxbeh" target='_blank'>
                    <img src={appletv} alt="AppleTV" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 9 */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=Z7PmarMfuog" target='_blank'>
                  <img src={umpassodaeternidade} alt="A um Passo da Eternidade" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>9 - A Um Passo da Eternidade (From Here to Eternity) (1953)</h1>
                <span>🏆 8 Oscars</span>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://tv.apple.com/br/movie/a-um-passo-da-eternidade/umc.cmc.2zhxjgeniqb2uhgjclahid6fk" target='_blank'>
                    <img src={appletv} alt="AppleTV" />
                  </a>
                  <a href="https://www.primevideo.com/-/pt/detail/0S8NAEGFPCKWP8HGGZBETI7FCC/ref%3Datv_dl_rdr?utm_source=chatgpt.com" target='_blank'>
                    <img src={primevideo} alt="PrimeVideo" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 10 */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=boekTHsOIY8" target='_blank'>
                  <img src={sindicatodosladroes} alt="Sindicato de Ladrões" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>10 - Sindicato de Ladrões (On the Waterfront) (1954)</h1>
                <span>🏆 8 Oscars</span>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://www.primevideo.com/detail/On-the-Waterfront/0ST5SYU9UBY1TFLX4LGF6T1STF?utm_source=chatgpt.com" target='_blank'>
                    <img src={primevideo} alt="PrimeVideo" />
                  </a>
                  <a href="https://painel.play.uol.com.br/movie/4759-sindicato-de-ladroes?utm_source=chatgpt.com" target='_blank'>
                    <img src={uol} alt="UOL" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Botão seta direita */}
          <button className="seta seta-direita" onClick={() => rolarOscars('direita')}>
            ❯
          </button>
        </section>

        {/* --------------------CONTAINER DOS MELHORES AVALIADOS---------------------- */}

        <div id="melhores-avaliados">
          <h1 id='top-10-h1'>Os 10 melhores avaliados (IMDb)</h1>
        </div>

        <section className="container-top-10-principal">
          {/* Botão seta esquerda */}
          <button className="seta seta-esquerda" onClick={() => rolarMelhoresAvaliados('esquerda')}>
            ❮
          </button>

          {/* Carrossel com TODOS os cards dentro */}
          <div className="carrossel-top-10" ref={carrosselMelhoresAvaliadosRef}>

            {/* CARD 1 */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=Y22NgkErOAk" target='_blank'>
                  <img src={umsonhodeliberdade} alt="Um sonho de liberdade" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>1 - Um Sonho de Liberdade (1994)</h1>
                <span>⭐ 9,3</span>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://www.primevideo.com/-/pt/detail/Um-Sonho-de-Liberdade/0H3BD1NXV10WDK34UPWWVK4NNS?utm_source=chatgpt.com" target='_blank'>
                    <img src={primevideo} alt="PrimeVideo" />
                  </a>
                  <a href="https://tv.apple.com/br/movie/um-sonho-de-liberdade/umc.cmc.459n4f98t82t8ommdoa7ebnny" target='_blank'>
                    <img src={appletv} alt="AppleTV" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=SaHZHU-44XA" target='_blank'>
                  <img src={poderosochefao} alt="O poderoso Chefão" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>2 - O Poderoso Chefão (1972)</h1>
                <span>⭐ 9,2</span>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://www.netflix.com/search?q=o%20poderoso%20chef%C3%A3o&jbv=60011152" target='_blank'>
                    <img src={netflix} alt="Netflix" />
                  </a>
                  <a href="https://www.primevideo.com/-/pt/detail/O-Poderoso-Chef%C3%A3o/0L45IM106OK0SH586P7WW9F96I?utm_source=chatgpt.com" target='_blank'>
                    <img src={primevideo} alt="PrimeVideo" />
                  </a>
                  <a href="https://tv.apple.com/br/movie/o-poderoso-chefao/umc.cmc.3ew9fykdnpfaq9t2jq5da011c" target='_blank'>
                    <img src={appletv} alt="AppleTV" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=EXeTwQWrcwY" target='_blank'>
                  <img src={batmancavaleirodastrevas} alt="Batman: O Cavaleiro das Trevas" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>3 - Batman: O Cavaleiro das Trevas (2008)</h1>
                <span>⭐ 9,1</span>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://play.hbomax.com/movie/52217243-a137-45d6-9c6a-0dfab4633034?utm_source=chatgpt.com" target='_blank'>
                    <img src={hbomax} alt="HBOmax" />
                  </a>
                  <a href="https://tv.apple.com/pt/movie/batman---o-cavaleiro-das-trevas/umc.cmc.1uf4c3neuc9yxhnjv7t4rd5wa" target='_blank'>
                    <img src={appletv} alt="AppleTV" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 4 */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=9O1Iy9od7-A" target='_blank'>
                  <img src={poderosochefao2} alt="O Poderoso Chefão – Parte II" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>4 - O Poderoso Chefão – Parte II (1974)</h1>
                <span>⭐ 9,0</span>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://www.netflix.com/br/title/60011663?utm_source=chatgpt.com" target='_blank'>
                    <img src={netflix} alt="Netflix" />
                  </a>
                  <a href="https://www.paramountplus.com/br/movies/video/FG3ZeSyi6NHEwpuwxqWgrdIGqGemzxNI/?utm_source=chatgpt.com" target='_blank'>
                    <img src={paramount} alt="Paramount" />
                  </a>
                  <a href="https://tv.apple.com/br/movie/o-poderoso-chefao-ii/umc.cmc.3jyv977h8msmkkuz4r1u29lel" target='_blank'>
                    <img src={appletv} alt="AppleTV" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 5 */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=TEN-2uTi2c0" target='_blank'>
                  <img src={homenseumasentenca} alt="12 Homens e uma Sentença" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>5 - 12 Homens e uma Sentença (12 Angry Men) (1957)</h1>
                <span>⭐ 9,0</span>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://www.primevideo.com/-/pt/detail/Doze-homens-e-uma-senten%C3%A7a/0R1DYZPH9XC72I479NEXF195HL?utm_source=chatgpt.com" target='_blank'>
                    <img src={primevideo} alt="PrimeVideo" />
                  </a>
                  <a href="https://tv.apple.com/br/movie/doze-homens-e-uma-sentenca/umc.cmc.2w9gsodu34xfgr9wjpa4a3llb" target='_blank'>
                    <img src={appletv} alt="AppleTV" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 6 */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=r5X-hFf6Bwo" target='_blank'>
                  <img src={senhordosaneis} alt="O Senhor dos Anéis: O Retorno do Rei" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>6 -  O Senhor dos Anéis: O Retorno do Rei (2003)</h1>
                <span>⭐ 9,0</span>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://play.hbomax.com/movie/ad704585-6774-4d37-8c61-1bd41154173f?utm_source=chatgpt.com" target='_blank'>
                    <img src={hbomax} alt="HBO Max+" />
                  </a>
                  <a href="https://www.primevideo.com/-/pt/detail/O-Senhor-dos-An%C3%A9is-O-Retorno-do-Rei/0NSGBFYAQDZQKEC8BBWKT8GILJ?utm_source=chatgpt.com" target='_blank'>
                    <img src={primevideo} alt="PrimeVideo" />
                  </a>
                  <a href="https://tv.apple.com/br/movie/the-lord-of-the-rings-the-return-of-the-king/umc.cmc.57s6i23z9ry0zsgwwc2mxjqi6" target='_blank'>
                    <img src={appletv} alt="AppleTV" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 7 */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=GAf0nGq_FXQ" target='_blank'>
                  <img src={listadechindler} alt="A lista de Schindler" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>7 -  A lista de Schindler (1993)</h1>
                <span>⭐ 9,0</span>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://tv.apple.com/us/movie/schindlers-list/umc.cmc.53hzoo3z0ufjb6wsxgspp2jlf" target='_blank'>
                    <img src={appletv} alt="AppleTV" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 8 */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=V75dMMIW2B4" target='_blank'>
                  <img src={asociedadedoanel} alt="O Senhor dos Anéis: A Sociedade do Anel" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>8 - O Senhor dos Anéis: A Sociedade do Anel (2001)</h1>
                <span>⭐ 8,9</span>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://www.hbomax.com/br/pt/lapsed" target='_blank'>
                    <img src={hbomax} alt="HBOmax" />
                  </a>
                  <a href="https://www.primevideo.com/-/pt/detail/O-Senhor-dos-An%C3%A9is-A-Sociedade-do-Anel/0N0CRBLY1S5GDA4EVTQ34LF5GN?utm_source=chatgpt.com" target='_blank'>
                    <img src={primevideo} alt="PrimeVideo" />
                  </a>
                  <a href="https://tv.apple.com/br/movie/o-senhor-dos-aneis-sociedade-do-anel/umc.cmc.29au6l8rcr4g5zhuwcx0euri1" target='_blank'>
                    <img src={appletv} alt="AppleTV" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 9 */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=s7EdQ4FqbhY" target='_blank'>
                  <img src={pulpfiction} alt="Pulp Fiction" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>9 - Pulp Fiction (1994)</h1>
                <span>⭐ 8,8</span>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://tv.apple.com/br/movie/pulp-fiction-tempo-de-violencia/umc.cmc.1hfvw2p79f9qdeydow8nmrn7t" target='_blank'>
                    <img src={appletv} alt="AppleTV" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 10 */}
            <div className='container-top-10'>
              <div className='container-top-10-imagem'>
                <a href="https://www.youtube.com/watch?v=WCN5JJY_wiA" target='_blank'>
                  <img src={treshomensemconflito} alt="Três Homens em Conflito (The Good, the Bad and the Ugly)" />
                </a>
              </div>
              <div className='container-top-10-texto'>
                <h1>10 - Três Homens em Conflito (The Good, the Bad and the Ugly) (1966)</h1>
                <span>⭐ 8,8</span>
                <p>Onde assistir</p>
                <div className='img-assistir'>
                  <a href="https://www.primevideo.com/-/pt/detail/Tr%C3%AAs-Homens-em-Conflito/0K8IYAOFKCCXZRZ0Q3MLRC1X2Q?utm_source=chatgpt.com" target='_blank'>
                    <img src={primevideo} alt="PrimeVideo" />
                  </a>
                  <a href="https://tv.apple.com/br/movie/tres-homens-em-conflito/umc.cmc.7f1bwjagfxhm7uo4ra9nw59ad" target='_blank'>
                    <img src={appletv} alt="AppleTV" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Botão seta direita */}
          <button className="seta seta-direita" onClick={() => rolarMelhoresAvaliados('direita')}>
            ❯
          </button>
        </section>

      </main>

      <footer></footer>
    </>
  );
}

export default Home;
