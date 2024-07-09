import "./globals.css"
import HeroHeader from "./components/HeroHeader/hero-header.component";
import Section from "./components/Section/section.component";
import SectionDetail from "./components/SectionDetail/section-detail.component";

type userDataHeaderLinksType = {
  iconName: string,
  text: string,
  txtBorderIconColor: string,
  bgColor: string,
}

type userDataHeaderType = {
  title: string,
  subTitle: string,
  contacts: string[],
  links: userDataHeaderLinksType[]
}



export default async function Home() {

  const response = await fetch("http://localhost:4000/userData", {cache: 'no-store'});
  // const response = await fetch("http://localhost:4000/userData");
  
  const userData = await response.json();

  // console.log(userData);

  return  (
    <div>
      <HeroHeader headerData={userData.header} />
      <Section sectionName="Education"><SectionDetail title={"test"} subTitle={"testing"} dateFrom="june 29" dateTo="present" techStack={["test", "testing"]} details={["testing", "testing"]} /></Section>
    </div>
  );
}
