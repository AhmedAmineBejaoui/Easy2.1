"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState(null); // To track the API response status

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://api-studio.easyways.tn/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: formData }),
            });

            if (response.ok) {
                setStatus("Message envoyé avec succès !");
                setFormData({ name: "", subject: "", email: "", message: "" });
            } else {
                setStatus("Une erreur s'est produite. Veuillez réessayer.");
            }
        } catch (error) {
            setStatus("Erreur réseau. Veuillez vérifier votre connexion.");
        }
    };

    return (
        <section className="pt-10 pb-20 px-8 md:pd-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#EAEEFE_5%,#ff0000_88%)] overflow-x-clip">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <div className="text-4xl font-bold mb-2 text-[#000]">Contactez-nous</div>
                    <p className="text-lg">
                        Nous serions ravis de vous entendre ! Remplissez le formulaire ou utilisez les informations ci-dessous.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                    {/* Left Side: Contact Information */}
                    <div className="space-y-6">
                        {/* Email */}
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-white text-[#c30011] flex items-center justify-center rounded-full shadow-lg">
                                <FontAwesomeIcon icon={faEnvelope} className="text-2xl w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#000]">Email</h3>
                                <p className="text-[#000]">studio@easyways.tn</p>
                            </div>
                        </div>
                        {/* Phone */}
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-white text-[#c30011] flex items-center justify-center rounded-full shadow-lg">
                                <FontAwesomeIcon icon={faPhone} className="text-2xl w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#000]">Téléphone</h3>
                                <p className="text-[#000]">+216 99 216 521</p>
                            </div>
                        </div>
                        {/* Address */}
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-white text-[#c30011] flex items-center justify-center rounded-full shadow-lg">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#000]">Adresse</h3>
                                <p className="text-[#000]">Tunis, Tunisie</p>
                            </div>
                        </div>
                    </div>
                    {/* Right Side: Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 bg-white p-8 rounded-lg shadow-lg"
                    >
                        <div>
                            <label htmlFor="name" className="block text-gray-900 font-semibold">
                                Nom
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full py-3 px-4 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-600 transition duration-300"
                                placeholder="Votre nom"
                            />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="subject" className="block text-gray-900 font-semibold">
                                    Sujet
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full py-3 px-4 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-600 transition duration-300"
                                    placeholder="Sujet"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-900 font-semibold">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full py-3 px-4 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-600 transition duration-300"
                                    placeholder="Votre email"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-900 font-semibold">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full py-3 px-4 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-600 transition duration-300"
                                placeholder="Votre message"
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-red-500 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-red-600 transition duration-300"
                            >
                                Envoyer
                            </button>
                        </div>
                        {status && <p className="text-center text-red-600 mt-4">{status}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
}
