import Card   from '../Card/card'

export default function mainProject() {
    return (
        <div className="text-black ml-5 rounded-lg bg-gray-900 w-full p-3">
            <h1 className="text-2xl text-orange  text-center font-bold mb-5">Main Project</h1>
            <Card 
                  main
                  title="BookReaders"
                  urlGithub="https://github.com/Igorlabaki/https---github.com-Igorlabaki-AppBookReaders"
                  urlMentor=""
                  description="It is my first full stack app. For me it's a big challenge and it's still under development, every new knowledge I try to apply to it. The idea is to develop a complete social network with all features such as friends, likes, ratings, etc."
                  imagem="main/bookreaders.png"
                />
        </div>
    )
}


