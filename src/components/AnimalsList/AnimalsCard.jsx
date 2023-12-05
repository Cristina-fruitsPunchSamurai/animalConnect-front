import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ADD_FAVORITE } from '../../store/actions/favoritesActions';
import { BASE_PICTURE_URL } from '../../utils/API';
import Toast from '../Toast'
import { useEffect, useState } from 'react';


export default function AnimalsCard({ name, age, gender, picture, id }) {
  //------ STATES ------//
  const [toast, setToast] = useState(false);
  const { message } = useSelector(state => state.favorites)
  const isLogged = useSelector((state) => state.user.isLogged)
  const [color, setColor] = useState('')

  //------ We use dispatch------//
  const dispatch = useDispatch()

  //------ Handlers ------//
  const handleClick = async () => {
    dispatch(ADD_FAVORITE(id))
    setToast(true)
    setTimeout(() => {
      setToast(false)
    }, 3000)
  }

  useEffect(() => {
    if (message === 'Animal ajouté aux favoris') {
      setColor('bg-green-500')
    } else {
      setColor('bg-red-500')
    }
  }, [message])



  return (
    <div className="w-full">
      {toast && <Toast message={message} state={toast} type={color} />}
      <div className="rounded-[20px] bg-white shadow-xl p-4">
        <Link to={`/animal/${id}`}>
          <div className="relative w-full">
            <img src={`${BASE_PICTURE_URL}/${picture}`} className="mb-3 h-60 w-full object-cover rounded-xl 3xl:h-full 3xl:w-full" alt="" />
          </div>
          <div className="mb-3 text-center">
            <div className="mb-2">
              <p className="text-lg font-bold text-navy-700"> {name} </p>
              <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">{age > 1 ? `${age} ans` : `${age} an`}</p>
            </div>
          </div>
          <div className="mb-3 text-center">
            <div className="mb-2">
              <p className="!mb-0 text-sm font-bold text-brand-500"> {gender} </p>
            </div>
          </div>
        </Link>
        <div className='flex justify-center mt-8'>

          {isLogged
          ? <button className='btn btn-outline btn-secondary' onClick={handleClick}>Ajouter aux Favoris</button>
          : null }

        </div>

      </div>
    </div>
  );
}