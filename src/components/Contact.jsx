import { Mail, GitBranch } from 'lucide-react'

function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-24 bg-[#17151A] text-[#FAF7F0]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="max-w-2xl">

          <p className="text-sm font-semibold tracking-wide text-[#B87862] mb-4">
            LET'S CONNECT
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Have a project or opportunity in mind?
          </h2>

          <p className="mt-6 text-[#C9C2C8] leading-relaxed max-w-xl">
            I'm open to remote part-time, internship, freelance and junior
            software development opportunities. I'd love to hear from you.
          </p>

        </div>

        {/* Contact links */}
        <div className="flex flex-col gap-5 mt-12">

          <a
            href="mailto:penzifavour28@gmail.com"
            className="group flex items-center gap-4 w-fit text-[#FAF7F0]"
          >
            <Mail
              size={20}
              className="text-[#7A8F7B] group-hover:text-[#FAF7F0] transition-colors"
            />

            <span className="group-hover:text-[#7A8F7B] transition-colors">
              penzifavour28@gmail.com
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/penzi-mbuthia-0143833b5/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 w-fit text-[#FAF7F0]"
          >
            <span className="font-bold text-lg w-5 text-center text-[#B87862] group-hover:text-[#FAF7F0] transition-colors">
              in
            </span>

            <span className="group-hover:text-[#B87862] transition-colors">
              LinkedIn
            </span>
          </a>

          <a
            href="https://github.com/penzimbuthia-sudo"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 w-fit text-[#FAF7F0]"
          >
            <GitBranch
              size={20}
              className="text-[#7A8F7B] group-hover:text-[#FAF7F0] transition-colors"
            />

            <span className="group-hover:text-[#7A8F7B] transition-colors">
              github.com/penzimbuthia-sudo
            </span>
          </a>

        </div>

        {/* Footer */}
        <div className="mt-20 pt-6 border-t border-[#3A353D] text-sm text-[#9A9298]">
          © 2026 Penzi Mbuthia. Built with React and Tailwind CSS.
        </div>

      </div>
    </section>
  )
}

export default Contact