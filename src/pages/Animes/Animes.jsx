import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Animes.css';
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

// ----------------------ANIMES-IMDB-----------------------------

import fullmetal from '../../assets/fullmetal.jpg'
import atackontitan from '../../assets/atackontitan.png'
import hunterxhunter from '../../assets/hunterxhunter.jpg'
import onepiece from '../../assets/onepiece.avif'
import deathnote from '../../assets/deathnote.jpg'
import cowboy from '../../assets/cowboy.jpg'
import steinsgate from '../../assets/steinsgate.avif'
import dragonballz from '../../assets/dragonballz.jpg'
import narutoshippuden from '../../assets/narutoshippuden.webp'
import berserk from '../../assets/berserk.avif'

// ----------------------ANIMES-POPULARES---------------------

import pokemon from '../../assets/pokemon.avif'
import demonslayer from '../../assets/demonslayer.webp'
import jujutsu from '../../assets/jujutsu.webp'
import heroacademia from '../../assets/heroacademia.jpg'
import swordart from '../../assets/swordart.webp'

// -----------------CARROUSEL-VER-DESENHOS / FILMES - imagens usadas no slideshow principal -----------------
import httyd from '../../assets/httyd.jpg';
import walle from '../../assets/walle.webp';
import up from '../../assets/up.jpg';
import toystore from '../../assets/toystore.jpg';
import avataraang from '../../assets/avataraang.jpg';

// versão mobile
import httydmobile from '../../assets/httydmobile.jpg';
import wallemobile from '../../assets/wallemobile.webp';
import upmobile from '../../assets/upmobile.jpg';
import toystoremobile from '../../assets/toystoremobile.jpg';
import avataraangmobile from '../../assets/avataraangmobile.jpg';

// ----------------CARROSSEL-ANIMES-----------------------

import narutoshippudenposter from '../../assets/narutoshippudenposter.jpg'
import atackontitanposter from '../../assets/atackontitanposter.jpg'
import deathnoteposter from '../../assets/deathnoteposter.jpg'
import steinsgateposter from '../../assets/steinsgateposter.jpg'
import demonslayerposter from '../../assets/demonslayerposter.jpg'

