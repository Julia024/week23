
import styles from "./card.module.css"

const Card = ({
    header, 
    number, 
    speed, 
    info, 
    color, 
    colorLight,
    isActive,
    onIdChange,
}) => {

    const headerStyle = `${styles.header} ${styles[color]}`
    const priceStyle = `${styles.price} ${styles[colorLight]}`
    
    const cardStyle = `${styles.card} ${isActive? `${styles.active}` : "" }`;

    return (
        <div className={cardStyle} onClick={onIdChange} > 
            <h4 className={headerStyle} >{header}</h4>
            <div className={priceStyle} >
                <span className={styles.upper}>руб</span>
                <span className={styles.number}>{number}</span>
                <span className={styles.down}>/мес</span>
            </div>
            <p className={styles.speed} >{speed}</p>
            <p className={styles.info} >{info}</p>

            {isActive 
            ? <button className={styles.btn}>Выбрать</button>
            : null}
        </div>
    );
};

export default Card