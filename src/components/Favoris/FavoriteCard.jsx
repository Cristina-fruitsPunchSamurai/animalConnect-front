import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DELETE_FAVORITE } from '../../store/actions/favoritesActions';
import { BASE_PICTURE_URL } from '../../utils/API';

export default function AnimalsCard({ name, age, gender, id, picture,addFav, setaddFav }) {

  const dispatch = useDispatch()

  const handleDelete = async () => {
    dispatch(DELETE_FAVORITE(id))
    setaddFav(!addFav)
  }

  return (
    <div className="w-full">
      <div className="rounded-[20px] bg-white shadow-xl p-4">
      <Link to ={`/animal/${id}`}>
        <div className="relative w-full">
          <img src={`${BASE_PICTURE_URL}/${picture}`} className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full" alt="" />
        </div>
        <div className="mb-3 text-center">
          <div className="mb-2">
            <p className="text-lg font-bold text-navy-700"> {name} </p>
            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">{age} ans </p>
          </div>
        </div>
        <div className="mb-3 text-center">
          <div className="mb-2">
            <p className="!mb-0 text-sm font-bold text-brand-500"> {gender} </p>
          </div>
        </div>
      </Link>
      <div className='flex justify-center mt-8'>
        <button className='btn' onClick={handleDelete}>Supprimer des favoris</button>
      </div>
      </div>
    </div>
  );
}