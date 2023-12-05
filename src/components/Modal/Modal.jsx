import React from 'react'
import { useState } from 'react'

export default function Modal({title, content}) {
    const [openModal, setOpenModal] = useState(true);

    const handleCloseModal=()=>{
        setOpenModal((prevState) => !prevState)
    }

    return (
        <>
            <dialog id="my_modal_3" className={`modal ${openModal ? "modal-open" : null}`}>

                <form method="dialog" className="modal-box">
                    <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={handleCloseModal}>✕</button>
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{content}</p>
                </form>
            </dialog>
    </>
    )
}
