import styles from './section.module.scss';


type propsType = {
    sectionName: string,
    children: React.ReactNode
}

export default function Section(props: propsType): JSX.Element {
    return (
        <div className={`${styles.mainContainer} w-full lg:flex justify-center`}>
            <div className={`${styles.sectionName} font-bold text-center lg:text-left lg:pl-40 font text-lg`}>{props.sectionName}</div>
            <div className={`${styles.sectionContent} text-left lg:pl-10`}>
            {props.children}    
            </div>
        </div>
    )
}