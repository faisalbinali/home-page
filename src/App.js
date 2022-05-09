import "./App.css";
import products from "./products";
import Home from "./comp/Home";
function Person(props) {
  return (
    <>
      <h1>{props.name} </h1>
      <h4>{props.price} </h4>
      <img src={props.Img} />
    </>
  );
}

function App() {
  const people = products.map((item) => (
    <Person name={item.name} price={item.price} Img={item.Img} />
  ));
  return <div>{people}</div>;
}

export default App;
