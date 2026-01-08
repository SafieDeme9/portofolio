import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
export default function ProjectCard(Project: any) {
    return(
        <>
        <div className="bg-white rounded-xl shadow-lg 
                  hover:shadow-xl transition-shadow duration-300 
                  p-6 transform hover:-translate-y-1">
            <img />
            <h3 className="text-xl font-bold text-gray-800 ">
                {Project.name}
            </h3>
            <p className="text-gray-600  mt-2">
                {Project.desc}
            </p>
            <a href= "" className="bg-transparent hover:bg-slate-700 hover:text-white  rounded-lg text-black">
              <FaGithub />
            </a>
            <a href="https://ndqx4r.csb.app/">
            <FaExternalLinkAlt />
            </a>

        </div>
        </>
    );
}