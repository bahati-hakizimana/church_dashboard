import React from "react";
import { IoBookOutline } from "react-icons/io5";
import { BsBank } from "react-icons/bs";
import { FaIndustry } from "react-icons/fa";
import { TbIrregularPolyhedron } from "react-icons/tb";
import { FaCreativeCommonsNc } from "react-icons/fa";
import { LuLamp } from "react-icons/lu";
import { LiaUsersSolid } from "react-icons/lia";
import { PiHandshakeBold } from "react-icons/pi";
import { GoLaw } from "react-icons/go";

const skillsData = [
  {
    name: "Tax & Investment Law",
    icon: <IoBookOutline className="text-4xl text-primary" />,
    link: "#",
    description:
      "LegalWise Chambers provides specialised tax and investment facilitation services in Rwanda and in the East African region drawing from the firm’s wealth of experience in various sectors such as manufacturing, fast moving consumer goods (FMCG), extractive industry, and energy and transport infrastructure projects.",
    aosDelay: "0",
  },
  {
    name: "Banking & Finance Law",
    icon: <BsBank className="text-4xl text-primary" />,
    link: "#",
    description:
      "Advice in relation with commercial banking and lending, we give our client legal advise on: Preparing and reviewing loan legal documentation and security documents, Perfection of securities, Advice on syndicated loans, Secured transactions.",
    aosDelay: "300",
  },
  {
    name: "Extractive Industry",
    icon: <FaIndustry className="text-4xl text-primary" />,
    link: "#",
    description:
      "The team at LegalWise Chambers has a wealth of experience and expertise on transactional, legal and regulatory matters in mining, oil and gas sectors. We provide our clients with exceptional legal advice and support in: Negotiations for licensing, permits and other regulatory authorisations.",
      
    aosDelay: "500",
  },
  {
    name: "Regulatory Monitoring & Compliance",
    icon: <TbIrregularPolyhedron className="text-4xl text-primary" />,
    link: "#",
    description:
      "As the global business environment becomes increasingly regulated and complex, many businesses are subject to rising regulatory scrutiny, with non-compliance posing a high threat on businesses’ financial resources and reputation. ",
    aosDelay: "700",
    //LegalWise Chambers provides practical advice to help clients monitor the regulatory trends and developments relevant to their sector and industry. We provide legal and regulatory strategies and advocacy geared at mitigating potential or likely impact on their business.
  },
  {
    name: "Corporate & Commercial Law",
    icon: <FaCreativeCommonsNc className="text-4xl text-primary" />,
    link: "#",
    description:
      "LegalWise Chambers boasts a broad local and international cross-sectorial experience in handling routine and complex issues pertaining to corporate, tax and commercial law. We not only assist clients to start a business but also advise them on the legal and regulatory intricacies of running a business in Rwanda and ensure compliance with all the relevant laws. ",
    aosDelay: "700",
    //LegalWise Chambers provides practical advice to help clients monitor the regulatory trends and developments relevant to their sector and industry. We provide legal and regulatory strategies and advocacy geared at mitigating potential or likely impact on their business.
  },
  {
    name: "Intellectual Property Law",
    icon: <LuLamp className="text-4xl text-primary" />,
    link: "#",
    description:
      "Company or individuals’ inventions, thoughts and ideas are valuable, and in today’s competitive world, it is vital to protect the intellectual property (IP) rights to them. LegalWise Chambers provides comprehensive legal advice on intellectual property protection which includes: Intellectual property law, Trademark protection and patent registration, Registration of industrial designs and counterfeiting litigation, IP registrations and infringement litigation. ",
    aosDelay: "700",
    
  },
  {
    name: "Employment Law",
    icon: <LiaUsersSolid className="text-4xl text-primary" />,
    link: "#",
    description:
      "At LegalWise Chambers, we assist our clients to understand and comply with the Rwandan labour law. We support our clients by ensuring that contractual arrangements with their employees comply with the Rwandan employment legislation. Most importantly, we work with the client in developing comprehensive employee relations policies and internal labour process with a view to preventing potential labour disputes. ",
    aosDelay: "700",
    
  },
  {
    name: "Public Private Partnerships (PPP) Contracts and Agreements",
    icon: <PiHandshakeBold className="text-4xl text-primary" />,
    link: "#",
    description:
      "The team at LegalWise Chambers is well experienced and equipped to provide our clients the legal expertise across the various stages of the public-private partnerships (PPP) process. We advise our clients on all the key legal and regulatory parameters that make for commercially successful and robust PPP agreements and optimal risk allocation between the public and private sectors. ",
    aosDelay: "700",
    
  },
  {
    name: "Legal & Regulatory Due Diligence",
    icon: <GoLaw className="text-4xl text-primary" />,
    link: "#",
    description:
      "LegalWise Chambers provides legal and regulatory audits to identify and seal any legal loopholes in a client’s policies and procedures that could be grounds for lawsuits or penalties. LegalWise Chambers also conducts due diligence legal audits on behalf of clients in mergers and acquisitions (M&A) transactions. ",
    aosDelay: "700",
   
  },
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center" id="services">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Explore Our Services
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              LegalWise Chambers (LegalWise) is a full-service Rwandan corporate and commercial law firm with an international scope,
            </p>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* button */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button className="primary-btn">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
