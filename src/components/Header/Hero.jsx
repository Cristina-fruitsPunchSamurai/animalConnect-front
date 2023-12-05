import { useState, useEffect } from 'react';
import chiens from '../../assets/chiens.jpg'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CHIEN, CHAT, NAC, IS_CHECKED_DOG, IS_CHECKED_CAT, IS_CHECKED_NAC } from '../../store/actions/filterActions';

export default function Hero({ chien, chat, nac }) {

    const isCheckedDog = useSelector(state => state.filter.isCheckedDog)
    const isCheckedCat = useSelector(state => state.filter.isCheckedCat)
    const isCheckedNac = useSelector(state => state.filter.isCheckedNac)


    const dispatch = useDispatch()

    const handleChangeChien = () => {
        dispatch(CHIEN());
        dispatch(IS_CHECKED_DOG())
    }

    const handleChangeChat = () => {
        dispatch(CHAT());
        dispatch(IS_CHECKED_CAT())
    }

    const handleChangeNac = () => {
        dispatch(NAC());
        dispatch(IS_CHECKED_NAC())
    }

    return (
        <section className="mt-5 mb-5">
            <div className="relative">

                <img className="h-[40vh] md:h-[60vh] md:w-full object-cover" src={chiens} alt="chiens" />

                <h1 className="absolute top-0 h-10 md:w-full md:h-20 md:text-3xl bg-white p-3 text-gray-900 text-center text-xs opacity-75"> Adopte ton animal de compagnie idéal de façon responsable</h1>
                <form className="absolute bottom-0 w-full h-15 md:w-full md:h-20 md:text-xl bg-white p-3 text-gray-900 flex flex-col md:flex-row items-center justify-center opacity-75 text-xs mx-auto">
                    <div className="flex md:flex-row justify-center items-center gap-5">
                        <div className="flex md:gap-2 md:items-center">
                            <input type="checkbox" className="checkbox checkbox-xs border-black" checked={isCheckedDog} value={chien} onChange={handleChangeChien} />
                            <label> Chien</label>
                        </div>
                        <div className="flex md:gap-2 md:items-center">
                            <input type="checkbox" className="checkbox checkbox-xs border-black" checked={isCheckedCat} onChange={handleChangeChat} />
                            <label> Chat</label>
                        </div>
                        <div className="flex md:gap-2 md:items-center">
                            <input type="checkbox" className="checkbox checkbox-xs border-black" checked={isCheckedNac} onChange={handleChangeNac} />
                            <label> Nac</label>
                        </div>
                        <button className="btn btn-sm btn-secondary mt-2 md:mt-0">
                            <Link to="/animals">Rechercher</Link>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
