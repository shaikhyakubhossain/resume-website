import { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa6";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { TbBrandLeetcode } from "react-icons/tb"
import { IoLogoGithub } from "react-icons/io";


type linkBtnIconArrType = {
    icon: IconType,
    // text: React.ReactNode,
    // txtBorderIconColor: string,
    // bgColor: string
    // customBtnClassName: string,
    // customIconClassName?: string,
    // customTextClassName?: string,
    // customTWStyle: string
}

export const linkBtnIconArr: linkBtnIconArrType[] = [
    {
        icon: HiOutlineGlobeAlt,
    },
    
    {
        icon: FaLinkedin,
    },
    
    {
        icon: TbBrandLeetcode,
    },
    
    {
        icon: IoLogoGithub,
    }
    
]
