import { ArrowTopRightOnSquareIcon, SunIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
    return (
        <nav className="flex justify-between px-5 py-3">
            <div className="flex space-x-10">
                <a href="#" className="text-gray-400 space-x-2">
                    <ArrowTopRightOnSquareIcon className="inline w-6 h-6" />
                    <span className="align-middle text-lg">Source</span>
                </a>
                <a href="#" className="text-gray-400 space-x-2">
                    <ArrowTopRightOnSquareIcon className="inline w-6 h-6" />
                    <span className="align-middle text-lg">Hosted on Netlify</span>
                </a>
            </div>
            <div className="flex space-x-3">            
                <div className="flex items-center space-x-10">
                    <button className="text-gray-400">
                        <SunIcon className="inline w-6 h-6" />
                    </button>
                    <a href="#" className="text-gray-400 align-middle text-lg">
                        Logout
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;