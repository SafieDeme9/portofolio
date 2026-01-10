import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
export default function Contact() {
    return(
        <>
        <section>
            <h2>Let's connect!</h2>
            <a href="">
            <GrLinkedin />
            </a>
            <a href="">
                <FaGithub />
            </a>
            <a href="">
                <MdMailOutline />
            </a>
        </section>
        </>
    );
}