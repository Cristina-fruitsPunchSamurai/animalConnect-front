//------ Media imports ------//
import logo from '../../assets/logo.png'
import man from '../../assets/avatar-homme.png'
import { NavLink, Link } from 'react-router-dom'
import { BASE_PICTURE_URL } from '../../utils/API'

//------ React imports ------//
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

//------ Dispatch actions imports ------//
import { LOGOUT } from "../../store/actions/userActions"

export default function Navbar() {
//------ Variables access with useSelector ------//
  const isLogged = useSelector((state) => state.user.isLogged)
  //const avatar = useSelector(state => state.user.profileInfo.picture);
  const picture = localStorage.getItem('picture');


//------ Variables dispatch & navigate ------//
  const dispatch = useDispatch();
  const navigate = useNavigate();

//------ Handlers ------//
  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(LOGOUT());
    navigate('/');
}

    return (
      <nav>
        <div className="navbar bg-white text-gray-900 flex justify-between">
          <NavLink to="/">
            <div>
                <img src={logo} alt="animal-connect-logo" className='w-40' />
            </div>
          </NavLink>

          <div className='hidden md:block'>
            <div className='dropdown'>
              <button href="" className='mr-16 dropdown'>Adoption</button>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box origin-center w-36 right-0">
                <li className='mt-2 '><Link to="/animals">J'adopte</Link></li>
                <li className='mt-2'><Link to="/donation">Je Donne</Link></li>
              </ul>
            </div>

            <div className='dropdown'>
              <button href="" className='mr-16 dropdown'>Signalement</button>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box origin-center w-36 right-0">
                <li className='mt-2 '><Link to="/whattodo">Que Faire ?</Link></li>
              </ul>
            </div>

            <div className='dropdown'>
              <button href="" className='mr-16 dropdown'>À propos</button>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box origin-center w-36 right-0">
                <li className='mt-2 '><Link to="/faq">Fonctionnement</Link></li>
                <li className='mt-2'><Link to="/rules">Règles</Link></li>
              </ul>
            </div>
          </div>
          { !isLogged ?
          <div className='hidden md:block'>
            <NavLink to='/login'><button className='btn btn-secondary'>Connexion</button></NavLink>
          </div>
          :
          <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar w-12">
              <div className="rounded-full">
                {picture == 'null' || picture === '' ? (
                    <img src={man}/>
                  ) : (
                    <img src={`${BASE_PICTURE_URL}/${picture}`}/>
                  )}

              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
            <li className='mt-2 font-extrabold'><Link to="/profile">Mon profil</Link></li>
            <div className="my-4 h-0.5 border-t-0 border-solid border-gray-800 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25 dark:opacity-100">
              </div>
            <li className='mt-2 '><Link to="/favoris">Favoris</Link></li>
            <div className="my-4 h-0.5 border-t-0 border-solid border-gray-800 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25 dark:opacity-100">
              </div>
            <li className='mt-2 '><Link to="/candidature">Mes candidatures</Link></li>
            <div className="my-4 h-0.5 border-t-0 border-solid border-gray-800 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25 dark:opacity-100">
              </div>
            <li className='mt-2 '><Link to="/annonce">Mes animaux</Link></li>
            <div className="my-4 h-0.5 border-t-0 border-solid border-gray-800 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25 dark:opacity-100">
              </div>
            <button className='btn mt-2 btn-secondary'onClick={handleLogout}>Deconnexion</button>
            </ul>
          </div>
        </div>
          }

          <div className="md:hidden">
            <div>
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>

                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-200 rounded-box origin-top-left w-52 right-0">
                  <h1 className='font-extrabold text-lg'>Adoption</h1>
                  <li className='mt-2'><Link to="/animals">J'adopte</Link></li>
                  <li className='mt-2'><Link to="/donation">Je Donne</Link></li>

                  <div className="my-4 h-0.5 border-t-0 border-solid border-gray-800 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25 dark:opacity-100">
              </div>

                  <h1 className='font-extrabold text-lg'>Signalement</h1>
                  <li className='mt-2'><Link to="/whattodo">Que Faire ?</Link></li>

                  <div className="my-4 h-0.5 border-t-0 border-solid border-gray-800 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25 dark:opacity-100">
              </div>

                  <h1 className='font-extrabold text-lg'>À propos</h1>
                  <li className='mt-2'><Link to="/faq">Fonctionnement</Link></li>
                  <li className='mt-2'><Link to="/rules">Règles</Link></li>
                  <div className="my-4 h-0.5 border-t-0 border-solid border-gray-800 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25 dark:opacity-100">
              </div>

                  {isLogged ?
                  <button className='btn mt-2 btn-secondary'onClick={handleLogout}>Deconnexion</button>
                  :
                  <button className='btn mt-2 btn-secondary'><Link to="/login">Connexion</Link></button>
                  }
                </ul>
              </div>
            </div>

          </div>

      </div>
    </nav>
    )
}
