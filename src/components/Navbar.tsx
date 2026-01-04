export default function Navbar(){
    return(
        <>
        <nav className="fixed top-0 flex items-center justify-between bg-white w-full">
            <div className="container mx-auto">
                <ul className="list-style-none me-auto flex flex-col ps-0 lg:flex-row">
                    <li className="inline-block">
                        <a href="">About me</a>
                    </li>
                    <li className="inline-block">
                        <a href="">Projects</a>
                    </li>
                    <li className="inline-block">
                        <a href="">Experience</a>
                    </li>
                </ul>
            </div>
            
        </nav>
        </>)
};