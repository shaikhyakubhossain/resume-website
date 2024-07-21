import styles from './hero-header.module.scss';
import LinkBtn from '../LinkBtn/link-btn.component';
import Contact from '../Contact/contact.component';

type userDataHeaderContactsType = {
  base64IconCode: string,
  text: string
}

type userDataHeaderLinksType = {
  base64IconCode: string,
  text: string,
  txtBorderIconColor: string,
  bgColor: string,
  linkUrl: string
}

type userDataHeaderType = {
  title: string,
  subTitle: string,
  contacts: userDataHeaderContactsType[],
  links: userDataHeaderLinksType[]
}

type propsType = {
  headerData: userDataHeaderType
}

export default function HeroHeader(props: propsType): JSX.Element {
  // console.log("linkBtnArr: ", linkBtnArr);
  return (
    <div className={`${styles.mainContainer} w-full text-center mb-20`}>
      <div className={`${styles.gradient} h-full`}></div>
      <div className={`${styles.heroTitle} font-bold mt-16`}>{props.headerData.title}</div>
      <div className={`${styles.heroSubTitle}`}>{props.headerData.subTitle}</div>
      <div className={`${styles.contacts} flex justify-center mt-5`}>
        {
          props.headerData.contacts.map((item, index): JSX.Element => {
            return (
                <Contact key={index} mainContainerClassName={`${styles.locationContainer}`} iconClassName={`${styles.HiMapPin}`} textClassName={`${styles.location}`} base64IconCode={item.base64IconCode} text={item.text} /> 
            )
          })
        }
      </div>
      <div className={`${styles.linkBtnContainer} flex flex-wrap justify-center`}>
        {
          props.headerData.links.map((item, index):React.ReactNode => {
            return  (
              <LinkBtn key={index} customBtnClassName={styles.linkBtn} customTWStyle={""} base64IconCode={item.base64IconCode} txtBorderIconColor={item.txtBorderIconColor} bgColor={item.bgColor} linkUrl={item.linkUrl} >{item.text}</LinkBtn>
            )
          })
        }
      </div>
    </div>
  );
}
