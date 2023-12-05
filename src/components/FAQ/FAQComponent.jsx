export default function FAQComponent({ question, reponse }) {
    return (
        <main>
            <div className="collapse bg-base-200">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-secondary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content uppercase">
                    {question}
                </div>
                <div className="collapse-content bg-secondary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <div className="my-4 h-0.5 border-t-0 border-solid border-gray-800 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25 dark:opacity-100">
                    </div>
                    <p>Dès que vous constatez la disparition de votre chat ou de votre chien, vous devez rapidement procéder aux démarches suivantes :</p>
                    <ol className="mt-4 list-decimal mx-8">
                        <div className="my-12 h-0.5 border-t-0 border-solid border-gray-800 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25 dark:opacity-100">
                        </div>
                        <li className="font-bold mt-6">Si votre animal est identifié par puce électronique ou par tatouage, prévenez l’I-CAD (Identification des Carnivores Domestiques) via votre espace personnel sur leur site, ou par téléphone au 09 77 40 30 77.</li>
                        <div className="my-12 h-0.5 border-t-0 border-solid border-gray-800 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25 dark:opacity-100">
                        </div>
                        <li className="font-bold mt-6">Contactez les fourrières municipales. Selon la taille de votre commune, vous pouvez aussi informer votre mairie et les employés municipaux.</li>
                        <div className="my-12 h-0.5 border-t-0 border-solid border-gray-800 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25 dark:opacity-100">
                        </div>
                        <li className="font-bold mt-6">Faites une déclaration de perte au commissariat de police ou à la gendarmerie dont dépend votre commune ou le lieu où cela s’est produit. Cela permettra de vous identifier en tant que propriétaire et maître si quelqu’un rapporte l’animal aux autorités.</li>
                        <div className="my-12 h-0.5 border-t-0 border-solid border-gray-800 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25 dark:opacity-100">
                        </div>
                        <li className="font-bold mt-6">Partagez une annonce sur des réseaux sociaux comme Pet Alert. Vous pouvez aussi publier votre annonce sur Filalapat, l’application dédiée aux animaux perdus, vus ou retrouvés.</li>
                        <div className="my-12 h-0.5 border-t-0 border-solid border-gray-800 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25 dark:opacity-100">
                        </div>
                        <li className="font-bold mt-6">Prévenez votre vétérinaire et les vétérinaires alentour. Votre animal blessé peut avoir été déposé chez eux.</li>
                        <div className="my-12 h-0.5 border-t-0 border-solid border-gray-800 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25 dark:opacity-100">
                        </div>
                        <li className="font-bold mt-6">Interrogez vos voisins. Un chat peut être enfermé dans un garage ou une cave, ou avoir été recueilli par votre voisinage.</li>
                        <div className="my-12 h-0.5 border-t-0 border-solid border-gray-800 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25 dark:opacity-100">
                        </div>
                        <li className="font-bold mt-6">Distribuez des affichettes chez les commerçants, vétérinaires,… Mettez une photo et indiquez ses caractéristiques physiques et éventuellement une récompense.</li>
                        <div className="my-12 h-0.5 border-t-0 border-solid border-gray-800 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25 dark:opacity-100">
                        </div>
                        <li className="font-bold my-6">Contactez les associations animales et les refuges. Ils prêteront une plus grande attention à tout chat perdu ou chien égaré qui leur serait signalé ou amené.</li>
                    </ol>
                </div>
            </div>

            <div className="collapse bg-base-200 mt-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-secondary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content uppercase">
                    Vous êtes témoin et souhaitez signaler une mailtraitance animale ?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <div className="my-4 h-0.5 border-t-0 border-solid border-gray-800 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25 dark:opacity-100">
                    </div>
                    <p className="my-8">Il faut fournir un maximum de détails sur les faits et le lieu pour qu'une enquête puisse être ouverte, si possible avec photos ou vidéo à l'appui.</p>
                    <p className="mb-8">Les associations et fondations nationales de protection animale peuvent être contactées par téléphone et/ou mail. Certaines ont mis en place des applications de signalement. Ces informations sont disponibles sur leur site internet.</p>
                    <p className="mb-8">Les associations et fondations nationales de protection animale disposent d'un réseau d'informateurs et d'enquêteurs en lien avec la gendarmerie et les services vétérinaires.</p>
                    <p className="mb-8">Si vous voyez des cas de maltraitance sur internet, signalez le sur le site Pharos. Ce site est géré par des policiers et gendarmes spécialisés.</p>
                    <p className="mb-8">Si votre animal a été victime de maltraitances, vous pouvez porter plainte. Vous pouvez contacter une association de protection animale pour obtenir des conseils et vous faire assister dans votre démarche.</p>
                </div>
            </div>

            <div className="collapse bg-base-200 mt-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-secondary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content uppercase">
                    Vous avez trouvé un animal ?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <div className="my-4 h-0.5 border-t-0 border-solid border-gray-800 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25 dark:opacity-100">
                    </div>
                    <p className="my-8">Vous pouvez contacter une association de protection animale près de chez vous pour savoir si elle peut prendre en charge l'animal ou vérifier s'il est identifié.</p>
                    <p className="mb-8">Si vous obtenez le numéro d'identification de l'animal, vous pouvez le déclarer trouvé à la société I-Cad qui gère le fichier national d'identification des carnivores domestiques en France.</p>
                    <p className="mb-8">La déclaration peut s'effectuer en ligne ou au moyen de l'application Filalapat que vous pouvez télécharger sur votre téléphone mobile ou en adressant un courriel à l'I-Cad.</p>
                    <p className="mb-8">Contactez la mairie, la gendarmerie ou le commissariat de la commune où vous l'avez vu pour que ces servies contactent la fourrière.</p>
                </div>
            </div>

            <div className="collapse bg-base-200 mt-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-secondary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content uppercase">
                    Urgence sur un animal sauvage en détresse
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <div className="my-4 h-0.5 border-t-0 border-solid border-gray-800 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25 dark:opacity-100">
                    </div>
                    <p className="my-8">Si vous avez trouvé un animal sauvage blessé, il faut contacter l'ONCFS, l'Office national de la chasse et de la faune sauvage, qui vous indiquera la marche à suivre selon les circonstances dans lesquelles vous avez trouvé l’animal (collision avec un véhicule, accident de chasse, braconnage…). </p>
                    <p className="mb-8">Dans le cas particulier où l’animal blessé appartient à une espèce protégée, seul l'ONCFS peut l’acheminer vers un centre de sauvegarde, ou bien récupérer son cadavre pour autopsie si celui-ci a malheureusement succombé à ses blessures.</p>
                    <p className="mb-8">En revanche, s'il ne s'agit pas d'une espèce protégée, vous pouvez vous-même conduire l’animal vers un centre de sauvegarde de la faune sauvage. A proximité immédiate de l'Ecole nationale vétérinaire d'Alfort (94), le CEDAF peut accueillir les animaux sauvages blessés. Toutes les régions possèdent de telles structures : la liste des centres de sauvegarde agréés est disponible sur le site de l'Union Française des Centres de Sauvegarde de la faune sauvage (UFCS).</p>
                </div>
            </div>
        </main>
    )
}