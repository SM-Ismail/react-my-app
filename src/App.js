import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: "Photoshop", price: "$99.90"},
    {name: "Illustrator", price: "$80.90"},
    {name: "PDF", price: "$6.90"}
  ]
    
  const person0 = {
    name : "Dr. Mahfuz",
    job : "Singer"
  }
  const person1 = {
    name: "Eva Rahman",
    job : "kokil konthi"
  }
  var style = {
    color: "salmon",
    backgroundColor: "cyan",
    border: "2px solid yellow",
    padding: "5px"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 style= {style}>Singer1: {person0.name +" "+ person0.job}</h1>
        <h2 style= {style}>Singer2: {person1.name+ ' '+ person1.job} </h2>
        <p>My first react experience</p>
        <div style={{display:"flex"}}>
          
          <Person name="sakib" job ="player"></Person>
          <Person name = "esha" job ="dancer" ></Person> 

        </div>
        <div style={{display:"flex"}}>
          { 
            products.map(pd => <Product product={pd}></Product>)
          } 
        </div> 
      </header>
    </div>
  );
}
function Product(props){
  const {name, price} = props.product;
  const productStyle = {
    border: "2px solid red",
    borderRadius: "10px",
    backgroundColor:"white",
    color:"red",
    margin:"20px",
    padding:"10px",
    width:"300px"
  }
  return(
    <div style={productStyle}>
      <h1>{name}</h1>
      <h3>{price}</h3>
      <button style={{border:"2px solid gold", borderRadius:"15px", margin:"20px", padding:"10px", height:"50px", width:"50%"}}>BUY NOW</button>
    </div>
  );
}
function Person(props){
  const personStyle={
    color: "tomato",
    border: "2px solid yellow",
    borderRadius: "5px",
    margin: "10px",
    padding: "10px",
    backgroundColor: "white",
    width: "400px",
  }
  
  return(
    <div style={personStyle}>
      <h1>Name : {props.name}</h1>
      <h3>profession: {props.job}</h3>
      <h2>Hero of the year</h2>
    </div>
  )
}

export default App;
