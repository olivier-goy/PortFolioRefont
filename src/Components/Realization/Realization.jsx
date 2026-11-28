import CarouselProject from "../Carousel/CarouselProject/CarouselProject";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./Realization.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Realization({realizations}) {

    return (
        <div className="realization">
            <h2>
                <FontAwesomeIcon icon={faCode} className="realizationIconCode"/>
                Mes réalisations
            </h2>
            <p className="realizationDescription">Quelques projets concrets réalisés lors de mes formations et en autonomie.</p>
            <CarouselProject realizations={realizations}/>
        </div>
    )

}

export default Realization;