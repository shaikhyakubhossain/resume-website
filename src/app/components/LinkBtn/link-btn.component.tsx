
type propsType = {
    customBtnClassName: string,
    customIconClassName?: string,
    customTextClassName?: string,
    customTWStyle: string,
    children: React.ReactNode,
    logo: React.ReactNode
}

export default function LinkBtn(props: propsType) {
  return (
    <button className={`${props.customBtnClassName} flex mx-auto bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-2 hover:border-transparent rounded-full` + props.customTWStyle}>
        <div className={`${props.customIconClassName} my-auto mr-1 text-2xl`}>{props.logo}</div>
        <div className={`${props.customTextClassName}`} >{props.children}</div>
    </button>
  );
}
