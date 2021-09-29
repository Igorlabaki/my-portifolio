interface cardProps{
    title: string
    imagem: string
    urlGithub: string
    urlMentor: string

}

export default function card(props: cardProps) {
    return (
        <div className="bg-black text-darkGray rounded-lg overflow-hidden">
            <div>
                <img src={`/imgs/${props.imagem}`} alt="" />
            </div>
            <div className="p-2">
                <div className="flex space-x-4">
                    <p className="font-bold">Title:</p>
                    <p className="font-bold">{props.title}</p>
                </div>
                <div className="flex space-x-4">
                  <p className="font-bold">Links:</p>
                  <a href={props.urlGithub}
                      className="border-b-2 border-transparent hover:border-white">
                      GitHub</a>
                  <a href={props.urlMentor}
                      className="border-b-2 border-transparent hover:border-white">
                      Frontend-Mentor</a>
                </div>
            </div>
        </div>
    )
}
