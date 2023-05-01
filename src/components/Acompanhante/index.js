import './acompanhante.css'
import chicken from '../../assets/frango.webp'
import potato from '../../assets//french-fries-levitate-white-background.webp'

export default function Acompanhante () {
    return(
        <section className='container-acomp'>
            <div className='info-acomp'>
                <p>nada melhor que um</p>
                <p>acompanhante</p>
            </div>

            <div className='img3'>
                <div className='chickens'></div>
                <div className='potatos'></div>
            </div>

            <img src={chicken} alt='chicken' className='chicken'/>
            <img src={potato} alt='potato' className='potato'/>
        </section>
    )
}