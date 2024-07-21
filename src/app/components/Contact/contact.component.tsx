
type propsType = {
    base64IconCode: string,
    text: React.ReactNode,
    mainContainerClassName: string,
    iconClassName: string,
    textClassName: string,
}

export default function Contact(props: propsType): JSX.Element{
    return (
        <div className={props.mainContainerClassName}><img src={props.base64IconCode} /><div className={`${props.textClassName}`}>{props.text}</div></div>
    )
}