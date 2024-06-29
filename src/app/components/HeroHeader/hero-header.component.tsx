import styles from './hero-header.module.scss';
import { HiMapPin } from "react-icons/hi2";
import { HiMail } from "react-icons/hi";
import LinkBtn from '../LinkBtn/link-btn.component';
import {linkBtnArr} from '../../constants/utils'

export default function HeroHeader(): JSX.Element {
  // console.log("linkBtnArr: ", linkBtnArr);
  return (
    <div className={`${styles.mainContainer} w-full text-center mb-20`}>
      <div className={`${styles.gradient} h-full`}></div>
      <div className={`${styles.heroTitle} font-bold mt-16`}>Shaikh Yakub Hossain</div>
      <div className={`${styles.heroSubTitle}`}>Full-Stack Developer</div>
      <div className={`${styles.contacts} flex justify-center mt-5`}>
          <div className={`${styles.locationContainer}`}><HiMapPin className={`${styles.HiMapPin} my-auto mr-1`} /><div className={`${styles.location}`}>India</div></div>
          <div className={`${styles.gmailContainer}`}><HiMail className={`${styles.HiMail} my-auto mr-1`} /><div className={`${styles.gmail}`}>shaikhyakubhossain@gmail.com</div></div>
      </div>
      <div className={`${styles.linkBtnContainer} flex justify-center`}>
        {
          linkBtnArr.map((item, index):React.ReactNode => {
            return  (
              <LinkBtn key={index} customBtnClassName={styles.linkBtn} customTWStyle={""} icon={item.icon} txtBorderIconColor={item.txtBorderIconColor} bgColor={item.bgColor} >{item.text}</LinkBtn>
            )
          })
        }
      </div>
    </div>
  );
}
