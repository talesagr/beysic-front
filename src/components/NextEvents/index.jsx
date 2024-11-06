import './nextEvents.css';
import Cards from "../Cards";
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PiFilmSlateDuotone } from "react-icons/pi";
import { BsMusicNoteList } from "react-icons/bs";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { GiPumpkinMask } from "react-icons/gi";
import { FaMasksTheater } from "react-icons/fa6";
import { SiF1 } from "react-icons/si";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { PiDesktopTowerBold } from "react-icons/pi";
import { IoFastFoodOutline } from "react-icons/io5";
import { LuTrees } from "react-icons/lu";


const NextEvents = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 4000);
    }, []);

    let cards = [
        {
            eventName: 'Pagodinho dos cria',
            eventDate: '29/08',
            houseName: 'Bocatto',
            description: 'Erechim, RS',
            backgroundImage: 'https://w.wallhaven.cc/full/9d/wallhaven-9dp3y1.jpg',
            id: 1
        },
        {
            eventName: 'Icaro e Gilmar',
            eventDate: '30/08',
            houseName: 'Veld',
            description: 'Erechim, RS',
            backgroundImage: 'https://w.wallhaven.cc/full/9d/wallhaven-9dp3y1.jpg',
            id: 2
        },
        {
            eventName: 'Encontro de carros',
            eventDate: '31/08',
            houseName: 'Posto Tradição',
            description: 'Erechim, RS',
            backgroundImage: 'https://w.wallhaven.cc/full/9d/wallhaven-9dp3y1.jpg',
            id: 3
        },
    ];

    let categories = [
        { id: "cinema", icon: <PiFilmSlateDuotone /> },
        { id: "festa", icon: <BsMusicNoteList /> },
        { id: "hallowen", icon: <GiPumpkinMask /> },
        { id: "esporte", icon: <MdOutlineSportsBasketball /> },
        { id: "teatro", icon: <FaMasksTheater /> },
        { id: "corrida", icon: <SiF1 /> },
        { id: "tecnologia", icon: <PiDesktopTowerBold />}, 
        { id: "gastronomia", icon: <IoFastFoodOutline />},
        { id: "natureza", icon: <LuTrees />}
    ];

    const navigate = useNavigate();

    return (
        isLoading ? (
            <div className="loader-container">
                <svg viewBox="0 0 400 160">
                    <text x="50%" y="50%" dy=".32rem" textAnchor="middle" className="text-body">
                        Beysic
                    </text>
                </svg>
            </div>
        ) : (
            <>
                {cards.length > 0 && (
                    <div className="nextEvents fade-in">
                        <div className="next-events-title">
                            <h2>Próximos Eventos</h2>
                            <div className='novo-evento'>
                                <Link to="/NewEventsForm">
                                    <button>Novo evento</button>
                                </Link>
                            </div>
                        </div>
                        <div className="display-cards">
                            {cards.map(card => (
                                <Link to={`/event/${card.id}`} key={card.id}>
                                    <Cards
                                        eventName={card.eventName}
                                        eventDate={card.eventDate}
                                        houseName={card.houseName}
                                        description={card.description}
                                        backgroundImage={card.backgroundImage}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
                <section className='section-category'>
                    <h1 className='title-category'>Categoria</h1>
                    <div className='swiper'>
                        <Swiper
                            slidesPerView={4}
                            pagination={{ clickable: true }}
                            navigation={{ clickable: true }}
                        >
                            {categories.map((cat) => (
                                <SwiperSlide key={cat.id}>
                                    <div className='category-events'>
                                        <button className='btn-category' onClick={() => navigate(`/event?category=${cat.id}`)}>
                                            {cat.icon}
                                        </button>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
                <section className='section-promoted'>
                    <h1 className='title-section-promoted'>Eventos promovidos pela Beysic</h1>
                    <Swiper className='swiper-promoted'
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        navigation
                    >
                        {cards.map((card) => (
                            <SwiperSlide key={card.id}>
                                <div className='container-promoted'>
                                    <div className='img-container-promoted'>
                                        <img src={card.backgroundImage} alt={card.eventName} />
                                    </div>
                                    <div className='inf-container-promoted'>
                                        <p>{card.eventName}: {card.description}</p>
                                        <div className='btn-container-promoted'>
                                            <Link to={`/event/${card.id}`}>
                                                <button>Adquirir</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
                <footer>
                    <div className='footer'>
                        <div className='container-payments'>
                        <h2>Formas de pagamentos</h2>
                        <div className='icons-pagaments'>
                            <img className='cartoes' src="https://wx.mlcdn.com.br/site/desk/footer/payment-types/elo.svg" ></img>
                            <img className='cartoes' src="https://wx.mlcdn.com.br/site/desk/footer/payment-types/hipercard.svg" ></img>
                            <img className='cartoes' src="https://wx.mlcdn.com.br/site/desk/footer/payment-types/mastercard.svg" ></img>
                            <img className='cartoes' src="https://wx.mlcdn.com.br/site/desk/footer/payment-types/visa.svg"></img>
                            <img className='cartoes' src="https://wx.mlcdn.com.br/site/desk/footer/payment-types/boleto.svg"></img>
                            <img className='cartoes' src="https://wx.mlcdn.com.br/site/desk/footer/payment-types/american-express.svg" ></img>
                            <img className='cartoes' src="https://logopng.com.br/logos/pix-106.svg"></img>
                        </div>
                        </div>
                        <div className='mark-and-icons'>
                            <p className='mark'>Beysic Soluções S.A. © Copyright 2024</p>
                            <div>
                            <i className='icons-footer'><FaLinkedin /></i>
                            <i className='icons-footer'><FaSquareGithub /></i>
                            <i className='icons-footer'><FaInstagramSquare /></i>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    );
};

export default NextEvents;
