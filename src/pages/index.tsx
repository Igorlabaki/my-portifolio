import Layout from '../components/layout/layout'

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-black p-10">
      <Layout>
          <div className="bg-yellow-500 w-3/12 h-full rounded-lg my-4 p-3">
            <h1 className="text-2xl text-black font-bold mb-5">Frontend Mentor | Challenges</h1>
            <div className="space-y-2">
                <div className="h-44 bg-column bg-cover rounded-lg flex justify-center items-end p-4">
                  <h1 className="text-black font-bold text-lg">3-column preview card component</h1>
                </div>
                <div className="h-44 bg-summary bg-cover rounded-lg flex justify-end items-end p-4">
                  <h1 className="text-black font-bold text-lg">Order Summary</h1>
                </div>
                <p>See All</p>
            </div>
          </div>
      </Layout>
    </div>
  )
}
