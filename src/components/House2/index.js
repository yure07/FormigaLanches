import './style.css'

export default function House2 () {
    function handleClick(){
        window.scroll(0, 0)
    }


    return(
        <section className='container-house2'>
            <div className='transition3'></div>

            <div className='content2'>
                <div className='text-content2'>
                <p> Com o objetivo de atender aos mais variados paladares, O Formiga Lanches oferece
                    opções diversas de combos, hambúrgueres vegetarianos, porções de carne e
                    acompanhamentos, que incluem desde nuggets de frango até as tradicionais batatas fritas.
                    Além disso, a lanchonete oferece uma seleção de bebidas, incluindo opções de whisky bom
                    e refinado, para aqueles que desejam apreciar uma bebida de qualidade enquanto
                    saboreiam o seu hambúrguer artesanal.</p>    
                </div>

                <div className='transition5'></div>
                <div className='img-house2'></div>
                <div className='img-tomatoe'></div>
            </div>

        <div className='up-page' onClick={handleClick}></div>
        </section>
    )
}