import Workflow from "./components/Workflow";
import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
import Test from "./components/Test";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <>
      {/* <Test /> */}
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer /> 
      </div>
    </>
  );
};

export default App;
