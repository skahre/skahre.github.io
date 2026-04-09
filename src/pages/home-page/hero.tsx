import MBDImage from "../../assets/mbd-bild.jpg";
import "./hero.css";
import Arrow from "../../assets/arrow.tsx";
import Button from "../../components/UI-elements/button.tsx";
import TypingHeader from "../../components/typingHeader/typingHeader.tsx";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-left">
        <TypingHeader />
        <div className="hero-text">
          <h3 className="subtitle">
            MSc Student in Interactive Media Technology
          </h3>
          <p>
            <Arrow fill="var(--color-espresso)" height="0.5lh" />
            Full-stack Developer
          </p>
          <p>
            <Arrow fill="var(--color-espresso)" height="0.5lh" />
            Front-end Developer
          </p>
          <p>
            <Arrow fill="var(--color-espresso)" height="0.5lh" />
            UX Designer
          </p>
        </div>
        <div className="btn-band">
          <Button
            label="see my work"
            size="m"
            variant="primary"
            onClick={() => console.log("yippie")}
          />
          <Button
            label="contact me"
            size="m"
            variant="secondary"
            onClick={() => console.log("yippie")}
          />
        </div>
      </div>
      <img src={MBDImage} />
    </section>
  );
}
