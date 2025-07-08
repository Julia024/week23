import { useState } from "react"
import Arr from "./Arr"
import Card from "./Card"
import styles from "./card.module.css"

const CardContainer = () => {
    const [activeId, setActiveId] = useState("")

    const handleCardClick = (id) => {
        setActiveId(id);
    }

    return (
        <div className={styles.cardContainer} >
            {Arr.map((el) => (
                <Card
                key={el.id} 
                {...el}
                isActive = {el.id === activeId}
                onIdChange={() => handleCardClick(el.id)}
                />
            ))}
        </div>
    )
}
export default CardContainer