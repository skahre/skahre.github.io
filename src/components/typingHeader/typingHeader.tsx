import "./typing.css";
import { useState, useEffect } from "react";

export default function TypingHeader() {
  const [displayedText, setDisplayedText] = useState("");
  const [displayedPrefix, setDisplayedPrefix] = useState("");
  const [isStill, setIsStill] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let phase = -1;
    let index = 0;
    let isDeleting = false;

    const prefix = "Hi, I'm ";
    const sequence = [
      { text: "sandra", deleteTo: "" },
      { text: "Sanrda", deleteTo: "San" },
      { text: "Sandra", pausBeforeFinal: true },
    ];

    function tick() {
      // Writing out the prefix
      if (phase < 0) {
        index++;
        setDisplayedPrefix(prefix.slice(0, index));

        if (index === prefix.length) {
          phase = 0;
          index = 0;
          timeout = setTimeout(tick, 1000); // pause before starting sequence
          return;
        } else {
          timeout = setTimeout(tick, 120);
          return;
        }
      }

      const current = sequence[phase];

      if (!isDeleting) {
        index++;
        const currentText = current.text.slice(0, index);
        setDisplayedText(currentText);

        if (index === current.text.length) {
          setIsStill(true);
          if (current.deleteTo !== undefined) {
            isDeleting = true;
            timeout = setTimeout(tick, 1000); // pause before deleting
          } else if (current.pausBeforeFinal) {
            timeout = setTimeout(() => {
              setIsDone(true);
              setIsStill(true);
            }, 2500); // pause before adding punctuation
            return;
          }
          return;
        }
      } else {
        setIsStill(false);
        index--;
        const currentText = current.text.slice(0, index);
        setDisplayedText(currentText);

        if (index === current.deleteTo!.length) {
          isDeleting = false;
          phase++;
          timeout = setTimeout(tick, 400); // pause before next phase
          return;
        }
      }

      timeout = setTimeout(tick, isDeleting ? 80 : 120);
    }

    timeout = setTimeout(tick, 2000); // initial delay
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <h1 className={`hero-header`}>
      {displayedPrefix}
      <span className={isStill ? "underline" : ""}>{displayedText}</span>
      {isDone && "!"}
      <span className={`cursor${isDone ? " cursor-done" : ""}`}>|</span>
    </h1>
  );
}
