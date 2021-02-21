import './Contact.css'
import Photo from './Img/1.jpg'

function Contact() {
    return (
        <div className="contact-container">
            <h3>Contact</h3>
            <img src={Photo} />
            <h4>Email: aslanshaken@gmail.com</h4>
        </div>
    )
}

export default Contact