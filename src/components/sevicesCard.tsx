import Link from "next/link";
import EstimateModal from "./bookingModal";

export function ServiceCard() {
    const cardData = [
        {
            title: "Termites",
            description:
                "Termites in house can cause serious wood damage problems. These are the small, wood-eating pest that can cause heavy damage to properties.",
            image:
                "termites.jpg",
                category: "termites",
        },
        {
            title: "Mosquitoes",
            description:
                "As mosquito season comes to life, these tiny troublemakers can destroy your peaceful evening.",
            image:
                "mosquitoes.jpg",
                category: "mosquitoes",
        },
        {
            title: "Ants",
            description:
                "Did you know ants lifespan is much longer than you expect. These tiny intruders can live up to years at your house, without you noticing. Remove these unwanted guest effectively and efficiently.",
            image:
                "ants.jpg",
                category: "ants",
        },
        {
            title: "Spiders",
            description:
                "Spiders are dangerous creepy Crawlers  having  their own unique traits and abilities. Remove all the types of spiders whether it is jumping or flying  and discover what makes them so interesting!.",
            image:
                "spiders.jpg",
                category: "spiders",
        },
        {
            title: "Cockroaches",
            description:
                "Cockroach are creepy, agreed right? Roaches can survive in harsh environments and they thrive in warm and humid parts of your home.",
            image:
                "cockroaches.jpg",
                category: "cockroaches",
        },
        {
            title: "Bugs",
            description:
                "Bugs can silently invade your home, often going unnoticed until they become a major problem. Ever wondered where do bed bugs come from? These pests usually hitchhike in your luggage when you travel, clothes, or in second hand furniture.",
            image:
                "bugs.jpg",
                category: "bed-bugs",
        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cardData.map((card, index) => (
                <div
                    key={index}
                    className="relative flex w-full max-w-sm flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg mx-4"
                >
                    <div className="relative mx-4 h-92 w-92 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                        <img src={card.image} alt={card.title} />
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-medium text-blue-gray-900">{card.title}</h3>
                            <p className="flex items-center gap-1.5 text-base font-normal text-blue-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-700" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                5.0
                            </p>
                        </div>
                        <p className="text-base font-light text-gray-700">{card.description}</p>
                        <div className="flex flex-row px-3 pt-3">
                            
                                <EstimateModal/>
                    
                            <Link href={`https://www.saynopest.com/category/${card.category}`}><button className="block mx-1 w-full rounded-lg bg-gray-900 py-3.5 px-3 text-sm font-bold uppercase text-white shadow-md hover:shadow-lg transition-all">
                                Know More
                            </button></Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
