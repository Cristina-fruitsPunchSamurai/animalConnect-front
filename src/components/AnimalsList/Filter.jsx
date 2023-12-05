import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/API";

export default function Filter({specie, gender, age, setSpecie, setAge, setGender, setRepos, setMessage}) {
//------ States ------//
    const [filter, setFilter] = useState(false)
    const [species, setSpecies] = useState([]);


//------ Handlers ------//
//* Expliquer toute cette fonction  *//
    const handleclick = () => {
        setFilter(!filter);
    }

    const deleteFilter = async () => {
        const res = await axios.get(`${BASE_URL}/animals`)
        setRepos(res.data)
        setMessage('')
        setSpecie('')
        setAge('')
        setGender('')
        }

    useEffect(() => {
        deleteFilter()
        fetchSpecies()
    }, [])

    const fetchSpecies = async () => {
        try {
            const {data} = await axios.get(`${BASE_URL}/specie`)
            setSpecies(data)

        }catch(error){
            console.log(error)
        }
    }

    return (
        <div className="px-16 py-8 lg:max-w-xs bg-base-100 shadow-xl mb-8 flex flex-col">

            <div className="my-10 text-xl text-center hidden lg:block">FILTRES</div>


            <button className="btn lg:hidden my-4" onClick={handleclick}>
                {!filter ?
                "voir les filtres"
                :
                "Masquer les filtres"
                }
            </button>


            <form className={`flex flex-col justify-center ${!filter ? "hidden" : "flex" } lg:flex`}>
                <label htmlFor="">Espèce</label>
                <select className="select select-secondary my-2" value={specie} onChange={(e) => setSpecie(e.target.value)}>
                    <option disabled value="">Espèce</option>
                    {
                                    species.length >=1 ?
                                    species.map((specie) => (
                                        <option key={specie.id} value={`${specie.name}`}>{specie.name}</option>
                                    )) : null}
                </select>

                <label htmlFor="">Genre</label>
                <select className="select select-secondary my-2" value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option disabled value="">Genre</option>
                    <option>Mâle</option>
                    <option>Femelle</option>
                </select>

                <label htmlFor="">Age</label>
                <select className="select select-secondary my-2" value={age} onChange={(e) => setAge(e.target.value)}>
                    <option disabled value="">Age</option>
                    <option>Moins de 2 ans</option>
                    <option>De 2 à 4 ans</option>
                    <option>De 4 à 7 ans</option>
                    <option>Plus de 7 ans</option>
                </select>
            </form>
            <button className="btn btn-secondary my-4" onClick={deleteFilter}>reinitialiser les filtres</button>


        </div>
    )
}