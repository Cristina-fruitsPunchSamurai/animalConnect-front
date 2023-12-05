
import { Link } from "react-router-dom"

export default function Rules() {
    return(
        <main className="mt-10 md:ml-20 md:mr-20 ">
            <h1 className="text-2xl text-center md:text-3xl mb-5 text-gray-900"> Les règles d'une adoption responsable</h1>
            <p className="text-sm leading-7 mb-5 md:text-base md:leading-9"> Adopter un animal doit être un <span className="font-bold text-red-500">acte réflechi</span>, cela veut dire accueillir un nouveau membre au sein de la famille.
            Selon le type d'animal choisi il pourrait y avoir des éléments à prendre en compte avant de prendre une décision.
            </p>
            <section className="mb-5">
                <h2 className="text-xl mb-5 md:text-2xl">Adopter un chien 🐶</h2>
                <ol className="text-sm leading-7 md:text-base md:leading-9">
                    <li>
                        1. Un chien est un passionné de l'aventure, il faudra donc prendre en compte qu'il faut qu'il prenne des bain réguliers, de brossage, entretien des poils et des ongles.
                    </li>
                    <li>
                        2. Un chien a besoin de se dépenser, il faudra donc prévoir des balades régulières, des jeux, des activités pour le stimuler et l'aider à socialiser.
                    </li>
                    <li>
                        3. Il y aura des jours où il ne se comportera pas comme vous le souhaitez, il ne faudra pas s'enerver et perdre la patience. Un chien peut être éduqué, vous pouvez lui apprendre les bonnes manières.
                    </li>
                    <li>
                        4. Il faut être conscient qu'avoir un chien nécessite d'un budget : alimentation, soinds, jouets, imprévus,assurance...
                    </li>
                    <li>
                        5. Un chien est un être vivant, il faut donc lui apporter de l'amour, de l'attention, de la patience et de la compréhension.
                    </li>
                    <li>
                        6. En tant que propriétaire d'un chien il faut prendre compte des lois. Parfois il faudra lui faire porter une muselière (selon la catégorie) et vous êtes obligé de ramasser ses déjections.
                    </li>
                    <li>
                        7. La castration d'un chien est obligatoire pour certaines catégories de chien mais conseillée pour les autres catégories afin d'éviter une reproduction non désirée et garantir l'équilibre de votre chien. Il faut savoir que les grosseses non désirées sont sources d'abandons par des maîtres dépassés, voire sources de maltraitance animale.
                    </li>
                </ol>
                <Link to='https://agriculture.gouv.fr/animaux-de-compagnie-equides-tout-savoir-sur-le-certificat-dengagement-et-de-connaissance'>
                    <h3 className="text-base mt-4 text-indigo-500 font-bold  underline"> Avant d'adopter vous devez signe le certificat d'engagement et de connaissance </h3>
                </Link>
            </section>
            <div className="my-12 h-0.5 border-t-0 border-solid border-gray-800 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25 dark:opacity-100">
            </div>
            <section className="mb-5">
                <h2 className="text-xl mb-5 md:text-2xl">Adopter un chat 🐱</h2>
                    <ol className="text-sm leading-7 md:text-base md:leading-9">
                    <li>
                        1. Les chats vivent longtemps, il faudra prendre en compte que nos petite bêtes auront besoin de nous dans un futur lointain.
                    </li>
                    <li>
                        2. Avoir un chat nécessite d'un budget : alimentation, litière, accessoirs, grattoir, soins...
                    </li>
                    <li>
                        3. Même si généralement indépendant, un chat a besoin d'attention et de compagnie : le caresser s'il aime ça, jouer avec lui, lui parler.
                    </li>
                    <li>
                        4. Un élément important à prendre en compte c'est la litière, un chat est propre mais le choix de la litière est important. Elle doit être assez grande pour que le chat puisse rentrer et être changé très régulièrement.
                    </li>
                    <li>
                        5. Un chat a le besoin naturel de gratter et nous ne pouvons pas lui en empecher. Il est possible de l'éduquer pour qu'il ne gratte pas sur les meubles. Il faudra prévoir un achat d'un grattoir.
                    </li>
                    <li>
                        6. Les chats ont besoin d'une routine pour se sentir en sécurité. On peut le nourrir à la même heure (à peu près bien sûr), jouer avec lui aux mêmes horaires et essayez de ne pas changer regulièrement la marque de nourriture.
                    </li>
                    <li>
                        7. Un chat doit être stérilisé entre l'âge de 4 et 6 mois selon son poids. Cela permet d'un côté d'empêcher la surpopulation de chats et les abandons et d'un autre côté d'avoir de bénéfices liés au comportement de votre chat.
                    </li>
                </ol>
                <Link to='https://agriculture.gouv.fr/animaux-de-compagnie-equides-tout-savoir-sur-le-certificat-dengagement-et-de-connaissance'>
                    <h3 className="text-base mt-4 text-indigo-500 font-bold underline"> Avant d'adopter vous devez signe le certificat d'engagement et de connaissance </h3>
                </Link>
            </section>
            <div className="my-12 h-0.5 border-t-0 border-solid border-gray-800 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25 dark:opacity-100">
            </div>
            <section className="mb-5">
                <h2 className="text-xl mb-5 md:text-2xl">Adopter un NAC (Nouveaux Animaux de Compagnie Domestiques) 🐰</h2>
                    <ol className="text-sm leading-7 md:text-base md:leading-9">
                    <li>
                        1. Le donateur a l'obligation de vous transmettre une attestation de cession, un document d'information sur les caractéristiques et besoins de l'animal et la carte d'identification de l'animal.
                    </li>
                    <li>
                        2. Si vous adoptez un furet ou un lapin, vous devez signer et remettre au donateur un certificat d'engagement et de connaissance des besoins spécifiques de l'espèce.
                    </li>
                    <li>
                        3. Les furets doivent être obligatoirement identifiés.
                    </li>
                    <li>
                        4. Tous les animaux sont des êtres sensibles, en tant qu'adopteur vous devrez placer l'animal dans des conditions compatibles avec les impératifs biologiques de son espèce. Vous êtes garant de son état et bien-être.
                    </li>
                    <li>
                        5. Le proprietaire de l'animal est responsable des dommages causés par l'animal.
                    </li>
                    <li>
                        Plus d'informations sur les règles des NAC sur le  <Link to='https://www.service-public.fr/particuliers/vosdroits/F34922'>
                        <span className="text-indigo-500 font-bold underline">site du service public. </span></Link>
                    </li>
                </ol>
                <Link to='https://agriculture.gouv.fr/animaux-de-compagnie-equides-tout-savoir-sur-le-certificat-dengagement-et-de-connaissance'>
                    <h3 className="text-base mt-4 text-indigo-500 font-bold underline"> Avant d'adopter vous devez signe le certificat d'engagement et de connaissance </h3>
                </Link>
            </section>
        </main>
    )
}