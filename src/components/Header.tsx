import Navbar from "./Navbar"
export default function Header() {
    return(
        <>
        <header className="sticky top-0 z-[1] mx-auto  flex w-full flex-wrap items-center justify-between bg-white">
            <Navbar />
        </header>
        </>
    )
};