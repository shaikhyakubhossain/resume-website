import "./globals.css"
import HeroHeader from "./components/HeroHeader/hero-header.component";
import Section from "./components/Section/section.component";
import SectionDetail from "./components/SectionDetail/section-detail.component";
import DarkMode from "./components/DarkMode/dark-mode.component";

type links = {
  url: string,
  logoBase64: string
}

type sectionDetailType = {
  title: string
  subTitle?: string,
  techStack?: string[],
  detailArr: string[],
  dateFrom?: string,
  dateTo?: string,
  links?: links[],
}

type sectionsType = {
  sectionTitle: string,
  sectionDetail: sectionDetailType[],
}

export default async function Home() {

  const url = "https://rwb5v352kyg5uy4g5ug53u5gu3g56h65bbusfsdf111dadasdsawewwee.vercel.app/userData"
  // const url = "http://localhost:4000/userData"

  const response: Response = await fetch(url, {
    method: 'GET',
    headers: {
      "code": `${process.env.ACCESS_CODE}`
    },
    cache: 'no-store'
  });

  const userData = await response.json();

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
                    <SectionDetail key={index} title={item.title} subTitle={item.subTitle} techStack={item.techStack} detailArr={item.detailArr} dateFrom={item.dateFrom} dateTo={item.dateTo} links={item.links} />
                  )
                }): null
              }
            </Section>
          )
        })
      }
      {/* <DarkMode darkMode={isDarkModeOn} /> */}
    </div>
  );
}
