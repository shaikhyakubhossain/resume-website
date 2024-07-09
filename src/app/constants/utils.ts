import { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa6";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { TbBrandLeetcode } from "react-icons/tb"
import { IoLogoGithub } from "react-icons/io";

import { HiMapPin } from "react-icons/hi2";
import { HiMail } from "react-icons/hi";


// type linkBtnIconArrType = {
    // icon: IconType,
    // text: React.ReactNode,
    // txtBorderIconColor: string,
    // bgColor: string
    // customBtnClassName: string,
    // customIconClassName?: string,
    // customTextClassName?: string,
    // customTWStyle: string
// }

type iconArr = {
    icon: IconType
}


export const linkBtnIconArr: iconArr[] = [
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

export const contactsIconArr: iconArr[] = [
    {
        icon: HiMapPin,
    },

    {
        icon: HiMail,
    }
]