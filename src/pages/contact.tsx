import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";

export default function ContactPage() {
  const buttontyles = `
    group
    flex flex-col items-center gap-2
    rounded-3xl p-5
    bg-sage-100
    text-center font-semibold
    shadow-md

    transition-all duration-200 ease-out
    hover:-translate-y-1 hover:rotate-[0.5deg]
    hover:bg-sage-200 hover:shadow-lg

    active:translate-y-0 active:scale-[0.97] active:shadow-sm

    focus-visible:outline-2
    focus-visible:outline-offset-2
    focus-visible:outline-sage-500
  `;

  return (
    <div className="w-full flex flex-col">
      <section className="relative flex min-h-64 w-full items-center justify-center overflow-hidden">
        <img
          src="/nature-bg.jpg"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-sage-600/25" />
        <h1 className="h1 font-bold text-white w-full p-12 md:p-24 relative justify-center items-center flex">
          Contact me!
        </h1>
      </section>

      <div className="w-full p-12 md:p-24 lg:px-44 flex flex-col sm:flex-row gap-9 justify-between items-center">
        <a
          href="https://www.linkedin.com/in/sandra-kahre/"
          target="_blank"
          rel="noopener noreferrer"
          className={buttontyles}
        >
          Connect with me
          <FaLinkedin
            size={64}
            className="transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:-rotate-2"
          />
        </a>

        <div className="flex flex-col gap-4">
          <a
            href="tel:+46703374700"
            className="group flex items-center gap-4 text-neutral-800 transition-all duration-200 hover:translate-x-1 hover:text-sage-600"
          >
            <FaPhoneAlt className="shrink-0 text-sage-500 transition-transform duration-200 group-hover:scale-110" />
            +46 70 337 47 00
          </a>
          <a
            href="mailto:sandra.kahre@gmail.com"
            className="group flex items-center gap-4 text-neutral-800 transition-all duration-200 hover:translate-x-1 hover:text-sage-600"
          >
            <FaEnvelope className="shrink-0 text-sage-500 transition-transform duration-200 group-hover:scale-110" />
            sandra.kahre@gmail.com
          </a>
          <div className="flex items-center gap-4 text-neutral-800">
            <FaMapMarkerAlt className="shrink-0 text-sage-500" />
            <span>Stockholm, Sweden</span>
          </div>
        </div>

        <a
          href="https://github.com/skahre"
          target="_blank"
          rel="noopener noreferrer"
          className={buttontyles}
        >
          See my projects
          <FaGithubSquare
            size={64}
            className="transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:-rotate-2"
          />
        </a>
      </div>
    </div>
  );
}
