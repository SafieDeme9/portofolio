import projects from "../../data/projects"
import ProjectCard from "../ProjectCard"

export default function Projects() {
    return(
        <section className="bg-white">
            <h3 className="items-start text-xl text-blue-500">Projects</h3>
            <div className="flex flex-wrap justify-between items-center mx-auto">
                <ProjectCard name= {projects[0].name}
                desc = {projects[0].desc}
                />
                <ProjectCard name= {projects[1].name}
                desc = {projects[1].desc}
                />
            </div>
    </section>
    );
}
