import './contact.css'
import {FaPhoneAlt} from 'react-icons/fa'
import octagram from '../../assets/moldura-de-ca-rculo-de-ouro-by_vexels.svg'

export default function Contact () {
    
    const handleHover = () => {
        const divMain = document.querySelector(".phone-space")
        const icon = document.querySelector("#icon")
        const svg = document.querySelector('#img')
        svg.style.display = 'none'
        
        if(window.innerWidth > 1024) {
        if (divMain.style.backgroundColor === 'var(--color-beige2)'){
            svg.style.display = 'flex'
            divMain.style.backgroundColor = 'var(--color-orange)'
            
        } else {
            divMain.style.backgroundColor = 'var(--color-beige2)'
            icon.style.marginLeft = '-100px';
        }
    } else if (window.innerWidth <= 1024 && window.innerWidth >= 769){
        if (divMain.style.backgroundColor === 'var(--color-beige2)'){
            svg.style.display = 'flex'
            divMain.style.backgroundColor = 'var(--color-orange)'
            icon.style.marginLeft ='-260px'
        } else {
            divMain.style.backgroundColor = 'var(--color-beige2)'
            icon.style.marginLeft = '-85px';
        }
    } else if (window.innerWidth >= 668 && window.innerWidth <= 1023){
        if (divMain.style.backgroundColor === 'var(--color-beige2)'){
            svg.style.display = 'flex'
            divMain.style.backgroundColor = 'var(--color-orange)'
            icon.style.marginLeft ='-210px'
        } else {
            divMain.style.backgroundColor = 'var(--color-beige2)'
            icon.style.marginLeft = '-70px';
        }
    } else if(window.innerWidth <= 650){
        if (divMain.style.backgroundColor === 'var(--color-beige2)'){
            svg.style.display = 'flex'
            divMain.style.backgroundColor = 'var(--color-orange)'
            icon.style.marginLeft ='-140px'
        } else {
            divMain.style.backgroundColor = 'var(--color-beige2)'
            icon.style.marginLeft = '-40px';
        }
    }
    }

    return(
        <section className='container-contact'>
            <div className='info-contact'>
                <div className='texts'>
                <p>entre em contato</p>
                <p>e garanta já o seu</p>
                </div>

                <div className='phone-icon' onMouseOver={handleHover} onMouseOut={handleHover}>
                    <img src={octagram} alt='octagram' id='img'/>
                    <div className='phone-space'>
                    <FaPhoneAlt width={300} id='icon'/>
                    </div>
                </div>
            </div>

        </section>
    )
}