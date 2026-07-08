import Card from "./card"

export default function Conteneur(){
    return(
        <>
        {/* CHANGEMENT ICI : Ajout de p-6 (petite marge interne sur mobile) qui devient p-12 sur PC */}
        <div className="w-full h-full flex flex-col items-center text-center rounded-4xl bg-[#1B1D1F] p-6 sm:p-10 md:p-12">
            <div>
                <h1 className="font-bold mb-4" style={{color:"#FEF7EE", fontFamily:"DM+Sans", fontSize:"32px"}}>Our Collection</h1>

                <div className="tracking-wide leading-5 font-semibold [word-spacing:3px] mb-6" style={{color:"#4D5562", fontFamily:"DM+Sans", fontSize:"16px"}}>
                    <p>Introducing our Coffee Collection, a selection of unique coffees</p>
                    <p>from different roast types and origins, expertly roasted in small</p>
                    <p>batches and shipped fresh weekly.</p>
                </div>
            </div>
            
            <div className="w-full">
                <Card></Card>
            </div>
        </div>
        </>
    )
}