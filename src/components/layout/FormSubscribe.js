import Input from '../Form/Input'

export default function formSubscribe(){
    return (
        <section className='subscribe-container'>
            <div className="subscribe-form-info-container">
                
                <h2>INSCREVA-SE</h2>
                
                <p>Ao prosseguir com sua inscrição você estará de acordo com o <a href='#home'>termo de privacidade</a>.</p>
            </div>
            <div className="subscribe-form-container">
                
                <Input text={'Nome Completo'}/>
                <Input text={'E-mail'}/>
                <Input styleClass='wrap' text={'CPF'}/>
                <Input styleClass='wrap' text={'Telefone'}/>
              
                <button>Salvar</button>
            </div>
        </section>
    )
}