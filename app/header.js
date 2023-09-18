import Link from "next/link"
import ModeColor from "./home/color-mode"

export default function Header(){
    
    return(
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="text-gray-200 ml-3 text-xl">포트폴리오</span>
                </a>
                <nav className="font-semibold md:ml-auto md:mr-right flex flex-wrap items-center text-base justify-center">
                    <Link href="/" className="mr-5 hover:text-red-300">홈</Link>
                    <Link href="/project" className="mr-5 hover:text-red-300">프로젝트</Link>
                    <Link href="/project" className="mr-5 hover:text-red-300">로그인</Link>
                </nav>
                <ModeColor/>
            </div>
        </header>
      )
}