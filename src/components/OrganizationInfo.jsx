import React from "react";
import { Link } from "react-router-dom";

function OrganizationInfo() {
  /**
   * @typedef organizations
   * @type {Object[]}
   * @property {string} name
   * @property {string} img
   * @property {string} link
   * @property {string} description
   */
  const organizations = [
    {
      name: "Killar.se",
      img: "/Killar.se_liggande_lila.png",
      link: "https://killar.se/",
      description:
        "Killar.se erbjuder stöd till alla som identifierar sig som kille eller ung man mellan 10-25 år. Du hittar information och berättelser om hur det är att vara kille och ung man. I vår stödchatt kan du skriva om vilka tankar, funderingar eller frågor som helst, helt anonymt. Vi har en samtalsmottagning för killar och unga män mellan 15-25 år som har problem i nära relationer, där du kan prata med kurator helt gratis.",
    },
    {
      name: "MÄN",
      img: "/MAN_logotyp_lila.png",
      link: "https://mfj.se/",
      description:
        "MÄN arbetar för jämställdhet och mot mäns våld. Vi utgår från en feministisk syn på världen och tanken att vi behöver förändra destruktiva manlighetsnormer för att stoppa våldet. Vi vill att fler män och killar ska engagera sig för jämställdhet och att fler män och killar tar ett större ansvar för omsorgen. Vår vision är en jämställd värld utan våld.",
    },
    {
      name: "Sverok",
      img: "/Sverok_logotyp_gul.png",
      link: "https://sverok.se/",
      description:
        "Sverok är en idéell organisation och ett av Sveriges största ungdomsförbund. 44 000 medlemmar i 1 700 föreningar över hela landet samlar, utvecklar och sprider spelkultur. Där inkluderas brädspel, samlarkortspel, rollspel, e-sport, lajv och mycket mer. I Sverok startar och driver ungdomar sina egna föreningar på egna villkor och skapar verksamhet tillsammans. Sverok är också medlemsorganisation i Studiefrämjandet.",
    },
  ];

  return (
    <div className="flex flex-wrap">
      {organizations.map((organization) => {
        return (
          <Link
            to={organization.link}
            className="xs:w-full sm:w-1/3 sm:max-w-[40%] lg:w-1/4 lg:max-w-[30%] rounded shadow-lg p-6 m-4 grow"
            key={organization.name}
          >
            <div className="flex items-center">
              <img
                className="max-h-16 max-w-[100%]"
                src={organization.img}
                alt={`${organization.name} Logotyp`}
              />
              {organization.name === "Sverok" ? (
                <h3
                  className="text-4xl ml-4"
                  style={{
                    color: "var(--primary-color)",
                  }}
                >
                  {organization.name}
                </h3>
              ) : (
                ""
              )}
            </div>
            <p className="mt-4">{organization.description}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default OrganizationInfo;
