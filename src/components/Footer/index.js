import './footer.css'

export default function Footer () {
    return(
        <section>
        <div className='container-footer'>
            <div className='be-franchisee'>
                <p>seja um</p>
                <p>franqueado!</p>
                <button>eu quero!</button>
            </div>
            <div className='logo-img'></div>

            <div className='menus'>
                <ul>
                <p>Menu</p>
                    <li>Combos</li>
                    <li>Vegetarianos</li>
                    <li>Porções</li>
                    <li>Bebidas</li>
                    <li>Acompanhamentos</li>
                </ul>

                <ul>
                <p>Contato</p>
                    <li>Whatsapp</li>
                    <li>Instagram</li>
                    <li>Email</li>
                </ul>
            </div>
        </div>

        <div className='copy'>
        <p>Copyright &copy; Formiga Lanches 2023. <p>Todos os direitos Reservados</p></p>
        </div>
        </section>
    )
}