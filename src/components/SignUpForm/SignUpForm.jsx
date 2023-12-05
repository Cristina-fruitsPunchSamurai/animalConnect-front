//--- Icons --- //
import { Icon } from "react-icons-kit";
import { eye } from 'react-icons-kit/icomoon/eye'
import { eyeBlocked } from 'react-icons-kit/icomoon/eyeBlocked'

import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"

import {
    CHANGE_FIELD,
    REGISTER,
    TOGGLE_SHELTER,
} from "../../store/actions/registerActions"

//--- Component imports --- //
import Toast from "../Toast";
import Modal from "../Modal/Modal";

export default function SignUpForm() {
    //------ States ------//
    //** When user is not registered yet we don't redirect*/
    const [shouldRedirectSignup, setShouldRedirectSignup] = useState(false);
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(eyeBlocked);

    // ------ I want to use dispatch ------//
    const dispatch = useDispatch();

    //------ States access with useSelector ------//
    const {
        firstname,
        lastname,
        phone_number,
        address,
        postcode,
        city,
        email,
        password,
        passwordConfirm,
        company_name,
        siret } = useSelector((state) => state.register.userData);
    const isShelter = useSelector((state) => state.register.userData.is_shelter);
    const isRegistered = useSelector((state) => state.register.isRegistered);
    const {registerErrorUser, registerErrorRegex} = useSelector((state) => state.register);
    const redirectAfterSignup = useSelector((state) => state.register.redirectAfterSignup);
    const [trueError, setTrueError] = useState(false)


    //------ Handlers ------//
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(REGISTER());
        setTrueError(true)
        setTimeout(() => {
            setTrueError(false)
        }, 2000)
    }

    const handleProCheckbox = () => {
        dispatch(TOGGLE_SHELTER())
    }

    const handleToggleShowPassword = () => {
        if (type === "password") {
            setIcon(eye);
            setType("text")
        } else {
            setIcon(eyeBlocked);
            setType("password")
        }
    }

    //------ Use Effect ------//
    //** On the registerReducer we modify redirect from false to true when the user is registered */
    //** If redirect is true we modify our shouldRedirectSignup state to true on 2 second */
    useEffect(() => {
        if (redirectAfterSignup) {
            setTimeout(() => {
                setShouldRedirectSignup(true);
            }, 2000);
        }
    }, [redirectAfterSignup]);

    return shouldRedirectSignup ? <Navigate to="/login" replace={true} /> : (

        <main>
            <div className="text-gray-900">

                {trueError && registerErrorUser && <Toast message={registerErrorUser} state={registerErrorUser} type={registerErrorUser === "Votre compte a bien été créé" ? 'bg-green-500' :'bg-red-500'}/>}
                {trueError && registerErrorRegex && <Toast message={registerErrorRegex} state={registerErrorRegex}/>}
                {isRegistered && <Modal title="Purrfect!" content="Votre inscription a bien été prise en compte 🙌"/>}

                <h1 className="text-xl text-center mt-10"> Vos informations</h1>
                <p className="text-base text-center">Ces informations seront utilisées pour votre connexion</p>
                <div className="md:mt-5 md:flex md:justify-center">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row md:justify-center md:gap-20 ml-2 mr-2">

                            {/* If it is a Shelter  */}
                            <div className="md:w-[50%]">
                                {isShelter ?
                                    <>
                                        <label className="label" htmlFor="siret">
                                            <span className="label-text text-gray-900">SIRET*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="siret"
                                            aria-label="siret"
                                            placeholder="SIRET"
                                            className="input input-bordered w-full max-w-xs border-pink-600 bg-amber-50"
                                            required={isShelter ? "required" : null}
                                            onChange={(event) => dispatch(CHANGE_FIELD({ inputName: "siret", inputValue: event.target.value }))}
                                            value={siret} />

                                        <label className="label" htmlFor="company-name">
                                            <span className="label-text text-gray-900">Nom du refuge*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="company-name"
                                            aria-label="nom-du-refuge"
                                            placeholder="Nom du refuge"
                                            className="input input-bordered w-full max-w-xs border-pink-600 bg-amber-50"
                                            required={isShelter ? "required" : null}
                                            onChange={(event) => dispatch(CHANGE_FIELD({ inputName: "company_name", inputValue: event.target.value }))}
                                            value={company_name} />
                                    </>
                                    : null
                                }
                                <div className="form-control">
                                    <label className="cursor-pointer label">
                                        <span className="label-text font-bold"> *Je suis un professionnel </span>
                                        <input
                                            type="checkbox"
                                            className="checkbox checkbox-secondary"
                                            aria-label="Professionnel"
                                            onChange={handleProCheckbox}
                                        />
                                    </label>
                                </div>
                                <label className="label" htmlFor="prenom">
                                    <span className="label-text text-gray-900">Prénom*</span>
                                </label>
                                <input
                                    type="text"
                                    id="prenom"
                                    aria-label="prenom"
                                    placeholder="votre prenom"
                                    className="input input-bordered w-full max-w-xs border-pink-600 bg-amber-50"
                                    required="required"
                                    onChange={(event) => dispatch(CHANGE_FIELD({ inputName: "firstname", inputValue: event.target.value }))}
                                    value={firstname} />

                                <label className="label" htmlFor="nom">
                                    <span className="label-text text-gray-900">Nom*</span>
                                </label>
                                <input
                                    type="text"
                                    id="nom"
                                    aria-label="nom"
                                    placeholder="votre nom"
                                    className="input input-bordered w-full max-w-xs border-pink-600 bg-amber-50"
                                    required="required"
                                    onChange={(event) => dispatch(CHANGE_FIELD({ inputName: "lastname", inputValue: event.target.value }))}
                                    value={lastname} />

                                <label className="label" htmlFor="telephone">
                                    <span className="label-text text-gray-900">Téléphone*</span>
                                </label>
                                <input
                                    type="text"
                                    id="telephone"
                                    aria-label="telephone"
                                    placeholder="numéro de téléphone"
                                    className="input input-bordered w-full max-w-xs border-pink-600 bg-amber-50"
                                    required="required"
                                    onChange={(event) => dispatch(CHANGE_FIELD({ inputName: "phone_number", inputValue: event.target.value }))}
                                    value={phone_number} />

                                <label className="label" htmlFor="adresse">
                                    <span className="label-text text-gray-900">Adresse*</span>
                                </label>
                                <input
                                    type="text"
                                    id="adresse"
                                    aria-label="adresse"
                                    placeholder="votre adresse 2 rue ..."
                                    className="input input-bordered w-full max-w-xs border-pink-600 bg-amber-50"
                                    required="required"
                                    onChange={(event) => dispatch(CHANGE_FIELD({ inputName: "address", inputValue: event.target.value }))}
                                    value={address} />

                                <label className="label" htmlFor="code-postal">
                                    <span className="label-text text-gray-900">Code Postal*</span>
                                </label>
                                <input
                                    type="text"
                                    id="code-postal"
                                    aria-label="code-postal"
                                    placeholder="votre code postal"
                                    className="input input-bordered w-full max-w-xs border-pink-600 bg-amber-50"
                                    required="required"
                                    onChange={(event) => dispatch(CHANGE_FIELD({ inputName: "postcode", inputValue: event.target.value }))}
                                    value={postcode} />
                            </div>
                            <div className="md:w-[50%]">
                                <label className="label" htmlFor="ville">
                                    <span className="label-text text-gray-900">Ville*</span>
                                </label>
                                <input
                                    type="text"
                                    id="ville"
                                    aria-label="ville"
                                    placeholder="votre ville"
                                    className="input input-bordered w-full max-w-xs border-pink-600 bg-amber-50"
                                    required="required"
                                    onChange={(event) => dispatch(CHANGE_FIELD({ inputName: "city", inputValue: event.target.value }))}
                                    value={city} />

                                <label className="label" htmlFor="email">
                                    <span className="label-text text-gray-900">Email*</span>
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    aria-label="email"
                                    placeholder="email@address.com"
                                    className="input input-bordered w-full max-w-xs border-pink-600 bg-amber-50"
                                    required="required"
                                    onChange={(event) => dispatch(CHANGE_FIELD({ inputName: "email", inputValue: event.target.value }))}
                                    value={email} />


                                <label className="label" htmlFor="mot-de-passe">
                                    <span className="label-text text-gray-900">Mot de passe*</span>
                                </label>
                                <div className="relative">
                                    <div className="input-group">
                                        <input
                                            type={type}
                                            id="mot-de-passe"
                                            aria-label="mot-de-passe"
                                            placeholder="mot-de-passe"
                                            className="input input-bordered w-full max-w-xs border-pink-600 bg-amber-50"
                                            required="required"
                                            onChange={(event) =>
                                                dispatch(CHANGE_FIELD({ inputName: "password", inputValue: event.target.value }))
                                            }
                                            value={password}
                                        />
                                        <span
                                            className="input-group-append"
                                            onClick={handleToggleShowPassword}
                                        >
                                            <Icon icon={eyeBlocked} />
                                        </span>
                                    </div>
                                </div>


                                <label className="label" htmlFor="confirmation-mot-de-passe">
                                    <span className="label-text text-gray-900">Confirmation du mot de passe*</span>
                                </label>
                                <div className="relative">
                                    <div className="input-group">
                                        <input
                                            type={type}
                                            id="confirmation-mot-de-passe"
                                            aria-label="confirmation-mot-de-passe"
                                            placeholder="confirmation mot de passe"
                                            className="input input-bordered w-full max-w-xs border-pink-600 bg-amber-50"
                                            required="required"
                                            onChange={(event) =>
                                                dispatch(CHANGE_FIELD({ inputName: "passwordConfirm", inputValue: event.target.value }))
                                            }
                                            value={passwordConfirm}
                                        />
                                        <span
                                            className="input-group-append"
                                            onClick={handleToggleShowPassword}
                                        >
                                            <Icon icon={eyeBlocked} />
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="flex justify-center py-16 md:mt-5">
                            <button className="btn btn-secondary" aria-label="Valider" > {isRegistered ? "Envoyé" : "Valider"}</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}
