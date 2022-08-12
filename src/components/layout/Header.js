import logo from '../../assets/img/logo-senac.png'
import {BiMenu} from 'react-icons/bi'


export default function Header(){
    return (
        <header>
            <div className='header-top'>
                <img src={logo} alt="" />
            </div>
            <div className='header-bottom'>
                <h2>MENU</h2>
                <div className='icon-container'>
                    <BiMenu className='icon-menu'/>
                </div>
            </div>
        </header>
    )
}