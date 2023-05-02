import './header.css'

export default function Header (){
    return(
        <header className='container-header'>

                <ul>
                    <li>Combos</li>
                    <li>Vegetetarianos</li>
                    <li>Porções</li>
                    <div className='img-logo'></div> 
                    <li>Bebidas</li>
                    <li>Acompanhametos</li>
                    <li>Contato</li>
                </ul>
        
                <div className='transition-header1'></div>
                <div className='menu-mobile'>
                <h1>formiga</h1>
                <h1>lanches</h1>
                </div>

        </header>
    )
}