import "./globals.css"
import HeroHeader from "./components/HeroHeader/hero-header.component";
import Section from "./components/Section/section.component";
import SectionDetail from "./components/SectionDetail/section-detail.component";

export default function Home() {
  return (
    <div>
      <HeroHeader />
      <Section sectionName="Education"><SectionDetail title={"test"} subTitle={"testing"} dateFrom="june 29" dateTo="present" /></Section>
    </div>
  );
}
