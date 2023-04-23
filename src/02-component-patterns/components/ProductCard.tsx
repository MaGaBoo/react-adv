import useProducts from "../hooks/useProducts";
import styles from "../styles/styles.module.css"

export const ProductCard = () => {


  const { counter, increaseBy } = useProducts()

  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImg}
        src="/coffee-mug.png"
        alt="Coffee mug"
      />
      <span className={styles.productDescription}>Coffee Mug</span>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
          +
        </button>
      </div>
    </div>
  );
};
