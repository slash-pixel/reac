import Conteneur from "./cont";

export default function Bg() {
    return (
        <div className="min-h-screen bg-[#111315] flex flex-col items-center">

            <div 
                className="w-full h-[30vh] bg-cover bg-center"
                style={{ backgroundImage: "url('/bg.jpg')" }} 
            ></div>
            
            {/* CHANGEMENT ICI : Le conteneur prend toute la place (w-full) mais se bloque à 1200px. 
                Ce sont lespaddings px-4 (mobiles) qui s'agrandissent en md:px-12 (PC) qui vont absorber la réduction de taille ! */}
            <div className="w-full max-w-300 px-4 sm:px-8 md:px-12 -mt-20 relative z-10 mb-10 flex justify-center">
                <Conteneur />
            </div>

        </div>
    );
}