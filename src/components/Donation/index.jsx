
import doggie from '../../assets/doggie.gif'
import axios from 'axios'
import Field from './Field'
import { Link, Navigate } from 'react-router-dom'
import { useDispatch, useSelector} from "react-redux"
import {BASE_URL} from '../../utils/API'
import { INPUT_FIELD, DONATE_ANIMAL, FILE_FIELD, POSTED } from '../../store/actions/userActions'
import Modal from '../Modal/Modal'
import Toast from '../Toast'
import { useEffect, useState } from 'react'

export default function Donation() {

//--- Local states --- //
    const [animalPicture, setAnimalPicture] = useState('');
    const [species, setSpecies] = useState([]);
    const [error, setError] = useState('');
    const [shouldRedirectDonation, setShouldRedirectDonation] = useState(false)
    //const [isPosted, setIsPosted] = useState(false)

//--- Access à mes states du store --- //
    const {
    name,
    registration_nb,
    age,
    weight,
    gender,
    color,
    price,
    description,
    picture,
    specie
    } = useSelector((state) => state.user.animalData);
const {isPosted} = useSelector((state) => state.user);
const {postError} = useSelector((state) => state.user);

//--- Je recupere un tableau avec toutes les espèces --- //
    const fetchSpecies = async () => {
        try {
            const {data} = await axios.get(`${BASE_URL}/specie`)
            setSpecies(data)

        }catch(error){
            setError(error)
        }
    }

    useEffect(() => {
        fetchSpecies()
    }, [])

//--- On itialise dispatch--- //
    const dispatch = useDispatch();


//--- Handlers --- //
const handlePostAnimal = (event) => {
    event.preventDefault();
    dispatch(DONATE_ANIMAL(animalPicture));
};

const handlePicture = (e) => {
    setAnimalPicture(e.target.files[0])

}

if (isPosted) {
        setTimeout(() => {
            setShouldRedirectDonation(true)
            dispatch(POSTED())
        }, 2000);
    }

useEffect(() => {
    setShouldRedirectDonation(false)
}, [])

return shouldRedirectDonation ? <Navigate to="/annonce" replace={true}/> : (
        <main className='m-5'>
            <div className='flex justify-center items-center md:mb-10 md:justify-around'>
                {postError && <Toast message={postError} state={postError} type={'bg-red-500'}/> }
                {isPosted && <Modal title="Purrfect!" content="Votre petite bête a été ajoutée, retrouvez toutes vos annonces dans l'onglet 'Mes animaux' 🐾"/>}
                <h1 className="text-2xl text-left md:text-3xl"> Pôle Donation</h1>
                <img className='w-40 md:w-64' src={doggie} />
            </div>
            <div className="my-12 h-0.5 border-t-0 border-solid border-gray-800 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25 dark:opacity-100">
            </div>
            {/* {message ? {message} : null} */}
            <h2 className="text-xl text-center mt-5 mb-5 md:text-2xl">Je donne</h2>
            <form
            onSubmit={handlePostAnimal}
            action='/upload_files'
            accept="image/*"
            encType="multipart/form-data">
                <div className='flex flex-col justify-center md:flex-row md:pr-10 md:pl-10'>
                    <div className='md:w-[50%]'>

                        {/* Type d'animal */}
                        <div className="form-control w-full max-w-xs">
                            <label htmlFor="type-d'animal" className='text-base'>Type d'animal</label>
                                <select
                                id="type-d'animal"
                                className="select select-secondary my-2"
                                value={specie}
                                onChange={(event) => dispatch(INPUT_FIELD({property:"specie", inputValue:event.target.value}))}>
                                    <option disabled value="">Catégorie</option>
                                    {
                                    species.length >=1 ?
                                    species.map((specie) => (
                                        <option key={specie.id} value={`${specie.id}`}>{specie.name}</option>
                                    )) : null
                                }
                                </select>
                        </div>

                        {/* Age */}
                            <label className="label" htmlFor="age">
                                <span className="label-text text-gray-900 text-base">Age</span>
                            </label>
                            <input
                            type="number"
                            id="age"
                            placeholder="l'âge de l'animal"
                            className="input input-bordered w-full max-w-xs border-pink-600"
                            required="required"
                            min="1"
                            onChange={(event) => dispatch(INPUT_FIELD({property:"age", inputValue:event.target.value}))}
                            value={age}/>

                            {/* Poids */}
                            <label className="label" htmlFor="poids">
                                <span className="label-text text-gray-900 text-base">Poids</span>
                            </label>
                            <input
                            type="number"
                            id="poids"
                            placeholder="le poids de l'animal"
                            className="input input-bordered w-full max-w-xs border-pink-600"
                            required="required"
                            min="1"
                            onChange={(event) => dispatch(INPUT_FIELD({property:"weight", inputValue:event.target.value}))}
                            value={weight}/>

                            {/* Couleur */}
                            <label className="label" htmlFor="couleur">
                                <span className="label-text text-gray-900 text-base">Couleur</span>
                            </label>
                            <input
                            type="text"
                            id="couleur"
                            placeholder="la couleur de l'animal"
                            className="input input-bordered w-full max-w-xs border-pink-600"
                            required="required"
                            onChange={(event) => dispatch(INPUT_FIELD({property:"color", inputValue:event.target.value}))}
                            value={color}/>
                    </div>
                    <div className='md:w-[50%]'>
                            {/* Nom */}
                            <label className="label" htmlFor="nom-d'animal">
                                <span className="label-text text-gray-900 text-base">Nom</span>
                            </label>
                            <input
                            type="text"
                            id="nom-animal"
                            placeholder="le nom de votre animal"
                            className="input input-bordered w-full max-w-xs border-pink-600"
                            required="required"
                            onChange={(event) => dispatch(INPUT_FIELD({property:"name", inputValue:event.target.value}))}
                            value={name}/>

                            {/* Frais d'adoption */}
                            <label className="label" htmlFor="frais">
                                <span className="label-text text-gray-900 text-base">Frais d'adoption (max 300€)</span>
                            </label>
                            <input
                            type="number"
                            id="frais"
                            min="0"
                            max="300"
                            placeholder="les frais d'adoption"
                            className="input input-bordered w-full max-w-xs border-pink-600"
                            required="required"
                            onChange={(event) => dispatch(INPUT_FIELD({property:"price", inputValue:event.target.value}))}
                            value={price}/>

                            {/* N° d'enregistrement */}
                            <label className="label" htmlFor="numéro-d'enregistrement">
                                <span className="label-text text-gray-900 text-base">N° d'enregistrement (15 chiffres)</span>
                            </label>
                            <input
                            type="text"
                            id="numéro-d'enregistrement"
                            placeholder="n° d'enregistrement"
                            className="input input-bordered w-full max-w-xs border-pink-600"
                            required="required"
                            onChange={(event) => dispatch(INPUT_FIELD({property:"registration_nb", inputValue:event.target.value}))}
                            value={registration_nb}/>

                        {/* Genre */}
                        <div className="form-control w-full max-w-xs mt-3">
                            <label className="label" htmlFor="genre">
                                <span className="label-text text-base mb-2">Genre</span>
                            </label>
                            <div className="flex gap-5 mb-3">
                                <label
                                className='text-sm'
                                htmlFor={"Femelle"}> Femelle</label>
                                <input
                                type="radio"
                                name="radio-3"
                                className="radio radio-secondary"
                                onChange={() => dispatch(INPUT_FIELD({property:"gender", inputValue:"Femelle"}))}
                                value={gender}/>
                                <label className='text-sm' htmlFor={"Mâle"}> Mâle</label>
                                <input
                                type="radio"
                                name="radio-3"
                                className="radio radio-secondary"
                                onChange={() => dispatch(INPUT_FIELD({property:"gender", inputValue:"Mâle"}))}
                                value={gender}/>
                            </div>
                        </div>

                        {/* Photo */}
                            <label className="label" htmlFor="photo">
                                <span className="label-text text-gray-900 text-base">Photo</span>
                            </label>
                            <input
                            type="file"
                            name="picture"
                            id="Photo"
                            required="required"
                            placeholder="Photo"
                            className="input input-bordered w-full max-w-xs border-pink-600"
                            onChange={handlePicture}
                            />
                    </div>
                </div>
                <div className="form-control w-full max-w-xs md:pl-10 md:max-w-2xl">
                    {/* Description */}
                    <label className="label" htmlFor="description">
                        <span className="label-text text-base text-base">Description</span>
                    </label>
                    <textarea
                    id="description"
                    name="description"
                    required="required"
                    className='md:w-[100%] border-2 border-gray-500 rounded'
                    placeholder="Une description de votre animal : sa personnalité, ce qu'il aime faire, est-il à l'aise avec les enfants?..."
                    onChange={(event) => dispatch(INPUT_FIELD({property:"description", inputValue:event.target.value}))}
                    value={description}>
                    </textarea>
                </div>
                <div className="flex justify-center mt-2 md:mt-5">

                    <button className="btn btn-secondary" aria-label="Valider"> Valider</button>

                </div>
                <div className="form-control">
                <label className="cursor-pointer label">
                    <span className="label-text">Je certifie avoir pris connaissance de l'obligation de faire signer la charte d'adoption au nouveau mâitre de l'animal: <Link to='https://agriculture.gouv.fr/animaux-de-compagnie-equides-tout-savoir-sur-le-certificat-dengagement-et-de-connaissance'> <span className='underline'>charte d'adoption</span></Link></span>
                    <input required ="required" type="checkbox" className="checkbox checkbox-secondary" />
                </label>
                </div>
            </form>
        </main>
    )
}