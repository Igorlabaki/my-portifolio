import Card from "../Card/card";

export default function otherProjects() {
    return (
        <div className="text-black ml-5 my-5 rounded-lg bg-gray-900 w-full h-full p-3" >
           <h1 className="text-2xl text-orange  text-center font-bold mb-5">Other Projects</h1>
           <div className="flex w-1/4 h-5/6">
                <Card 
                    title="Calculator"
                    urlGithub=""
                    urlMentor=""
                    imagem="others\calculator.png"
                />
           </div>
           <div className="flex  justify-end items-center">
              <p className="font-semibold text-orange text-lg border-b-2 border-transparent hover:border-orange cursor-pointer">See all</p>
            </div>
        </div>
    )
}
