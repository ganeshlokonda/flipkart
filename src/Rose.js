import Product from "./Product"

 export default function Rose()
{
    let arr=[
        {name:"Pink Rose",price:35,url:"https://webneel.com/daily/sites/default/files/images/daily/02-2015/pink%20rose%20flower.preview.jpg"},
        {name:"Red Rose",price:40,url:"https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/Rose-NationalflowerUSA.jpg"},
        {name:"Blue Rose",price:70,url:"https://balconygardenweb.b-cdn.net/wp-content/uploads/2023/05/meta-2.jpg"},
        {name:"White Rose",price:50,url:"https://torange.biz/photo/20/IMAGE/rose-flower-white-20627.jpg"},
        {name:"Black Rose",price:100,url:"https://wallpapercave.com/wp/Zk3qEst.jpg"},
        {name:"Yellow Rose",price:25,url:"https://1.bp.blogspot.com/-CxDYPJpwIvA/Ty9x-82U6fI/AAAAAAAABCk/W4nSWHMXsJM/s1600/Yellow+Rose.jpg"}
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