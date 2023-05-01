import './catalog.css'

/* --- IMAGES CATALOG --- */
import fogo from '../../assets/fogo.png'
import card1 from '../../assets/B.webp'
import card2 from '../../assets/A.webp'
import card3 from '../../assets/C.webp'
import card4 from '../../assets/D.webp'

export default function Catalog () {   
    return(
        <section className='container-catalog'>

        <div className='transition1'></div>
        <h1>NOSSA MELHOR</h1>
        <h1>ESCOLHA</h1>

        <div className='container-slide'>

            <label className='custom-radio'>
            <input type='radio' name='radio'/>
            <div className='card' >
                <img src={fogo} alt='fogo' width={40}/>
                <img src={card1} alt='lanche' width={150}/>

                <div className='text'>
                <p>asinhas +</p>
                <p>batata g +</p>
                <p>coca 1l</p>
                </div>
                <button>R$ 40,00</button>
            </div>
            </label>

            <label className='custom-radio'>
            <input type='radio' name='radio'/>
            <div className='card'>
                <img src={fogo} alt='fogo' width={40}/>
                <img src={card2} alt='lanche' width={150} />

                <div className='text'>
                <p>super ant +</p>
                <p>coca 1l +</p>
                <p>batata p</p>
                <p>asisnhas</p>
                </div>
                <button>R$ 50,00</button>
            </div>
            </label>

            <label className='custom-radio'>
            <input type='radio' name='radio'/>
            <div className='card'>
                <img src={fogo} alt='fogo' width={40}/>
                <img src={card3} alt='lanche' width={150} />

                <div className='text'>
                <p>double king +</p>
                <p>coca 1l</p>
                </div>
                <button>R$ 35,00</button>
            </div>
            </label>

            <label className='custom-radio'>
            <input type='radio' name='radio'/>
            <div className='card'>
                <img src={fogo} alt='fogo' width={40}/>
                <img src={card4} alt='lanche' width={150} />

                <div className='text'>
                <p>the queen +</p>
                <p>coca 1l +</p>
                <p>batata p+</p>
                </div>
                <button>R$ 45,00</button>
            </div>
            </label>

        </div>

        </section>
    )
}