import { useEffect, useState } from "react"
import {
    ACCEPT_REQUEST,
    FETCH_RECEIVED_REQUEST,
    FETCH_REQUESTS,
    REFUSE_REQUEST,

} from "../../store/actions/userActions"
import { useDispatch, useSelector } from "react-redux"
import Toast from "../Toast";
import { Link } from "react-router-dom";
import { BASE_PICTURE_URL, BASE_URL } from '../../utils/API'
import man from '../../assets/avatar-homme.png'

export default function Candidatures() {

    //* Si pas de candidature je reçois un message qui me dit 'vous n'avez pas de candidature' *//

    //------ Etats globaux ------//
    //* Si pas de candidature je reçois un message qui me dit 'vous n'avez pas de candidature' *//

    const noCandidaturesReceived = useSelector(state => state.user.noCandidaturesReceived);
    const noCandidaturesSent = useSelector(state => state.user.noCandidaturesSent);

    //* Si j'ai des candidatures on m'envoit un objet *//
    const candidaturesSent = useSelector(state => state.user.candidaturesSent);
    const candidaturesReceived = useSelector(state => state.user.candidaturesReceived);
    const [selectedCandidature, setSelectedCandidature] = useState(null);
    const [acceptedCandidature, setAcceptedCandidature] = useState(null)
    const { accepted, rejected } = useSelector(state => state.user)
    const { candidatureDesicionError } = useSelector(state => state.user)

const [accept, setAccept] = useState(false)
const [refuse, setRefuse] = useState(false)

const [message, setMessage] = useState('')

//------ Etat local ------//
//* State de la modal*//
const [open, setOpen] = useState(false);

    //* State de la modal de contact *//
    const [contactModalOpen, setContactModalOpen] = useState(false);

    //------ Constant dispatch ------//
    const dispatch = useDispatch();

    //------ Fetch du tableau candidatures reçues et envoyées ------//
    useEffect(() => {
        dispatch(FETCH_REQUESTS())
        dispatch(FETCH_RECEIVED_REQUEST())
    }, [accept, refuse])

    //------ Handlers ------//
    //* Ouvrir la modal *//
    const handleOpenModal = (element) => {
        setSelectedCandidature(element)
        setOpen(true);
    }

    //* Fermer la modal *//
    const handleCloseModal = () => {
        setSelectedCandidature(null);
        setOpen(false);
    }

    //* J'accepte une candidature *//
    const handleValid = (animalid, requesterid) => {
        const request = {
            animalId: animalid,
            requesterId: requesterid
        }
        dispatch(ACCEPT_REQUEST(request))
        setAccept(true)
        setMessage('Vous avez accepté cette candidature')
        setTimeout(() => {
            setAccept(false)
            handleCloseModal()
        }, 3000);

    }

    //* Je refuser une candidature *//
    const handleRefuse = (animalid, requesterid) => {
        const request = {
            animalId: animalid,
            requesterId: requesterid
        }
        dispatch(REFUSE_REQUEST(request))
        setRefuse(true)
        setMessage('Vous avez refusé cette candidature')
        setTimeout(() => {
            setRefuse(false)
            handleCloseModal()
        }, 3000);
    }

    //------ Other functions ------//
    const uniqueKey = (element) => {
        const id = element.animalid + element.requesterid
        return id;
    }


    const handleContactOwner = (element) => {
        setAcceptedCandidature(element)
        setContactModalOpen(true)
    }

    return (
        <main className="mb-8">
            {
                message && <Toast message={message} state={message} type={'bg-slate-400'} />
            }
            {
                candidatureDesicionError !== undefined ?
                    <Toast message={`${candidatureDesicionError}`} state={candidatureDesicionError} type={'bg-red-500'} />
                    : null
            }
            {/* //------ Tableau des candidatures envoyées ------// */}
            <h1 className='text-2xl text-left md:text-3xl mb-5 mt-10 text-gray-900'>Candidatures envoyées</h1>
            <div className="overflow-x-auto">
                {candidaturesSent.length >= 1 ? (
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Espèce</th>
                                <th>Frais d'adoption</th>
                                <th>Statut</th>
                            </tr>
                        </thead>
                        {candidaturesSent.map((element) => (
                            <tbody key={element.animal_id}>
                                <tr>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={`${BASE_PICTURE_URL}/${element.picture}`} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{element.animal_name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {element.specie_name}
                                    </td>
                                    <td>{element.price} €</td>
                                    {
                                        element.status === 'pending' ? (
                                            <td className="text-blue-700"> En cours </td>
                                        ) : element.status === 'rejected' ? (
                                            <td className="text-red-700"> Refusé </td>
                                        ) : element.status === 'approved' ? (
                                            <td className="text-green-700"> Accepté </td>
                                        ) : null
                                    }

                                    <th>
                                        <Link to={`/animal/${element.animal_id}`}>
                                            <button className="btn">CONSULTER L'ANNONCE</button>
                                        </Link>
                                    </th>
                                    <th>
                                        {element.status === 'approved' && (
                                            <button className="btn btn-accent" onClick={() => handleContactOwner(element)}>CONTACTER LE PROPRIÉTAIRE</button>
                                        )}
                                    </th>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                ) : (
                    <p>{noCandidaturesSent}</p>
                )}
            </div>


            {/* //------ Tableau des candidatures reçues ------// */}
            <h1 className='text-2xl text-left md:text-3xl mb-5 mt-10 text-gray-900'>Candidatures reçues</h1>
            <div className="overflow-x-auto">
                {candidaturesReceived.length >= 1 ? (
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Nom du candidat</th>
                                <th>Nom de l'animal</th>
                                <th>Statut</th>

                            </tr>
                        </thead>
                        {/* row 1 */}
                        {candidaturesReceived.map((element) => (
                            <tbody key={uniqueKey(element)}>
                                <tr>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={`${BASE_PICTURE_URL}/${element.picture}`} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">
                                                    {element.firstname}  {element.lastname}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold">
                                        <a href={`/animal/${element.animalid}`}>{element.animalname}</a>
                                        </div>
                                    </td>
                                    {
                                        element.status === 'pending' ? (
                                            <td className="text-blue-700"> En cours </td>
                                        ) : element.status === 'rejected' ? (
                                            <td className="text-red-700"> Refusé </td>
                                        ) : element.status === 'approved' ? (
                                            <td className="text-green-700"> Accepté </td>
                                        ) : null
                                    }
                                    <th>
                                        <button
                                            className="btn btn-secondary"
                                            onClick={() => handleOpenModal(element)}> VOIR MESSAGE
                                        </button>
                                    </th>
                                </tr>
                            </tbody>
                        ))}
                    </table>

                ) : (
                    <p>{noCandidaturesReceived}</p>
                )}
            </div>

            {/* //------ Modal ------// */}
            {open &&
                <dialog id="my_modal_3" className={`modal ${open ? "modal-open" : null}`}>
                <div method="dialog" className="modal-box text-gray-800">
                    <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={handleCloseModal}>✕</button>
                    {
                        accept || refuse ?
                        (
                            <>
                                <h3 className="font-bold text-lg mb-5 text-center">Merci d'avoir fait votre choix! </h3>
                                <p className="text-base mb-5 text-center">Le candidat sera informé de votre décision 😉 </p>
                            </>
                        ) : (
                        <>
                            <h3 className="font-bold text-lg mb-5 text-center">Voici le message du candidat</h3>
                            <p className="text-base mb-5">{selectedCandidature?.request_message}</p>
                            <div className="flex gap-5 flex-col lg:flex-row">
                            <button
                            className="btn btn-accent font-bold"
                            onClick={()=>handleValid(selectedCandidature.animalid, selectedCandidature.requesterid)}> Accepter la candidature</button>
                            <button
                            className="btn btn-error font-bold"
                            onClick={()=>handleRefuse(selectedCandidature.animalid, selectedCandidature.requesterid)}
                            >Refuser la candidature</button>
                        </div>
                        </>
                        )
                    }




                    </div>
                </dialog>}


            {/* //------ Modal Contact Owner ------// */}
            {contactModalOpen && (
                <dialog id="my_modal_2" className={`modal ${contactModalOpen ? "modal-open" : null}`}>
                    <div method="dialog" className="modal-box text-gray-800">

                        <div className="modal-content">
                            <button
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={() => setContactModalOpen(false)}>✕</button>
                            <h2 className="text-center font-bold mb-4">Contactez le propriétaire de l'annonce :</h2>
                            <p className="my-4"><span className="font-bold text-secondary">Propriétaire :</span> {acceptedCandidature.owner_firstname} {acceptedCandidature.owner_lastname}</p>

                            <p className="my-4"><span className="font-bold text-secondary">Email :</span> {acceptedCandidature.owner_email}</p>
                            <p className="my-4"><span className="font-bold text-secondary">Téléphone :</span> {acceptedCandidature.owner_phone_number}</p>

                        </div>

                    </div>
                </dialog>
            )}
        </main>
    )
}