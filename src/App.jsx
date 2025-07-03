import './App.css'
import Card from './assets/components/Card'
import Arr from './assets/components/Arr'
import styles from './assets/components/card.module.css'

function App() {
  return (
    <>
      <div className={styles.cardContainer} >
        {Arr.map((el) => (
        <Card
        key={el.id} 
        {...el}
        />
        ))}
      </div>
    </>
  );
}

export default App
