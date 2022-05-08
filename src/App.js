import "./App.css";
import products from "./products";
function Person(props) {
  return (
    <>
      <h1>{props.name} </h1>
      <h1>{props.price} </h1>
    </>
  );
}

function App() {
  const people = products.map((item) => (
    <Person name={item.name} price={item.price} />
  ));
  return <div>{people}</div>;
}

export default App;
