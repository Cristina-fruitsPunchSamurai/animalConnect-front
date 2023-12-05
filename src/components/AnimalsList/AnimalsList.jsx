import { useEffect, useState } from "react";
import AnimalsCard from "./AnimalsCard";
import Filter from "./Filter";
import axios from "axios";
import { BASE_URL } from "../../utils/API";
import doggie from "../../assets/doggie.gif";
export default function AnimalsList({ chien, chat, nac}) {

//------ States ------//
    const [repos, setRepos] = useState([]);
    const [loader, setLoader] = useState(false)
    const [specie, setSpecie] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState("")
    const [filterAge, setFilterAge] = useState('')
    const [message, setMessage] = useState('');
    const [error, setError] = useState("");

//------ API CALL ------//
//* Expliquer toute cette fonction  *//
    const fetchAnimal = async () => {


      try {
        const res = await axios.get(`${BASE_URL}/animals/filter?${chien ? "speciesNames=Chien&" : ""}`+ `${chat ? "speciesNames=Chat&" : ""}`+`${nac ? "speciesNames=Serpent&speciesNames=Lézard&speciesNames=Tortue&speciesNames=Furet&speciesNames=Lapin&speciesNames=Hamster&speciesNames=Oiseau" : ""}`);
        setRepos(res.data);
        setMessage(res.data.length)
        setLoader(true)

      } catch (error) {
        setError(error)
      }
    };

    const fetchSpecie = async () => {
      try{
        if (age === "Moins de 2 ans") {
          setFilterAge("&age=1")
        } else if (age === "De 2 à 4 ans") {
          setFilterAge("&age=2&age=3")
        } else if (age === "De 4 à 7 ans") {
          setFilterAge("&age=4&age=5&age=6")
        } else if (age === "Plus de 7 ans") {
          setFilterAge("&age=7&age=8&age=9")
        }

        const res = await axios.get(`${BASE_URL}/animals/filter?${specie ? `&speciesNames=${specie}` : "" }` + `${gender ? `&gender=${gender}` : "" }` + `${age ? `${filterAge}` : "" }`)
        setRepos(res.data)
        setMessage(res.data.length)
      } catch(error) {
        setError(error)
      }
    }

    useEffect(() => {
      if(specie !== null || gender !== null || age !== null) {
        fetchSpecie()
      }
    }, [specie, gender, age, filterAge])

    useEffect(() => {
      setTimeout(() => {
        fetchAnimal();
        setSpecie('')
        setGender('')
        setAge('')
      }, 2000);
    }, []);

    return(
      <main>
            <div className='flex justify-center items-center md:mb-10 md:justify-around'>
                <h1 className="text-2xl text-left md:text-3xl"> Pôle Adoption</h1>
                <img className='w-40 md:w-64' src={doggie} />
            </div>
            <div className="my-12 h-0.5 border-t-0 border-solid border-gray-800 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25 dark:opacity-100">
            </div>
          {/* <h1 className="p-10 pt-20 font-bold text-center text-3xl">J'adopte</h1> */}
        <div className="flex lg:flex-row flex-col">
          <section>
            <div className="mx-4">
              <Filter specie={specie} setSpecie={setSpecie} gender={gender} setGender={setGender} age={age} setAge={setAge} setRepos={setRepos} setMessage={setMessage}/>
            </div>
          </section>
          {loader ?
            <div>

              { repos.length >= 1 ?

                <div>
                  { repos.length == 1 ?
                    <div>{message} Résultat correspondant</div>
                    :
                    <div>{message} Résultats correspondants</div>
                  }

                  <div className="flex justify-center mb-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                      {repos.map((animal) => (
                        <div key={animal.id} className="w-full">
                          {/* <Link to ={`/animal/${animal.id}`}> */}
                          <AnimalsCard
                            name={animal.name}
                            age={animal.age}
                            gender={animal.gender}
                            id={animal.id}
                            picture={animal.picture}
                            />
                          {/* </Link> */}



                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              :
              <div className="flex flex-col justify-center w-[100vw] lg:w-[60vw] my-12 items-center">
                <p>Oups ! Votre recherche n'a rien donné :/</p>
              </div>
              }
            </div>
            :
            <div className="flex justify-center w-[100%] my-12">
              <span className="loading loading-dots loading-lg"></span>
            </div>
          }
        </div>
      </main>
    )
}
