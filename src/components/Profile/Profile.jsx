import { useState, useEffect } from 'react';
import man from '../../assets/avatar-homme.png';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { PROFILE_INFO, PATCH_USER_INFOS } from '../../store/actions/userActions';
import { BASE_PICTURE_URL, BASE_URL } from '../../utils/API';
import Toast from '../Toast';

export default function Profile() {
    // Récupérer les informations du profil et le token depuis Redux
    const profileInfo = useSelector(state => state.user.profileInfo);
    const token = useSelector(state => state.user.token);
    const dispatch = useDispatch();

    // États locaux pour la gestion de la modale
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentValue, setCurrentValue] = useState("");
    const [newValue, setNewValue] = useState("");
    const [selectedField, setSelectedField] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [profileError, setprofileError] = useState(null);

    const avatar = useSelector(state => state.user.profileInfo.picture);

    // Charger les informations du profil lors du montage du composant
    useEffect(() => {
        dispatch(PROFILE_INFO());
    }, [dispatch]);

    // Fonction pour ouvrir la modale de modification
    const openModal = (field) => {
        if (field === 'picture') {
            setIsModalOpen(true);
            setSelectedField(field);
        } else {
            setCurrentValue(profileInfo[field]);
            setIsModalOpen(true);
            setSelectedField(field);
        }
    }

    // Fonction pour fermer la modale
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedField("");
        setCurrentValue("");
        setNewValue("");
    }

    // Fonction pour gérer la soumission du formulaire de modification
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (selectedField === 'picture' && selectedFile) {
                const formData = new FormData();
                formData.append('picture', selectedFile);

                // Envoyer la requête PATCH avec le nouveau fichier
                await axios.patch(`${BASE_URL}/profile/picture`, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data',
                    },
                });
            } else {
                const updatedData = { [selectedField]: newValue };

                // Envoyer la requête PATCH avec les données modifiées
                await axios.patch(`${BASE_URL}/profile`, updatedData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            }

            // Mettre à jour les informations locales et fermer la modale
            dispatch(PATCH_USER_INFOS());
            dispatch(PROFILE_INFO());
            closeModal();
        } catch (error) {
            setprofileError(error)
        }
    };

    // Liste des champs à afficher
    const fieldsToShow = [
        "firstname",
        "lastname",
        "phone_number",
        "email",
        "password",
        "address",
        "city",
        "postcode",
        "picture",
    ];

    // Traductions des champs
    const fieldTranslations = {
        firstname: "Prénom",
        lastname: "Nom",
        phone_number: "Téléphone",
        address: "Adresse",
        password: "Mot de passe",
        city: "Ville",
        email: "Email",
        picture: "Photo",
        postcode: "Code postal",
        shelter_company_name: "Nom de société",
        shelter_siret: "SIRET"
    };


    // Rendu du composant
    return profileInfo && (
        <div className="flex flex-col items-center mt-8 mb-8">
            {profileError !== null ?
                <Toast
                    message={'Essayez plus tard svp, une erreur est survenue lors de la modification du profil'}
                    state={profileError}
                    type={'bg-red-500'} />
                : null
            }
            <h1 className="text-center text-lg font-bold mb-8">Mon Profil</h1>
            {/* Affichage de la photo de profil */}
            <div className="flex justify-center w-60">
                {avatar ? <img className="rounded-full" src={`${BASE_PICTURE_URL}/${avatar}`} /> : <img src={man} />}
            </div>


            {/* Section d'affichage des détails */}
            <div className="mt-8 p-4 border rounded-lg">
                <h2 className="text-center text-lg font-semibold mb-8">Détails</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {fieldsToShow.map((field, index) => (
                        <div key={index} className="mb-4 mr-16 flex items-center justify-between">
                            {/* Affichage des informations et bouton de modification */}
                            <p className="block font-medium mr-2">{fieldTranslations[field]} :{" "}
                                {field === "password" ? "********" : profileInfo[field]}</p>

                            <button
                                className="flex p-2.5 bg-pink-500 rounded-xl hover:rounded-3xl hover:bg-purple-600 transition-all duration-300 text-white"
                                onClick={() => openModal(field)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section d'affichage des informations pour les refuges */}
            {profileInfo.is_shelter && (
                <div className="mt-8 p-4 border rounded-lg">
                    <h2 className="text-center text-lg font-semibold mb-8">Statut : Pro</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {["shelter_company_name", "shelter_siret"].map((field, index) => (
                            <div key={index} className="mb-4 mr-16 flex items-center justify-between">
                                {/* Affichage des informations et bouton de modification */}
                                <p className="block font-medium mr-2">{fieldTranslations[field]} : {profileInfo[field]}</p>

                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Modale de modification */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
                    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg" encType="multipart/form-data">
                        <div className="mb-4 flex flex-col">
                            {/* Affichage du champ actuel */}
                            <label className="block font-medium">Actuel :  </label>
                            <p className='text-center my-4'>{selectedField === 'password' ? '********' : currentValue}</p>
                        </div>

                        {/* Affichage du champ de modification en fonction du champ sélectionné */}
                        {selectedField === 'picture' ? (
                            <div className="mb-4">
                                <label className="block font-medium">Nouvelle Photo de Profil</label>
                                <input
                                    type="file"
                                    name="picture"
                                    accept="image/*"
                                    onChange={(e) => setSelectedFile(e.target.files[0])}
                                    className="w-full border rounded px-3 py-2"
                                />
                            </div>
                        ) : (
                            <div className="mb-4">
                                <label className="block font-medium">Nouveau</label>
                                <input
                                    type="text"
                                    value={newValue}
                                    onChange={(e) => setNewValue(e.target.value)}
                                    className="w-full border rounded px-3 py-2"
                                />
                            </div>
                        )}

                        {/* Boutons de validation et d'annulation */}
                        <div className='flex flex-col'>
                            <button className="btn btn-secondary my-4" type="submit">
                                Valider
                            </button>
                            <button className="btn" type="button" onClick={closeModal}>
                                Annuler
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
