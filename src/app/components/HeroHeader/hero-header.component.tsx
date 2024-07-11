import styles from './hero-header.module.scss';
import LinkBtn from '../LinkBtn/link-btn.component';
import {linkBtnIconArr, contactsIconArr} from '../../constants/utils';
import Contact from '../Contact/contact.component';

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
                <Contact key={index} mainContainerClassName={`${styles.locationContainer}`} iconClassName={`${styles.HiMapPin}`} textClassName={`${styles.location}`} icon={contactsIconArr[index].icon} text={item} /> 
            )
          })
        }
      </div>
      <div className={`${styles.linkBtnContainer} flex flex-wrap justify-center`}>
        {
          props.headerData.links.map((item, index):React.ReactNode => {
            return  (
              <LinkBtn key={index} customBtnClassName={styles.linkBtn} customTWStyle={""} icon={linkBtnIconArr[index].icon} txtBorderIconColor={item.txtBorderIconColor} bgColor={item.bgColor} >{item.text}</LinkBtn>
            )
          })
        }
      </div>
    </div>
  );
}
