import './global.css'

import { Header } from './components/Header/Header'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Post } from './components/Post/Post'


const posts = [
  {
    id: 1,
    author: {
      avatarURL: "https://github.com/GilCar21.png",
      name: "Gilberto Jorge",
      role: "Developer Web"
    },
    content: [
      { type: "paragraph", content: "Fala galera"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portfólio, É uma projeto que fiz no NLW Return, evento da Rocketseat"},
      { type: "link", content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date('2022-08-10 08:48:00'),
  },
  {
    id: 2,
    author: {
      avatarURL: "https://github.com/GilCar21.png",
      name: "Gilberto Jorge",
      role: "Developer Web"
    },
    content: [
      { type: "paragraph", content: "Fala galera"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portfólio, É uma projeto que fiz no NLW Return, evento da Rocketseat"},
      { type: "link", content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date('2022-08-10 08:35:00'),
  }
]

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wapper}>
        <Sidebar />
        <main>
          {posts.map(post =>{
            return(
              <Post 
                key={post.id} 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

