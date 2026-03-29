import frackImage from "../../assets/frack-bild.jpg";
import "./hero.css";
import Arrow from "../../assets/arrow.tsx";
import Button from "../../components/UI-elements/button.tsx";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Hi, I'm Sandra!</h1>
        <div className="hero-text">
          <p className="subtitle">
            MSc Student in Interactive Media Technology
          </p>
          <span>
            <Arrow fill="var(--col-espresso)" height="12px" />
            <p>Full-stack Developer</p>
          </span>
          <span>
            <Arrow fill="var(--col-espresso)" height="12px" />
            <p>Front-end Developer</p>
          </span>
          <span>
            <Arrow fill="var(--col-espresso)" height="12px" />
            <p>UX Designer</p>
          </span>
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
      <img src={frackImage} />
    </section>
  );
}
