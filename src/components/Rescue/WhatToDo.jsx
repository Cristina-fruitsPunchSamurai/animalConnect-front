import doggie from '../../assets/doggie.gif'
import FAQComponent from '../FAQ/FAQComponent'

export default function WhatToDo() {
    return (
        <main className='m-5'>
            <div className='flex justify-center items-center md:mb-10 md:justify-around'>
                <h1 className="text-2xl text-left md:text-3xl"> Pôle Signalement</h1>
                <img className='w-40 md:w-64' src={doggie} />
            </div>
            <div className="my-4 h-0.5 border-t-0 border-solid border-gray-800 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25 dark:opacity-100">
            </div>


            <div className='text-center mt-16 mx-16 mb-16'>
                <h1 className='my-16 text-3xl font-bold'>Que Faire ?</h1>
                <p className='mb-8'>Vous souhaitez savoir comment procéder lorsque vous trouver un animal érrant, perdu ou abandonner ? Ou bien vous vous apercevez d'une maltraitance animal chez un particulier et vous souhaitez déclarer un signalement ? </p>
                <p>Vous trouverez toutes les infos nécessaires à votre démarche ci-dessous, en cliquant sur l'onglet correspondant.</p>
            </div>
            <div className="my-4 h-0.5 border-t-0 border-solid border-gray-800 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25 dark:opacity-100">
            </div>

            <div className='text-center mt-16 mx-16 mb-16'>
                <h1 className='my-16 text-3xl font-bold'>Contacts</h1>
                <p className='mb-8'>Vous souhaitez savoir comment procéder lorsque vous trouver un animal érrant, perdu ou abandonner ? Ou bien vous vous apercevez d'une maltraitance animal chez un particulier et vous souhaitez déclarer un signalement ? </p>
                <p>Vous trouverez toutes les infos nécessaires à votre démarche ci-dessous, en cliquant sur l'onglet correspondant.</p>
            </div>

            <div className="bg-base-100 flex flex-col justify-center mt-16 items-center lg:flex-row">
                <div className="card-body lg:w-1/2 shadow-xl mx-10 mb-10">
                    <h2 className=" text-center font-bold text-xl">Gendarmerie</h2>
                    <p className='lg:py-8 text-center'>En cas de maltraitance animale, vous pouvez contacter le :</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-secondary">17</button>
                    </div>
                </div>

                <div className="card-body lg:w-1/2 shadow-xl mx-10 mb-10">
                    <h2 className="text-center font-bold text-xl">SPA</h2>
                    <p className='lg:py-8 text-center'>Si vous trouvez un animal érrant, vous pouvez contacter le :</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-secondary">01 43 80 97 06</button>
                    </div>
                </div>

                <div className="card-body lg:w-1/2 shadow-xl mx-10 mb-10">
                    <h2 className="text-center font-bold text-xl">Clinique Vétérinaire</h2>
                    <p className='lg:py-8 text-center'>En cas de détresse animale, contactez le :</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-secondary">03 84 82 09 70</button>
                    </div>
                </div>
            </div>
            <div className="my-4 h-0.5 border-t-0 border-solid border-gray-800 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25 dark:opacity-100">
            </div>


            <div className='text-center mt-16 lg:mx-16 mb-16'>
                <h1 className='my-16 text-3xl font-bold'>FAQ</h1>
                <FAQComponent question="Vous avez perdu votre animal de compagnie ?" />
            </div>
        </main>
    )
}