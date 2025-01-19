"use client"; // Esto convierte este componente en un Client Component

export default function CommunityLeaders() {
  const leaders = [
    { name: "Elias Arraez", position: "Master", telegram: "https://t.me/tradingenvivodelgrupoarraez", photo: "/images/elias.arraez.jpg" },
    { name: "Arianny Telleria", position: "Member", telegram: "#", photo: "/images/ariatni.telleria.jpg" },
    { name: "Honorio Sarmiento", position: "Member", telegram: "#", photo: "/images/honorio.sarmiento.jpg" },
    { name: "Luis Martinez", position: "Member", telegram: "#", photo: "/images/Luis.Martinez.jpg" },
    { name: "Filip Honore", position: "Member", telegram: "#", photo: "/images/filip.honore.jpg" },
    { name: "Carlos Olmos​​", position: "Member", telegram: "#", photo: "/images/Carlos.Olmos.jpg" },
    { name: "Miguel González", position: "Member", telegram: "#", photo: "/images/Miguel.González.jpg" },
    { name: "Praexor VS", position: "Member", telegram: "https://t.me/praexor", photo: "/images/praexor.jpg" },
    { name: "Cesar Vasquez", position: "Member", telegram: "#", photo: "/images/Cesar.Vasquez.jpg" },
    { name: "Edilson Hoyos", position: "Member", telegram: "#", photo: "/images/Edilson.Hoyos.jpg" },
    { name: "Randolph Chiari", position: "Member", telegram: "#", photo: "/images/Randolph.Chiari.jpg" },
    { name: "Edison Bazan", position: "Member", telegram: "#", photo: "/images/Edison.Bazan.jpg" },
    { name: "Elizabeth Morales", position: "Member", telegram: "#", photo: "/images/Elizabeth.Morales.jpg" },
    { name: "Ricardo Portto", position: "Member", telegram: "#", photo: "/images/Ricardo.Portto.jpg" },
    { name: "Jacqueline Trejo", position: "Member", telegram: "#", photo: "/images/jacky.jpg" },
    { name: "Richard Figueredo", position: "Member", telegram: "#", photo: "/images/Richard.Figueredo.jpg" },
    { name: "Nelson Colmenarez", position: "Member", telegram: "#", photo: "/images/Nelson.Colmenarez.jpg" },
    { name: "Gildardo Sánchez", position: "Member", telegram: "#", photo: "/images/Gildardo.Sánchez.jpg" },
    { name: "Edgar Jaimes", position: "Member", telegram: "#", photo: "/images/Edgar.Jaimes.jpg" },
    { name: "James Rodriguez", position: "Member", telegram: "#", photo: "/images/James.Rodriguez.jpg" },
    { name: "Abraham Morales", position: "Member", telegram: "#", photo: "/images/Abraham.Morales.jpg" },
    { name: "Matias Siedemburg", position: "Member", telegram: "#", photo: "/images/matias.siedemburg.jpg" },
    { name: "Liviga", position: "Member", telegram: "#", photo: "/images/liviga.jpg" },
    { name: "Black Mamba", position: "Member", telegram: "#", photo: "/images/mamba.jpg" },
    { name: "Martin Carrillo", position: "Member", telegram: "#", photo: "/images/martin.carrillo.jpg" },
    { name: "Time To Practice", position: "Member", telegram: "#", photo: "/images/practice.jpg" },
    { name: "Rafael Moraos", position: "Member", telegram: "#", photo: "/images/rmoraos.jpg" },
    { name: "JC Maga", position: "Member", telegram: "#", photo: "/images/jc.jpg" },
    { name: "Josue Delcid", position: "Member", telegram: "#", photo: "/images/Josue.Delcid.jpg" },
    { name: "Danza Fupiac", position: "Member", telegram: "#", photo: "/images/Danza.Fupiac.jpg" },
  ];

  return (
    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-2 p-2">
      {leaders.map((leader, index) => (
        <div
          key={index}
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
          onClick={() => window.open(leader.telegram, "_blank")}
        >
          <img
            src={leader.photo}
            alt={leader.name}
            className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-full mb-1"
          />
          <div className="text-center font-medium text-[10px] xs:text-xs">{leader.name}</div>
          <div className="text-[9px] xs:text-xs text-gray-500">{leader.position}</div>
        </div>
      ))}
    </div>
  );
}
