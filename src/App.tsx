import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PopularDestintion from "./components/PopularDestination";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import Testimonial from "./components/Testimonial";
import TravelPartner from "./components/TravelPartner";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <TravelPartner />
      <PopularDestintion />
      <SectionOne />
      <SectionTwo />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
