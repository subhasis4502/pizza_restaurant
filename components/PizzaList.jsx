import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Story</h1>
      <p className={styles.desc}>
        Our product is standardised across the Nation, supported by a robust
        supply chain providing all the ingredients required to perfectly craft
        our Pizza. Our outlets are designed by leading architects to reflect our
        philosophy of being open and inviting, while putting our customer
        comfort on priority. Everywhere we go, we hear ‘Your pizza is the
        tastiest pizza around, why aren’t you open in my location’. The answer
        is simple, every outlet opened is a promise to our customer, and not one
        we take lightly.
      </p>
      <div className={styles.wrapper} id="products">
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
