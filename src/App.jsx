import DataImage, { listAchievement } from "./data";
import { listTools, listEducate, listProyek, listExperience } from "./data";

const App = () => {
  return (
    <>
      <div className="hero grid md:grid-cols-2 grid-cols-1 items-center pt-1.5 xl:gap-0 gap-6">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <p>"I Want to become Frontend Developer"</p>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, I'm Edwin Kurniawan
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            I am a Frontend Developer passionate about building responsive and
            user-friendly websites. I gained my experience through projects
            during my college years and continue improving my skills in modern
            web technologies
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#project"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              View Project <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-125 md:ml-auto animate__animated animate__fadeInUp animate__delay-4s"
          loading="lazy"
        />
      </div>

      {/* About */}
      <div className="about mt-32 py-10" id="about">
        <div>
          <h1
            className="text-center text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Education
          </h1>
          <p
            className="text-center text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Here is a list of the schools I attended.
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {listEducate.map((edu) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
                key={edu.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={edu.dad}
                data-aos-once="true"
              >
                <img
                  src={edu.gambar}
                  alt="Tools Image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold">{edu.nama}</h4>
                  <p className="opacity-50">{edu.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools used
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            The following are the tools that I usually use to create websites.
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* About */}

      {/* Achievement */}
      <div className="project mt-32 py-10" id="achievement">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Achievement
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Here are the experiences and awards I received
        </p>
        <div className="mt-14">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
            <div className="">
              <h4
                className="text-center text-2xl font-bold -mb-9"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                Experience
              </h4>
              <div className="tools-box mt-14 grid grid-cols-1">
                {listExperience.map((ex) => (
                  <div
                    className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group mt-5"
                    key={ex.id}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={ex.dad}
                    data-aos-once="true"
                  >
                    <img
                      src={ex.gambar}
                      alt="Tools Image"
                      className="w-20 h-20 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-bold">{ex.nama}</h4>
                      <p className="opacity-50">{ex.ket}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="">
              <h4
                className="text-center text-2xl font-bold -mb-9"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                Achievement
              </h4>
              <div className="tools-box mt-14 grid grid-cols-1">
                {listAchievement.map((achiv) => (
                  <div
                    className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group mt-5"
                    key={achiv.id}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={achiv.dad}
                    data-aos-once="true"
                  >
                    <img
                      src={achiv.gambar}
                      alt="Tools Image"
                      className="w-20 h-20 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-bold">{achiv.nama}</h4>
                      <p className="opacity-50">{achiv.ket}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Achievement */}

      {/* Project */}
      <div className="project mt-32 py-10" id="project">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Project
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Here are the project contributions that I worked on
        </p>
        <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((pro) => (
            <div
              className="p-4 bg-zinc-800 rounded-md"
              key={pro.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={pro.dad}
              data-aos-once="true"
            >
              <img src={pro.gambar} alt="Project Image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{pro.nama}</h1>
                <p className="text-base/loose mb-4">{pro.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {pro.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 rounded-md font-semibold bg-zinc-600"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    className="bg-violet-700 p-3 rounded-lg block border-zinc-600 hover:bg-violet-600"
                    href={pro.link}
                  >
                    Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Project */}

      {/* Contact */}
      <div className="contact mt-32 sm:p-10 p-0" id="contact">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Contact
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          let's connect with me
        </p>
        <form
          action="https://formsubmit.co/edwn.k29@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          autoComplete="off"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Input your name..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Input your email..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="message">
                message
              </label>
              <textarea
                name="message"
                id="message"
                cols="45"
                rows="7"
                placeholder="message..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="text-center">
              <button
                className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border-zinc-600 hover:bg-violet-600"
                type="submit"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* Contact */}
    </>
  );
};

export default App;
