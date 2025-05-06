import { ServiceCard } from "../sevicesCard";


export function Services() {
   return (
    <div className="flex w-screen min-h-screen">
        <div className="justify-center w-screen overflow-hidden">
            <div className="block mb-4 mx-auto border-b border-slate-300 pb-2">
                <a 
                    target="_blank" 
                    href="https://www.material-tailwind.com/docs/html/card" 
                    className="block w-full py-2 text-center text-3xl text-slate-700 transition-all"
                >
                    Pest Control <b className="text-primary">Services</b>
                </a>
            </div>
    <div className="flex flex-row w-screen justify-start">
           <ServiceCard/>
            </div>
            </div>
            </div>
    )
}