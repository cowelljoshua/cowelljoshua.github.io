import { useEffect } from "react";
import About from "../components/About";

const AboutPage = () => {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return <About />;
};

export default AboutPage;
