import Product from './Product'
function Products(props)
{
    let arr=[
        {name:"lotus", price:20,url:"https://tse1.mm.bing.net/th?id=OIP.ECDOLR4tvm6_C1iBHAnYhAHaLH&pid=Api&P=0&h=180"},
        {name:"jasmine",price:30, url:"https://tse1.mm.bing.net/th?id=OIP.xivo6205-4vwEqeuLuFa9AHaLJ&pid=Api&P=0&h=180"},
        {name:"sun flower",price:50,url:"https://tse1.mm.bing.net/th?id=OIP.QHsFyfHJY-8EWm1W7lUYfQHaHq&pid=Api&P=0&h=180"},
        {name:"rose",price:40,url:"https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?cs=srgb&dl=flor-flower-garden-736230.jpg&fm=jpg"},
        {name:"pink flowers",price:60,url:"https://1.bp.blogspot.com/-1l4T6MDQgqo/WSKvmmZ-KJI/AAAAAAAAAyM/xD2vAPs6JF8pLJl6lhnceuRdKWntNYovACLcB/s1600/9.jpg"},
        {name:"Plumeria",price:70,url:"https://i.pinimg.com/originals/12/64/da/1264da4a3f18207dc22592102abae40d.jpg"}
    ]
    return(
        <div className='products'>
         
            <div className='products-items'>
                {
            
                arr.map((item,index)=>
                 {
                 return(
                    <Product name={item.name} price={item.price} url={item.url} key={index}></Product>
                    )
                  })
                
                
                
                }
            </div>
      
      </div>

    )
}
export default Products;