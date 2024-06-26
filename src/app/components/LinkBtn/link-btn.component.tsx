import { IconType } from "react-icons";

type propsType = {
  icon: IconType,
  children: React.ReactNode,
  txtBorderIconColor: string
  customTWStyle: string,
  // customBtnClassName?: string,
  // customIconClassName?: string,
  // customTextClassName?: string,
}

export default function LinkBtn(props: propsType) {
  return (
    <button style={{borderColor: props.txtBorderIconColor}} className={`flex mx-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-2 hover:border-transparent rounded-full` + props.customTWStyle}>
        <div style={{color: props.txtBorderIconColor}} className={` my-auto mr-1 text-2xl`}>{<props.icon />}</div>
        <div style={{color: props.txtBorderIconColor}} className={``} >{props.children}</div>
    </button>
  );
}
