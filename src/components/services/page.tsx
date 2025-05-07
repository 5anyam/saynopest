import { ServiceCard } from "../sevicesCard";


export function Services() {
   return (
    <div className="flex">
        <div className="justify-center w-full">
            <div className="block mb-4 border-b border-slate-300 pb-2">
                <a 
                    target="_blank" 
                    href="#" 
                    className="block w-full py-2 text-center text-3xl text-slate-700 transition-all"
                >
                    Pest Control <b className="text-primary">Services</b>
                </a>
            </div>
    <div className="flex flex-row justify-start">
           <ServiceCard/>
            </div>
            </div>
            </div>
    )
}