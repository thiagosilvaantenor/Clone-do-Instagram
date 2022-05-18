import React, { useState } from 'react'
import Miniprofile from '../Miniprofile/Miniprofile'
import Story from '../story/Storie'
import Stories from './Stories'
import Suggestions from '../Suggestions/Suggestions'
import Post from '../posts/Post'
import App from '../../App'
import './Feed.css'

function Feed() {
  //Posts//
  const [posts, setPosts] = useState([
    {
      perfil:
        'https://media-exp1.licdn.com/dms/image/C4D0BAQFD15RCaLy7tA/company-logo_200_200/0/1591018493674?e=2147483647&v=beta&t=OCAyyAl2Oaj5nbyvxltzVwjGHBg1RJlwI3zQlBZnvu4',
      username: 'instituto.proa',
      caption:
        ' O mercado de trabalho é bastante concorrido, e é essencial que você se destaque para alcançar seus objetivos. 💙 Há alguns caminhos que podem facilitar esse reconhecimento e a conquista do primeiro emprego, e um deles é se tornando PROANE. 💼 Muitas empresas optam por jovens do PROA em seus processos seletivos e isso acontece porque investimos na capacitação de qualidade e buscamos sempre a excelência. ⭐ Quer ser um destaque também e ter todas as setinhas apontando pra você?Corre no site e se inscreva nos nossos cursos gratuitos: proa.org.br  #VemProPROA',
      imageUrl:
        'https://www.proa.org.br/wp-content/uploads/2021/12/banner1_home_ester_1080x1198px.jpg',
      comment: 'Ver todos os 10 comentarios...',
      time: 'HÁ 2 HORAS'
    },
    {
      perfil:
        'https://i.pinimg.com/originals/7b/4f/74/7b4f74931dc94bb78212cfa86dbc6fea.jpg',
      username: 'hzdworld',
      caption:
        'in bloom 🌸 inspired by @fouilt ✨ do not repost without permission or credit, twitter «— : twitter.com/hzdworId  tags «— #horizonforbiddenwest #hfw #beyondthehorizon #guerrillagames #virtualphotography #vphorizon #shinuishi. ',
      imageUrl:
        'https://i.pinimg.com/originals/fe/b0/1b/feb01bedb31834a074b2b92aa0f3d231.jpg',
      comment: 'Ver todos os 23 comentarios...',
      time: 'HÁ 3 HORAS'
    },
    {
      perfil:
        'https://i.pinimg.com/originals/72/7e/4f/727e4f6b11592f36aad2dcaa9f203e6f.jpg',
      username: 'gamescape.vp',
      caption:
        'This shot made it to #LGF22VPchallenge finalists 😊I was so stunned that day! Credit if you repost 🌻 twitter.com/GamescapeV #HorizonForbiddenWest #virtualphotography',
      imageUrl:
        'https://i.pinimg.com/originals/a7/dc/d5/a7dcd5e22319b3dd2dce0530df8e4c50.jpg',
      comment: 'Ver todos os 52 comentarios...',
      time: 'HÁ 4 HORAS'
    },
    {
      perfil:
        'https://pbs.twimg.com/profile_images/1524540453969973251/mq_LZk06_400x400.jpg',
      username: "alien's Element",
      caption:
        'where the sea meets the sky — game tags #HFW #horizonforbiddenwest #aloy #beyondthehorizon #riseaboveourruin #guerrillagames #ps5photomode #hfwphotomode #horizonforbiddenwestphotomode #horizonforbiddenwestscreenshot — vp tags #aloyshorizons #untamedvp #virtualphotography #zarngaming #visualart #thecapturedcollective #vphorizon #photomode #talentvp #gsvp #purephotomode #playstation #ps5 #ps5share #playstation5',
      imageUrl:
        'https://i.pinimg.com/originals/16/54/6e/16546e237907b11df2086d0497ccc72c.jpg',
      comment: 'Ver todos os 200 comentarios...',
      time: 'HÁ 6 HORAS'
    },

  ])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl p-2 mx-auto">
      <section className="col-span-2 ">
        {/*Storys */}
        <Stories />
        {/* Posts */}
        <div className="timeline">
          {posts.map(post => (
            <Post
              perfil={post.perfil}
              username={post.username}
              caption={post.caption}
              imageUrl={post.imageUrl}
              comment={post.comment}
              time={post.time}
            />
          ))}
          
        </div>
        
      </section>
      <section className=" invisible md:visible ">
        {/*Miniprofile */}
        <Miniprofile />
        {/* Sugestões*/}
        <Suggestions />
      </section>
    </div>
  )
}
export default Feed
