import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Desenhos.css';
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

// --------------CARROSSEL-VER-DESENHOS-----------------

import httyd from '../../assets/httyd.jpg'
import walle from '../../assets/walle.webp'
import up from '../../assets/up.jpg'
import toystore from '../../assets/toystore.jpg'
import avataraang from '../../assets/avataraang.jpg'

// --------------CARROSSEL-VER-DESENHOS-MOBILE-----------------

import httydmobile from '../../assets/httydmobile.jpg'
import wallemobile from '../../assets/wallemobile.webp'
import upmobile from '../../assets/upmobile.jpg'
import toystoremobile from '../../assets/toystoremobile.jpg'
import avataraangmobile from '../../assets/avataraangmobile.jpg'

// --------------DESENHOS-FILMES-IMDB--------------------

import spiritedaway from '../../assets/spiritedaway.avif'
import oreileao from '../../assets/oreileao.webp'
import tumulodosvagalumes from '../../assets/tumulodosvagalumes.webp'
import coco from '../../assets/coco.jpeg'
import noaranhaverso from '../../assets/noaranhaverso.webp'
import toystore1 from '../../assets/toystore1.webp'
import toystory3 from '../../assets/toystory3.webp'
import princessmononoke from '../../assets/princessmononoke.webp'

// ----------DESENHOS-SERIES-IMDB-----------------

import avataroultimomestredoar from '../../assets/avataroultimomestredoar.webp'
import rickandmorty from '../../assets/rickandmorty.webp'
import batman from '../../assets/batman.webp'
import arcane from '../../assets/arcane.jpg'
import gravityfalls from '../../assets/gravityfalls.webp'
import overgarden from '../../assets/overgarden.jpg'
import bojack from '../../assets/bojack.jpg'
import youngjustice from '../../assets/youngjustice.jpg'
import samuraijack from '../../assets/samuraijack.webp'
import simpsons from '../../assets/simpsons.webp'

