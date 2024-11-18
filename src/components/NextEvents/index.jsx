import './nextEvents.css';
import Cards from "../Cards";
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Footer} from "../Footer";


const NextEvents = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [cards, setCards] = useState([]);
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('http://localhost:3001/ticket');
                const data = await response.json();
                setCards(data);
            } catch (error) {
                console.error('Erro ao buscar eventos:', error);
            }
        };

        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:3001/ticket/category');
                console.log(response.body)
                // Verifique se a resposta está OK (status 200-299)
                if (!response.ok) {
                    throw new Error(`Erro: ${response.status} - ${response.statusText}`);
                }
                
                // Verifique se há conteúdo na resposta antes de converter para JSON
                const text = await response.text();
                const data = text ? JSON.parse(text) : [];  // Use um array vazio caso não haja dados
        
                setCategories(data);
            } catch (error) {
                console.error('Erro ao buscar categorias:', error);
            }
        };
        
        // Chamadas das funções
        fetchEvents();
        fetchCategories();
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);;
        
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
                        <Swiper className='swiper-cards-events'
                            slidesPerView={3}
                            loop={true}
                            pagination={{ clickable: true }}  
                        >
                            {cards.map(card => (
                                <SwiperSlide key={card.id}>
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
                <Footer />
            </>
        )
    );
};

export default NextEvents;
