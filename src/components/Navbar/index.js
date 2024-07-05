import AOS from 'aos';
import 'aos/dist/aos.css';
import "./index.css"

const Navbar=()=>(
    <nav className="navbar-container">
        <div className="navbar-inner-con">
        <h1 className="nav-heading" data-aos="fade-right" data-aos-duration="1000"><span className="my-span">My</span>Portfolio</h1>
        <ul className="navbar-ul-links">
        <li data-aos="fade-left" data-aos-duration="1000"><a href="#" className="navbar-links" alt="">Home</a></li>
        <li data-aos="fade-left" data-aos-duration="1500"><a href="#" className="navbar-links" alt="">About</a></li>
        <li data-aos="fade-left" data-aos-duration="2000"><a href="#" className="navbar-links" alt="">Projects</a></li>
        <li data-aos="fade-left" data-aos-duration="2500"><a href="#" className="navbar-links" alt="">Education</a></li>
        <li data-aos="fade-left" data-aos-duration="3000"><a href="#" className="navbar-links" alt="">Contact</a></li>
        </ul>
        </div>
    </nav>
)
AOS.init();
export default Navbar