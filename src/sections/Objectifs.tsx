import { FaBullseye, FaLightbulb, FaRocket, FaHandshake } from 'react-icons/fa';

export const Objectifs = () => {
    return (
        <section className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#EAEEFE_5%,#ff0000_88%)] text-black py-16 px-6 sm:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">Nos Objectifs</h2>
                <p className="text-lg mb-12">
                    Découvrez nos ambitions pour transformer vos idées en réussites concrètes et durables.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Précision",
                            description:
                                "Atteindre des résultats précis et mesurables pour répondre aux besoins de nos clients.",
                            icon: <FaBullseye className="text-5xl mx-auto mb-4" />,
                        },
                        {
                            title: "Innovation",
                            description:
                                "Apporter des solutions créatives et innovantes adaptées à chaque projet.",
                            icon: <FaLightbulb className="text-5xl mx-auto mb-4" />,
                        },
                        {
                            title: "Croissance",
                            description:
                                "Favoriser la croissance durable de vos projets et de votre entreprise.",
                            icon: <FaRocket className="text-5xl mx-auto mb-4" />,
                        },
                        {
                            title: "Collaboration",
                            description:
                                "Créer des partenariats solides pour atteindre des objectifs communs.",
                            icon: <FaHandshake className="text-5xl mx-auto mb-4" />,
                        },
                    ].map((objectif, index) => (
                        <div
                            key={index}
                            className="bg-white text-[#000] rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                            {objectif.icon}
                            <h3 className="text-xl font-bold mb-2">{objectif.title}</h3>
                            <p className="text-sm text-[#000]">{objectif.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
