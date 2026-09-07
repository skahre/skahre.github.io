import MBDImage from "../../assets/mbd-bild.jpg";
import { FaAngleRight } from "react-icons/fa";
import Button from "../UI-elements/button.tsx";
import TypingHeader from "./typingHeader.tsx";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="flex flex-col sm:flex-row items-center p-9 md:px-24 md:py-16 3xl:p-44 gap-9 md:gap-24">
      <div className="flex flex-col gap-4 items-center sm:items-start w-full sm:w-3/5 max-sm:order-last">
        <TypingHeader />
        <div className="flex flex-col gap-4">
          <h2 className="font-body font-semibold h3">
            MSc Student in Interactive Media Technology
          </h2>
          <p className="flex items-center gap-1">
            <FaAngleRight fill="var(--color-sage-400)" height="0.7lh" />
            Full-stack Developer
          </p>
          <p className="flex items-center gap-1">
            <FaAngleRight fill="var(--color-sage-400)" height="0.7lh" />
            UX Designer
          </p>
          <p className="flex items-center gap-1">
            <FaAngleRight fill="var(--color-sage-400)" height="0.7lh" />
            Accessibility focused
          </p>
        </div>
        <div className="flex items-center gap-9">
          <Link to="/projects">
            <Button
              label="see my work"
              size="m"
              variant="primary"
              onClick={() => console.log("yippie")}
            />
          </Link>
          <Button
            label="contact me"
            size="m"
            variant="secondary"
            onClick={() => console.log("yippie")}
          />
        </div>
      </div>
      <img
        src={MBDImage}
        alt="Profile picture of Sandra"
        className="w-full sm:w-2/5 aspect-square object-cover rounded-t-full rounded-b-xl border-solid border-4 border-sage-200"
      />
    </section>
  );
}
