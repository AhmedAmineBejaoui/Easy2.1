export function Services() {
    const serviceDetails = [
        {
            name: "Développement Web",
            description:
                "Sites web modernes, rapides et sur mesure, conçus pour valoriser l'image de marque, convertir les visiteurs en clients et soutenir la croissance en ligne.",
        },
        {
            name: "Développement Mobile",
            description:
                "Applications mobiles fluides et intuitives, idéales pour renforcer la présence digitale et offrir une expérience utilisateur optimale sur iOS et Android.",
        },
        {
            name: "Gestion des Réseaux Sociaux",
            description:
                "Contenu percutant, stratégie éditoriale et animation de communauté pour engager l'audience et bâtir une image de marque forte.",
        },
        {
            name: "Design",
            description:
                "Identité visuelle unique, designs élégants et cohérents pour capter l'attention et refléter les valeurs de l'entreprise.",
        },
        {
            name: "Montage Vidéo",
            description:
                "Vidéos dynamiques et professionnelles pour captiver l'audience, renforcer la crédibilité et maximiser l'impact en ligne.",
        },
        {
            name: "Plan Marketing",
            description:
                "Élaboration d'un plan marketing structuré pour atteindre les bons clients, optimiser la visibilité en ligne et générer des résultats concrets.",
        },
    ];

    return (
        <section className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="section-title">Nos Services</h2>
                <p className="section-description">
                    Découvrez nos services conçus pour répondre à vos besoins technologiques et créatifs.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {serviceDetails.map((service, index) => (
                    <div
                        key={index}
                        className="group bg-white shadow-md rounded-lg p-6 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                        <div className="w-16 h-16 mx-auto flex items-center justify-center bg-red-700 text-white rounded-full">
                            <span className="text-2xl font-semibold">{index + 1}</span>
                        </div>
                        <h3 className="mt-4 text-xl font-bold text-gray-800 group-hover:text-red-700">
                            {service.name}
                        </h3>
                        <p className="mt-2 text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
