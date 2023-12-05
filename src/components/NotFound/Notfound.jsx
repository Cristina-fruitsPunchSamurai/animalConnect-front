
import image from '../../assets/page-not-found.jpg';
import { Link } from 'react-router-dom';

export default function Notfound() {
    return (
        <>
            <div className='flex justify-center mb-5 mt-3 relative'>
                <img className='w-full h-auto md:w-[50%]' src={image} alt='page not found' />
                <div className='absolute bottom-0 '>
                    <Link to='/'>
                        <p className='text-base md:text-lg text-center text-green-600 font-bold underline'>
                        👉 Mais no problem, vous pouvez retourner à la page d'accueil ✨
                        </p>
                    </Link>
                </div>
            </div>
        </>
    )
}
