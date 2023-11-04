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
import NavProvider from "./context/NavContext";
function App() {
  return (
    <NavProvider>
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
    </NavProvider>
  );
}

export default App;
