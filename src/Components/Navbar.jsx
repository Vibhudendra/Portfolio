import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const navBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-24" src={logo} alt="VDS" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-3xl">
          <FaLinkedin />
          <FaGithub />
        </div>
    </nav>
  )
}

export default navBar