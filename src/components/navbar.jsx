import './style/navbar.css';
import logo from './imgs/Logo.png';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa6";

const Navbar = () => {
    return (
        <>
            <header>
                <div className="menu_top">
                    <div className='span'>
                        <a href="#">
                            <p>
                                <FaEnvelope />
                            </p>
                            <p> Aloqa uchun</p>
                        </a>
                    </div>
                    <select name="lang" id="lang">
                        <option value="uzb">Uzb</option>
                        <option value="eng">Eng</option>
                        <option value="ru">Ru</option>
                    </select>
                </div>
                <nav>
                    <div className="logo">
                        <a href="/">
                            <img src={logo} alt="Brand logosi" />
                        </a>
                    </div>
                    <button className='btn'>Katalog</button>
                    <div className="search_cont">
                        <input type="text" placeholder="Maxsulotlarni izlash" />
                        <button>
                            <FaMagnifyingGlass />
                        </button>
                    </div>
                    <div className="navBtns">
                        <button className='btn_s'>
                        <MdOutlineFavoriteBorder />
                        </button>
                        <button className='btn_s'>
                        <MdOutlineShoppingCart />
                        </button>
                    </div>
                    <button className='btn_login'>Kirish</button>
                </nav>
            </header>
        </>
    )
}

export default Navbar;