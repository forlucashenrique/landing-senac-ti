import {BiMap} from 'react-icons/bi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import logoFooter from '../../assets/img/senac-logo-rodape.png'

export default function Footer(){
    return (
        <footer className='rodape'>
            <div className="rodape-logo">
                <img src={logoFooter} alt="" />
            </div>
            <div className="rodape-contato">
                <h3>Endereço</h3>
                <div className="rodape-contato-endereco">
                    <span><BiMap /> Av. Visconde de Suassuna, 500, Santo Amaro</span>
                </div>
                <div className="rodape-contato-telefone">
                    <span><BsFillTelephoneFill /> <a href="#contato">0800 081 1688</a></span>
                </div>
                <div className="rodape-contato-email">
                    <span><HiOutlineMail /> <a href="#contato">cas@pe.senac.br</a></span>
                </div>
            </div>
        </footer>
    )
}