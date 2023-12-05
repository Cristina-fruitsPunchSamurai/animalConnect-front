
//------ React imports ------//
import {Routes, Route, Navigate} from 'react-router-dom'
//------ Redux Toolkit imports ------//
import { useSelector, useDispatch } from 'react-redux'
import { LOGIN, LOGOUT } from './store/actions/userActions'

//------ All components imports------//
import Header from "./components/Header"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Footer from './components/Footer/Footer'
import AnimalsList from "./components/AnimalsList/AnimalsList"
import AnimalPage from "./components/AnimalPage/AnimalPage"
import Connexion from "./components/Connexion/Connexion"
import SignUpForm from "./components/SignUpForm/SignUpForm"
import Profile from "./components/Profile/Profile"
import Donation from "./components/Donation"
import WhatToDo from "./components/Rescue/WhatToDo"
import Rules from "./components/AboutUs/Rules"
import Favoris from "./components/Favoris/Favoris"
import AboutUs from "./components/AboutUs/"
import Candidatures from './components/Candidatures/Candidatures'
import Annonces from './components/Annonces/MesAnnonces'
import AnnonceDetails from './components/AnnonceDetails/AnnonceDetails'
import Notfound from './components/NotFound/Notfound'

//------ Other imports------//
import PrivateRoutes from './utils/PrivateRoutes'
import AnonymousRoutes from './utils/AnonymousRoutes'

import { useState,useEffect } from 'react'


export default function App() {

  const chien = useSelector(state => state.filter.chien);
  const chat = useSelector(state => state.filter.chat);
  const nac = useSelector(state => state.filter.nac);
  const isLogged = useSelector(state => state.user.isLogged);
  const userId = useSelector(state => state.user.userId);
  const token = localStorage.getItem('token');
  const [userPicture, setUserPicture] = useState(null);
  const picture = localStorage.getItem('picture');


  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(LOGIN.fulfilled({ token }));

    }
  }, [token]);


      return (
        <>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Header chien={chien} chat={chat} nac={nac}/>
                  <Home />
                </>
              }
            />

            {/* When logged in the user cannot acces to login and signup routes*/}
              <Route element={<AnonymousRoutes />}>
                <Route path='/login' element={<Connexion />}/>
                <Route path='/signup' element={<SignUpForm /> } />
            </Route>
            {/* ----- */}

            {/* This is the parent private routes component*/}
            <Route element={<PrivateRoutes />}>
              <Route path='/donation' element={<Donation/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/candidature/' element={<Candidatures/>} />
              <Route path='/annonce/' element={<Annonces/>} />
              <Route path='/annonce/:id' element={<AnnonceDetails/>} />
            </Route>

            {/* ----- */}
            <Route path='/whattodo' element={<WhatToDo/>} />
            <Route path='/faq' element={<AboutUs />} />
            <Route path='/rules' element={<Rules/>} />
            <Route path='/animals/' element={<AnimalsList chien={chien} chat={chat} nac={nac}/>} />
            <Route path='/animal/:id' element={<AnimalPage/>} />
            <Route path='/whattodo/' element={<WhatToDo/>} />
            <Route path='/favoris/' element={<Favoris/>} />
            <Route path='/*' element={<Notfound />} />
          </Routes>
          <Footer />
        </>
      )
}

