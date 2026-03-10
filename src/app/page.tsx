import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PortfolioTabs from "@/components/PortfolioTabs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <PortfolioTabs />
      <Contact />
      <Footer />
      <ChatBot />
    </main>
  );
}
