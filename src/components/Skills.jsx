function Skills() {
  const skills = {
    Frontend: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    Backend: ['Python', 'Flask'],
    Database: ['SQL', 'SQLite', 'SQLAlchemy'],
    Tools: ['Git', 'GitHub', 'REST APIs'],
  }

  return (
    <section id="skills" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">
            What I work with.
          </h2>

          <p className="mt-4 text-[#6B656D] leading-relaxed">
            Technologies and tools I've worked with through coursework,
            projects and hands-on practice.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">

          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="p-6 rounded-2xl border border-[#E2D9CD] bg-[#FAF7F0]"
            >

              <h3 className="text-lg font-semibold text-[#7A8F7B]">
                {category}
              </h3>

              <div className="flex flex-wrap gap-2 mt-5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 rounded-lg bg-[#F1EBE2] text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills