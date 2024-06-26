import { IconType } from "react-icons";

type propsType = {
  icon: IconType,
  children: React.ReactNode,
  txtBorderIconColor: string,
  bgColor: string,
  customTWStyle: string,
  customBtnClassName?: string
  // customIconClassName?: string,
  // customTextClassName?: string,
}

export default function LinkBtn(props: propsType) {
  return (
    <button style={{borderColor: props.txtBorderIconColor, background:props.bgColor}} className={`${props.customBtnClassName} flex mx-2 bg-transparent font-semibold py-2 px-4 border-2 hover:border-transparent rounded-full` + props.customTWStyle}>
        <div style={{color: props.txtBorderIconColor}} className={` my-auto mr-1 text-2xl`}>{<props.icon />}</div>
        <div style={{color: props.txtBorderIconColor}} className={``} >{props.children}</div>
    </button>
  );
}
