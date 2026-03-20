import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";

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
    <BrowserRouter>
      <div className="site-shell">
        <div className="site-glow site-glow-left" />
        <div className="site-glow site-glow-right" />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Suspense fallback={<SectionFallback />}>
            <Experience />
            <Tech />
            <Homelab />
            <Works />
            <Contact />
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
