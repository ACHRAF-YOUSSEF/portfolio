import { Suspense, lazy } from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const About = lazy(() => import("./components/About"));
const Education = lazy(() => import("./components/Education"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Homelab = lazy(() => import("./components/Homelab"));
const Works = lazy(() => import("./components/Works"));
const Contact = lazy(() => import("./components/Contact"));

const SectionFallback = () => (
  <section className="max-w-7xl mx-auto px-6 sm:px-16 py-12 text-slate-400">
    Loading...
  </section>
);

const App = () => {
  return (
    <div className="site-shell">
      <div className="site-glow site-glow-left" />
      <div className="site-glow site-glow-right" />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Education />
          <Experience />
          <Tech />
          <Homelab />
          <Works />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
};

export default App;
