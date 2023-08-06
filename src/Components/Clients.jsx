import React from "react";
// import Marquee from "react-fast-marquee";
import '../App.css';
import clientsImg from '../assets/Img/clients.png'

function Clients() {
//   const clients = [
//     { name: "Scorpion Finance", logo: "scorp.png" },
//     { name: "Markaz Knowledge City", logo: "mkc.png" },
//     { name: "Bolster Campus", logo: "bolster.png" },
//     { name: "Bekachi", logo: "bekachi.png" },
//     { name: "Dihliz World School", logo: "dihliz.png" },
//     { name: "UFB", logo: "ufb.png" },
//     { name: "Markaz Garden", logo: "markazgarden.png" },
//     { name: "Chixzy", logo: "chixzy.png" },
//     { name: "PRISM Foundation", logo: "prism.png" },
//     { name: "Koftaci", logo: "koftaci.png" },
//     { name: "Katib Media Collective", logo: "katib.png" },
//     { name: "Smart People Real Estate", logo: "smartpeople.png" },
//   ];

  return (
    <div id="Client" className="relative px-5 md:px-10 py-8 bg-white lg:px-20">
      <header className="mx-10 z-0 my-2 lg:mx-52">
        <h2 className="text-2xl font-bold text-center text-black opacity-70 capitalize">
          Highly Trusted
        </h2>
      </header>
      {/* <Marquee speed={25} gradientWidth={100}>
        <div className="flex z-0 flex-wrap items-center justify-center">
          {clients.map((clnt) => (
            <div key={clnt.name} className="flex py-5 font-bold text-white">
              <img
                src={`/imgs/clients/${clnt.logo}`}
                className="h-16 mx-4 lg:mx-14 lg:h-28"
                alt={clnt.name}
              />
            </div>
          ))}
        </div>
      </Marquee> */}
      <img
       src={clientsImg}
       className="h-auto w-full"
       alt="{clnt.name}"
     />
    </div>
  );
}

export default Clients;
