import Layout from '../components/layout/layout'
import Card   from '../components/Card/card'

export default function Home() {
  return (
    <div className="flex flex-col h-full bg-black p-10">
      <Layout>
          <div className="bg-white w-4/12 h-full flex flex-col rounded-lg my-2 p-3">
            <h1 className="text-2xl text-black text-center font-bold mb-5">Frontend Mentor - Challenges</h1>
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
                  urlMentor="https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ" 
                  imagem="profile-card.jpg"
                />
                <div className="flex flex-1 justify-end items-end">
                  <p className="font-semibold text-lg border-b-2 border-transparent hover:border-black cursor-pointer">See all</p>
                </div>
            </div>
          </div>
      </Layout>
    </div>
  )
}
