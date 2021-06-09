import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [users, setUsers] =useState([]);
  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=100`)
    .then(res => res.json())
    .then(data => setUsers(data.results))
    console.log(users);
   
  },[])
  
  var nayoks = [{name:"Alamgir", age:54},{name:"Badsha", age:34},{name:"Salman", age:20},{name:"Sakib",age:34},{name:"Rubel",age:43}]
  return (
    <div className="App">
       {
        users.map(user => <Users title={user.name.title} firstName={user.name.first} lastName={user.name.last} gender={user.gender} email={user.email} country={user.location.country} city={user.location.city} picture={user.picture.large} age={user.registered.age}></Users>)
      } 

      <Moviecounter></Moviecounter>
      {
        nayoks.map(nayok => <Nayok name={nayok.name} age={nayok.age}></Nayok>)
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

function Nayok(props){
  const nayokStyle = {
    border:"2px solid red",
    borderRadius:"5px",
    margin:"5px"
  }
  return <div style={nayokStyle}>
    <h1>Ami Nayok {props.name}</h1>
    <p>I have done 5 movies in {props.age} years</p>
  </div>
}

function Moviecounter(){
  const [count, setCount] = useState(0);
  // const handleIncrease = () => console.log("someone clicked me");
  return(
    <div>
      <button onClick={() => setCount(count+1)}>Add Movie</button>
      <h4>Number of Movie : {count}</h4>
      <Moviesdisplay movies={count}></Moviesdisplay>
      <Moviesdisplay movies={count+10}></Moviesdisplay>
      <Moviesdisplay movies={count+5}></Moviesdisplay>
    </div>
  )
}

function Moviesdisplay(props){
  return (
    <h4>Movies I have Acted :{props.movies} </h4>
  ) 
}

function Users(props){
  const userStyle = { 
    border:"1px solid purple",
    borderRadius:"10px",
    padding:"10px",
    backgroundColor:"cyan",
    
  }
  
  return(
    <div style={userStyle}>
      <div style={{backgroundColor:"purple",borderRadius:"10px",margin:"0 auto",padding:"10px",color:"cyan"}}>
      <h3>Name: {props.title} {props.firstName} {props.lastName} </h3>
      <h5>Gender: {props.gender} </h5>
      <h6>email: {props.email}</h6>
      <h5>Country: {props.country}</h5>
      <h5>City: {props.city}</h5>
      <img src={props.picture} alt="" />
        <h5>Age: {props.age}</h5>
      </div>
    </div>
  )
}

export default App;
