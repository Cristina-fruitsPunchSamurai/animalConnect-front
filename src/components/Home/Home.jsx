import patte from '../../assets/patte_animal.avif'
import adopt from '../../assets/adopt.webp'
import alex from '../../assets/alex.jpg'
import thomas from '../../assets/thomas.jpg'
import robin from '../../assets/robin.webp'
import cristina from '../../assets/cris.webp'
import adoption from '../../assets/adoption.webp'
import don from '../../assets/don.webp'

import { Link } from 'react-router-dom'

export default function Main() {
    return (
        <main>
            <div id="main-title-services">
                <h1 id="slider-title" className="text-2xl md:text-4xl text-center py-8">Nos Services</h1>
            </div>
            <div id="main-components-services" className='flex justify-center items-center flex-col md:flex-row'>
                    <div className="card w-96 bg-base-100 shadow-xl mx-4 my-4">
                        <figure className="px-10 pt-10">
                            <img src={adoption} alt="Shoes" className="rounded-xl h-[370px]" />
                        </figure>
                        <div className="card-body items-center text-center">

                            <div className="card-actions">
                                <Link to="/animals">
                                    <button className="btn btn-primary">J'Adopte</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-xl mx-2">
                        <figure className="px-10 pt-10">
                            <img src={don} alt="Shoes" className="rounded-xl h-[370px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <div className="card-actions">
                                <Link to="/donation">
                                    <button className="btn btn-primary">Je Donne</button>
                                </Link>
                            </div>
                        </div>
                    </div>
            </div>
            <div id='main-title-steps'>
                <h1 id="slider-title" className="text-2xl md:text-4xl text-center py-8">Les Etapes de l'adoption</h1>
            </div>
            <div id='main-components-steps' className='flex items-center justify-center'>
                <img src={adopt} alt="" className='w-[50%] md:w-[30%] '/>
                    <ol id='main-list-steps' className='leading-7 text-xs md:leading-10 md:text-xl text-gray-900'>
                    <li>1. J'ai un coup de coeur pour un animal</li>
                    <li>2. J'envoie ma candidature</li>
                    <li>3. Ma candidature est analysée par le propriétaire de l'animal</li>
                    <li>4. Ma candidature est acceptée si je suis compatible</li>
                    <li>5. Je confirme en signant la charte de conformité</li>
                    </ol>
            </div>
            <div className='text-center mt-10'>
                <p className='text-green-500'> <span className='text-red-500'>!</span>  Attention, l'adoption est un acte réfléchi, certains propriétaires ont le droit de demander des frais d'adoption qui prennent en compte les soins vétérinaires avant l'adoption</p>
            </div>
            <div id='main-title-steps'>
                <h1 id="slider-title" className="text-2xl md:text-4xl text-center py-8">Témoignages</h1>
            </div>
            <div className="carousel w-[80%] mt-10 bg-slate-200 mx-[10%]">
                    <div id="item10" className="carousel-item w-[90%] p-[5%] md:px-[10%] md:w-[80%] flex flex-col justify-center items-center md:flex-row">
                        <img src={alex} className="w-[40vw] h-[30vh] md:w-[20vw] md:h-[50vh] mb-4 rounded-2xl" />
                        <div className='bg-white flex flex-col justify-center items-center p-8 ml-4 text-xs rounded-2xl'>
                            <p>" J'étais très content d'Animal Connect ! J'ai trouvé mon animal en seulement quelques clics. Après un échange avec le maître, j'ai pu rencontrer Patrick et l'adopter. "</p>
                            <div className="avatar flex items-center mt-8">
                                <div className="w-12 rounded-full mr-4">
                                    <img src={patte} />
                                </div>
                                <p>Alexandre K.</p>
                            </div>
                        </div>
                    </div>
                    <div id="item11" className="carousel-item w-[90%] p-[5%] md:px-[10%] md:w-[80%] flex flex-col justify-center items-center md:flex-row">
                        <img src={thomas} className="w-[40vw] h-[30vh] md:w-[20vw] md:h-[50vh] mb-4 rounded-2xl" />
                        <div className='bg-white flex flex-col justify-center items-center p-8 ml-4 text-xs rounded-2xl'>
                            <p>" Lorsque j'ai contacté Mathilde pour adopter Sparrow, je suis littéralement tombé sous le charme de Mathilde. "</p>
                            <div className="avatar flex items-center mt-8">
                                <div className="w-12 rounded-full mr-4">
                                    <img src={patte} />
                                </div>
                                <p>Thomas V.</p>
                            </div>
                        </div>
                    </div>
                    <div id="item12" className="carousel-item w-[90%] p-[5%] md:px-[10%] md:w-[80%] flex flex-col justify-center items-center md:flex-row">
                        <img src={robin} className="w-[40vw] h-[30vh] md:w-[20vw] md:h-[50vh] mb-4 rounded-2xl" />
                        <div className='bg-white flex flex-col justify-center items-center p-8 ml-4 text-xs rounded-2xl'>
                            <p>" Que dire de Minette ? Ce petit chat innoffensif qui donnerait sa vie pour sauver la vie de son nouveau maître. Je ne regrette pas cette adoption, Minette est omniprésente dans ma vie maintenant je suis épanoui "</p>
                            <div className="avatar flex items-center mt-8">
                                <div className="w-12 rounded-full mr-4">
                                    <img src={patte} />
                                </div>
                                <p>Robin M.</p>
                            </div>
                        </div>
                    </div>
                    <div id="item13" className="carousel-item w-[90%] p-[5%] md:px-[10%] md:w-[80%] flex flex-col justify-center items-center md:flex-row">
                        <img src={cristina} className="w-[50vw] h-[30vh] md:w-[30vw] md:h-[50vh] mb-4 rounded-2xl" />
                        <div className='bg-white flex flex-col justify-center items-center p-8 ml-4 text-xs rounded-2xl'>
                            <p>"J'ai eu un coup de coeur pour Mr. Whiskers, j'ai contacté tout de suite Camille qui cherchait un candidat aimant pour son chat. La plateforme est facile d'utilisation, en quelques clics j'ai envoyé ma candidature."</p>
                            <div className="avatar flex items-center mt-8">
                                <div className="w-12 rounded-full mr-4">
                                    <img src={patte} />
                                </div>
                                <p>Cristina M.</p>
                            </div>
                        </div>
                    </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2 mb-20">
                <a href="#item10" className="btn btn-xs">1</a>
                <a href="#item11" className="btn btn-xs">2</a>
                <a href="#item12" className="btn btn-xs">3</a>
                <a href="#item13" className="btn btn-xs">4</a>
            </div>
        </main>


    )
}
