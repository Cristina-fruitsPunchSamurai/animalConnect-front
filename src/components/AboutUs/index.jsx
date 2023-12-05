
import FAQ from "./FAQ"
import Fonctionnement from "./Fonctionnement"
import TeamMemberCard from "./TeamCard"

export default function index() {
    return (
        <main>
            <Fonctionnement />
            <div className="my-12 h-0.5 border-t-0 border-solid border-gray-800 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25 dark:opacity-100">
            </div>
            <div className="md:ml-20 md:mr-20 mb-10">
                <h1 className="text-2xl text-center md:text-3xl mb-5 mt-10 text-gray-900"> F.A.Q</h1>
                <FAQ question={"1. Pourquoi je suis redirigé vers le login lorsque je clique sur 'je donne' ?"} reponse={"Afin d'ajouter un animal à l'adoption, je dois être enregistré sur le site"}/>
                <FAQ question={"2. Comment ajouter un animal à mes favoris ?"} reponse={"Vous pouvez cliquer sur le bouton 'ajouter aux favoris' sur la fiche de l'animal (attention il faudra être connecté) "}/>
                <FAQ question={"3. En tant que donneur comment puis-je accéder aux candidatures reçues ? "} reponse={"Une fois connecté, cliquez sur votre avatar, le menu déroulant s'ouvre, et cliquez sur 'Mes Candidatures',  vous accéderez aux candidatures reçues. Sur la page candidatures vous pouvez consulter les candidatures et vous aurez la possibilité de choisir soit 'Accepter la candidature' ou soit 'Refuser la candidature'"}/>
                <FAQ question={"4. La charte d'adoption est-elle obligatoire ? "} reponse={"Oui, la charte d'adoption doit être signé par le nouveau proprietaire de l'animal. Le donneur a la responsabilité de le faire signer, cela permet aux autorités d'enregistrer l'adoption. L'adopteur doit être conscient et accepeter les obligations lors d'une adoption. Un animal est un être vivant et non un objet"}/>
            </div>
            <div className="my-12 h-0.5 border-t-0 border-solid border-gray-800 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25 dark:opacity-100">
            </div>
            <h1 className="text-2xl text-center md:text-3xl mb-5 text-gray-900"> La Team </h1>
            <div className="md:grid md:grid-cols-3 md:ml-20 md:mr-20 md:gap-5 md:grid-rows-2">
                <TeamMemberCard img={"https://i.imgur.com/Fql3C0I.jpg"} name= {"Thomas"} status={"Lead Dev Back"} description={"Le chiot de l'équipe"}/>
                <TeamMemberCard img={"https://i.imgur.com/dzylHA5.jpg"} name= {"Robin"} status={"Lead Dev Front"} description={"Le Top Shark de l'équipe"} />
                <TeamMemberCard img={"https://i.imgur.com/uKNG3OS.jpg"} name= {"Cristina"} status={"Scrum Master & Front Dev"} description={"Elle aime les croquettes de légumes"}/>
                <TeamMemberCard img={"https://i.imgur.com/IOlWSt6.jpg"}name= {"Alexandre"} status={"Product Owner & Back Dev"} description={"Sa couleur préferée : le rose"} />
                <TeamMemberCard img={"https://i.imgur.com/cpf185p.jpg"} name= {"Pierre"} status={"Git Master & Front Dev"} description={"Git Flow badass, la Revy de l'équipe"}/>
            </div>
        </main>
    )
}
