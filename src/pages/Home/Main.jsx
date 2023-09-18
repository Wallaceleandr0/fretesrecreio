import Card from '../../components/Card/Card'
import './Main.css'

import GoogleComment from './GoogleComment'

function Main () {

    const images = [
        "item-1.png",
        "item-2.png",
        "item-3.png",
        "item-4.png"
    ]


    return (
        <div className='servicos-bg'>
            <h3>NOSSOS SERVIÇOS</h3>
            <p className='p-top'>Conte com nossos profissionais altamente qualificados para embalar itens de todos os tamanhos com precisão, cumprindo todas as normas de mudanças.</p>
           <Card />
            <h3>COMO TRABALHAMOS</h3>
            <p className='p-h3'>Escolha a Conforte Transportadora para confiança e cuidado. Nossos veículos de grande porte e equipamentos de segurança protegem seus móveis com excelência!</p>
            <div className='item-img'>
                {images.map((item, index) => (
                    <img key={index} src={item}/>
                ))}
            </div>
            <div className='depoimentos'>
                <h3>DEPOIMENTOS DE NOSSOS CLIENTES!</h3>
                <p>Esses são alguns comentários de clientes satisfeitos que nos avaliaram no Google.</p>
                <GoogleComment />
            </div>
        </div>
    )
}

export default Main