function Desenhos() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [mostrarPesquisa, setMostrarPesquisa] = useState(false);

    const togglePesquisa = () => {
        setMostrarPesquisa(!mostrarPesquisa);
    };

    const carrosselDesenhosFilmesImdbRef = useRef(null);
    const carrosselDesenhosSeriesImdbRef = useRef(null);


    const [indicePrincipal, setIndicePrincipal] = useState(0);
    const [animacao, setAnimacao] = useState('fade-in');

    const imagensPrincipalDesenhos = [httyd, walle, up, toystore, avataraang]
    const imagensPrincipalMobileDesenhos = [httydmobile, wallemobile, upmobile, toystory3, avataraangmobile]

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
                setIndicePrincipal((prev) => (prev + 1) % imagensPrincipalDesenhos.length);
                setAnimacao('fade-in');
            }, 800);
        }, 7000);

        return () => clearInterval(intervalo);
    }, [imagensPrincipalDesenhos.length]);

    // ----------------DESENHOS-FILMES-IMDB--------------

    const rolarDesenhosFilmesImdb = (direcao) => {
        const largura = carrosselDesenhosFilmesImdbRef.current.clientWidth;
        carrosselDesenhosFilmesImdbRef.current.scrollBy({
            left: direcao === 'esquerda' ? -largura : largura,
            behavior: 'smooth',
        });
    };

    // ----------------DESENHOS-SERIES-IMDB--------------

    const rolarDesenhosSeriesImdb = (direcao) => {
        const largura = carrosselDesenhosSeriesImdbRef.current.clientWidth;
        carrosselDesenhosSeriesImdbRef.current.scrollBy({
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
                        <Link to="/Series">
                            Séries
                        </Link>
                        <Link to="/Desenhos" id='desenhos-text'>
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
                        <Link to="/Series">
                            <button>Séries</button>
                        </Link>
                        <Link to="/Desenhos" id='desenhos-text'>
                            <button>Desenhos</button>
                        </Link>
                    </div>
                </section>


                {/* //------------------CONTAINER-DESENHOS------------------ */}

                <section className='container-series' id="container-1">
                    <div className='container-series-absolute'>
                        <div className='container-series-btn'>
                            <a href="#desenhos">
                                {/* <button id='btn-1'>Ver desenhos</button> */}
                            </a>
                        </div>
                    </div>

                    <div className='container-series-img'>
                        {/* imagem normal (desktop) */}
                        <img
                            src={imagensPrincipalDesenhos[indicePrincipal]}
                            alt='Slide principal'
                            className={`img-desktop ${animacao}`}
                        />

                        {/* imagem versão mobile */}
                        <img
                            src={imagensPrincipalMobileDesenhos[indicePrincipal]}
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

                {/* --------------------CONTAINER DOS MELHORES DESENHOS---------------------- */}

                <div id="desenhos">
                    <h1 id='top-10-h1'>Os 10 melhores desenhos ( IMDb - filmes)</h1>
                </div>

                <section className="container-top-10-principal">
                    {/* Botão seta esquerda */}
                    <button className="seta seta-esquerda" onClick={() => rolarDesenhosFilmesImdb('esquerda')}>
                        ❮
                    </button>

                    {/* Carrossel com TODOS os cards dentro */}
                    <div className="carrossel-top-10" ref={carrosselDesenhosFilmesImdbRef}>

                        {/* CARD 1 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=ByXuk9QqQkk" target='_blank'>
                                    <img src={spiritedaway} alt="A Viagem de Chihiro" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>1 - A Viagem de Chihiro (2001)</h1>
                                <span>⭐ 8,6</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.netflix.com/title/60023642" target='_blank'>
                                        <img src={netflix} alt="Netflix" />
                                    </a>
                                    <a href="https://tv.apple.com/pt/movie/a-viagem-de-chihiro/umc.cmc.20eiqqikjqp0aibugjcx9s41p" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=rHiHRhbTv-Q" target='_blank'>
                                    <img src={oreileao} alt="O Rei Leão" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>2 - O Rei Leão (1994)</h1>
                                <span>⭐ 8,5</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.disneyplus.com/pt-br/browse/entity-a3ae7371-39a5-4c0b-a1f2-29a70b372848?utm_source=chatgpt.com" target='_blank'>
                                        <img src={disney} alt="Disney+" />
                                    </a>
                                    <a href="https://tv.apple.com/br/movie/o-rei-leao/umc.cmc.hzw12vgjjoz0tf0jn5m0x8i4" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=tC0Ug7sY0wE&t=13s" target='_blank'>
                                    <img src={tumulodosvagalumes} alt="Chernobyl" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>3 - Túmulo dos Vagalumes (1988)</h1>
                                <span>⭐ 8,5</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.netflix.com/title/557010" target='_blank'>
                                        <img src={netflix} alt="Netflix" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 4 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=CZ1CATNbXg0&t=1s" target='_blank'>
                                    <img src={wallemobile} alt="WALL·E" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>4 - WALL·E (2008)</h1>
                                <span>⭐ 8,4</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.disneyplus.com/pt-br/browse/entity-280395a4-d5ef-4dd0-bd09-d91c31593d3d?utm_source=chatgpt.com" target='_blank'>
                                        <img src={disney} alt="Disney+" />
                                    </a>
                                    <a href="https://tv.apple.com/br/movie/wall-e/umc.cmc.4hey5l45tegyvjbr84vuihdqf" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                    <a href="https://www.amazon.com/WALL-4K-UHD-Ben-Burtt/dp/B003QTSMXE?utm_source=chatgpt.com" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 5 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=Rvr68u6k5sI" target='_blank'>
                                    <img src={coco} alt="Coco" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>5 - Coco (2017)</h1>
                                <span>⭐ 8,4</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.disneyplus.com/pt-br/browse/entity-ce1ccdca-f468-4960-b67c-026b01ba42ab?msockid=072cab61222b6f0d04a4bd3223aa6e72" target='_blank'>
                                        <img src={disney} alt="Disney+" />
                                    </a>
                                    <a href="https://www.primevideo.com/-/pt/detail/Coco-Theatrical-Version/0KAFM79I4O8BYHNF7NM1K9EJRL" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                    <a href="https://tv.apple.com/pt/movie/coco/umc.cmc.5y1554je00oslx5xtkxv9uk7s" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 6 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=SS6ABPkfmBE" target='_blank'>
                                    <img src={noaranhaverso} alt="Homem-Aranha no Aranhaverso" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>6 - Homem-Aranha no Aranhaverso (2018)</h1>
                                <span>⭐ 8,4</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.netflix.com/search?q=homem%20aranha&jbv=81002747" target='_blank'>
                                        <img src={netflix} alt="Netflix" />
                                    </a>
                                    <a href="https://tv.apple.com/br/movie/homem-aranha-atraves-do-aranhaverso/umc.cmc.2zphwshxw2ejh2znevhod0u01" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 7 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=guuITAMh2eo" target='_blank'>
                                    <img src={toystore1} alt="ToyStory" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>7 - Toy Story (1995)</h1>
                                <span>⭐ 8,3</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.disneyplus.com/pt-br/browse/entity-f6174ebf-cb92-453c-a52b-62bb3576e402?msockid=072cab61222b6f0d04a4bd3223aa6e72" target='_blank'>
                                        <img src={disney} alt="Disney+" />
                                    </a>
                                    <a href="https://tv.apple.com/br/movie/toy-story/umc.cmc.qrdx9s4xrk47f4taowt4tx82" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 8 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=ODanPYf1VLI" target='_blank'>
                                    <img src={upmobile} alt="Up - Altas Aventuras" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>8 - Up - Altas Aventuras (2009)</h1>
                                <span>⭐ 8,3</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.disneyplus.com/pt-br/browse/entity-f820c0a3-e646-4b75-8dd1-87f6d776c32b?msockid=072cab61222b6f0d04a4bd3223aa6e72" target='_blank'>
                                        <img src={disney} alt="Disney+" />
                                    </a>
                                    <a href="https://tv.apple.com/br/movie/up---altas-aventuras/umc.cmc.7hyl1e1p1ihe8aiij3fzjwwyc" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                    <a href="https://www.primevideo.com/-/pt/detail/Up/0KIU948OY9VO8VMM4DJ5GFL95J" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 9 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=2BlMNH1QTeE" target='_blank'>
                                    <img src={toystory3} alt="ToyStory3" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>9 - Toy Story3 (2010)</h1>
                                <span>⭐ 8,3</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.disneyplus.com/pt-br/browse/entity-95e7b2ce-5f45-4923-976d-b7e9968a7357?msockid=072cab61222b6f0d04a4bd3223aa6e72" target='_blank'>
                                        <img src={disney} alt="Disney+" />
                                    </a>
                                    <a href="https://tv.apple.com/br/movie/toy-story-3/umc.cmc.5eyei47zjeao0u3wdwn5lv93c" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                    <a href="https://www.primevideo.com/-/pt/detail/Toy-Story-3/0TRGH0LG7XG9RO8PU5JAX4YYYH" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 10 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=4OiMOHRDs14" target='_blank'>
                                    <img src={princessmononoke} alt="Princesa Mononoke" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>10 - Princesa Mononoke (1997)</h1>
                                <span>⭐ 8,3</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www3.stage.netflix.com/title/28630857" target='_blank'>
                                        <img src={netflix} alt="Netflix" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Botão seta direita */}
                    <button className="seta seta-direita" onClick={() => rolarDesenhosFilmesImdb('direita')}>
                        ❯
                    </button>
                </section>

                {/* --------------------CONTAINER DOS MELHORES DESENHOS---------------------- */}

                <div id="desenhos">
                    <h1 id='top-10-h1'>Os 10 melhores desenhos ( IMDb - séries)</h1>
                </div>

                <section className="container-top-10-principal">
                    {/* Botão seta esquerda */}
                    <button className="seta seta-esquerda" onClick={() => rolarDesenhosSeriesImdb('esquerda')}>
                        ❮
                    </button>

                    {/* Carrossel com TODOS os cards dentro */}
                    <div className="carrossel-top-10" ref={carrosselDesenhosSeriesImdbRef}>

                        {/* CARD 1 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=ooVvH2IYz0w" target='_blank'>
                                    <img src={avataroultimomestredoar} alt="Avatar: O último Mestre do Ar" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>1 - Avatar: O último Mestre do Ar (2005)</h1>
                                <span>⭐ 9,3</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www2.stage.netflix.com/search?q=avatar&jbv=70142405" target='_blank'>
                                        <img src={netflix} alt="Netflix" />
                                    </a>
                                    <a href="https://tv.apple.com/br/show/avatar-a-lenda-de-aang/umc.cmc.4d38ljozi439j6g8e5m5o2bv5" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                    <a href="https://www.paramountplus.com/br/shows/avatar-the-last-airbender/?msockid=072cab61222b6f0d04a4bd3223aa6e72" target='_blank'>
                                        <img src={paramount} alt="Paramount" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=8BEzj2kRjO8" target='_blank'>
                                    <img src={rickandmorty} alt="Rick and Morty" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>2 - Rick and Morty (2013)</h1>
                                <span>⭐ 9,0</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.netflix.com/title/80014749" target='_blank'>
                                        <img src={netflix} alt="Netflix" />
                                    </a>
                                    <a href="https://tv.apple.com/br/show/rick-e-morty/umc.cmc.12dp30hnvyq5fbm9716puu8zc" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=lUWttg8aA9I" target='_blank'>
                                    <img src={batman} alt="Batman: The Animated Series" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>3 - Batman: The Animated Series (1992)</h1>
                                <span>⭐ 9,0</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.netflix.com/title/70177020" target='_blank'>
                                        <img src={netflix} alt="Netflix" />
                                    </a>
                                    <a href="https://tv.apple.com/br/show/batman---a-serie-animada/umc.cmc.5qpswnlscrdyx4c0skqn21qr2" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                    <a href="https://www.hbomax.com/br/pt/lapsed" target='_blank'>
                                        <img src={hbomax} alt="Hbomax" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 4 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=fXmAurh012s" target='_blank'>
                                    <img src={arcane} alt="Arcane" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>4 - Arcane (2021)</h1>
                                <span>⭐ 9,0</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.netflix.com/title/81435684" target='_blank'>
                                        <img src={netflix} alt="Netflix" />
                                    </a>
                                    <a href="https://tv.apple.com/br/show/arcane/umc.cmc.7kcsd1f20wzzisdvehyth23l" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                    <a href="https://www.primevideo.com/-/pt/detail/Arcane-League-Of-Legends/0Q7IWK21F2RWHFGF6585Z10AZP" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 5 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=yfUDIPUETUg" target='_blank'>
                                    <img src={gravityfalls} alt="Gravity Falls" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>5 - Gravity Falls (2012)</h1>
                                <span>⭐ 8,9</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.disneyplus.com/pt-br/browse/entity-9995dda1-d70a-4d15-98ba-72f1d10fa406?msockid=072cab61222b6f0d04a4bd3223aa6e72" target='_blank'>
                                        <img src={disney} alt="Disney" />
                                    </a>
                                    <a href="https://tv.apple.com/br/show/gravity-falls-um-verao-de-misterios/umc.cmc.5v88dhyt9l9tinygyheo3vbco" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                    <a href="https://www.primevideo.com/-/pt/detail/Gravity-Falls/0TISNNJDI636AP8FB2I1TJ98JZ" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 6 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=i1eJMig5Ik4" target='_blank'>
                                    <img src={bojack} alt="BoJack Horseman" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>6 - BoJack Horseman (2014)</h1>
                                <span>⭐ 8,8</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.netflix.com/title/70300800" target='_blank'>
                                        <img src={netflix} alt="Netflix" />
                                    </a>
                                    <a href="https://tv.apple.com/br/show/bojack-horseman/umc.cmc.56tqn5n418wvqeolgp83kvv21" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 7 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=36mAsVSH_-s" target='_blank'>
                                    <img src={overgarden} alt="Over the Garden Wall" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>7 - Over the Garden Wall (2014)</h1>
                                <span>⭐ 8,7</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.primevideo.com/-/pt/detail/Over-the-Garden-Wall/0O2PTZWJHSSPIJQ56OAD40D8AH" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                    <a href="https://tv.apple.com/br/show/over-the-garden-wall/umc.cmc.410w5085kvgoshzsilbm3gyu6?l=en" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                    <a href="https://www.hbomax.com/br/pt/lapsed" target='_blank'>
                                        <img src={hbomax} alt="Hbomax" />
                                    </a>
                                </div>
                            </div>
                        </div>


                        {/* CARD 8 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=SqBTQtwWMDE" target='_blank'>
                                    <img src={youngjustice} alt="Young Justice" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>8 - Young Justice (2010)</h1>
                                <span>⭐ 8,6</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www2.stage.netflix.com/title/70185194" target='_blank'>
                                        <img src={netflix} alt="Netflix" />
                                    </a>
                                    <a href="https://tv.apple.com/br/show/justica-jovem/umc.cmc.40rz24v9jtyfs5v0kw3temv3l" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                    <a href="https://play.hbomax.com/show/272b461c-49d4-4df3-9eb6-28bee0ebec47" target='_blank'>
                                        <img src={hbomax} alt="Hbomax" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 9 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=_jgYEYERYFQ" target='_blank'>
                                    <img src={simpsons} alt="Simpsons" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>9 - The Simpsons (1989)</h1>
                                <span>⭐ 8,6</span>
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

                        {/* CARD 10 */}
                        <div className='container-top-10'>
                            <div className='container-top-10-imagem'>
                                <a href="https://www.youtube.com/watch?v=sBlh6g0X5wA" target='_blank'>
                                    <img src={samuraijack} alt="Samurai Jack" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>10 - Samurai Jack (2001)</h1>
                                <span>⭐ 8,5</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.hbomax.com/br/pt/lapsed" target='_blank'>
                                        <img src={hbomax} alt="Hbomax" />
                                    </a>
                                    <a href="https://www.primevideo.com/-/pt/detail/Samurai-Jack/0FTIJ3S9HHTR4CFWKD75WWS7ZK" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                    <a href="https://tv.apple.com/br/show/samurai-jack/umc.cmc.3672mfstbnm9m2w4vd1ub6v6l" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Botão seta direita */}
                    <button className="seta seta-direita" onClick={() => rolarDesenhosSeriesImdb('direita')}>
                        ❯
                    </button>
                </section>

            </main>

            <footer>

            </footer>
        </>
    );
}

export default Desenhos;