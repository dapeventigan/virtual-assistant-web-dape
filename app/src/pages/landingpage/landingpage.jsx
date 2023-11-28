import NavbarHome from "./navbar/navbar.jsx";
import Header from "./header/header.jsx";
import AboutUs from "./about/about.jsx";
import FAQs from "./faqs/faqs.jsx";
import Contact from "./contact/contact.jsx";
import Footer from "./footer/footer.jsx";

function LandingPage() {
  return (
    <>
      <NavbarHome />
      <Header />
      <AboutUs />
      <FAQs />
      <Contact />
      <Footer />
    </>
  );
}

export default LandingPage;
