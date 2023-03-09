import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { BsChevronUp, BsChevronDown, BsHash } from "react-icons/bs";

function InfoTab() {
  const variants = {
    open: { x: "25%" },
  };
  const [showTab, setShowTab] = useState(false);

  const organizations = [
    {
      name: "Killar.se",
      img: "/Killar.se_liggande_lila.png",
      link: "https://killar.se/",
      description:
        "För alla som identifierar sig som kille eller ung man mellan 10-25 år.",
      points: [
        "Stöd och samtalsmottagning",
        "Information och berättelser",
        "Anonym stödchatt",
      ],
    },
    {
      name: "MÄN",
      img: "/MAN_logotyp_lila.png",
      link: "https://mfj.se/",
      description: "MÄN arbetar för jämställdhet och mot mäns våld.",
      points: [
        "Feministisk syn på världen",
        "Förändra destruktiva manlighetsnormer",
        "Engagera män och killar för jämställdhet",
      ],
    },
    {
      name: "Sverok",
      img: "/Sverok_logotyp_gul.png",
      link: "https://sverok.se/",
      description:
        "Sverok är en idéell organisation och ett av Sveriges största ungdomsförbund.",
      points: [
        "44 000 medlemmar och 1700 föreningar",
        "Starta och driv egen verksamhet",
        "Sprider spelkultur",
      ],
    },
  ];

  return (
    <motion.div
      className="p-0 m-0 fixed top-[30%]"
      initial={{ x: "calc(100% - 40px)" }}
      animate={showTab ? "open" : ""}
      variants={variants}
      transition={{ ease: "easeInOut", duration: 0.8 }}
    >
      <div className="w-[75%] flex bg-secondary rounded-l-lg hidden md:block">
        <ul className="flex">
          <li
            onClick={() => {
              setShowTab(!showTab);
            }}
            className="w-[40px] relative cursor-pointer"
            key="tab"
          >
            <div className="text-accent flex justify-center items-center -rotate-90 absolute bottom-2 -left-2 font-bold">
              {showTab ? (
                <BsChevronDown
                  className="ml-2 pl-2 w-10"
                  style={{ strokeWidth: 2 }}
                />
              ) : (
                <BsChevronUp
                  className="ml-2 pl-2 w-10"
                  style={{ strokeWidth: 2 }}
                />
              )}
              <p className="w-2 pl-2 tracking-wider">Läs&nbsp;mig</p>
            </div>
          </li>
          {organizations.map((organization) => {
            return (
              <li
                key={organization.name}
                className="rounded shadow-lg px-4 py-4 mx-2 my-4 bg-white w-1/3 relative"
              >
                <div className="flex">
                  <img
                    className="max-h-10 max-w-[100%]"
                    src={organization.img}
                    alt={`${organization.name} Logotyp`}
                  />
                  {organization.name === "Sverok" ? (
                    <h6
                      className="text-2xl ml-4"
                      style={{
                        color: "var(--primary-color)",
                      }}
                    >
                      {organization.name}
                    </h6>
                  ) : (
                    ""
                  )}
                </div>
                <p className="text-sm py-2">{organization.description}</p>
                <ul className="mb-12">
                  {organization.points.map((point) => {
                    return (
                      <li className="text-sm flex" key={point}>
                        <BsHash className="mr-1 mt-1" />
                        {point}
                      </li>
                    );
                  })}
                </ul>

                <button className="block rounded-full text-accent bg-primary hover:bg-secondary hover:text-primary px-6 py-1 absolute bottom-4 left-[20%] right-[20%]">
                  <Link to={organization.link}>{organization.name}</Link>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}

export default InfoTab;
