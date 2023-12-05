import { Link, useNavigate } from "react-router-dom"
import { LOGIN, INPUT_EMAIL, INPUT_PASSWORD } from "../../store/actions/userActions"
import { useSelector, useDispatch } from 'react-redux'
import Modal from "../Modal/Modal";
import Toast from "../Toast";
import { useEffect, useState } from "react";

import { Icon } from "react-icons-kit";
import { eye } from 'react-icons-kit/icomoon/eye'
import { eyeBlocked } from 'react-icons-kit/icomoon/eyeBlocked'


export default function Connexion() {

    //------ Access à nos états du store------//
    /** Ces états sont initalisés dans notre store */
    const { email, password } = useSelector(state => state.user.credentials);
    const isLogged = useSelector(state => state.user.isLogged);
    const loginError = useSelector(state => state.user.loginError);
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(eyeBlocked);

    //------ Local states ------//
    const [showToast, setShowToast] = useState(false);

    //------ On fait appel au dispatch de Redux Toolkit ------//
    const dispatch = useDispatch();

    //------ Handlers ------//
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(LOGIN());
        setShowToast(true)
        setTimeout(() => {
            setShowToast(false)
        }, 2000);
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

    const information = (message) => {
        if (message == 'Le mot de passe n’est pas correct'|| message ==  "L'email est invalide") {
            return 'Essayez à nouveau svp'
        } else if (message == 'Connexion Réussie !') {
            return 'Connexion Réussie !'
        } else {
            return 'Une erreur est survenue'
        }
    }

    return (
        <>
            {showToast &&
            <Toast message={information(loginError)} state={loginError} type={loginError === "Connexion Réussie !" ? 'bg-green-500' : 'bg-red-500'}/> }
            {isLogged ?
            <Modal title={`Hello`} content="ça fait plaisir de te re-voir 👋, on te redirige à la page d'accueil pour découvrir nos petites bêtes 🐶"/> : null}

            <form
                onSubmit={handleSubmit}>
                <h1 className="p-10 pt-20 font-bold text-center text-3xl">Connexion</h1>
                <div className="flex justify-center items-center" >
                    <div className="form-control w-full max-w-xs">
                        <label className="label justify-center" htmlFor="adresse-mail">
                            <span className="label-text">Adresse Mail</span>
                        </label>
                        <input
                            type="text"
                            id="adresse-mail"
                            aria-label="adresse-mail"
                            placeholder="e-mail@mail.com"
                            className="input input-bordered w-full max-w-xs"
                            onChange={(event) => dispatch(INPUT_EMAIL(event.target.value))}
                            value={email}
                        />
                        <label className="label justify-center" htmlFor="mot-de-passe">
                            <span className="label-text">Mot de passe</span>
                        </label>
                        <div className="relative">
                            <div className="input-group">
                            <input
                                type={type}
                                id="mot-de-passe"
                                aria-label="mot de passe"
                                placeholder="mot de passe"
                                className="input input-bordered w-full max-w-xs"
                                onChange={(event) => dispatch(INPUT_PASSWORD(event.target.value))}
                                value={password} />
                            <span
                                className="input-group-append"
                                onClick={handleToggleShowPassword}
                            >
                                <Icon icon={eyeBlocked} />
                            </span>
                        </div>
                        </div>
                            <div className="flex pt-10 justify-center">
                                <button className="btn btn-secondary">Se connecter</button>
                            </div>
                        </div>
                    </div>
                    <div className="my-12 h-0.5 border-t-0 border-solid border-gray-800 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25 dark:opacity-100">
                    </div>
                    <h2 className="pb-10 font-bold text-center text-1xl">Pas de compte ?</h2>
                    <div className="flex pb-20 justify-center">
                        <Link to='/signup'><button className="btn btn-secondary">Créer un compte</button></Link>
                    </div>
            </form>
        </>

    )
}