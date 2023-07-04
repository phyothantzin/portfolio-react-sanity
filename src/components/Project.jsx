import React, { useEffect, useState } from 'react'
import sanityClient from '../client.js'

export default function Project() {
  const [projectData, setProjectData] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
        title,
        date,
        image{
          asset->{
            _id,
            url
          },
          alt
        },
        language,
        briefDescription,
        description,
        projectType,
        link,
        tags
      }`,
      )
      .then((data) => setProjectData(data))
      .catch(console.error)
  }, [])

  return (
    <section id="portfolio" class="tm-portfolio">
      <div class="container">
        <div class="row">
          <div class="col-md-12 wow bounce">
            <div class="title">
              <h2 class="tm-portfolio-title">
                My
                <strong> Projects</strong>
              </h2>
            </div>

            <div class="iso-section ">
              <div class="iso-box-section">
                <div class="iso-box-wrapper col4-iso-box ">
                  {projectData &&
                    projectData.map((project, index) => (
                      <div className="iso-box col-lg-3 col-md-3 col-sm-4 col-xs-12">
                        <a href={project.link} key={project.id} target="_blank">
                          <div
                            class="portfolio-thumb"
                            style={{ margin: '6px' }}
                          >
                            <img
                              src={project.image.asset.url}
                              class="fluid-img"
                              alt={project.image.alt}
                            />
                            <div class="portfolio-overlay">
                              <h3 class="portfolio-item-title">
                                {project.title}
                              </h3>
                              <p>{project.briefDescription}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}

                  {/* <div class="iso-box html wordpress mobile col-md-3 col-sm-3 col-xs-12">
                    <div class="portfolio-thumb">
                      <img
                        src="images/portfolio-img2.jpg"
                        class="fluid-img"
                        alt="portfolio img"
                      />
                      <div class="portfolio-overlay">
                        <h3 class="portfolio-item-title">UX Design</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonumm.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="iso-box wordpress col-md-3 col-sm-3 col-xs-12">
                    <div class="portfolio-thumb">
                      <img
                        src="images/portfolio-img3.jpg"
                        class="fluid-img"
                        alt="portfolio img"
                      />
                      <div class="portfolio-overlay">
                        <h3 class="portfolio-item-title">UX Design</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonumm.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="iso-box html mobile col-md-3 col-sm-3 col-xs-12">
                    <div class="portfolio-thumb">
                      <img
                        src="images/portfolio-img4.jpg"
                        class="fluid-img"
                        alt="portfolio img"
                      />
                      <div class="portfolio-overlay">
                        <h3 class="portfolio-item-title">UX Design</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonumm.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="iso-box wordpress col-md-3 col-sm-3 col-xs-12">
                    <div class="portfolio-thumb">
                      <img
                        src="images/portfolio-img5.jpg"
                        class="fluid-img"
                        alt="portfolio img"
                      />
                      <div class="portfolio-overlay">
                        <h3 class="portfolio-item-title">UX Design</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonumm.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="iso-box html photoshop col-md-3 col-sm-3 col-xs-12">
                    <div class="portfolio-thumb">
                      <img
                        src="images/portfolio-img6.jpg"
                        class="fluid-img"
                        alt="portfolio img"
                      />
                      <div class="portfolio-overlay">
                        <h3 class="portfolio-item-title">UX Design</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonumm.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="iso-box photoshop col-md-3 col-sm-3 col-xs-12">
                    <div class="portfolio-thumb">
                      <img
                        src="images/portfolio-img7.jpg"
                        class="fluid-img"
                        alt="portfolio img"
                      />
                      <div class="portfolio-overlay">
                        <h3 class="portfolio-item-title">UX Design</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonumm.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="iso-box wordpress col-md-3 col-sm-3 col-xs-12">
                    <div class="portfolio-thumb">
                      <img
                        src="images/portfolio-img8.jpg"
                        class="fluid-img"
                        alt="portfolio img"
                      />
                      <div class="portfolio-overlay">
                        <h3 class="portfolio-item-title">UX Design</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonumm.
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// <main className="bg-green-100 min-h-screen p-12">
//   <section className="container mx-auto">
//     <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
//     <h2 className="text-lg text-gray-600 flex justify-center mb-12">
//       Welcome to my projects page!
//     </h2>

//     <section className="grid grid-cols-2 gap-8">
//       {projectData &&
//         projectData.map((project, index) => (
//           <article className="relative rounded-lg shadow-xl bg-white p-16">
//             <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-7001">
//               <a
//                 href={project.link}
//                 alt={project.title}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {project.title}
//               </a>
//             </h3>
//             <div className="text-gray-500 text-xs space-x-4">
//               <span>
//                 <strong className="font-bold">Finished on</strong>:{' '}
//                 {new Date(project.date).toLocaleDateString()}
//               </span>
//               {/* <span>
//                 <strong className="font-bold">Company</strong>:{' '}
//                 {project.place}
//               </span> */}
//               <span>
//                 <strong className="font-bold">Type</strong>:{' '}
//                 {project.projectType}
//               </span>
//             </div>
//             <p className="my-6 text-lg text-gray-700 leading-relaxed">
//               {project.description}
//             </p>
//             <a
//               href={project.link}
//               rel="noopener noreferrer"
//               target="_blank"
//               className="text-red-500 font-bold hover:underline hover:text-red-400"
//             >
//               View The Project{' '}
//               <span role="img" aria-label="right pointer">
//                 👉
//               </span>
//             </a>
//           </article>
//         ))}
//     </section>
//   </section>
// </main>
