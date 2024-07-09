import { IconType } from "react-icons";


type propsType = {
    icon: IconType,
    text: React.ReactNode,
    mainContainerClassName: string,
    iconClassName: string,
    textClassName: string,
}

export default function Contact(props: propsType): JSX.Element{
    return (
        <div className={props.mainContainerClassName}><props.icon className={`${props.iconClassName} my-auto mr-1`} /><div className={`${props.textClassName}`}>{props.text}</div></div>
    )
}