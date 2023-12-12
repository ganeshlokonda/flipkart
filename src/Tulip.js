import Product from "./Product"

export default function Tulip()
{
    let arr=[
        {name:"Pink tulip",price:30,url:"https://upload.wikimedia.org/wikipedia/commons/3/34/Pink_tulip_flower.jpg"},
        {name:"Pink tulip",price:80,url:"http://2.bp.blogspot.com/-_eYp7ZPr7vY/Tb4MteOQHcI/AAAAAAAABd8/ds5b24jR0aM/s1600/100_6248.JPG"},
        {name:"Garden Flowers",price:70,url:"http://1.bp.blogspot.com/-8RIvExK_AdU/UcN7rbEOxbI/AAAAAAAAE-g/LWfqfmiSKSs/s1600/3+Tulip+Flowers.jpg"},
        {name:"Yellow Tulip",price:30,url:"https://windows10wall.com/wp-content/uploads/2013/08/tulip-flower-wallpaper-hd-4.jpg"},
        {name:"Orange Tulip",price:20,url:"https://s-media-cache-ak0.pinimg.com/736x/90/8e/37/908e3703d99551add21f59333277cdf1.jpg"},
        {name:"Tulip Garden",price:10,url:"http://www.pixelstalk.net/wp-content/uploads/2014/12/Beautiful-Tulip-Flowers-Garden-Wallpaper-Full-HD.jpg"},
        

    ]
return(
    <div className="products">
        {
            arr.map((item,index)=>
            {
                return(
                    <Product name={item.name} price={item.price} url={item.url} key={index}></Product>
                )
            }) 
        }
    </div>
)
}