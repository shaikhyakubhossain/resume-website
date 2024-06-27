import styles from './section.module.scss';

type propsType = {
    sectionName: string,
    children: React.ReactNode
}

export default function Section(props: propsType) {
    return (
        <div className={`${styles.mainContainer} w-full flex justify-center text-center`}>
            <div className={`${styles.sectionName}`}>{props.sectionName}</div>
            <div className={`${styles.sectionContent}`}>
                {props.children}
            </div>
        </div>
    )
}