import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Series.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';

import perfil from '../../assets/perfil.jpg'

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
import crunchyroll from '../../assets/crunchyroll.jpg'

// -----------------CARROUSEL-VER-SERIES----------------------------

import twd from '../../assets/twd.jpg'
import got from '../../assets/got.jpg'
import ossopranos from '../../assets/ossopranos.png'
import origem from '../../assets/origem.jpg'
import modernfamily from '../../assets/modernfamily.webp'
import bandofbrothersposter from '../../assets/bandofbrothersposter.jpg'

// -----------------CARROUSEL-VER-SERIES-MOBILE----------------------------

import sopranosmobile from '../../assets/sopranosmobile.webp'
import gotmobile from '../../assets/gotmobile.jpg'
import twdmobile from '../../assets/twdmobile.jpg'
import frommobile from '../../assets/frommobile.jpg'
import modernfamilymobile from '../../assets/modernfamilymobile.jpg'

// -----------------------SERIES-EMMY----------------------

import gotemmy from '../../assets/gotemmy.webp'
import fraiser from '../../assets/fraiser.webp'
import simpsons from '../../assets/simpsons.webp'
import westwing from '../../assets/westwing.webp'
import hillstreet from '../../assets/hillstreet.jpeg'
import marytyler from '../../assets/marytyler.jpg'
import thecrown from '../../assets/thecrown.jpg'
import cheers from '../../assets/cheers.jpg'
import modernfamilyseries from '../../assets/modernfamilyseries.jpg'
import handmaids from '../../assets/handmaids.jpg'

// -----------------SERIES-IMDB-------------------------

import breakingbadimdb from '../../assets/breakingbadimdb.jpg'
import bandofbrothers from '../../assets/bandofbrothers.avif'
import chernobyl from '../../assets/chernobyl.webp'
import thewire from '../../assets/thewire.webp'
import sherlock from '../../assets/sherlock.webp'
import alemdaimaginacao from '../../assets/alemdaimaginacao.webp'
import sahsiyet from '../../assets/sahsiyet.jpg'
import theoffice from '../../assets/theoffice.avif'
import onlyfoolsandhorses from '../../assets/onlyfoolsandhorses.webp'

// --------------------------------------------------



