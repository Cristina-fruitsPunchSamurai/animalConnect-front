import { useState, useEffect } from 'react';
import man from '../../assets/avatar-homme.png';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { DETAILS_ADS, UPDATE_USER_AD, DELETE_USER_AD } from '../../store/actions/userAdsActions';
import { useParams, Link } from 'react-router-dom';
import { BASE_PICTURE_URL, BASE_URL } from '../../utils/API';
import Toast from '../Toast';

export default function Annoncedetails() {

//------ On recupère les états de Redux ------//
//* Récupérer les informations du profil et le token depuis Redux  *//
  const adDetails = useSelector((state) => state.userAds.adDetails);
  const token = useSelector(state => state.user.token);

//------ On fait appel à dispatch et useParams ------//
  const dispatch = useDispatch();
  const { id } = useParams();

//------ États locaux pour la gestion de la modale ------//
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  const [newValue, setNewValue] = useState("");
  const [selectedField, setSelectedField] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [annonceError, setAnnonceError] = useState(null);

//------ État local pour la confirmation de la suppression ------//
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

//* On charge les informations du profil lors du montage du composant  *//
  useEffect(() => {
    dispatch(DETAILS_ADS(id));
  }, [dispatch, id]);

//------ Gestion de la modale ------//
//* Fonction pour ouvrir la modale de modification  *//
  const openModal = (field) => {
    if (field === 'picture') {
      setIsModalOpen(true);
      setSelectedField(field);
    } else {
      setCurrentValue(adDetails[field]);
      setIsModalOpen(true);
      setSelectedField(field);
    }
  }

//* Fonction pour fermer la modale *//
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedField("");
    setCurrentValue("");
    setNewValue("");
  }

//* Fonction pour gérer la suppression de l'annonce *//
  const handleDelete = async () => {
    try {
      await dispatch(DELETE_USER_AD(id));
    } catch (error) {
      setAnnonceError("Une erreur est survenue lors de la suppression de l'annonce");
    }
    setIsModalOpen(false);
  };

//------ Champs à afficher ------//
  const fieldsToShow = [
    "name",
    "gender",
    "age",
    "weight",
    "color",
    "price",
    "registration_nb",
    "description",
    "picture",
  ];

//------ Traduction des champs ------//
  const fieldTranslations = {
    name: "Nom",
    gender: "Genre",
    age: "Age",
    price: "Frais d'adoption",
    weight: "Poids",
    description: "Description",
    color: "Couleur",
    registration_nb: "Numéro d'identification",
    picture: "Photo",
  };

//------ Handler ------//
//* Fonction pour gérer la soumission du formulaire de modification *//
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const id = adDetails.id;

      if (selectedField === 'picture' && selectedFile) {
        const formData = new FormData();
        formData.append('picture', selectedFile);

        await axios.patch(`${BASE_URL}/animal/picture/${id}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
      } else {
        const updatedData = { [selectedField]: newValue };

        await axios.patch(`${BASE_URL}/animal/${id}`, updatedData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }

      dispatch(UPDATE_USER_AD());
      dispatch(DETAILS_ADS(id));
      closeModal();
    } catch (error) {
      setAnnonceError('Une erreur est survenue lors de la modification du profil :')
    }
  };

  return adDetails && (
    <div className="flex flex-col items-center mt-8 mb-8">
      {annonceError ? <Toast message={annonceError} state={annonceError} type={'bg-red-500'} /> : null}
      <h1 className="text-center text-lg font-bold mb-8">{adDetails.name}</h1>
      {/* Affichage de la photo de profil */}
      <div className="flex justify-center w-96 h-80">
        <img className="object-cover" src={`${BASE_PICTURE_URL}/${adDetails.picture || man}`} alt={adDetails.name} />
      </div>

      {/* Section d'affichage des détails */}
      <div className="mt-8 p-4 border rounded-lg">
        <h2 className="text-center text-lg font-semibold mb-8">Détails</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {fieldsToShow.map((field, index) => (
            <div key={index} className="mb-4 mr-16 flex items-center justify-between">
              {/* Affichage des informations et bouton de modification */}
              <p className="block font-bold mr-2">{fieldTranslations[field]} : <span className='font-normal'>{adDetails[field]}</span></p>
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

      {/* Bouton de suppression */}
      <div className="mt-8 mb-4 mr-16 flex items-center justify-between">
        <button
          className="btn p-2.5 bg-red-500 rounded-xl hover:rounded-3xl hover:bg-red-600 transition-all duration-300 text-white"
          onClick={() => setDeleteConfirmation(true)}>
          Supprimer cette annonce
        </button>
      </div>

      {/* Modale de suppression */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
          <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg" encType="multipart/form-data">
          <div className="mb-4 flex flex-col">
            {/* Affichage du champ actuel */}
            <label className="block font-medium">Actuel :  </label>
            <p className='text-center my-4'>{currentValue}</p>
          </div>

            {/* Affichage du champ de modification en fonction du champ sélectionné */}
            {selectedField === 'picture' ? (
              <div className="mb-4">
                <label className="block font-medium">Nouvelle Photo</label>
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

      {/* Modale de suppression */}
      {deleteConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-lg mb-4">Confirmez-vous la suppression de cette annonce ?</p>
            <div className="flex justify-center">
            <Link to="/annonce">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white rounded px-4 py-2 mr-4"
                  onClick={handleDelete}>
                  Oui
                </button>
              </Link>
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white rounded px-4 py-2"
                onClick={() => setDeleteConfirmation(false)}>
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
