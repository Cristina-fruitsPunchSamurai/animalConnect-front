
import akamaru from '../../assets/akamaru.jpg';
import ebichu from '../../assets/ebichu.jpg';
import kagura from '../../assets/kagura.jpg';
import miaouss from '../../assets/miaouss.jpg';
import robert from '../../assets/robert.jpg';

import axios from 'axios';
import { useEffect, useState } from 'react';
import "pure-react-carousel/dist/react-carousel.es.css";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";

import {BASE_URL, BASE_PICTURE_URL} from '../../utils/API'
import { Link } from 'react-router-dom';


export default function Carousel() {

    const [repos, setRepos] = useState([])

    const fetchAnimal = async () => {
        const res = await axios.get(`${BASE_URL}/animals/random`)
        setRepos(res.data)
    }

    useEffect(() => {
        fetchAnimal()
    }, [])




    return (
        <section id="slider">

        <h1 id="slider-title" className="text-2xl md:text-4xl text-center py-8"> Quel sera votre compagnon idéal ?</h1>
        <div className="container mx-auto">
            <div className="flex items-center justify-center w-full h-full py-4 sm:py-24 px-4">
            {repos.length === 0 ?
            <p>Chargement en cours...</p>
            :
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={5} visibleSlides={2} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 lg:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto ">
                                            <img src={`${BASE_PICTURE_URL}/${repos[0].picture}`} alt="black chair and white table" className="object-cover object-center w-full h-[550px]" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">{repos[0].name}</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <Link to={`/animal/${repos[0].id}`}>
                                                        <button className='btn btn-secondary'>Voir la fiche</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src={`${BASE_PICTURE_URL}/${repos[1].picture}`} alt="sitting area" className="object-cover object-center w-full h-[550px]" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">{repos[1].name}</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <Link to={`/animal/${repos[1].id}`}>
                                                        <button className='btn btn-secondary'>Voir la fiche</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src={`${BASE_PICTURE_URL}/${repos[2].picture}`} alt="sitting area" className="object-cover object-center w-full h-[550px]" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">{repos[2].name}</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <Link to={`/animal/${repos[2].id}`}>
                                                        <button className='btn btn-secondary'>Voir la fiche</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src={`${BASE_PICTURE_URL}/${repos[3].picture}`} alt="sitting area" className="object-cover object-center w-full h-[550px]" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">{repos[3].name}</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <Link to={`/animal/${repos[3].id}`}>
                                                        <button className='btn btn-secondary'>Voir la fiche</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src={`${BASE_PICTURE_URL}/${repos[4].picture}`} alt="black chair and white table" className="object-cover object-center w-full h-[550px]" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">{repos[4].name}</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <Link to={`/animal/${repos[4].id}`}>
                                                        <button className='btn btn-secondary'>Voir la fiche</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
                }

                {repos.length === 0 ?
                            <p>Chargement en cours...</p>
                            :

                <CarouselProvider className="block lg:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={5} visibleSlides={1} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex lg:gap-8 lg:gap-6 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto ">
                                                <img src={`${BASE_PICTURE_URL}/${repos[0].picture}`} alt="black chair and white table" className="object-cover object-center w-full h-[300px]" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">{repos[0].name}</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <Link to={`/animal/${repos[0].id}`}>
                                                            <button className='btn btn-secondary'>Voir la fiche</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                    </Slide>
                                    <Slide index={1}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={`${BASE_PICTURE_URL}/${repos[1].picture}`} alt="sitting area" className="object-cover object-center w-full h-[300px]" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">{repos[1].name}</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <Link to={`/animal/${repos[1].id}`}>
                                                            <button className='btn btn-secondary'>Voir la fiche</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                    </Slide>
                                    <Slide index={2}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={`${BASE_PICTURE_URL}/${repos[2].picture}`} alt="sitting area" className="object-cover object-center w-full h-[300px]" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">{repos[2].name}</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <Link to={`/animal/${repos[2].id}`}>
                                                            <button className='btn btn-secondary'>Voir la fiche</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                    </Slide>
                                    <Slide index={3}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={`${BASE_PICTURE_URL}/${repos[3].picture}`} alt="sitting area" className="object-cover object-center w-full h-[300px]" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">{repos[3].name}</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <Link to={`/animal/${repos[3].id}`}>
                                                            <button className='btn btn-secondary'>Voir la fiche</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                    </Slide>
                                    <Slide index={4}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={`${BASE_PICTURE_URL}/${repos[4].picture}`} alt="black chair and white table" className="object-cover object-center w-full h-[300px]" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">{repos[4].name}</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <Link to={`/animal/${repos[4].id}`}>
                                                            <button className='btn btn-secondary'>Voir la fiche</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
}
            </div>
        </div>
        </section>
    )
}
