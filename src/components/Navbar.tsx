import "../index.css"
export default function Navbar(){
    return(
        <>
        <nav className="fixed top-0 z-50 p-4">
            <div className="container mx-auto">
                <ul>
                    <li className="inline-block">
                        <a href="">About me</a>
                    </li>
                    <li className="inline-block">
                        <a href="">Experience</a>
                    </li>
                    <li className="inline-block">
                        <a href="">Projects</a>
                    </li>
                </ul>
            </div>
        </nav>
        </>)
};