function Series() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [mostrarPesquisa, setMostrarPesquisa] = useState(false);

    const togglePesquisa = () => {
        setMostrarPesquisa(!mostrarPesquisa);
    };

    const carrosselSeriesEmmyRef = useRef(null);
    const carrosselSeriesImdbRef = useRef(null);

    const [indicePrincipal, setIndicePrincipal] = useState(0);
    const [animacao, setAnimacao] = useState('fade-in');

    const imagensPrincipalSeries = [twd, got, bandofbrothersposter, origem, modernfamily];
    const imagensPrincipalMobileSeries = [twdmobile, gotmobile, bandofbrothers, frommobile, modernfamilymobile];

    const navigate = useNavigate(); // ✅ Inicializa navigate
    const [menuOpen, setMenuOpen] = useState(false);
    const [nomeUsuario, setNomeUsuario] = useState('');

    function sair() {
        localStorage.removeItem('usuario'); // limpa usuário
        navigate('/login'); // redireciona para login
    }
    useEffect(() => {
        const usuario = localStorage.getItem('usuario');
        if (usuario) {
            const userObj = JSON.parse(usuario);
            setNomeUsuario(userObj.nome);
        }
    }, []);

    useEffect(() => {
        AOS.init({ once: true });

        const intervalo = setInterval(() => {
            setAnimacao('fade-out');
            setTimeout(() => {
                setIndicePrincipal((prev) => (prev + 1) % imagensPrincipalSeries.length);
                setAnimacao('fade-in');
            }, 800);
        }, 7000);

        return () => clearInterval(intervalo);
    }, [imagensPrincipalSeries.length]);

    // ----------------SERIES-EMMY--------------

    const rolarSeriesEmmy = (direcao) => {
        const largura = carrosselSeriesEmmyRef.current.clientWidth;
        carrosselSeriesEmmyRef.current.scrollBy({
            left: direcao === 'esquerda' ? -largura : largura,
            behavior: 'smooth',
        });
    };

    // ----------------SERIES-IMDB--------------

    const rolarSeriesImdb = (direcao) => {
        const largura = carrosselSeriesImdbRef.current.clientWidth;
        carrosselSeriesImdbRef.current.scrollBy({
            left: direcao === 'esquerda' ? -largura : largura,
            behavior: 'smooth',
        });
    };


    return (
        <>
            <header>
                <nav>
                    <div className="logo-container">
                        <Link to="/Home">
                            <h1>Cine10</h1>
                        </Link>
                    </div>

                    <div className={`text-container ${menuOpen ? 'open' : ''}`}>
                        <Link to="/Filmes">
                            Filmes
                        </Link>
                        <Link to="/Animes">
                            Animes
                        </Link>
                        <Link to="/Series" id='series-text'>
                            Séries
                        </Link>
                        <Link to="/Desenhos">
                            Desenhos
                        </Link>
                    </div>

                    <div className="perfil-container">
                        <h1 id='perfil-container-h1'>{nomeUsuario ? nomeUsuario : "Visitante"}</h1>
                        <img src={perfil} alt="" />
                    </div>

                    <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        <i className="bi bi-list"></i>
                    </div>

                </nav>
            </header>

            <main>

                <section className='nav-mobile'>
                    <div className='text-container-2'>
                        <Link to="/Filmes">
                            <button>Filmes</button>
                        </Link>
                        <Link to="/Animes">
                            <button>Animes</button>
                        </Link>
                        <Link to="/Series" id="series-text">
                            <button>Séries</button>
                        </Link>
                        <Link to="/Desenhos">
                            <button>Desenhos</button>
                        </Link>
                    </div>
                </section>


                {/* //------------------CONTAINER-SERIES------------------ */}

                <section className='container-series'>
                    <div className='container-series-absolute'>
                        <div className='container-series-btn'>
                            <a href="#series">
                                {/* <button id='btn-1'>Ver séries</button> */}
                            </a>
                        </div>
                    </div>

                    <div className='container-series-img'>
                        {/* imagem normal (desktop) */}
                        <img
                            src={imagensPrincipalSeries[indicePrincipal]}
                            alt='Slide principal'
                            className={`img-desktop ${animacao}`}
                        />

                        {/* imagem versão mobile */}
                        <img
                            src={imagensPrincipalMobileSeries[indicePrincipal]}
                            alt='Slide principal mobile'
                            className={`img-mobile ${animacao}`}
                        />
                    </div>
                </section>


                <section className="introducao-container">
                    <div className="title-introducao-container" >
                        <h1>Explore, aproveite e inspire-se.</h1>
                    </div>

                    <div className="text-introducao-container">
                        <p>Não perca tempo procurando o que assistir! No Cine10, selecionamos os melhores dos melhores para você.</p>
                    </div>

                    <div>
                        <div className='btn-introducao-container'>
                            <button id="btn-sobre" onClick={sair}>Sair</button>
                            <Link to="/Login">
                                <button id="btn-login">Login</button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* --------------------CONTAINER DAS SERIES MAIS PREMIADAS---------------------- */}

                <div id="series">
                    <h1 id='top-10-h1'>As 10 séries mais premiadas (Emmy)</h1>
                </div>

                <section className="container-top-10-principal">
                    {/* Botão seta esquerda */}
                    <button className="seta seta-esquerda" onClick={() => rolarSeriesEmmy('esquerda')}>
                        ❮
                    </button>

                    {/* Carrossel com TODOS os cards dentro */}
                    <div className="carrossel-top-10" ref={carrosselSeriesEmmyRef}>

                        {/* CARD 1 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=bjqEWgDVPe0" target='_blank'>
                                    <img src={gotemmy} alt="Saturday Night Live" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>1 - Game of Thrones (2011)</h1>
                                <span>🏆 59 prêmios</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.hbomax.com/br/pt/lapsed" target='_blank'>
                                        <img src={hbomax} alt="HBOmax" />
                                    </a>
                                    <a href="https://tv.apple.com/br/show/game-of-thrones/umc.cmc.7htjb4sh74ynzxavta5boxuzq" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                    <a href="https://www.primevideo.com/-/pt/detail/Game-of-Thrones/0GQTRXWTJFHS0DKID09GPGGYKY?utm_source=chatgpt.com" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=d6rIzxICCio" target='_blank'>
                                    <img src={fraiser} alt="Saturday Night Live" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>2 - Frasier (1993)</h1>
                                <span>🏆 37 prêmios</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.paramountplus.com/br/shows/frasier/?utm_source=chatgpt.com" target='_blank'>
                                        <img src={paramount} alt="Paramount" />
                                    </a>
                                    <a href="https://tv.apple.com/br/show/frasier/umc.cmc.7a9dlsnehalzsqin5uia98qox" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                    <a href="https://www.primevideo.com/-/pt/detail/Frasier/0GM6BD1ECCRRR3W8AYKDFE2EAR?utm_source=chatgpt.com" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=luhb2X4Me7U" target='_blank'>
                                    <img src={simpsons} alt="Simpsons" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>3 - The Simpsons (1989)</h1>
                                <span>🏆 37 prêmios</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.disneyplus.com/pt-br/browse/entity-cac75c8f-a9e2-4d95-ac73-1cf1cc7b9568?utm_source=chatgpt.com" target='_blank'>
                                        <img src={disney} alt="Disney+" />
                                    </a>
                                    <a href="https://tv.apple.com/br/show/os-simpsons/umc.cmc.1kfo3z1jtaj8ff6wsh9cvxbwu" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                    <a href="https://www.primevideo.com/-/pt/detail/The-Simpsons/0M9BZWC5OK1HO62ULKJO7VE1ZV?utm_source=chatgpt.com" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 4 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=3hlHoixi0vY" target='_blank'>
                                    <img src={marytyler} alt="Hill Street Blues" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>4 - The Mary Tyler Moore Show (1970)</h1>
                                <span>🏆 29 prêmios</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.primevideo.com/-/pt/detail/The-Mary-Tyler-Moore-Show/0IZFD9NYYTAWCP7BURXYDHHVOO?utm_source=chatgpt.com" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 5 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=Dve_7Kbt3EA" target='_blank'>
                                    <img src={cheers} alt="Cheers" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>5 - Cheers (1982)</h1>
                                <span>🏆 28 prêmios</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.primevideo.com/-/pt_PT/detail/Cheers/0P0TGDWUU3O1GVI4OCLPQXKK51?utm_source=chatgpt.com" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 6 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=dFZC-_T_irA" target='_blank'>
                                    <img src={thecrown} alt="The Crown" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>6 - The Crown (2016)</h1>
                                <span>🏆 27 prêmios</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.netflix.com/title/80025678" target='_blank'>
                                        <img src={netflix} alt="Netflix" />
                                    </a>
                                    <a href="https://tv.apple.com/br/show/the-crown/umc.cmc.hs9h7a6mis7c65sx94txykbd" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                </div>
                            </div>
                        </div>


                        {/* CARD 7 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=oBZlwRkB6Bs" target='_blank'>
                                    <img src={westwing} alt="The West Wing" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>7 - The West Wing (1999)</h1>
                                <span>🏆 26 prêmios</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.hbomax.com/br/pt/lapsed" target='_blank'>
                                        <img src={hbomax} alt="HBOmax" />
                                    </a>
                                    <a href="https://tv.apple.com/us/show/the-west-wing/umc.cmc.6hflo28r5ubzod2qfebs0dowf" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                    <a href="https://www.primevideo.com/-/pt/detail/The-West-Wing/0O3PONZNJJE4ZQ7018PX6U1EP3?utm_source=chatgpt.com" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 8 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=oUX3TPKVf_Y" target='_blank'>
                                    <img src={hillstreet} alt="Hill Street Blues" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>8 - Hill Street Blues (1981)</h1>
                                <span>🏆 26 prêmios</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.disneyplus.com/pt-br" target='_blank'>
                                        <img src={disney} alt="Disney+" />
                                    </a>
                                    <a href="https://www.primevideo.com/-/pt/detail/Hill-Street-Blues/0G0V1UQX0NYP0PAB46IYDLVGSH?utm_source=chatgpt.com" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 9 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=O5uuMr1YEyE" target='_blank'>
                                    <img src={modernfamilyseries} alt="Hill Street Blues" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>9 - Modern Family (2009)</h1>
                                <span>🏆 22 prêmios</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.disneyplus.com/pt-br/browse/entity-943f5577-caad-4e34-a8d3-4a9a816d078a?utm_source=chatgpt.com" target='_blank'>
                                        <img src={disney} alt="Disney+" />
                                    </a>
                                    <a href="https://www.primevideo.com/detail/Modern-Family/0N4OYGW2CLLQZSLPX1W45S43O0?utm_source=chatgpt.com" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                    <a href="https://tv.apple.com/br/show/modern-family/umc.cmc.cmw0vccgg7hpwfa3wgvvu5q0" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 10 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=dVLiDETfx1c" target='_blank'>
                                    <img src={handmaids} alt="Hill Street Blues" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>10 - The Handmaid’s Tale (2017)</h1>
                                <span>🏆 15 prêmios</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.intl.paramountplus.com/br/shows/the-handmaids-tale/?utm_source=chatgpt.com" target='_blank'>
                                        <img src={paramount} alt="Paramount" />
                                    </a>
                                    <a href="https://tv.apple.com/br/show/the-handmaids-tale/umc.cmc.al37oeqemkp1j935xh0if7ep" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                    <a href="https://www.disneyplus.com/pt-br/browse/entity-565d8976-9d26-4e63-866c-40f8a137ce5f?utm_source=chatgpt.com" target='_blank'>
                                        <img src={disney} alt="Disney+" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Botão seta direita */}
                    <button className="seta seta-direita" onClick={() => rolarSeriesEmmy('direita')}>
                        ❯
                    </button>
                </section>

                {/* --------------------CONTAINER DAS MELHORES SERIES---------------------- */}

                <div id="series">
                    <h1 id='top-10-h1'>As 10 melhores séries (Imdb)</h1>
                </div>

                <section className="container-top-10-principal">
                    {/* Botão seta esquerda */}
                    <button className="seta seta-esquerda" onClick={() => rolarSeriesImdb('esquerda')}>
                        ❮
                    </button>

                    {/* Carrossel com TODOS os cards dentro */}
                    <div className="carrossel-top-10" ref={carrosselSeriesImdbRef}>

                        {/* CARD 1 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=HhesaQXLuRY" target='_blank'>
                                    <img src={breakingbadimdb} alt="Breaking Bad" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>1 - Breaking Bad (2008)</h1>
                                <span>⭐ 9,5</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.netflix.com/title/70143836" target='_blank'>
                                        <img src={netflix} alt="Netflix" />
                                    </a>
                                    <a href="https://www.primevideo.com/-/pt/detail/Breaking-Bad/0KEKSTS1O6SJNXQ00DUZ7BPY7M?utm_source=chatgpt.com" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=KKRBAFlN5ww" target='_blank'>
                                    <img src={bandofbrothers} alt="Irmãos de Guerra" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>2 - Irmãos de Guerra (2001)</h1>
                                <span>⭐ 9,4</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.hbomax.com/br/pt/lapsed" target='_blank'>
                                        <img src={hbomax} alt="HBOmax" />
                                    </a>
                                    <a href="https://tv.apple.com/br/show/band-of-brothers/umc.cmc.6w0w9swttxab3xshv7zsh7tr8" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=s9APLXM9Ei8" target='_blank'>
                                    <img src={chernobyl} alt="Chernobyl" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>3 - Chernobyl (2019)</h1>
                                <span>⭐ 9,3</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.hbomax.com/br/pt/lapsed" target='_blank'>
                                        <img src={hbomax} alt="HBOmax" />
                                    </a>
                                    <a href="https://tv.apple.com/br/show/chernobyl/umc.cmc.4r07f208iugn79go4pmvpcqbt" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 4 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=1S5khOZ1wBs" target='_blank'>
                                    <img src={thewire} alt="A escuta" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>4 - A escuta (2002)</h1>
                                <span>⭐ 9,3</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.hbomax.com/br/pt/lapsed" target='_blank'>
                                        <img src={hbomax} alt="HBOmax" />
                                    </a>
                                    <a href="https://tv.apple.com/pt/show/the-wire/umc.cmc.73x6fvjkh3m9uq42w1f97pxop" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 5 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=KMx4iFcozK0" target='_blank'>
                                    <img src={sopranosmobile} alt="Família Soprano" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>5 - Família Soprano (1999)</h1>
                                <span>⭐ 9,2</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.hbomax.com/br/pt/lapsed" target='_blank'>
                                        <img src={hbomax} alt="HBOmax" />
                                    </a>
                                    <a href="https://tv.apple.com/br/show/familia-soprano/umc.cmc.7fvpbc4pqotnxhpx36c739tyd" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 6 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=bjqEWgDVPe0" target='_blank'>
                                    <img src={gotemmy} alt="Saturday Night Live" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>6 - Game of Thrones (2011)</h1>
                                <span>⭐ 9,2</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.hbomax.com/br/pt/lapsed" target='_blank'>
                                        <img src={hbomax} alt="HBOmax" />
                                    </a>
                                    <a href="https://tv.apple.com/br/show/game-of-thrones/umc.cmc.7htjb4sh74ynzxavta5boxuzq" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                    <a href="https://www.primevideo.com/-/pt/detail/Game-of-Thrones/0GQTRXWTJFHS0DKID09GPGGYKY?utm_source=chatgpt.com" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 7 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=bjqEWgDVPe0" target='_blank'>
                                    <img src={sherlock} alt="Saturday Night Live" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>7 - Sherlock (2010)</h1>
                                <span>⭐ 9,0</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.netflix.com/title/70202589" target='_blank'>
                                        <img src={netflix} alt="Netflix" />
                                    </a>
                                    <a href="https://www.primevideo.com/-/pt/detail/0QBPAEOS9TM1WB3TW5M8VGDS05/ref=atv_sr_fle_c_srce7a38_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B0B8Q8HXT3&qid=1760674847392" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 8 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=5ymjp2uIBws" target='_blank'>
                                    <img src={alemdaimaginacao} alt="Além da Imaginação" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>8 - Além da Imaginação (1959)</h1>
                                <span>⭐ 9,0</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://tv.apple.com/us/show/the-twilight-zone/umc.cmc.3tg58h9lglzj81tldi0n9167g" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                    <a href="https://www.primevideo.com/-/pt/detail/The-Twilight-Zone-Classic/0KPKZU2H05HF57GYDSKLU80B1S?utm_source=chatgpt.com" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 9 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=wTrn8dmAjaQ" target='_blank'>
                                    <img src={onlyfoolsandhorses} alt="Only Fools and Horses" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>9 - Only Fools and Horses (1981)</h1>
                                <span>⭐ 9,0</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://tv.apple.com/fi/episode/big-brother/umc.cmc.4ca4o30iz9vcwltneda6n14hy?showId=umc.cmc.6r4coauwtq86wykaaqsx7rhij" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                    <a href="https://www.primevideo.com/-/pt_PT/detail/Only-Fools-and-Horses/0L0TH0K4VDUTO9ZK1I0QAAXW4A?utm_source=chatgpt.com" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 10 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=-C2z-nshFts" target='_blank'>
                                    <img src={theoffice} alt="The Office" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>10 - The Office (2005)</h1>
                                <span>⭐ 9,0</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://tv.apple.com/br/show/the-office/umc.cmc.455js879szmdywutf3qjewagm" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                    <a href="https://www.primevideo.com/-/pt/detail/The-Office/0Q38DX2K1Y5F1VNEHM346VNIFI" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Botão seta direita */}
                    <button className="seta seta-direita" onClick={() => rolarSeriesImdb('direita')}>
                        ❯
                    </button>
                </section>

            </main>

            <footer>

            </footer>
        </>
    );
}

export default Series;