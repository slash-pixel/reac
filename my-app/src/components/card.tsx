import { useEffect, useState } from "react";

interface coffee {
  id: number;
  name: string;
  image: string;
  price: string | number;
  rating: number | string | null;
  votes: number;
  popular: boolean;
  available: boolean;
}

export default function Card() {
  const [coffees, setCoffees] = useState<coffee[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "available">("all");

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json")
      .then((response) => response.json())
      .then((data) => {
        setCoffees(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Impossible de charger la page café", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center p-10 text-white">Chargement des cafés...</div>;
  }

  // 2. Filtrage des produits selon le choix de l'utilisateur
  const displayedCoffees = coffees.filter((coffee) => {
    if (filter === "available") {
      return coffee.available === true;
    }
    return true; // "all" retourne tout par défaut au premier chargement
  });

  return (
    <div className="flex flex-col items-center w-full px-4" style={{ fontFamily: "DM Sans, sans-serif" }}>
      
      {/* 3. Barre de boutons pour les filtres */}
      <div className="flex gap-4 my-6">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filter === "all" 
              ? "bg-[#4D5562] text-white" 
              : "bg-[#1B1D1F] text-[#FEF7EE] hover:bg-[#2C2F31]"
          }`}
        >
          All Products
        </button>
        <button
          onClick={() => setFilter("available")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filter === "available" 
              ? "bg-[#4D5562] text-white" 
              : "bg-[#1B1D1F] text-[#FEF7EE] hover:bg-[#2C2F31]"
          }`}
        >
          Available Now
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 w-full max-w-6xl justify-items-center">
        {displayedCoffees.map((coffee) => (
          <div className="m-2 w-full max-w-70 relative flex flex-col justify-between" key={coffee.id}>
            
            <div className="relative">
              <img src={coffee.image} alt={coffee.name} className="h-40 w-full object-cover rounded-2xl" />
              
              {/* Popularité */}       
              {coffee.popular && (
                <div className="absolute left-2 top-2 px-3 py-0.5 rounded-full bg-[#F6C768]">
                  <span className="text-[12px] font-bold text-black">popular</span>
                </div>
              )}
            </div>

            {/* Prix et nom */}
            <div className="flex justify-between items-center mt-3 mb-1">
              <p className="text-[14px] font-medium text-[#FEF7EE]">{coffee.name}</p>
              <div className="text-[12px] font-bold px-2 py-0.5 rounded text-[#111315] bg-[#BEE3CC]">{coffee.price}</div>
            </div>

            {/* Notes & Disponibilité */}
            <div className="flex justify-between items-center">
              <div className="text-[#FEF7EE] text-[12px] flex items-center gap-1">
                <span>⭐</span>
                <span>{coffee.rating ? coffee.rating : "No rating"}</span> 
                <span className="text-[#4D5562]">({coffee.votes} votes)</span>
              </div>
              {!coffee.available && (
                <span className="text-[#ED735D] text-[12px] font-bold">Sold Out</span>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}