import './nextEvents.css';
import Cards from "../Cards";
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Footer } from "../Footer";
import { categoryIcons } from "../../constants/category";

const NextEvents = () => {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [cards, setCards] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('http://localhost:3001/ticket');
                const data = await response.json();
                console.log(data)
                setCards(data);
            } catch (error) {
                console.error('Erro ao buscar eventos:', error);
            }
        };

        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:3001/ticket/category');
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Erro ao buscar categorias:', error);
            }
        };

        fetchEvents();
        fetchCategories();
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

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
                            <Swiper
                                className="swiper-container"
                                slidesPerView={3}
                                loop={true}
                                pagination={{clickable: true}}
                                navigation={{clickable: true}}
                                spaceBetween={30}
                            >
                                {cards.map((card, index) => (
                                    <SwiperSlide key={card.id || `card-${index}`}>
                                        <Link to={`/event/${card.id}`}>
                                            <Cards
                                                eventName={card.eventName}
                                                eventDate={card.eventDate}
                                                houseName={card.houseName}
                                                description={card.description}
                                                backgroundImage={card.backgroundImage}
                                            />
                                        </Link>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                )}
                    <section className='section-category'>
                        <h1 className='title-category'>Categoria</h1>
                        <div className='swiper-category'>
                            <Swiper
                                slidesPerView={4}
                                pagination={{clickable: true}}
                                navigation={{clickable: true}}
                            >
                                {categories.map((cat, index) => (
                                    <SwiperSlide key={cat.id || `cat-${index}`}>
                                        <div className='category-events'>
                                            <button
                                                className='btn-category'
                                                onClick={() => navigate(`/ticket/category/${cat.name}`)}
                                            >
                                                {categoryIcons[cat.name] || '?'}
                                            </button>
                                            <p className='category-text'>{cat.name}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </section>
                    <section className='section-promoted'>
                        <h1 className='title-section-promoted'>Eventos promovidos pela Beysic</h1>
                        {cards.length > 0 ? (
                            <Swiper
                                className="swiper-container"
                                slidesPerView={2}
                                loop={true}
                                pagination={{clickable: true}}
                                navigation={{clickable: true}}
                                spaceBetween={20}
                            >
                                {cards.map((card, index) => (
                                    <SwiperSlide key={card.id || `promoted-${index}`}>
                                        <div className="container-promoted">
                                            <div className="inf-container-promoted">
                                                <Cards
                                                    eventName={card.eventName}
                                                    eventDate={card.eventDate}
                                                    houseName={card.houseName}
                                                    description={card.description}
                                                    backgroundImage={card.backgroundImage}
                                                />
                                                <div className="btn-container-promoted">
                                                    <Link to={`/event/${card.id}`}>
                                                        <button>Adquirir</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ) : (
                            <p>Nenhum evento promovido disponível no momento.</p>
                        )}
                    </section>
                    <Footer />
            </>
        )
    );
};

export default NextEvents;
