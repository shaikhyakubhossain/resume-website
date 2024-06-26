import { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa6";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { FaFigma } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";


type linkBtnType = {
    icon: IconType,
    text: React.ReactNode,
    txtBorderIconColor: string,
    bgColor: string
    // customBtnClassName: string,
    // customIconClassName?: string,
    // customTextClassName?: string,
    // customTWStyle: string
}

export const linkBtnArr: linkBtnType[] = [
    {
        icon: HiOutlineGlobeAlt,
        text: "/yakub-hossain",
        txtBorderIconColor: '#7C3AED',
        bgColor: '#F6F3FF'
    },
    {
        icon: FaLinkedin,
        text: "/yakub-hossain",
        txtBorderIconColor: '#0A66C2',
        bgColor: '#F1F8FF'
    },
    {
        icon: FaFigma,
        text: "/yakub-hossain",
        txtBorderIconColor: '#F24E1E',
        bgColor: '#FFF4F1'
    },
    {
        icon: IoLogoGithub,
        text: "/yakub-hossain",
        txtBorderIconColor: '#222222',
        bgColor: '#F2F2F2'
    }
]
