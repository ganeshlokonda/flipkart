function Banner(props)
{
  return(
    <div className="banner">
          <img src={props.url} alt="banner" className="bannerPhoto"/>
    </div>
  )
}
export default Banner;