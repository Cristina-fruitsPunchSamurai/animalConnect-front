import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AnimalDetails from './AnimalDetails';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Toast from '../Toast/';
import { INPUT_CANDIDATURE_MESSAGE, SEND_REQUEST } from '../../store/actions/userActions';
import { BASE_URL } from '../../utils/API';

export default function AnimalPage() {
//------ STATES ------//
    const {token} = useSelector(state => state.user);
    const isLogged = useSelector(state => state.user.isLogged);
    const candidatureMessage = useSelector(state => state.user.candidatureMessage);
    const candidatureConfirmation = useSelector(state => state.user.candidatureConfirmation);
    const [animalInfo, setAnimalInfo] = useState({});
    const [animalLoading, setAnimalLoading] = useState(true);
    const [error, setError] = useState('');
    const [sendCandidature, setSendCandidature] = useState(false);
    const [userInfo, setUserInfo] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

//------ Parameters (id de l'animal) ------//
    const { id } = useParams();

//------ Constant dispatch ------//
    const dispatch = useDispatch();

//------ Constant Redirection ------//
    const navigate = useNavigate();

//------ Requête à l'API ------//
    const fetchAnimal = async () => {
        try {
            const animalResponse = await axios.get(`${BASE_URL}/animal/${id}`);
            setAnimalInfo(animalResponse.data)
            setAnimalLoading(false);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchAnimal();

    }, []);


//------ Gestion de la Modal ------//
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    const { messageRefus } = useSelector(state => state.user)

    //------ Handler ------//
const sendRequest = (e) => {
    e.preventDefault();
    dispatch(SEND_REQUEST(id))
    setSendCandidature(true)
    setIsModalOpen(false)
    setTimeout(() => {
    setSendCandidature(false)
    }, 2000);
}


    return (
        <main>
            <div className="flex flex-col items-center mt-8 mb-8">
                {animalLoading ? (
                <Loader />
                ) : error ? (
                    <Toast message={'Une erreur est survenu, revenez plus tard svp!'} state={error} type="error" />
                ) : (
                <AnimalDetails animalInfo={animalInfo} userInfo={userInfo} />
                )}

                <div className="bg-white rounded-lg shadow-xl py-8 mt-8">
                    <h2 className="text-center text-lg font-semibold mb-8">Intéressé par {animalInfo.name} ?</h2>
                    <div className="flex justify-center mr-16 ml-16">
                        {isLogged ? (
                            <button className="btn btn-secondary text-lg font-semibold" type="button" onClick={openModal}>Candidater</button>
                        ) : (
                            <Link to="/login" className="btn btn-secondary text-lg font-semibold">Candidater</Link>
                        )}
                    </div>
                </div>

                {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="modal-overlay absolute inset-0 bg-gray-800 opacity-50"></div>
            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="modal-content py-4 text-left px-6">
                    <h2 className="text-lg font-semibold mb-4">Candidature</h2>
                    <form onSubmit={sendRequest}>
                        <textarea
                            className="w-full border rounded-lg p-2 mb-4"
                            onChange={(e) => dispatch(INPUT_CANDIDATURE_MESSAGE(e.target.value))}
                            value={candidatureMessage}
                            placeholder="Expliquez votre choix..."
                        />
                        <div className="flex justify-end">
                            <button className="btn btn-secondary mr-2" type="button" onClick={closeModal}>Annuler</button>
                            <button className="btn btn-primary" type="submit">Valider</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )}

                {sendCandidature ?
                    <Toast message={messageRefus} state={sendCandidature} type={messageRefus === 'Votre candidature a bien été envoyée' ? 'bg-green-500' : 'bg-red-500'}
                    /> : null
                }

            </div>
        </main>
    );
}
