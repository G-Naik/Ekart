const About = () => {
  return (
    <div className="about-image">
        <h1 className="text-center pt-10 text-3xl font-sans">Our Story</h1>
        <div className="md:flex md:pt-20 justify-between md:ps-20 md:pe-20  ">
            <div className="md:text-2xl text-xl md:w-3/4 pt-10 pe-5 font-extralight text-start p-3">
                At E-Kart, our aim is to offer you Gadgets that show you that we really care! Not only have we got the trendiest Gadgets, but we can also guarantee that they are of the finest quality.
            </div>
            <div >
                <img className="rounded-xl p-3" src="https://www.edesk.com/wp-content/uploads/2021/03/find-trending-products-sell-ecommerce.png" alt="" />
            </div>
        </div>
        <div className="md:flex md:pt-20 pt-10 justify-between md:ps-20 md:pe-20 p-3">
            <div>
                <img className="rounded-xl" src="https://p-id.ipricegroup.com/media/Gita/Apple.jpg" alt="" />
            </div>
            <div className="md:text-2xl text-xl md:w-3/4 md:pt-10 md:ps-5 font-extralight text-start p-5">
                 We started as a small business in Bengaluru/India/2023, and our aim is to continue providing our customers with products that keep them happy, at prices that keep them happy.  
            </div>
        </div>
        <div className="text-center pb-20 text-xl font-extralight p-5 ">
        Our customers are our top priority and through our products we work hard towards building long-lasting and meaningful relationes with them.
        </div>
    </div>
  )
}
export default About