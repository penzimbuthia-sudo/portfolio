function Hero() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left side */}
          <div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl">
              Junior Software Developer
            </h1>

            <p className="text-xl md:text-2xl mt-6 max-w-2xl leading-relaxed text-[#4F4A52]">
              I build responsive web applications with React, JavaScript,
              Python and Flask.
            </p>

            <p className="mt-5 max-w-xl leading-relaxed text-[#6B656D]">
              Software Engineering graduate from Moringa School and Actuarial
              Science student at Multimedia University of Kenya.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">

              <a
                href="#projects"
                className="px-6 py-3 rounded-lg font-medium bg-[#17151A] text-[#FAF7F0] hover:bg-[#7A8F7B] transition-colors"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-lg font-medium border border-[#17151A] hover:bg-[#E8E0D5] transition-colors"
              >
                Contact Me
              </a>

            </div>

          </div>

          {/* Right side */}
          <div className="flex justify-center md:justify-end">

            <div className="w-full max-w-md aspect-square rounded-3xl overflow-hidden bg-[#F1EBE2] border border-[#E2D9CD]">

              <img
                src="/images/penzi.jpg"
                alt="Penzi Mbuthia"
                className="w-full h-full object-cover object-top"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero