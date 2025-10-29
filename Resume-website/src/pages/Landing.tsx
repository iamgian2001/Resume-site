function Landing() {
  return (
    <div className="bg-background p-6 h-fit flex flex-col items-center w-full">
      <section className="w-full  h-fit mt-24 flex flex-col items-center justify-center">
        {/* Hero Section */}
        <div className="text-textDark flex flex-col space-y-3 w-full h-fit font-heading  font-light">
          <p className="wrap-break-word  w-fit text-5xl font-light tracking-widest">
            Geesara<br></br>
            <span className="text-green-300">Gawesh</span>
          </p>
          <p className="text-neutral-400 tracking-wide font-light border-t border-b w-fit h-fit">
            FRESH GRADUATE
          </p>
          <p className="wrap-break-word w-fit font-body text-justify">
            A Front-End Development and UI/UX Design Specialist focused on the
            meticulous creation of high-fidelity user interfaces. My expertise
            involves not only developing beautifully crafted UIs but also
            applying rigorous attention to detail, iteratively tweaking them to
            perfection to ensure exceptional user experiences and pixel-perfect
            implementation.
          </p>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-2">
              <div className="inline-block w-1.5 h-1.5 bg-primary rounded-full animate-ping"></div>
              <p className="font-body text-sm font-medium">
                Available for work
              </p>
            </div>
            <p className="font-body text-sm font-medium bg-accent text-textLight rounded-lg px-3 py-1">
              Sri Lanka
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full mt-10">
          <h1 className="font-heading text-xl w-fit h-fit text-textDark font-light  p-3 ">
            <span className="text-primary font-semibold">F</span>ocus
          </h1>
          <div className="flex p-3 space-x-2.5 flex-wrap space-y-2">
            <text className=" w-fit h-fit border font-body text-sm  px-2 py-1 items-center rounded-2xl border-accent text-textDark font-light">
              React
            </text>
            <text className=" w-fit  h-fit  border font-body text-sm px-2 py-1 items-center rounded-2xl border-accent text-textDark font-light">
              Typescript
            </text>
            <text className="w-fit  h-fit  border font-body text-sm px-2 py-1 items-center rounded-2xl border-accent text-textDark font-light">
              HTML
            </text>
            <text className="w-fit  h-fit border font-body text-sm px-2 py-1 items-center rounded-2xl border-accent text-textDark font-light">
              CSS
            </text>
            <text className=" w-fit  h-fit  border font-body text-sm px-2 py-1 items-center rounded-2xl border-accent text-textDark font-light">
              Javascript
            </text>
            <text className=" w-fit  h-fit border font-body text-sm px-2 py-1 items-center rounded-2xl border-accent text-textDark font-light">
              Spring Boot
            </text>
          </div>
        </div>
      </section>
      <section className="w-full  p-3 h-full relative border bg-linear-to-br  from-background via-neutral-800 to-green-950 border-accent rounded-2xl mt-24 shadow-lg justify-center">
        <div className="absolute bg-[url(/waves2.svg)] bg-cover inset-0 opacity-20 z-0  rounded-2xl  w-full h-full"></div>
        {/* Experience */}
        <div className="flex flex-col z-10 ">
          <div className="font-heading text-3xl  text-textDark font-light p-3 ">
            <span className="text-4xl text-primary font-semibold">E</span>
            xperience
          </div>
          <div className="flex flex-col w-full h-fit">
            <div className="flex flex-col text-textDark w-full p-3">
              <p className="font-heading text-sm">
                Business Analyst & Customer Acquisitions (Internship)
              </p>
              <p className="font-body text-sm text -accent w-fit">
                03/2023-03/2024
              </p>
              <p className="font-body text-sm italic  text-primary w-fit">
                Imigap (Pvt) Ltd
              </p>
            </div>
            <div className="flex flex-col text-textDark w-full p-3">
              <p className="font-heading text-sm">
                UI/UX Designer & Wordpress developer (Internship)
              </p>
              <p className="font-body text-sm text-accent w-fit">
                01/2025-06/2025
              </p>
              <p className="font-body text-sm italic  text-primary w-fit">
                Lincoln Institute of Graduate Studies
              </p>
            </div>
            <div className="flex flex-col text-textDark w-full p-3">
              <p className="font-heading text-sm">Computer Technician</p>
              <p className="font-body text-sm text-accent w-fit">2018-2020</p>
              <p className="font-body text-sm italic  text-primary w-fit">
                Freelance
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full  p-3 h-full relative border bg-linear-to-br  from-background via-neutral-800 to-green-950 border-accent rounded-2xl mt-24 shadow-lg justify-center">
        <div className="absolute bg-[url(/waves2.svg)] bg-cover inset-0 opacity-20 z-0  rounded-2xl  w-full h-full"></div>
        {/* Experience */}
        <div className="flex flex-col z-10 ">
          <div className="font-heading text-3xl  text-textDark font-light p-3 ">
            <span className="text-4xl text-primary font-semibold">E</span>
            ducation
          </div>
          <div className="flex flex-col w-full h-fit">
            <div className="flex flex-col text-textDark w-full p-3">
              <p className="font-heading text-sm">
                Bachelor of Business Administration (BBA) in Business Analytics
              </p>
              <p className="font-body text-sm italic  text-primary w-fit">
                Sri Lanka Institute of Information Technology (SLIIT)
              </p>
            </div>
            <div className="flex flex-col text-textDark w-full p-3">
              <p className="font-heading text-sm">
                Bachelor of Science in Computer Science (BSc) in Information
                Systems
              </p>
              <p className="font-body text-sm italic  text-primary w-fit">
                University of Colombo School of Computing (UCSC)
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full p-3 h-full relative border bg-linear-to-br  from-background via-neutral-800 to-green-950 border-accent rounded-2xl mt-24 shadow-lg justify-center">
        <div className="absolute bg-[url(/waves2.svg)] bg-cover inset-0 opacity-20 z-0  rounded-2xl  w-full h-full"></div>
        {/* Projects */}
        <div className="flex flex-col z-10 ">
          <div className="font-heading text-3xl  text-textDark font-light p-3 ">
            <span className="text-4xl text-primary font-semibold">P</span>
            rojects
          </div>
          <div className="flex flex-wrap w-full h-fit space-x-4 space-y-4">
            <div className="flex flex-wrap text-accent w-fit h-fit p-3 border rounded-xl">
              <p className="font-body font-light text-sm">
                InternEase:An Internship Management System for Universities
              </p>
              <div className="flex my-2 space-x-2.5 flex-wrap space-y-2">
                <text className="w-fit  h-fit  border font-body text-sm px-2 py-1 items-center rounded-2xl border-accent font-light">
                  HTML
                </text>
                <text className="w-fit  h-fit border font-body text-sm px-2 py-1 items-center rounded-2xl border-accent font-light">
                  CSS
                </text>
                <text className=" w-fit  h-fit  border font-body text-sm px-2 py-1 items-center rounded-2xl border-accent= font-light">
                  Javascript
                </text>
                <text className=" w-fit  h-fit border font-body text-sm px-2 py-1 items-center rounded-2xl border-accent font-light">
                  PHP
                </text>
                <text className=" w-fit  h-fit border font-body text-sm px-2 py-1 items-center rounded-2xl border-accent font-light">
                  MySQL
                </text>
              </div>
            </div>
            <div className="flex flex-wrap text-accent w-fit h-fit p-3 border rounded-xl">
              <p className="font-body font-light text-sm">
                DriveEaze: Web Application for Samarasinghe motors
              </p>
              <div className="flex my-2 space-x-2.5 flex-wrap space-y-2">
                <text className="w-fit  h-fit  border font-body text-sm px-2 py-1 items-center rounded-2xl border-accent font-light">
                  React
                </text>
                <text className="w-fit  h-fit border font-body text-sm px-2 py-1 items-center rounded-2xl border-accent font-light">
                  HTML
                </text>
                <text className=" w-fit  h-fit  border font-body text-sm px-2 py-1 items-center rounded-2xl border-accent= font-light">
                  Javascript
                </text>
                <text className=" w-fit  h-fit border font-body text-sm px-2 py-1 items-center rounded-2xl border-accent font-light">
                  CSS
                </text>
                <text className=" w-fit  h-fit border font-body text-sm px-2 py-1 items-center rounded-2xl border-accent font-light">
                  Spring Boot
                </text>
                <text className=" w-fit  h-fit border font-body text-sm px-2 py-1 items-center rounded-2xl border-accent font-light">
                  PostgreSQL
                </text>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
