import { IconType } from "react-icons";

type propsType = {
  icon: IconType,
  children: React.ReactNode,
  txtBorderIconColor: string,
  bgColor: string,
  linkUrl: string,
  customTWStyle: string,
  customBtnClassName?: string
  // customIconClassName?: string,
  // customTextClassName?: string,
}

export default function LinkBtn(props: propsType): JSX.Element {
  return (
    <button style={{borderColor: props.txtBorderIconColor, background:props.bgColor}} className={`${props.customBtnClassName} flex lg:mx-2 lg:my-1 mx-auto my-5  bg-transparent font-semibold py-2 px-4 border-2 hover:border-transparent rounded-full ` + props.customTWStyle}>
        <div style={{color: props.txtBorderIconColor}} className={` my-auto mr-1 text-2xl`}>{<props.icon />}</div>
        <div style={{color: props.txtBorderIconColor}} className={``} ><a href={props.linkUrl} target="_blank">{props.children}</a></div>
    </button>
  );
}
