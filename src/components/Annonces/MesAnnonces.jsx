import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { USER_ADS } from '../../store/actions/userAdsActions';
import { Link } from 'react-router-dom';
import { BASE_PICTURE_URL } from '../../utils/API';

export default function UserAdsPage() {

//------ On fait appel au dispatch de Redux ------//
  const dispatch = useDispatch();
//------ Nos états de Redux ------//
  const userAds = useSelector((state) => state.userAds.userAds);

  useEffect(() => {
    dispatch(USER_ADS());
  }, [dispatch]);

  return (
    <main className="mb-8">
      <h1 className="p-10 pt-20 font-bold text-center text-3xl">Mes Annonces</h1>
      {/* <div className="overflow-x-auto">
        {userAds.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th className="text-xl"></th>
                <th className="text-xl">Nom</th>
                <th className="text-xl">Frais</th>
                <th className="text-xl">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userAds.map((ad) => (
                <tr key={ad.id}>
                  <td>
                    <img src={`${BASE_PICTURE_URL}/${ad.picture}`} alt={ad.name} className="w-16 h-16 object-cover" /></td>
                  <td className="text-lg">{ad.name}</td>
                  <td className="text-lg">{ad.price} €</td>
                  <td>
                    <Link to={`/annonce/${ad.id}`}>
                      <button className="btn btn-primary btn-md mr-2">
                        Détails
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex justify-center items-center h-[50vh] flex-col">
            <p>Vous n'avez pas encore ajouté d'annonces.</p>
            <Link to="/donation">
              <button className="btn btn-secondary mt-8">Poster une annonce</button>
            </Link>
          </div>
        )}
      </div> */}


<div className="overflow-x-auto mb-48">
        <div className="min-w-screen flex items-center justify-center font-sans overflow-hidden">
            <div className="w-full lg:w-5/6">
                <div className="bg-white shadow-md rounded my-6">
                {userAds.length > 0 ? (
                    <table className="min-w-max w-full table-auto">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Photo</th>
                                <th className="py-3 px-6 text-left">Nom</th>
                                <th className="py-3 px-6 text-center hidden md:block">Frais</th>
                                <th className="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                        {userAds.map((ad) => (
                            <tr key={ad.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="mr-2">
                                            <img src={`${BASE_PICTURE_URL}/${ad.picture}`} alt={ad.name} className="w-16 h-16 object-cover" />
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left">
                                    <div className="flex items-center">
                                        <span>{ad.name}</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center hidden md:flex md:justify-center md:items-center md:py-8">
                                    <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">{ad.price} €</span>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex item-center justify-center">

                                        <Link to={`/animal/${ad.id}`}>
                                          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                              </svg>
                                          </div>
                                        </Link>

                                        <Link to={`/annonce/${ad.id}`}>
                                          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                              </svg>
                                          </div>
                                        </Link>

                                    </div>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    ) : (
                      <div className="flex justify-center items-center h-[40vh] flex-col">
                        <p>Vous n'avez pas encore ajouté d'annonces.</p>
                        <Link to="/donation">
                          <button className="btn btn-secondary mt-8">Poster une annonce</button>
                        </Link>
                      </div>
                    )}
                </div>
            </div>
        </div>
    </div>


    </main>
  );
}
