import HtmlLogo from "../assets/html5.svg?react";
import TwLogo from "../assets/tailwind-logo.svg?react";
import ReactLogo from "../assets/react.svg?react";
import TsLogo from "../assets/typescript.svg?react";
import JsLogo from "../assets/java.svg?react";
import SbLogo from "../assets/springboot.svg?react";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

function Landing() {
  return (
    <div className="bg-[url(/page-turner.svg)] bg-cover p-6 md:p-8 lg:p-15 h-fit flex flex-col justify-center w-full">
      <div className="font-heading absolute text-sm lg:text-lg flex flex-col space-y-1.5 bg-primary p-4 top-0 right-0">
        <div className="flex flex-row items-center space-x-2">
          <FiPhoneCall />
          <text>+94775428654</text>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <MdOutlineMail />
          <text>ggogamer60@gmail.com</text>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <BsGithub />
          <a
            className="underline"
            href="https://github.com/iamgian2001"
            target="_blank"
          >
            <text>github.com/iamgian2001</text>
          </a>
        </div>
      </div>
      <section className="w-full  h-fit mt-40 flex flex-col items-center justify-center">
        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row w-full ">
          <div className="md:w-3/5">
            {/*left*/}
            <div className="text-textDark flex flex-col space-y-3 w-full h-fit font-heading  font-light">
              <p className="wrap-break-word  w-fit text-5xl lg:text-7xl font-light tracking-widest">
                Geesara
                <br></br>
                <span className="text-green-300">Gawesh</span>
              </p>
              <p className="text-neutral-400 tracking-wide lg:text-xl font-light border-t border-b w-fit h-fit">
                FRESH GRADUATE
              </p>
              <p className="wrap-break-word w-fit lg:text-2xl font-body text-justify">
                My professional interests primarily encompass Front-End
                Development, UI/UX Design, and Full-Stack Development. I am a
                passion-driven developer with a strong aptitude for constructing
                web applications, specializing in aesthetically superior UIs
                owing to my keen eye for design and creativity. I am highly
                adaptable and quickly integrate new technologies and frameworks.
              </p>
              <div className="flex flex-row justify-between w-full  text-sm lg:text-lg">
                <div className="flex flex-row-reverse items-center ">
                  <div className="inline-block w-1.5 h-1.5 bg-primary rounded-full animate-ping mx-3"></div>
                  <p className="font-body font-medium">Available for work</p>
                </div>
                <p className="font-body font-medium bg-accent text-textLight rounded-lg px-3 py-1">
                  Sri Lanka
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full mt-10">
              <h1 className="font-heading text-xl lg:text-3xl w-fit h-fit text-textDark font-light  p-3 ">
                <span className="text-primary font-semibold">F</span>ocus
              </h1>
              <div className="flex p-3 space-x-2.5 flex-wrap space-y-2 text-sm lg:text-xl">
                <div className=" w-fit  h-fit border px-2 py-1 lg:px-3 lg:py-2  flex items-center rounded-2xl border-accent text-textDark font-light flex-row space-x-2">
                  <text className=" font-body">HTML</text>
                  <HtmlLogo className="bg-primary border border-neutral-800 w-6 h-6 lg:w-8 lg:h-8 rounded-md" />
                </div>
                <div className=" w-fit  h-fit border px-2 py-1 lg:px-3 lg:py-2  flex items-center rounded-2xl border-accent text-textDark font-light flex-row space-x-2">
                  <text className=" font-body">Tailwind</text>
                  <TwLogo className="bg-primary  border-neutral-800  w-6 h-6 lg:w-8 lg:h-8 rounded-md" />
                </div>
                <div className=" w-fit  h-fit border px-2 py-1 lg:px-3 lg:py-2  flex items-center rounded-2xl border-accent text-textDark font-light flex-row space-x-2">
                  <text className="font-body">Javascript</text>
                  <JsLogo className="bg-primary  border-neutral-800  w-6 h-6 lg:w-8 lg:h-8 rounded-md" />
                </div>
                <div className=" w-fit  h-fit border px-2 py-1 lg:px-3 lg:py-2  flex items-center rounded-2xl border-accent text-textDark font-light flex-row space-x-2">
                  <text className=" font-body">React</text>
                  <ReactLogo className="bg-primary  border-neutral-800  w-6 h-6 lg:w-8 lg:h-8 rounded-md" />
                </div>
                <div className=" w-fit  h-fit border px-2 py-1 lg:px-3 lg:py-2  flex items-center rounded-2xl border-accent text-textDark font-light flex-row space-x-2">
                  <text className=" font-body">Typescript</text>
                  <TsLogo className="bg-primary w-6   border-neutral-800 h-6  lg:w-8 lg:h-8 rounded-md" />
                </div>
                <div className=" w-fit  h-fit border px-2 py-1 lg:px-3 lg:py-2 flex items-center rounded-2xl border-accent text-textDark font-light flex-row space-x-2">
                  <text className=" font-body">Spring</text>
                  <SbLogo className="bg-primary w-6   border-neutral-800  h-6 lg:w-8 lg:h-8 rounded-md" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mx-6 md:w-2/5">
            {/*profilepic*/}
            <div className="bg-[url(/profilepic.webp)] opacity-80 bg-green-200  bg-cover w-70 h-80 md:w-90 md:h-100 lg:w-110 lg:h-120  mask-cover mask-[url(/mask-polygon.svg)]"></div>
          </div>
        </div>
      </section>
      <section className="flex flex-wrap md:flex-nowrap space-x-2.5 space-y-10 lg:space-x-10 my-10">
        <section className="w-full md:w-fit p-3 h-fit relative border bg-linear-to-br  from-background via-neutral-800 to-green-950 border-accent rounded-2xl shadow-lg justify-center">
          <div className="absolute bg-[url(/waves2.svg)] bg-cover inset-0 opacity-20  rounded-2xl  w-full h-full"></div>
          {/* Experience */}
          <div className="flex flex-col z-10 ">
            <div className="font-heading text-3xl lg:text-4xl   text-textDark font-light p-3 ">
              <span className="text-4xl text-primary font-semibold">E</span>
              xperience
            </div>
            <div className="flex flex-col w-full h-fit text-sm lg:text-xl">
              <div className="flex flex-col text-textDark w-full p-3">
                <p className="font-heading ">
                  Business Analyst & Customer Acquisitions (Internship)
                </p>
                <p className="font-body  text-accent w-fit">03/2023-03/2024</p>
                <p className="font-body italic  text-primary w-fit">
                  Imigap (Pvt) Ltd
                </p>
              </div>
              <div className="flex flex-col text-textDark w-full p-3">
                <p className="font-heading ">
                  UI/UX Designer & Wordpress Developer (Internship)
                </p>
                <p className="font-body  text-accent w-fit">01/2025-06/2025</p>
                <p className="font-body  italic  text-primary w-fit">
                  Lincoln Institute of Graduate Studies
                </p>
              </div>
              <div className="flex flex-col text-textDark w-full p-3">
                <p className="font-heading ">Computer Technician</p>
                <p className="font-body  text-accent w-fit">2018-2020</p>
                <p className="font-body  italic  text-primary w-fit">
                  Freelance
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full p-3 h-fit md:w-fit relative border bg-linear-to-br  from-background via-neutral-800 to-green-950 border-accent rounded-2xl shadow-lg justify-center">
          <div className="absolute bg-[url(/waves2.svg)] bg-cover inset-0 opacity-20  rounded-2xl  w-full h-full"></div>
          {/* Education */}
          <div className="flex flex-col z-10 ">
            <div className="font-heading text-3xl lg:text-4xl text-textDark font-light p-3 ">
              <span className="text-4xl text-primary font-semibold">E</span>
              ducation
            </div>
            <div className="flex flex-col w-full h-fit text-sm lg:text-xl">
              <div className="flex flex-col text-textDark w-full p-3">
                <p className="font-heading ">
                  Bachelor of Business Administration (BBA) in Business
                  Analytics
                </p>
                <p className="font-body italic  text-primary w-fit">
                  Sri Lanka Institute of Information Technology (SLIIT)
                </p>
              </div>
              <div className="flex flex-col text-textDark w-full p-3">
                <p className="font-heading">
                  Bachelor of Science in Computer Science (BSc) in Information
                  Systems
                </p>
                <p className="font-body italic  text-primary w-fit">
                  University of Colombo School of Computing (UCSC)
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="w-fit p-5 h-fit  relative border bg-linear-to-br  from-background via-neutral-800 to-green-950 border-accent rounded-2xl mt-24 md:mt-12 shadow-lg justify-center">
        <div className="absolute bg-[url(/waves2.svg)] bg-cover inset-0 opacity-10 z-0  rounded-2xl  w-full h-full"></div>
        {/* Projects */}
        <div className="flex flex-col z-10 w-fit h-fit">
          <div className="font-heading text-3xl lg:text-4xl   w-fit text-textDark font-light p-3 mb-4 ">
            <span className="text-4xl text-primary font-semibold">P</span>
            rojects
          </div>
          <div className="flex flex-wrap md:flex-nowrap space-x-4 space-y-4 text-sm lg:text-xl">
            <div className="flex flex-col flex-wrap text-accent bg-background/80 w-fit h-fit p-3 border rounded-xl">
              <p className="font-body font-light">
                InternEase - An Internship Management System for Universities
              </p>
              <div className="flex my-2 space-x-2.5 flex-wrap space-y-2">
                <text className="w-fit  h-fit  border font-body  px-2 py-1 items-center rounded-2xl border-accent font-light">
                  HTML
                </text>
                <text className="w-fit  h-fit border font-body  px-2 py-1 items-center rounded-2xl border-accent font-light">
                  Tailwind
                </text>
                <text className=" w-fit  h-fit  border font-body  px-2 py-1 items-center rounded-2xl border-accent= font-light">
                  Javascript
                </text>
                <text className=" w-fit  h-fit border font-body  px-2 py-1 items-center rounded-2xl border-accent font-light">
                  PHP
                </text>
                <text className=" w-fit  h-fit border font-body  px-2 py-1 items-center rounded-2xl border-accent font-light">
                  MySQL
                </text>
              </div>
            </div>
            <div className="flex flex-col text-accent bg-background/80 w-fit h-fit p-3 border rounded-xl">
              <p className="font-body font-light ">
                DriveEaze - Web Application for Samarasinghe motors
              </p>
              <div className="flex my-2 space-x-2.5 flex-wrap space-y-2">
                <text className="w-fit  h-fit  border font-body  px-2 py-1 items-center rounded-2xl border-accent font-light">
                  React
                </text>
                <text className="w-fit  h-fit border font-body  px-2 py-1 items-center rounded-2xl border-accent font-light">
                  HTML
                </text>
                <text className=" w-fit  h-fit  border font-body  px-2 py-1 items-center rounded-2xl border-accent= font-light">
                  Javascript
                </text>
                <text className=" w-fit  h-fit border font-body  px-2 py-1 items-center rounded-2xl border-accent font-light">
                  Tailwind
                </text>
                <text className=" w-fit  h-fit border font-body  px-2 py-1 items-center rounded-2xl border-accent font-light">
                  Spring
                </text>
                <text className=" w-fit  h-fit border font-body  px-2 py-1 items-center rounded-2xl border-accent font-light">
                  PostgreSQL
                </text>
              </div>
            </div>
            <div className="flex flex-col text-accent bg-background/80 w-fit h-fit p-3 border rounded-xl">
              <p className="font-body font-light ">
                NewCastle LMS (in-progress)
              </p>
              <div className="flex my-2 space-x-2.5 flex-wrap space-y-2">
                <text className="w-fit  h-fit  border font-body t px-2 py-1 items-center rounded-2xl border-accent font-light">
                  React
                </text>
                <text className="w-fit  h-fit border font-body  px-2 py-1 items-center rounded-2xl border-accent font-light">
                  HTML
                </text>
                <text className=" w-fit  h-fit  border font-body  px-2 py-1 items-center rounded-2xl border-accent= font-light">
                  Javascript
                </text>
                <text className=" w-fit  h-fit border font-body  px-2 py-1 items-center rounded-2xl border-accent font-light">
                  Tailwind
                </text>
                <text className=" w-fit  h-fit border font-body  px-2 py-1 items-center rounded-2xl border-accent font-light">
                  Spring Boot
                </text>
                <text className=" w-fit  h-fit border font-body  px-2 py-1 items-center rounded-2xl border-accent font-light">
                  PostgreSQL
                </text>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-10">
        <h1 className="font-heading text-3xl lg:text-4xl  text-textDark font-light p-3">
          <span className="text-4xl text-primary font-semibold">A</span>cademic
          Work
        </h1>
        <div className="flex flex-col text-sm lg:text-xl font-body font-light text-textDark p-3 ">
          <text className="border-b-2 p-2 w-full text-justify border-neutral-500">
            'Factors affecting E-Commerce Adoption in Small and Medium-sized
            Enterprises in Sri Lanka’, Conference proceeding, Lincoln
            International Multidisciplinary Conference (LIMC) 2024, Sri Lanka,
            Vol,1 (ISBN 978-624-6619-00-8)
          </text>
          <text className="border-b-2 p-2 w-full text-justify border-neutral-500">
            ‘Mental well-being of Sri Lankan teaching assistants working in
            special education schools’, Conference proceeding, Lincoln
            International Multidisciplinary Conference (LIMC) 2024, Sri Lanka,
            Vol,1 (ISBN 978- 624-6619-00-8)
          </text>
          <text className="border-b-2 p-2 w-full text-justify border-neutral-500">
            Chathurya,T.G.R.; Wijesinghe, W.P.S.D.; Kasthuriarachchi,G.G.O.;
            Perera,H.M.I.M.; Wisenthige, K.; Dayapathirana, N. The Impact of
            Financial Literacy on Fintech Adoption of SMEs in SriLanka. 6th
            Management Undergraduates’ Research Session (MURS). year 2024,
            Online, University of Sabaragamuwa
          </text>
          <text className="border-b-2 p-2 w-full text-justify border-neutral-500">
            ‘The impact of financial literacy on the performance of Sri Lanka
            SMEs: Roles of fintech adoption and access to finance’. SLIIT
            Business school Comprehensive research project, concept paper. (PLOS
            ONE publication in progress).
          </text>
        </div>
      </section>
      <section className="my-10 w-auto">
        <h1 className="font-heading text-3xl lg:text-4xl w-fit text-textDark font-light p-3">
          <span className="text-4xl text-primary font-semibold ">R</span>
          eferences
        </h1>
        <div className="flex flex-col w-fit h-fit text-xs lg:text-lg font-heading  text-textDark p-3  space-y-4">
          <div className="flex flex-col bg-white/10 backdrop-blur-md border border-accent/20 rounded-2xl p-3 shadow-l">
            <text className="p-2 w-full text-justify">
              Praneesha Rathmalala – developer/IT Officer – Lincoln Graduate
              Studies
            </text>
            <text className="underline p-2">
              Praneesha.rathnamalala@gmail.com
            </text>
          </div>
          <div className="flex flex-col  bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 shadow-l">
            <text className="p-2 w-full text-justify">
              Lasith Chandupa – CEO of Imigap
            </text>
            <text className="underline p-2">lasith@imigap.com</text>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
