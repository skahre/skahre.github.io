import MBDImage from "../../assets/mbd-bild.jpg";
import Arrow from "../../assets/arrow.tsx";
import Button from "../UI-elements/button.tsx";
import TypingHeader from "./typingHeader.tsx";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="flex flex-col sm:flex-row items-center bg-linear-to-r from-sand to-apricot p-[36px] md:px-[96px] md:py-[64px] 3xl:p-[176px] gap-[36px] md:gap-[96px]">
      <div className="flex flex-col gap-[16px] items-center sm:items-start w-full sm:w-3/5 max-sm:order-last">
        <TypingHeader />
        <div className="flex flex-col gap-[16px]">
          <h3 className="font-lekton font-bold">
            MSc Student in Interactive Media Technology
          </h3>
          <p className="flex items-center gap-[4px]">
            <Arrow fill="var(--color-espresso)" height="0.5lh" />
            Full-stack Developer
          </p>
          <p className="flex items-center gap-[4px]">
            <Arrow fill="var(--color-espresso)" height="0.5lh" />
            Front-end Developer
          </p>
          <p className="flex items-center gap-[4px]">
            <Arrow fill="var(--color-espresso)" height="0.5lh" />
            UX Designer
          </p>
        </div>
        <div className="flex items-center gap-[36px]">
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
        className="w-full sm:w-2/5 aspect-square object-cover rounded-t-full border-solid border-4 border-orange"
      />
    </section>
  );
}
