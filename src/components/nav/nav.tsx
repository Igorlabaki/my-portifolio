import Link from 'next/link'

export default function nav() {

    const navList = [
        {href:"/",                text:"Home"},
        {href:"/about",           text:"About"},
        {href:"/Skills",          text:"Skills"},
        {href:"/Curriculum",      text:"Curriculum"},
    ]

    function renderNavItems(){
        return (
            navList.map( e => {
                return(
                    <Link href={e.href}>
                        <a className="cursor-pointer hover:text-yellow-600">{e.text}</a>
                    </Link>
                )
            })
        )
    }

    return (
        <div className="flex items-between justify-center">
            <div className="flex justify-center items-center flex-1 text-white">
                <div className="flex items-center w-full space-x-5" >
                    <div className="rounded-full h-28 w-28 overflow-hidden">
                        <img src="https://github.com/Igorlabaki.png" alt=""/>
                    </div>
                    <div className="space-y-2">
                        <h1 className=" font-semibold text-3xl">Igor Labaki <span className="text-yellow-600">Gonçalo</span></h1> 
                        <h1 className=" font-light text-lg">Frontend Developer  <span className="text-yellow-600">Jr.</span></h1> 
                    </div>
                </div>
            </div>
            <div className="text-white flex space-x-5">
                {renderNavItems()}
            </div>
        </div>
    )
}