import React, { useState, useEffect } from 'react'
import sanityClient from '../client.js'
import aboutbg from '../assets/aboutbg.jpg'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

export default function About() {
  const [author, setAuthor] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
        name,
        "bio": bio[0].children[0].text,
        "authorImage": image.asset->url
      }`,
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error)
  }, [])

  if (!author) return <div>Loading...</div>

  return (
    <section id="about" class="tm-about">
      <div class="container">
        <div class="row">
          <div class="col-md-offset-6 col-md-6 col-sm-offset-6 col-sm-7">
            <div class="title">
              <h2>
                This is
                <strong> about me</strong>
              </h2>
              <h1 class="tm-red-text">
                Junior
                <strong>Developer</strong>
              </h1>
            </div>
            <p>{author.bio}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// <main className="relative">
//   <img src={aboutbg} alt="plumeria background" className="absolute w-full" />
//   <div className="p-10 lg:pt-48 container mx-auto relative">
//     <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
//       <img
//         src={urlFor(author.authorImage).url()}
//         className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
//         alt="Kapehe"
//       />
//       <div className="text-lg flex flex-col justify-center">
//         <h1 className="cursive text-6xl text-green-300 mb-4">
//           Hey there. I'm{' '}
//           <span className="text-green-100">{author.name}</span>
//         </h1>
//         <p className="text-green-200 text-lg">{author.bio}</p>
//       </div>
//     </section>
//   </div>
// </main>
