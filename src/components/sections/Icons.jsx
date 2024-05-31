import {
  RiHtml5Fill,
  RiJavascriptFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import { SiCsharp } from "react-icons/si";

const classes = "w-5 h-5 md:w-10 md:h-10";
const html = <RiHtml5Fill className={`${classes}  text-orange-500`} />;
const css = <IoLogoCss3 className={`${classes}  text-blue-700`} />;
const js = <RiJavascriptFill className={`${classes} text-yellow-400`} />;
const react = <RiReactjsFill className={`${classes} text-cyan-500`} />;
const tw = <RiTailwindCssFill className={`${classes} text-cyan-400`} />;
const csharp = <SiCsharp className={`${classes} text-indigo-700`} />;

export const logos = [
  { logo: html, text: "Html" },
  { logo: css, text: "Css" },
  { logo: js, text: "JavaScript" },
  { logo: react, text: "React" },
  { logo: tw, text: "TailWind" },
  { logo: csharp, text: "C Sharp" },
];
