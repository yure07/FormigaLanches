import { useEffect, useRef } from 'react'
import './menu.css'

export default function Menu () {
    /*const divRef = useRef()
    useEffect(()=>{
        window.addEventListener('resize', function(){
            if(this.window.innerWidth < 600){
                divRef.current.classList = null
                console.log(divRef)
            }
        })
    },[])*/
    return(
        <section className="menu">
            <div className='transition2'></div>

        <div className='container-main'>

            <div className='container-3'>
            <div className='img-geral img-combo'>
                <div className="filter">
                    <p>COMBOS</p>
                </div>
            </div>

            <div className='img-geral img-vegetarian'>
                <div className='filter'>
                    <p>VEGETARIANO</p>
                </div>
            </div>

            <div className='img-geral img-parts'>
                <div className='filter'>
                    <p>PORÇÕES</p>
                </div>
            </div>

            <div className='img-geral img-drinks'>
                <div className='filter'>
                    <p>BEBIDAS</p>
                </div>
            </div>
            </div>

            <div className='container-break'>
            <div className='img-followup'>
                <div className='filter'>
                    <p>ACOMPANHAMENTOS</p>
                </div>
            </div>
            </div>

        </div>

        <div className='onion-img'></div>
        </section>
    )
}