function Animes() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [mostrarPesquisa, setMostrarPesquisa] = useState(false);

    const togglePesquisa = () => {
        setMostrarPesquisa(!mostrarPesquisa);
    };

    const carrosselMelhoresAvaliadosAnimesRef = useRef(null);
    const carrosselAnimesPopularRef = useRef(null);

    const [indicePrincipal, setIndicePrincipal] = useState(0);
    const [animacao, setAnimacao] = useState('fade-in');

    const imagensPrincipalAnime = [narutoshippudenposter, atackontitanposter, deathnoteposter, steinsgateposter, demonslayerposter]
    const imagensPrincipalMobileAnime = [narutoshippuden, atackontitan, deathnote, steinsgate, demonslayer]

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
                setIndicePrincipal((prev) => (prev + 1) % imagensPrincipalAnime.length);
                setAnimacao('fade-in');
            }, 800);
        }, 7000);

        return () => clearInterval(intervalo);
    }, [imagensPrincipalAnime.length]);

    // ---------------MELHORES-AVALIADOS-ANIMES--------------

    const rolarMelhoresAvaliadosAnimes = (direcao) => {
        const largura = carrosselMelhoresAvaliadosAnimesRef.current.clientWidth;
        carrosselMelhoresAvaliadosAnimesRef.current.scrollBy({
            left: direcao === 'esquerda' ? -largura : largura,
            behavior: 'smooth',
        });
    };

    // ----------------ANIMES-POPULARES--------------

    const rolarAnimesPopulares = (direcao) => {
        const largura = carrosselAnimesPopularRef.current.clientWidth;
        carrosselAnimesPopularRef.current.scrollBy({
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
                        <Link to="/Animes" id='filmes-text'>
                            Animes
                        </Link>
                        <Link to="/Series">
                            Séries
                        </Link>
                        <Link to="/Desenhos">
                            Desenhos
                        </Link>
                        {/* <a href="#animes" onClick={() => setMenuOpen(false)}>Animes</a> */}
                        {/* <a href="#desenhos" onClick={() => setMenuOpen(false)}>Desenhos</a> */}
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
                        <Link to="/Animes" id='animes-text'>
                            <button>Animes</button>
                        </Link>
                        <Link to="/Series">
                            <button>Séries</button>
                        </Link>
                        <Link to="/Desenhos">
                            <button>Desenhos</button>
                        </Link>
                    </div>
                </section>


                {/* //------------------CONTAINER-ANIMES------------------ */}

                <section className='container-series'>
                    <div className='container-series-absolute'>
                        <div className='container-series-btn'>
                            <a href="#animes">
                                {/* <button id='btn-1'>Ver animes</button> */}
                            </a>
                        </div>
                    </div>

                    <div className='container-series-img'>
                        {/* imagem normal (desktop) */}
                        <img
                            src={imagensPrincipalAnime[indicePrincipal]}
                            alt='Slide principal'
                            className={`img-desktop ${animacao}`}
                        />

                        {/* imagem versão mobile */}
                        <img
                            src={imagensPrincipalMobileAnime[indicePrincipal]}
                            alt='Slide principal mobile'
                            className={`img-mobile ${animacao}`}
                        />
                    </div>
                </section>


                <section className="introducao-container">
                    <div className="title-introducao-container">
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

                {/* --------------------CONTAINER DOS ANIMES MAIS AVALIADOS---------------------- */}

                <div id="animes">
                    <h1 id='top-10-h1'>Os 10 melhores animes ( IMDb )</h1>
                </div>

                <section className="container-top-10-principal">
                    {/* Botão seta esquerda */}
                    <button className="seta seta-esquerda" onClick={() => rolarMelhoresAvaliadosAnimes('esquerda')}>
                        ❮
                    </button>

                    {/* Carrossel com TODOS os cards dentro */}
                    <div className="carrossel-top-10" ref={carrosselMelhoresAvaliadosAnimesRef}>

                        {/* CARD 1 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=-GoNo0DGroU" target='_blank'>
                                    <img src={fullmetal} alt="Fullmetal Alchemist: Brotherhood" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>1 - Fullmetal Alchemist: Brotherhood (2009)</h1>
                                <span>⭐ 9,1</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.netflix.com/search?q=fullmetal&jbv=70204981" target='_blank'>
                                        <img src={netflix} alt="Netflix" />
                                    </a>
                                    <a href="https://www.crunchyroll.com/pt-br/series/GRGGPG93R/fullmetal-alchemist-brotherhood" target='_blank'>
                                        <img src={crunchyroll} alt="Crunchyroll" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=LV-nazLVmgo" target='_blank'>
                                    <img src={atackontitan} alt="Attack on Titan" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>2 - Attack on Titan (Shingeki no Kyojin) (2013 – 2023)</h1>
                                <span>⭐ 9,1</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.crunchyroll.com/pt-br/series/GR751KNZY/attack-on-titan" target='_blank'>
                                        <img src={crunchyroll} alt="Crunchyroll" />
                                    </a>
                                    <a href="https://www.primevideo.com/detail/Attack-on-Titan/0NLTGUZQHA4YXRGRROASC155Q3?utm_source=chatgpt.com" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                    <a href="https://tv.apple.com/br/show/attack-on-titan/umc.cmc.1o8bhtjzw43b5sxvfr1g2qc5" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=d6kBeJjTGnY" target='_blank'>
                                    <img src={hunterxhunter} alt="Hunter x Hunter" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>3 - Hunter × Hunter (2011 – 2014)</h1>
                                <span>⭐ 9,0</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.crunchyroll.com/pt-br/series/GY3VKX1MR/hunter-x-hunter" target='_blank'>
                                        <img src={crunchyroll} alt="Crunchyroll" />
                                    </a>
                                    <a href="https://www.netflix.com/title/70300472" target='_blank'>
                                        <img src={netflix} alt="Netflix" />
                                    </a>
                                    <a href="https://tv.apple.com/br/show/hunter-x-hunter/umc.cmc.6iubybdmze8hzxhis7q2gzmk3" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 4 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=MCb13lbVGE0" target='_blank'>
                                    <img src={onepiece} alt="One Piece" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>4 - One Piece (1999 – presente)</h1>
                                <span>⭐ 9,0</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.netflix.com/search?q=one%20piece&jbv=80107103" target='_blank'>
                                        <img src={netflix} alt="Netflix" />
                                    </a>
                                    <a href="https://www.crunchyroll.com/pt-br/series/GRMG8ZQZR/one-piece" target='_blank'>
                                        <img src={crunchyroll} alt="Crunchyroll" />
                                    </a>
                                    <a href="https://play.hbomax.com/show/37901cbf-ba0c-4a6d-9f5f-f7def2e34a62" target='_blank'>
                                        <img src={hbomax} alt="HBOmax" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 5 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=NlJZ-YgAt-c" target='_blank'>
                                    <img src={deathnote} alt="Death Note" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>5 - Death Note (2006 – 2007)</h1>
                                <span>⭐ 8,9</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.netflix.com/title/70204970" target='_blank'>
                                        <img src={netflix} alt="Neftlix" />
                                    </a>
                                    <a href="https://play.hbomax.com/show/fabd8a3d-dd29-4f94-bc46-55941b14eacf" target='_blank'>
                                        <img src={hbomax} alt="HBOmax" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 6 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=AJKEXDKBVdk" target='_blank'>
                                    <img src={cowboy} alt="Cowboy Bebop" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>6 -  Cowboy Bebop (1998 – 1999)</h1>
                                <span>⭐ 8,9</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.crunchyroll.com/pt-br/series/GYVNXMVP6/cowboy-bebop" target='_blank'>
                                        <img src={crunchyroll} alt="Crunchyroll" />
                                    </a>
                                    <a href="https://www.primevideo.com/-/pt/detail/Cowboy-Bebop/0N0DXY700USE7GTCKH5C6LMOEN" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 7 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=uMYhjVwp0Fk" target='_blank'>
                                    <img src={steinsgate} alt="Steins;Gate" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>7 -  Steins;Gate (2011)</h1>
                                <span>⭐ 8,8</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.primevideo.com/-/pt/detail/SteinsGate/0STD2YPX0N9A2MLD4IFOUDBMRZ" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                    <a href="https://www.crunchyroll.com/pt-br/series/GYWE7W5GY/steinsgate" target='_blank'>
                                        <img src={crunchyroll} alt="Crunchyroll" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 8 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="" target='_blank'>
                                    <img src={dragonballz} alt="Dragon Ball Z" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>8 - Dragon Ball Z (1989 – 1996)</h1>
                                <span>⭐ 8,8</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.crunchyroll.com/pt-br/series/G9VHN9PPW/dragon-ball-z" target='_blank'>
                                        <img src={crunchyroll} alt="Crunchyroll" />
                                    </a>
                                    <a href="https://www.primevideo.com/-/pt/detail/Dragon-Ball-Z/0TRO4DHORIMNWHPHII7IHCGFJ9" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 9 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=22R0j8UKRzY" target='_blank'>
                                    <img src={narutoshippuden} alt="Pulp Fiction" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>9 - Naruto: Shippuden (2007 - 2017) </h1>
                                <span>⭐ 8,7</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.crunchyroll.com/pt-br/series/GYQ4MW246/naruto-shippuden" target='_blank'>
                                        <img src={crunchyroll} alt="Crunchyroll" />
                                    </a>
                                    <a href="https://www.netflix.com/title/80000603" target='_blank'>
                                        <img src={netflix} alt="Netflix" />
                                    </a>
                                    <a href="https://www.primevideo.com/detail/Naruto-Shippuden/0ISLEJE0SYLJ721266RFP6FWGA" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 10 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=IXL5r3n862U" target='_blank'>
                                    <img src={berserk} alt="Berserk" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>10 - Berserk (1997 – 1998)</h1>
                                <span>⭐ 8,7</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.crunchyroll.com/pt-br/series/GYX04955R/berserk" target='_blank'>
                                        <img src={crunchyroll} alt="Crunchyroll" />
                                    </a>
                                    <a href="https://www.primevideo.com/detail/Berserk/0G9DT2288XX9ZZU9HU8AWZFVNC?utm_source=chatgpt.com" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Botão seta direita */}
                    <button className="seta seta-direita" onClick={() => rolarMelhoresAvaliadosAnimes('direita')}>
                        ❯
                    </button>
                </section>

                {/* --------------------CONTAINER DOS ANIMES MAIS POPULARES---------------------- */}

                <div>
                    <h1 id='top-10-h1'>Os 10 animes mais populares</h1>
                </div>

                <section className="container-top-10-principal">
                    {/* Botão seta esquerda */}
                    <button className="seta seta-esquerda" onClick={() => rolarAnimesPopulares('esquerda')}>
                        ❮
                    </button>

                    {/* Carrossel com TODOS os cards dentro */}
                    <div className="carrossel-top-10" ref={carrosselAnimesPopularRef}>

                        {/* CARD 1 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=MCb13lbVGE0" target='_blank'>
                                    <img src={onepiece} alt="One Piece" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>1 - One Piece (1999 – presente)</h1>
                                <p>Onde assistir</p>
                                {/* <span></span> */}
                                <div className='img-assistir'>
                                    <a href="https://www.netflix.com/search?q=one%20piece&jbv=80107103" target='_blank'>
                                        <img src={netflix} alt="Netflix" />
                                    </a>
                                    <a href="https://www.crunchyroll.com/pt-br/series/GRMG8ZQZR/one-piece" target='_blank'>
                                        <img src={crunchyroll} alt="Crunchyroll" />
                                    </a>
                                    <a href="https://play.hbomax.com/show/37901cbf-ba0c-4a6d-9f5f-f7def2e34a62" target='_blank'>
                                        <img src={hbomax} alt="HBOmax" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=nS0ico6na_U" target='_blank'>
                                    <img src={pokemon} alt="Pokémon: Indigo League" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>2 - Pokémon: Indigo League (1997)</h1>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://embed.release-stage.netflix.com/search?q=pokemon%20indigo%20league&jbv=70297439" target='_blank'>
                                        <img src={netflix} alt="Neftlix" />
                                    </a>
                                    <a href="https://www.primevideo.com/detail/Pok%C3%A9mon-the-Series/0GWVS8NQ60JX2JW01AJ7FZZFIH" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=22R0j8UKRzY" target='_blank'>
                                    <img src={narutoshippuden} alt="Pulp Fiction" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>3 - Naruto / Naruto: Shippuden (2007 - 2017) </h1>
                                {/* <span></span> */}
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.crunchyroll.com/pt-br/series/GYQ4MW246/naruto-shippuden" target='_blank'>
                                        <img src={crunchyroll} alt="Crunchyroll" />
                                    </a>
                                    <a href="https://www.netflix.com/title/80000603" target='_blank'>
                                        <img src={netflix} alt="Netflix" />
                                    </a>
                                    <a href="https://www.primevideo.com/detail/Naruto-Shippuden/0ISLEJE0SYLJ721266RFP6FWGA" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 4 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="" target='_blank'>
                                    <img src={dragonballz} alt="Dragon Ball Z" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>4 - Dragon Ball Z (1989 – 1996)</h1>
                                {/* <span></span> */}
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.crunchyroll.com/pt-br/series/G9VHN9PPW/dragon-ball-z" target='_blank'>
                                        <img src={crunchyroll} alt="Crunchyroll" />
                                    </a>
                                    <a href="https://www.primevideo.com/-/pt/detail/Dragon-Ball-Z/0TRO4DHORIMNWHPHII7IHCGFJ9" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 5 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=LV-nazLVmgo" target='_blank'>
                                    <img src={atackontitan} alt="Attack on Titan" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>5 - Attack on Titan (Shingeki no Kyojin) (2013 – 2023)</h1>
                                {/* <span>⭐ 9,1</span> */}
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.crunchyroll.com/pt-br/series/GR751KNZY/attack-on-titan" target='_blank'>
                                        <img src={crunchyroll} alt="Crunchyroll" />
                                    </a>
                                    <a href="https://www.primevideo.com/detail/Attack-on-Titan/0NLTGUZQHA4YXRGRROASC155Q3?utm_source=chatgpt.com" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                    <a href="https://tv.apple.com/br/show/attack-on-titan/umc.cmc.1o8bhtjzw43b5sxvfr1g2qc5" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 6 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=VQGCKyvzIM4" target='_blank'>
                                    <img src={demonslayer} alt="Cowboy Bebop" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>6 -  Demon Slayer (2019)</h1>
                                {/* <span>⭐ 8,9</span> */}
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.crunchyroll.com/pt-br/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba" target='_blank'>
                                        <img src={crunchyroll} alt="Crunchyroll" />
                                    </a>
                                    <a href="https://www.netflix.com/search?q=demon%20slayer&jbv=81091393" target='_blank'>
                                        <img src={netflix} alt="Netflix" />
                                    </a>
                                    <a href="https://www.primevideo.com/detail/Demon-Slayer-Kimetsu-no-Yaiba/0LB2ZHJCH603GVH3PVIZIM1PKE?utm_source=chatgpt.com" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 7 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=pkKu9hLT-t8" target='_blank'>
                                    <img src={jujutsu} alt="Jujutsu Kaisen" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>7 - Jujutsu Kaisen (2020)</h1>
                                {/* <span>⭐ 8,8</span> */}
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.primevideo.com/detail/Jujutsu-Kaisen/0PZTL2X337IHAIOJP295PF3AKM" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                    <a href="https://www.crunchyroll.com/pt-br/series/GRDV0019R/jujutsu-kaisen" target='_blank'>
                                        <img src={crunchyroll} alt="Crunchyroll" />
                                    </a>
                                    <a href="https://www.netflix.com/br/title/81278456?utm_source=chatgpt.com" target='_blank'>
                                        <img src={netflix} alt="Netflix" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 8 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=EPVkcwyLQQ8" target='_blank'>
                                    <img src={heroacademia} alt="My Hero Academia" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>8 - My Hero Academia (2016)</h1>
                                {/* <span>⭐ 8,8</span> */}
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.crunchyroll.com/pt-br/series/G6NQ5DWZ6/my-hero-academia" target='_blank'>
                                        <img src={crunchyroll} alt="Crunchyroll" />
                                    </a>
                                    <a href="https://www.netflix.com/br/title/80135674" target='_blank'>
                                        <img src={netflix} alt="Netflix" />
                                    </a>
                                    <a href="https://www.primevideo.com/detail/Jujutsu-Kaisen/0PZTL2X337IHAIOJP295PF3AKM" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 9 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=NlJZ-YgAt-c" target='_blank'>
                                    <img src={deathnote} alt="Death Note" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>9 - Death Note (2006 – 2007)</h1>
                                {/* <span>⭐ 8,9</span> */}
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.netflix.com/title/70204970" target='_blank'>
                                        <img src={netflix} alt="Neftlix" />
                                    </a>
                                    <a href="https://play.hbomax.com/show/fabd8a3d-dd29-4f94-bc46-55941b14eacf" target='_blank'>
                                        <img src={hbomax} alt="HBOmax" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 10 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=6ohYYtxfDCg" target='_blank'>
                                    <img src={swordart} alt="Sword Art Online" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>10 - Sword Art Online (2012)</h1>
                                {/* <span>⭐ 8,7</span> */}
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.crunchyroll.com/pt-br/series/GR49G9VP6/sword-art-online" target='_blank'>
                                        <img src={crunchyroll} alt="Crunchyroll" />
                                    </a>
                                    <a href="https://www.primevideo.com/detail/Sword-Art-Online/0IIF8SVX8AKV6QDVJBHQF9R0NM?utm_source=chatgpt.com" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                    <a href="https://www.netflix.com/br/title/70302573?utm_source=chatgpt.com" target='_blank'>
                                        <img src={netflix} alt="Netflix" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Botão seta direita */}
                    <button className="seta seta-direita" onClick={() => rolarAnimesPopulares('direita')}>
                        ❯
                    </button>
                </section>


            </main>

            <footer>

            </footer>
        </>
    );
}

export default Animes;