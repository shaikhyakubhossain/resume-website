import styles from "./section-detail.module.scss";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { TbPointFilled } from "react-icons/tb";
import Link from "next/link";

type links = {
  url: string,
  logoBase64: string
}

type propsType = {
  title: string;
  subTitle?: string;
  dateFrom?: string;
  dateTo?: string;
  techStack?: string[];
  detailArr?: string[];
  links?: links[];
};

export default function SectionDetail(props: propsType): JSX.Element {
  return (
    <div className={`${styles.mainContainer} ml-10 mb-2`}>
      <div className={`${styles.header} lg:flex justify-between lg:mr-32 my-2`}>
        <div className={`${styles.titleAndSubTitleContainer} flex`}>
          <div className={`${styles.title} font-bold text-lg`}>{props.title}</div>
          {
            props.subTitle ? (
              <div>&nbsp;—&nbsp;</div>
            ) : null
          }
          <div className={`${styles.subTitle} text-lg`}>{props.subTitle}</div>
        </div>
        {
          props.dateFrom && props.dateTo ? (
            <div className={`${styles.date} flex`}>
          <div className={`${styles.calendarIcon} my-auto text-2xl mr-2`}>
            <HiOutlineCalendarDays />
          </div>
          <div className={`${styles.dateFrom}`}>{props.dateFrom}</div>
          <div className={``}>&nbsp;-&nbsp; </div>
          <div className={`${styles.dateTo}`}>{props.dateTo}</div>
        </div>
          ) : null
        }
        
      </div>
      <div className={`${styles.techStack} flex flex-wrap `}>
        {props.techStack
          ? props.techStack.map((item, index): JSX.Element => {
              return (
                <div
                  key={index}
                  className="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-500 mb-2"
                >
                  {item}
                </div>
              );
            })
          : null}
      </div>
      <div className={`${styles.detailsContainer}`}>
        {props.detailArr
          ? props.detailArr.map((item, index): JSX.Element => {
              return (
                <div key={index} className={`${styles.subDetailContainer} flex`}>
                  <div className={`${styles.subDetailBulletPoint} my-auto text-2xl mr-2 text-gray-300`}><TbPointFilled /></div>
                  <div>{item}</div>
                </div>
              );
            })
          : null}
      </div>
      <div className={`${styles.linksContainer} flex`}>
          {props.links ? props.links.map((item, index): JSX.Element => {
            return (
              <Link className="my-auto mr-3" href={item.url} key={index}>
                <img src={item.logoBase64} className="w-5 h-5" alt="" />
              </Link>
            )
          })
          : null}
      </div>
    </div>
  );
}
