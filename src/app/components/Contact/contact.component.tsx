
type propsType = {
    base64IconCode: string,
    text: string,
    mainContainerClassName: string,
    iconClassName: string,
    textClassName: string,
}

export default function Contact(props: propsType): JSX.Element{
    return (
        <div className={props.mainContainerClassName}><img className={`w-5 h-5 my-auto`} src={props.base64IconCode} /><div className={`${props.textClassName}`}>{props.text}</div></div>
    )
}