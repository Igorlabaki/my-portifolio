import Layout from '../components/layout/layout'
import Mentor from '../components/Mentor/mentor'
import MainProject from '../components/MainProject/mainProject'
import OtherProjects from '../components/OtherProjects/otherProjects'


export default function Home() {
  return (
    <div className="flex flex-col h-full bg-darkBlue p-10">
      <Layout>
          <Mentor/>
          <div>
            <MainProject/>
            <OtherProjects/>
          </div>
      </Layout>
    </div>
  )
}
