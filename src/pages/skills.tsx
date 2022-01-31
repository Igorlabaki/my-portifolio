import Layout from "../components/layout/layout";
import { FaJs, FaReact, <FaCss></FaCss> } from 'react-icons/fa';

export default function about() {
    return (
        <div className="flex flex-col h-screen bg-darkBlue p-10">
            <Layout>
                <FaJs fontSize={50} color="white"/>
                <FaReact fontSize={50} color="white"/>
            </Layout>
        </div>
    )
}
