// import { useState } from "react"
// import Products from "./Products"

 export default function FHEADER()
{
    // let[movie,setMovie]=useState()
    return(
        <div className="fheader">
          <div className="logo">
              <img src="https://tse2.mm.bing.net/th?id=OIP.cnrLFSg62df-g-S9GG_1IgHmCA&pid=Api&P=0&h=180" alt="flipkart" className="image"/>
          </div>
          <div className="searchBar">
            <div className="innerSearch">
                      <div className="icon">
                          <img src="search.png" className="imageIcon"  alt="icon"/>
                      </div>
                      <div className="input">
                              <input type="text" placeholder="Search for Products,Brands and More" className="name"/>
                      </div>
            </div>
           
          </div>
          <div className="account">
              <div className="user">
                 <img src="https://tse4.mm.bing.net/th?id=OIP.jixXH_Els1MXBRmKFdMQPAHaHa&pid=Api&P=0&h=180" className="userphoto" alt="user"></img>
              </div>
              <div className="login">
                   <p>Login</p>
              </div>
          </div>
          <div className="cart">
          <div className="user">
                 <img src="cart.png" className="userphoto" alt="user"></img>
              </div>
              <div className="login">
                   <p>Cart</p>
              </div>
          </div>
        </div>
    )
}