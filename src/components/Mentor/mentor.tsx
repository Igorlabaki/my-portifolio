import Card   from '../Card/card'

export default function section() {
    return (
        <div className="bg-gray-900 w-4/12 h-full flex flex-col rounded-lg p-3">
            <h1 className="text-2xl text-orange  text-center font-bold mb-5">Frontend Mentor</h1>
            <div className="space-y-2">
                <Card 
                  title="Order summary component"
                  urlGithub=""
                  urlMentor="https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj"
                  imagem="order-summary.jpg"
                />
                <Card 
                  title="Stats preview card component" 
                  urlGithub=""
                  urlMentor="https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62" 
                  imagem="stats-preview-card.jpg"
                />
                <Card 
                  title="Profile card component" 
                  urlGithub="" 
                  urlMentor="https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-" 
                  imagem="profile-card.jpg"
                />
                 <Card 
                  title="Cqqwolumns card component" 
                  urlGithub="" 
                  urlMentor="https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ" 
                  imagem="columns.jpg"
                />
                <div className="flex flex-1 justify-end items-end">
                  <p className="font-semibold text-orange text-lg border-b-2 border-transparent hover:border-orange cursor-pointer">See all</p>
                </div>
            </div>
        </div>
    )
}
