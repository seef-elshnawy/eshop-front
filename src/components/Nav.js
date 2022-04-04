import '../App.css'
import './style.css'

function Nav(){
return(
<header>
        <nav className="nav">
            <ul className="nav-list">
                <li><a href="#hero">HOME</a></li>
                <li><a href="#skills">PRODUCTS</a></li>
                <li><a href="#about-me">WHAT`S NEW</a></li>
                <li><a href="#about-me">ABOUT US</a></li>
                <li><a href="#about-me">CONTACT US</a></li>
                <li className='signin'><a href="signin">Signin</a></li>
            </ul>
        </nav>
    </header>
);
}

export default Nav