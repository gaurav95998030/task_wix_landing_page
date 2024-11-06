import { FaDownload } from "react-icons/fa";

export default function Header() {
    return (
        <header className="w-full min-h-[70px] bg-gradient-to-r from-blue-900 to-gray-900 text-white flex items-center px-10 justify-between fixed z-10 shadow-xl">
            <h1 className="text-2xl font-bold tracking-wide">Gaurav Dev</h1>

            <a
                href="https://drive.google.com/file/d/1_HBTsP-fobfUeXHA_u8CW-PQqVHfqp2h/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 px-4 py-2 w-[160px] rounded-lg flex justify-center items-center gap-2 text-white font-semibold shadow-md transition-all duration-300 transform hover:bg-yellow-400 hover:scale-105 hover:shadow-lg"
            >
                <span>Download</span>
                <FaDownload />
            </a>
        </header>
    );
}
