import { useState } from "react"

const skills = [
  "C++",
  "Python",
  "JavaScript",
  "SQL",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "REST APIs",
  "Git & GitHub",
  "Pandas",
  "Scikit-learn",
  "FastAPI",
  "Machine Learning",
  "Data Structures & Algorithms"
];

const projects = [
  {
    name: "CodeCollab",
    desc: "Real-time collaborative coding platform with low-latency multi-user synchronization.",
    details:
      "Designed a real-time collaborative system using Socket.io enabling multi-user editing. Implemented room-based architecture, event broadcasting, and efficient state sync. Solved production issues like duplicate events, CORS, and deployment across Vercel and Render.",
    tech: ["React", "Node.js", "Socket.io", "WebSockets"],
    github: "https://github.com/TanviKrishnan2005/CODE_EDITOR_1.git",
    live: "https://code-editor-sigma-orpin.vercel.app/",
  },
  {
    name: "ELYSIAN",
    desc: "Full-stack e-commerce system with secure payment workflows.",
    details:
      "Built a full-stack application with REST APIs for product, cart, and order management. Integrated Stripe PaymentIntent flow for secure transactions and designed modular backend services focusing on scalability.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "REST APIs"],
    github: "https://github.com/TanviKrishnan2005/ELYSIAN",
    live:"https://elysian-ebon.vercel.app/",
  },
  {
    name: "HybridDemand AI",
    desc: "Real-time demand forecasting and automated allocation system.",
    details:
      "Developed an end-to-end ML system using FastAPI, Streamlit, and Kafka simulation. Implemented XGBoost models for time-series forecasting and built an allocation engine for automated decision-making.",
    tech: ["Python", "FastAPI", "XGBoost", "Kafka", "Streamlit"],
    github: "https://github.com/Nibhi16/demand-forecasting-system",
    live: "https://demand-forecasting-system-xkfwyws6pker6laf6ji8zh.streamlit.app/",
  },
]

const achievements = [
  "Solved 200+ DSA problems focusing on optimization and problem-solving.",
  "Built and deployed real-time and full-stack applications.",
  "Developed scalable backend systems using REST APIs and WebSockets.",
]

export default function App() {
  const [active, setActive] = useState(null)

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#3B2F2F] relative">

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 space-y-20">

        {/* HERO */}
        <section className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-[#7F1D1D]">
            Tanvi Lekshmi RM
          </h1>
          <p className="text-lg text-[#6B4F4F]">
            Computer Science Undergraduate | Software Development | Data Science | AI
          </p>
        </section>

        {/* ABOUT */}
        <section className="bg-white p-8 rounded-xl border border-[#E5DADA] shadow-sm">
          <h2 className="text-xl font-semibold text-[#7F1D1D]">About</h2>
          <p className="mt-3 text-[#6B4F4F]">
            I am a Computer Science undergraduate passionate about Software Development, Data Science, and Artificial Intelligence. I have experience building full-stack web applications, developing machine learning solutions, and working with modern technologies to solve real-world problems.

From designing user-centric applications to analyzing data and building predictive models, I enjoy creating impactful solutions while continuously learning and exploring new technologies
          </p>
        </section>

        {/* SKILLS */}
        <section>
          <h2 className="text-xl font-semibold text-[#7F1D1D] mb-4">
            Skills
          </h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <span
                key={s}
                className="bg-white border border-[#E5DADA] px-3 py-1 rounded-full text-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <h2 className="text-2xl font-semibold text-center text-[#7F1D1D] mb-10">
            Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div
                key={p.name}
                onClick={() => setActive(p)}
                className="cursor-pointer bg-white p-6 rounded-xl border border-[#E5DADA] card-hover"
              >
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="text-sm mt-2 text-[#6B4F4F]">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs bg-[#F5EAEA] px-2 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section>
          <h2 className="text-xl font-semibold text-[#7F1D1D] mb-4">
            Achievements
          </h2>

          <ul className="space-y-2 text-[#6B4F4F]">
            {achievements.map((a) => (
              <li key={a}>• {a}</li>
            ))}
          </ul>
        </section>

        {/* CONTACT */}
        <section className="text-center">
          <h2 className="text-xl font-semibold text-[#7F1D1D]">
            Contact
          </h2>

          <div className="mt-4 flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:rmtanvikrishnan@gmail.com"
              className="bg-[#7F1D1D] text-white px-5 py-2 rounded-full"
            >
              Email
            </a>

            <a
              href="https://github.com/TanviKrishnan2005"
              className="border px-5 py-2 rounded-full"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/tanvi-lekshmi-r-m-7a452b290/"
              className="border px-5 py-2 rounded-full"
            >
              LinkedIn
            </a>
          </div>
        </section>

      </div>

      {/* MODAL */}
      {active && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-[90%] relative">

            <h3 className="text-xl font-bold text-[#7F1D1D]">
              {active.name}
            </h3>

            <p className="mt-3 text-[#6B4F4F]">
              {active.details}
            </p>

            {/* No demo message */}
            {!active.live && (
              <p className="text-xs mt-3 italic text-[#6B4F4F]">
                Live demo not available
              </p>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              {active.tech.map((t) => (
                <span key={t} className="text-xs bg-[#F5EAEA] px-2 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-3 flex-wrap">
              <a
                href={active.github}
                target="_blank"
                className="bg-[#7F1D1D] text-white px-4 py-2 rounded-full"
              >
                GitHub
              </a>

              {active.live && (
                <a
                  href={active.live}
                  target="_blank"
                  className="border px-4 py-2 rounded-full"
                >
                  Live Demo
                </a>
              )}

              <button
                onClick={() => setActive(null)}
                className="border px-4 py-2 rounded-full"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}