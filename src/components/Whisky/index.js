import './whisky.css'
import dBlack from '../../assets/Double-Black.png'
import buchanan from '../../assets/buchanan.png'

export default function Whisky(){
    return(
        <section className='container-whisky'>
            <div className='info-whisky'>
                <p>todo mundo quer</p>
                <p>whisky</p>
                <p>confira nosso catálogo completo de bebidas</p>
            </div>
            <div className='whiskys'>
                <div className='jack'></div>
                <div className='chivas'></div>
            </div>
            
            <img src={buchanan} alt='whisky-buchanan' className='img2 buchanan'/>
            <img src={dBlack} alt='whisky-double-black' className='img2 double-black'/>
            <div className='transition-whisky'></div>

        </section>
    )
}