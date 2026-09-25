const projects = [
  {
    title: 'Expense Tracker',
    description:
      'A responsive expense tracking application that allows users to add, search, sort and delete expenses.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    live: 'https://expense-tracker-eight-tau-97.vercel.app/',
    github: 'https://github.com/penzimbuthia-sudo/expense-tracker',
    accent: 'sage',
  },
  {
    title: 'Study Break Buddy',
    description:
      'A simple productivity application that fetches study-break quotes from an API and allows users to save their favourites.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
    live: '#',
    github: 'https://github.com/penzimbuthia-sudo/study-break-buddy',
    accent: 'terracotta',
  },
  {
    title: 'Questly',
    description:
      'A collaborative crowdsourced learning platform with gamification, built as a capstone project with learner, contributor and admin roles.',
    technologies: ['React', 'Flask', 'Python', 'SQLAlchemy', 'SQLite'],
    live: '#',
    github: 'https://github.com/penzimbuthia-sudo/questly',
    accent: 'sage',
  },
  {
    title: 'Wordly',
    description:
      'A word-search web application built to practice working with APIs, user input and dynamically displaying fetched data.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
    live: '#',
    github: 'https://github.com/penzimbuthia-sudo/wordly',
    accent: 'terracotta',
  },
]

function Projects() {
  return (
    <section id="projects" className="px-6 py-24 bg-[#F1EBE2]">
      <div className="max-w-6xl mx-auto">

        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-[#B87862] mb-4">
            SELECTED WORK
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Things I've built.
          </h2>

          <p className="mt-4 text-[#6B656D] leading-relaxed">
            A selection of projects I've worked on while learning and
            developing my software engineering skills.
          </p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">

          {projects.map((project) => (
            <article
              key={project.title}
              className="p-6 md:p-7 rounded-2xl bg-[#FAF7F0] border border-[#E2D9CD] hover:border-[#BDB2A5] transition-colors"
            >

              {/* Accent */}
              <div
                className={`w-10 h-1 rounded-full mb-6 ${
                  project.accent === 'sage'
                    ? 'bg-[#7A8F7B]'
                    : 'bg-[#B87862]'
                }`}
              />

              {/* Title */}
              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-[#6B656D] leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1.5 rounded-full bg-[#F1EBE2] text-sm text-[#4F4A52]"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-6 mt-8 text-sm font-medium">

                {project.live !== '#' ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#7A8F7B] hover:text-[#17151A] transition-colors"
                  >
                    Live Demo →
                  </a>
                ) : (
                  <span className="text-[#9A9298]">
                    Live Demo unavailable
                  </span>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#17151A] hover:text-[#B87862] transition-colors"
                >
                  GitHub →
                </a>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Projects