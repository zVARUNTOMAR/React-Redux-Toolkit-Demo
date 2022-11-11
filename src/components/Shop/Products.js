import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "test 1",
    title: "My first Book",
    description: "this first book I ever wrote",
    price: 3,
  },
  {
    id: "p2",
    name: "test 2",
    title: "My second Book",
    description: "this second book I ever wrote",
    price: 4,
  },
  {
    id: "p3",
    name: "test 3",
    title: "My third Book",
    description: "this third book I ever wrote",
    price: 8,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            title={product.title}
            price={product.price}
            description={product.description}
            key={product.id}
            id={product.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
