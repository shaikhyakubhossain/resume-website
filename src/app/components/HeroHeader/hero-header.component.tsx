import styles from './hero-header.module.scss';
import { HiMapPin } from "react-icons/hi2";
import { HiMail } from "react-icons/hi";
import LinkBtn from '../LinkBtn/link-btn.component';
import {linkBtnArr} from '../../constants/utils'

export default function HeroHeader() {
  // console.log("linkBtnArr: ", linkBtnArr);
  return (
    <div className={`${styles.mainContainer} w-full text-center`}>
      <div className={`${styles.heroTitle} font-extrabold`}>Shaikh Yakub Hossain</div>
      <div className={`${styles.heroSubTitle}`}>Full-Stack Developer</div>
      <div className={`${styles.contacts} flex justify-center`}>
          <div className={`${styles.locationContainer}`}><HiMapPin className={`${styles.HiMapPin} my-auto mr-1`} /><div className={`${styles.location}`}>India</div></div>
          <div className={`${styles.gmailContainer}`}><HiMail className={`${styles.HiMail} my-auto mr-1`} /><div className={`${styles.gmail}`}>shaikhyakubhossain@gmail.com</div></div>
      </div>
      <div className={`${styles.linkBtnContainer} flex justify-center`}>
        {
          linkBtnArr.map((item):React.ReactNode => {
            return  (
              <LinkBtn customTWStyle={""} icon={item.icon} txtBorderIconColor={item.txtBorderIconColor} bgColor={item.bgColor} >{item.text}</LinkBtn>
            )
          })
        }
      </div>
    </div>
  );
}
