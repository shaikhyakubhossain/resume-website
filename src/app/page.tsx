import "./globals.css"
import HeroHeader from "./components/HeroHeader/hero-header.component";
import Section from "./components/Section/section.component";

export default function Home() {
  return (
    <div>
      <HeroHeader />
      <Section sectionName="Education">hello</Section>
    </div>
  );
}
