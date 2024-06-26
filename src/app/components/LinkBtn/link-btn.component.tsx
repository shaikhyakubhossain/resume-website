import { IconType } from "react-icons";

type propsType = {
    customBtnClassName?: string,
    customIconClassName?: string,
    customTextClassName?: string,
    customTWStyle: string,
    children: React.ReactNode,
    icon: IconType,
    txtBorderIconColor: string
}

export default function LinkBtn(props: propsType) {
  return (
    <button style={{borderColor: props.txtBorderIconColor}} className={`flex mx-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-2 hover:border-transparent rounded-full` + props.customTWStyle}>
        <div className={` my-auto mr-1 text-2xl`}>{<props.icon />}</div>
        <div className={``} >{props.children}</div>
    </button>
  );
}
