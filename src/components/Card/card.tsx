interface cardProps{
    title: string
    imagem: string
    urlGithub?: string
    urlMentor?: string
    description?: string
    main?: boolean
}

export default function card(props: cardProps) {
    return (
        <div className="bg-black text-darkGray rounded-lg overflow-hidden flex flex-col ">
            <div className="h-4/5">
                <img src={`/imgs/${props.imagem}`} alt=""  className="h-full"/>
            </div>
            <div className="p-4">
                <div className="flex space-x-4">
                   {!props.main ? <p className="font-bold">Title:</p> : false}
                    <p className={`font-bold ${props.main ? 'text-3xl': 'text-lg'}`}>{props.title}</p>
                </div>
                {props.description ? <div className="flex space-x-4 text-lg">
                    <p className="font-bold">{props.description}</p>
                </div>: false}
                <div className="flex space-x-4">
                  <p className="font-bold">Links:</p>
                  <a href={props.urlGithub} target="_blank"
                      className="border-b-2 border-transparent hover:border-white">
                      GitHub</a>
                  {props.urlMentor ? <a href={props.urlMentor} target="_blank"
                      className="border-b-2 border-transparent hover:border-white">
                      Frontend-Mentor</a> : false}
                </div>
            </div>
        </div>
    )
}
