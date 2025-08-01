export function Services() {
    const serviceDetails = [
        {
            name: "Développement Web",
            description:
                "Le développement web consiste à concevoir et réaliser des sites et applications web interactifs et performants.",
        },
        {
            name: "Développement Mobile",
            description:
                "Le développement mobile consiste à créer des applications optimisées pour smartphones et tablettes.",
        },
        {
            name: "Gestion des Réseaux Sociaux",
            description:
                "Création, planification et optimisation de contenu pour engager une audience et renforcer la présence en ligne.",
        },
        {
            name: "Design",
            description:
                "Le design graphique crée des visuels attractifs pour transmettre des messages sur divers supports.",
        },
        {
            name: "Montage Vidéo",
            description:
                "Le montage vidéo consiste à assembler et éditer des séquences vidéo pour créer des contenus cohérents et captivants.",
        },
        {
            name: "Gestion Financière",
            description:
                "Consiste à planifier, organiser et contrôler les ressources financières pour assurer la stabilité et la croissance.",
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
