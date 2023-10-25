import Navigation from "./components/Navigation";
import {
  Hero,
  CarsForRental,
  Contact,
  FAQ,
  Footer,
  Posts,
  Pricing,
  RentingProcess,
  Services,
  Testimonials,
} from "./views";
function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <RentingProcess />
      <CarsForRental />
      <Testimonials />
      <Pricing />
      <Services />
      <FAQ />
      <Posts />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
