import '../assets/styles/Form.css'

export default function Booking(){
    return(

       
        <div className='container'>
            
                <form>
                    <label>
                        <p>Book Now</p>
                        <div>Name: <input type = 'text' /></div>
                        <div><select>
                                <option>No. of people</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                        </select></div>
                        <div>Time: <input aria-label="Time" type="time" /></div>
                        <div>Tele: <input tel = 'number' maxLength={11} /></div>
                        <div>Email: <input type = 'email' placeholder='enter@email.co.uk'/></div>
                        <button className='btn'>Submit</button>
                    </label> 
                </ form>
            
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2471.8966667870745!2d-1.9648499999999995!3d51.716632999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487115af7ce262f7%3A0x79e8d8c2b28b99c2!2sSultan!5e0!3m2!1sen!2suk!4v1719872464620!5m2!1sen!2suk" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        
    )
}