import styles from "./section-detail.module.scss";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { TbPointFilled } from "react-icons/tb";

type propsType = {
  title: string;
  subTitle: string;
  dateFrom: string;
  dateTo: string;
  techStack?: string[];
  detailArr?: string[];
};

export default function SectionDetail(props: propsType): JSX.Element {
  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.header} flex justify-between mr-32`}>
        <div className={`${styles.titleAndSubTitleContainer} flex`}>
          <div className={`${styles.title} font-bold text-lg`}>{props.title}</div>
          <div>&nbsp;—&nbsp;</div>
          <div className={`${styles.subTitle} text-lg`}>{props.subTitle}</div>
        </div>

        <div className={`${styles.date} flex`}>
          <div className={`${styles.calendarIcon} my-auto text-2xl mr-2`}>
            <HiOutlineCalendarDays />
          </div>
          <div className={`${styles.dateFrom}`}>{props.dateFrom}</div>
          <div className={``}>&nbsp;-&nbsp; </div>
          <div className={`${styles.dateTo}`}>{props.dateTo}</div>
        </div>
      </div>
      <div className={`${styles.techStack}`}>
        {props.techStack
          ? props.techStack.map((item, index): JSX.Element => {
              return (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-500"
                >
                  {item}
                </span>
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
    </div>
  );
}
