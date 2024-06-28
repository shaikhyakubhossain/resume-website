import styles from "./section-detail.module.scss";
import { HiOutlineCalendarDays } from "react-icons/hi2";

type propsType = {
    title: string,
    subTitle: string,
    dateFrom: string,
    dateTo: string,
    techStack?: string[],
    details?: string[]

}

export default function SectionDetail(props: propsType): JSX.Element {
  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.header} flex`}>
        <div className={`${styles.title}`}></div>
        <div> — </div>
        <div className={`${styles.subTitle}`}></div>
        <div className={`${styles.date} flex`}>
            <div className={`${styles.calendarIcon}`}><HiOutlineCalendarDays /></div>
            <div className={`${styles.dateFrom}`}></div>
            <div className={``}> - </div>
            <div className={`${styles.dateTo}`}></div>
        </div>
      </div>
      <div className={`${styles.techStack}`}>
        {
            props.techStack ? props.techStack.map((item, index) => {
                return (
                    <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{item}</span>
                )
            }) : null
        }
      </div>
      <div className={`${styles.details}`}>
            {
                props.details ? props.details.map((item, index) => {
                    return (
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    )
                }) : null
            }
      </div>
    </div>
  );
}
