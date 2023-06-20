import Link from "next/link";
import styles from "./header-logo.module.css";
import LogoAnimated from "./logos/LogoAnimated";
import { LogoContext } from "./LogoContext";

function HeaderLogo() {

  return (
    <>
      <LogoContext />
      {/* <svg
        data-testid="geist-icon"
        fill="none"
        height={24}
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        className="dark:text-[#333] text-[#eaeaea] ml-2 mr-1"
      >
        <path d="M16.88 3.549L7.12 20.451" />
      </svg> */}

      <Link href="/" title="Home" className="hover:opacity-75">
        <LogoAnimated height={32} />
      </Link>
    </>
  );
}

export default HeaderLogo;
