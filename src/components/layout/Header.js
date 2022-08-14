import logo from '../../assets/img/logo-senac.png'
import {BiMenu} from 'react-icons/bi'


export default function Header(){
    return (
        <header>
            <div className='header-top'>
                <img src={logo} alt="" />
                <h2>SENAC PE E PORTO DIGITAL</h2>
            </div>
            <div className='header-bottom'>
                <h2 className='menu'>MENU</h2>
                <h2 className='home'>HOME</h2>
                <div className='icon-container'>
                    <BiMenu className='icon-menu'/>
                </div>
                <button>Inscreva-se</button>
            </div>
        </header>
    )
}