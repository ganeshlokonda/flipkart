
// import { useState } from 'react';
import './App.css';
import FHEADER from './FHEADER';
import Products from './Products';
import Banner from './banner';
import Rose from './Rose'
import Tulip from './Tulip';
// import Header from './Header'
// import Products from './Products';
function App() {
  // let[name,setName]=useState()
  // function doSomething(e)
  // {
  //   console.log(e)
  // }
 let url1="https://thumbs.dreamstime.com/b/purple-petunia-flowers-bed-beautiful-blurred-nature-background-banner-website-garden-concept-toned-54798543.jpg"
 let url2="https://midwestfarmersmarkets.org/wp-content/uploads/bfi_thumb/Flower-Banner-1-plv6g71u4rup9m9eeo4y78k88oebose2wy2qs7ilyw.jpg"
  return (
    <div className="App">
      {/* <p>{name}</p>
      <input type='text' placeholder='enter name' onChange={(event)=>{
        setName(event.target.value)
      }}/>
      <p>age</p>
      <input type='number' placeholder='age' onChange={(event)=>
      {
        console.log(event.target.value)
      }}/>
      <h1>welcome everyone</h1> */}
      {/* <button onClick={(e)=>
        {
          doSomething(e)
        }}>click</button>
       */}
        {/* <Header/>
        <Products/>
        <Products/>
        <Products/> */}
    <FHEADER></FHEADER>
    <Products></Products>
     <Banner url={url1}></Banner>
     <Rose></Rose>
     <Products></Products>
    <Tulip></Tulip>
    <Rose></Rose>
    <Banner url={url2}></Banner>
    <Products></Products>
    <Rose></Rose>
    </div>
  );
}

export default App;
