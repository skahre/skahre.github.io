import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col">
      <div className="relative w-full">
        <img
          src="/nature-bg.jpg"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-sage-600/25" />
        <div className="h2 font-bold text-white w-full p-24 relative justify-center items-center flex">
          Contact me!
        </div>
      </div>
      <div className="w-full p-24 flex gap-9 justify-between items-center">
        <p className="rounded-3xl p-4 bg-sage-100 shadow-md font-semibold text-center flex flex-col gap-2 items-center">
          Connect with me
          <FaLinkedin size={64} />
        </p>
        <div className="flex flex-col gap-4">
          <p className="inline-flex items-center gap-4">
            <FaPhoneAlt />
            +46 70 337 47 00
          </p>
          <p className="inline-flex items-center gap-4">
            <FaEnvelope />
            sandra.kahre@gmail.com
          </p>
          <p className="inline-flex items-center gap-4">
            <FaMapMarkerAlt />
            Stockholm, Sweden
          </p>
        </div>
        <p className="rounded-3xl p-4 bg-sage-100 shadow-md font-semibold text-center flex flex-col gap-2 items-center">
          See my projects
          <FaGithubSquare size={64} />
        </p>
      </div>
    </div>
  );
}
