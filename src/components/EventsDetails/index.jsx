import { Link } from 'react-router-dom';
import './eventsdetails.css'

const EventsDetails = () => {
    return (
        <>
            <div className='image-container'>
                <img src={"https://www.designi.com.br/images/preview/11807908.jpg"} alt={'name'}></img>
            </div>
            <div className='background-text'>
                <p>
                    Prepare-se para uma noite inesquecível na Festa Tropical Sunset! Em um ambiente vibrante e cheio de cores, celebraremos o melhor do verão com música contagiante, drinks refrescantes e uma decoração que transporta você diretamente para uma ilha paradisíaca. Vista-se com suas roupas mais leves e floridas, e venha dançar ao som dos melhores DJs da cena, que trarão ritmos tropicais para animar a pista de dança. Traga seus amigos e sua melhor energia, e venha curtir uma noite onde o pôr do sol será apenas o começo da diversão!
                </p>
            </div>
            <div className='backgorunt-ticket'>

            </div>
        </>
    )
}
export default EventsDetails