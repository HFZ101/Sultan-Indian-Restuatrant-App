import '../assets/styles/Styles.css'

export default function Home(){
    return(
        <>
        <div>
            <img src="./images/spices.jpeg" alt="" id="center" />

            <h1>Welcome</h1>
            

            <p>We pride ourselves in our lovingly prepared food and exceptional service, eat in or takeaway we know you're going to love our amazing spices and flavours.</p>

            <p> We offer a wide range of delicious dishes so there's a little something for everyone.</p>
        </div>
            <div className="row">
                <a href="./Menu"><div className="service">
                <img src="./images/order.png" alt="" id="order" className="picture" />
            </div></a>
    
            
                <a href="./Booking"><div className="service">
                <img src="./images/booking.png" alt="" id="booking" className="picture" />
            </div></a>
        
            <div className="order">Order</div>
            <div className="booking">Booking</div>
        </div>
        </>  

    )
}
