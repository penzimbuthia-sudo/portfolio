function About() {
  return (
    <section id="about" className="px-6 py-24 bg-[#F1EBE2]">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

          {/* Left side */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-[#7A8F7B] mb-4">
              ABOUT ME
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-md">
              Building, learning, becoming.
            </h2>

            <p className="mt-6 text-lg text-[#4F4A52] leading-relaxed max-w-md">
              I like learning by building — taking an idea, figuring out how
              it works, and turning it into something people can actually use.
            </p>
          </div>

          {/* Right side */}
          <div className="space-y-8 text-[#4F4A52] leading-relaxed">

            <div>
              <h3 className="text-base font-semibold text-[#17151A] mb-2">
                Software development
              </h3>

              <p>
                I recently completed Software Engineering training at Moringa
                School, where I gained hands-on experience building frontend
                and backend applications, working with APIs and databases,
                and collaborating on software projects.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-[#17151A] mb-2">
                Currently
              </h3>

              <p>
                I'm studying Actuarial Science at Multimedia University of
                Kenya while continuing to grow as a developer through personal
                projects, technical practice and real-world opportunities.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-[#17151A] mb-2">
                What I'm looking for
              </h3>

              <p>
                I'm interested in remote part-time, internship, freelance and
                junior development opportunities where I can contribute,
                learn from others and keep building practical experience.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About