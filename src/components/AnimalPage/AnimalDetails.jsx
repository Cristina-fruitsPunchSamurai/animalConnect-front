
import { BASE_PICTURE_URL } from '../../utils/API';

export default function AnimalDetails({ animalInfo }) {

    return (
        <>
            <div className="bg-white rounded-lg shadow-xl pb-8 w-full">
                <div className="w-full h-[300px] bg-[url('https://www.soscroisiere.com/back/images/articles/animaux_de_compagnie_groupes_en_meute.jpg')] bg-cover bg-center">
                </div>
                <div className="flex flex-col items-center -mt-20">
                    <img src={`${BASE_PICTURE_URL}/${animalInfo.picture}`} className="w-80 border-4 border-white rounded-full" />
                    <div className="flex items-center space-x-2 mt-2">
                        <p className="text-2xl">{animalInfo.name}</p>
                    </div>
                    <p className="text-gray-700">{animalInfo.description}</p>
                    <p className="text-sm text-gray-500">{animalInfo.owner_city}</p>
                </div>

            </div>

            <div className="my-4 flex flex-col justify-center 2xl:flex-row space-y-4 w-full">
                <div className="w-full flex flex-col">
                    <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                        <h4 className="text-xl text-gray-900 font-bold">Informations de l'animal</h4>
                        <ul className="mt-2 text-gray-700">
                            <li className="flex border-y py-4">
                                <span className="font-bold w-28">Nom :</span>
                                <span className="text-gray-700">{animalInfo.name}</span>
                            </li>
                            <li className="flex border-b py-4">
                                <span className="font-bold w-28">Age :</span>
                                <span className="text-gray-700">{animalInfo.age} ans</span>
                            </li>
                            <li className="flex border-b py-4">
                                <span className="font-bold w-28">Genre :</span>
                                <span className="text-gray-700">{animalInfo.gender}</span>
                            </li>
                            <li className="flex border-b py-4">
                                <span className="font-bold w-28">Poids :</span>
                                <span className="text-gray-700">{animalInfo.weight} kg</span>
                            </li>
                            <li className="flex border-b py-4">
                                <span className="font-bold w-28">Couleur :</span>
                                <span className="text-gray-700">{animalInfo.color}</span>
                            </li>
                            <li className="flex border-b py-4">
                                <span className="font-bold w-28">Frais :</span>
                                <span className="text-gray-700">{animalInfo.price} €</span>
                            </li>
                            <li className="flex border-b py-4">
                                <span className="font-bold w-28">Propriétaire :</span>
                                <span className="text-gray-700">{animalInfo.owner_firstname}</span>
                            </li>
                        </ul>
                    </div>
                    </div>
                    </div>



        </>
    )
}



