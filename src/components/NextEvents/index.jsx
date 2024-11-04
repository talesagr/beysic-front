import './nextEvents.css';
import Cards from "../Cards";
import { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { PiFilmSlateDuotone } from "react-icons/pi";
import { BsMusicNoteList } from "react-icons/bs";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { GiPumpkinMask } from "react-icons/gi";
import { FaMasksTheater } from "react-icons/fa6";
import { SiF1 } from "react-icons/si";

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
                const response = await fetch('http://localhost:3001/ticket/categories');
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
                <section>
                    <div className='category-events'>
                        <button onClick={() => navigate(`/event?category=${categories.at(0)}`)}>
                            <div className='cat-circle'>
                                <i><PiFilmSlateDuotone/></i>
                            </div>
                        </button>
                        <button onClick={() => navigate(`/event?category=${categories.at(1)}`)}>
                            <div className='cat-circle'>
                                <i><BsMusicNoteList/></i>
                            </div>
                        </button>
                        <button onClick={() => navigate(`/event?category=${categories.at(2)}`)}>
                            <div className='cat-circle'>
                                <i><MdOutlineSportsBasketball/></i>
                            </div>
                        </button>
                        <button onClick={() => navigate(`/event?category=${categories.at(3)}`)}>
                            <div className='cat-circle'>
                                <i><GiPumpkinMask/></i>
                            </div>
                        </button>
                        <button onClick={() => navigate(`/event?category=${categories.at(4)}`)}>
                            <div className='cat-circle'>
                                <i><FaMasksTheater/></i>
                            </div>
                        </button>
                        <button onClick={() => navigate(`/event?category=${categories.at(5)}`)}>
                            <div className='cat-circle'>
                                <i><SiF1/></i>
                            </div>
                        </button>
                    </div>
                </section>
            </>
        )
    );
}

export default NextEvents;
