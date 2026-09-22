import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Dacii from "@/components/Dacii";
import Romanizarea from "@/components/Romanizarea";
import MythsSection from "@/components/MythsSection";
import LinguisticTable from "@/components/LinguisticTable";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Dacii />
      <Romanizarea />
      <MythsSection />
      <LinguisticTable />
      <Footer />
    </main>
  );
}
