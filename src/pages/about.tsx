import Layout from "../components/layout/layout";
import { FaInstagram, FaLinkedin, FaGithub, FaGoodreads } from 'react-icons/fa';
import Link from 'next/link'

export default function about() {
    return (
      <div className="h-screen bg-darkBlue p-10">
        <Layout>
          <div>
            <div className="space-x-10 space-y-10">
              <p className="text-darkGray text-2xl font-bold ">Hello, it´s nice have you here!</p> 
              <p className="text-darkGray indent-3 text-lg text-justify">
                My name is Igor Augusto Labaki Goncalo.I am 31 years old and I have a law degree from Universidade Presbiteriana Mackenzie de Sao Paulo in Brazil. I am a person who likes new challenges so, right after my graduation, 
                I decided to get new professional and personal experiences in Europe. During this period I was able to improve my english living and working in England for 9 months and, in addition, 
                it sparked my interest in the area of technology. I have often taken new courses in IT-related subjects like JavaScript, React, MYSQL, CSS, Tailwind among others and updated myself with the latest
                methods and technologies available. I am very excited about the opportunity to work and to gain experience in the technology area.
              </p>
              <p  className="text-darkGray indent-3 text-lg text-justify">
                For more details or references, do not hesitate to contact me.
              </p>
            </div>
            <div className="flex space-x-5 mt-32 ml-10">
                <Link href='https://www.instagram.com/labakiigor/'>
                  <a target="_blank"><FaInstagram fontSize={42} color="white"/></a>
                </Link>
                <Link href='https://github.com/Igorlabaki'>
                  <a target="_blank"><FaGithub fontSize={42} color="white"/></a>
                </Link>
                <Link href='https://www.goodreads.com/user/show/129492787-igorgoncalo'>
                  <a target="_blank"><FaGoodreads fontSize={42} color="white"/></a>
                </Link>
                <Link href='https://www.linkedin.com/in/igor-augusto-labaki-goncalo-b75918199/'>
                  <a target="_blank"><FaLinkedin fontSize={42} color="white"/></a>
                </Link>
            </div>
          </div>
        </Layout>
      </div>
    )
}
