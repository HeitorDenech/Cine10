               {/* --------------------CONTAINER DOS CLÁSSICOS---------------------- */}
                <div id="filmes">
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
                                <a href="https://www.youtube.com/watch?v=d9MyW72ELq0" target='_blank'>
                                    <img src={avataragua} alt="Avatar: O Caminho da Água" />
                                </a>
                            </div>
                            <div className='container-top-10-texto'>
                                <h1>3 - Avatar: O Caminho da Água (2022)</h1>
                                <span>US$ 2.320.250</span>
                                <p>Onde assistir</p>
                                <div className='img-assistir'>
                                    <a href="https://www.disneyplus.com/pt-br/browse/entity-e6ef640e-787e-4477-aba4-9e05925ebac2?utm_source=chatgpt.com" target='_blank'>
                                        <img src={disney} alt="Disney+" />
                                    </a>
                                    <a href="https://www.primevideo.com/-/pt/detail/Avatar-O-Caminho-Da-%C3%81gua/0R6MAB6Q360AL86YRENF5C0IF3?utm_source=chatgpt.com" target='_blank'>
                                        <img src={primevideo} alt="PrimeVideo" />
                                    </a>
                                    <a href="https://tv.apple.com/br/movie/avatar-the-way-of-water/umc.cmc.5k5xo2espahvd6kcswi2b5oe9" target='_blank'>
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

                <div>
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
                                    <img src={oretornodorei} alt="O Senhor dos Anéis: O Retorno do Rei" />
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
                                    <a href="https://tv.apple.com/br/movie/o-paciente-ingles/umc.cmc.61v7tb5a7940pr2qo1fuhdirf" target='_blank'>
                                        <img src={appletv} alt="AppleTV" />
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

                <div>
                    <h1 id='top-10-h1'>Os 10 melhores filmes (IMDb)</h1>
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

                {/* -------------------CARROUSEL-VER-SERIES----------------------- */}

                <section className='container-series'>
                    <div className='container-series-absolute'>
                        <div className='container-series-btn'>
                            <a href="#series">
                                <button id='btn-1'>Ver séries</button>
                            </a>
                        </div>
                    </div>

                    <div className='container-series-img'>
                        {/* imagem normal (desktop) */}
                        <img
                            src={imagensPrincipal[indicePrincipal]}
                            alt='Slide principal'
                            className={`img-desktop ${animacao}`}
                        />

                        {/* imagem versão mobile */}
                        <img
                            src={imagensPrincipalMobile[indicePrincipal]}
                            alt='Slide principal mobile'
                            className={`img-mobile ${animacao}`}
                        />
                    </div>
                </section>


                {/* --------------------CONTAINER DOS ANIMES MAIS AVALIADOS---------------------- */}

                <div id="animes">
                    <h1 id='top-10-h1'>Os 10 melhores animes (IMDb)</h1>
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

                {/* -------------------CARROUSEL-VER-DESENHOS----------------------- */}

                <section className='container-series'>
                    <div className='container-series-absolute'>
                        <div className='container-series-btn'>
                            <a href="#desenhos">
                                <button id='btn-1'>Ver desenhos</button>
                            </a>
                        </div>
                    </div>

                    <div className='container-series-img'>
                        {/* imagem normal (desktop) */}
                        <img
                            src={imagensPrincipalDesenho[indicePrincipal]}
                            alt='Slide principal'
                            className={`img-desktop ${animacao}`}
                        />

                        {/* imagem versão mobile */}
                        <img
                            src={imagensPrincipalMobileDesenho[indicePrincipal]}
                            alt='Slide principal mobile'
                            className={`img-mobile ${animacao}`}
                        />
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
