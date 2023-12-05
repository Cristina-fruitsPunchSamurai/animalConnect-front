
import { Icon } from "react-icons-kit";
import {paw} from 'react-icons-kit/fa/paw'

export default function Fonctionnement() {
    return(
        <main className="mt-10 md:ml-20 md:mr-20 ">
            <h1 className="text-2xl text-center md:text-3xl mb-5 text-gray-900"> Comment ça marche ?</h1>
            <section className="mb-10">
                <div className="flex">
                    <h2 className="text-xl mb-2 text-pink-600 mr-5 md:mb-5 md:text-2xl">Adopteur</h2>
                    <Icon icon={paw} />
                </div>
                <ol className="text-sm text-gray-900 md:leading-6 md:text-base">
                    <li className="mb-5"> 1. J'utilise le filtre pour chercher un animal selon <span className="font-bold">son espèce, son genre, son âge ... </span> </li>
                    <li className="mb-5"> 2. Je peux ajouter des animaux aux favoris pour me faciliter mon choix final</li>
                    <li className="mb-5"> 3. Une fois que j'ai un coup de 🧡, je candidate à l'adoption. A ma candidature j'ajoute un petit message de présentation :
                    <span className="font-bold">  pourquoi suis-je le candidat idéal ?</span></li>
                    <li> 4. J'attends la réponse du proprietaire, ma candidature sera soit acceptée soit rejetée (mais tkt il y aura encore plein d'autres animaux qui cherchent une famille) </li>
                </ol>
            </section>
            <section>
                <div className="flex">
                    <h2 className="text-xl mb-2 text-purple-900 mr-5 md:mb-5 md:text-2xl">Donneur</h2>
                    <Icon icon={paw} />
                </div>
                <ol className="text-sm text-gray-900 md:leading-6 md:text-base">
                    <li className="mb-5"> 1. Je ne peux plus malheureusement garder mon animal de compagnie, je peux ajouter une annonce de don. J'indique toutes les caractéristiques nécessaires
                    <span className="font-bold"> nom, couleur, age, poids, type, une petite description ... </span></li>
                    <li className="mb-5"> 2. Je reçois des candidatures des personnes souhaitant adopter mon 🐶. </li>
                    <li className="mb-5"> 3. Je lis ATTENTIVEMENT les candidatures, c'est ma responsabilité de donner mon animal à une personne que
                    je juge responsable et qui puisse lui apporter un environnement comfortable</li>
                    <li> 4. Je valide ou rejette la/les candidature(s) reçue(s) </li>
                </ol>

            </section>
        </main>
    )
}