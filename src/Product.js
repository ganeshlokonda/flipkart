import { useState } from "react";
import { useEffect } from "react";

// import { useState } from "react"
function Product(props)
{
    // let [name,setName]=useState("ganesh")
    // function changeData()
    // {
    //     setName("thor")
    //     console.log(name)
    // }
    // let[isAvailable,setIsAvailable]=useState("yes")
    // function setAvailable()
    // {
    //     setIsAvailable("no")
    // }
    let [availble,setAvailable]=useState()
    useEffect(()=>
    {
        console.log("hello hi ")
    },[availble])
    
   
    function doSomething()
    {
        setAvailable("yes")
    }
    return(
           <div className="product">
           
                <img className="img" src={props.url} alt="flower"></img>
                <h3>{props.name}</h3>
                <p>{props.price}</p>
                <p>{availble}</p>
                {/* <p>{name}</p> */}
                {/* <p>{isAvailable}</p>
                <button onClick={setAvailable}>click</button>  */}
                <button onClick={doSomething}>Available</button>
           </div>
    )
}
export default Product;