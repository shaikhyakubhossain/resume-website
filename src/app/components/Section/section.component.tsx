import styles from './section.module.scss';
import SectionDetail from '../SectionDetail/section-detail.component';


type propsType = {
    sectionName: string,
    children: React.ReactNode
}

export default function Section(props: propsType): JSX.Element {
    return (
        <div className={`${styles.mainContainer} w-full flex justify-center`}>
            <div className={`${styles.sectionName} font-bold text-center font text-lg`}>{props.sectionName}</div>
            <div className={`${styles.sectionContent} text-left pl-10`}>
            {props.children}
            </div>
        </div>
    )
}