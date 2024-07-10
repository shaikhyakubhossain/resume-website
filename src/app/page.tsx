import "./globals.css"
import HeroHeader from "./components/HeroHeader/hero-header.component";
import Section from "./components/Section/section.component";
import SectionDetail from "./components/SectionDetail/section-detail.component";


export default async function Home() {

  const response: Response = await fetch("http://localhost:4000/userData", {cache: 'no-store'});
  // const response = await fetch("http://localhost:4000/userData");

  type sectionDetailType = {
    title: string
    subTitle: string,
    techStack?: string[],
    detailArr: string[],
    dateFrom: string,
    dateTo: string,
  }

  type sectionsType = {
    sectionTitle: string,
    sectionDetail: sectionDetailType[],
  }
  
  const userData = await response.json();

  console.log(userData.sections);

  return  (
    <div>
      <HeroHeader headerData={userData.header} />
      {
        userData.sections.map((item: sectionsType, index: number): JSX.Element => {
          return (
            <Section key={index} sectionName={item.sectionTitle}>
              {
                item.sectionDetail ? item.sectionDetail.map((item: sectionDetailType, index: number): JSX.Element => {
                  return (
                    <SectionDetail key={index} title={item.title} subTitle={item.subTitle} techStack={item.techStack} detailArr={item.detailArr} dateFrom={item.dateFrom} dateTo={item.dateTo} />
                  )
                }): null
              }
            </Section>
          )
        })
      }
    </div>
  );
}
