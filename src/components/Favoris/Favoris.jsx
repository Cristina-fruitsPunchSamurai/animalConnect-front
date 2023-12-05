import { useEffect, useState } from "react"
import FavoriteCard from "./FavoriteCard"
import { FAVORITES } from "../../store/actions/favoritesActions"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function Favoris() {

    const [addFav, setaddFav] = useState(false)

    const bookmarks = useSelector(state => state.favorites.bookmarks)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(FAVORITES())
    }, [addFav])



    return(
        <main>
            <h1 className="p-10 pt-20 font-bold text-center text-3xl">Mes Favoris</h1>

            {bookmarks.length >= 1 ?
                <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {bookmarks.map((animal) => (
                        <div className="flex flex-col justify-center items-center" key={animal.id}>
                        <FavoriteCard
                            key={animal.id}
                            name={animal.name}
                            age={animal.age}
                            gender={animal.gender}
                            id={animal.id}
                            picture={animal.picture}
                            addFav={addFav}
                            setaddFav={setaddFav}
                        />

                        </div>
                    ))}
                </div>
                </>

                    :
                    <div className="flex justify-center items-center h-[50vh] flex-col">
                        <p>Vous n'avez pas encore ajouter de favoris !</p>
                        <Link to="/animals">
                            <button className="btn btn-secondary mt-8">Voir nos animaux</button>
                        </Link>
                    </div>

            }
        </main>
    )
}