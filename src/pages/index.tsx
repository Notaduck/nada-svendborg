import * as React from "react"
import { graphql, PageProps } from "gatsby"
import '../styles/global.css'
import { Section } from "../components/section"
import { SectionFactory } from "../factory/section/sectionFactory"
import { Element, Link } from 'react-scroll'



const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {

  return (

    <main className="z-20 grid h-[100vh] snap-y snap-mandatory auto-rows-[100%] grid-rows-[100%_auto] overflow-y-auto">
      <section className="flex snap-start items-center justify-center bg-amber-200 text-8xl">Welcome....</section>
      <nav className="sticky top-0 bottom-0 z-30 flex w-full flex-row items-center justify-between gap-4 border-b-2 border-gray-50 bg-gray-50 py-4 px-4 shadow-md">
        <h1 className="flex-1 font-semibold">Nada Svendborg</h1>

        <ul className="flex flex-row gap-4">
          {data.datoCmsHome?.sections?.map(section => (
            <li key={section?.id} ><Link to={section?.originalId} smooth={true} spy={true}>{section?.title} </Link></li>
          ))}
        </ul>
      </nav>
      {
        data.datoCmsHome?.sections?.map(e => (

          <Element name={e?.originalId} className="element">

            <Section id={e?.originalId} key={e?.originalId}>
              <SectionFactory data={e} />

            </Section>
          </Element>
        ))
      }

      <section className="flex snap-start items-center justify-center bg-cyan-200 text-8xl">3</section>
      <section className="flex snap-start items-center justify-center bg-fuchsia-200 text-8xl">4</section>
    </main>


  )
}

export default IndexPage

export const query = graphql`
  query IndexPage {
    datoCmsHome {
      sections {
        ... on DatoCmsSection {
          id
          content
          title
          originalId
          model {
          apiKey
        }
        }
        ... on DatoCmsSectionWithImage {
          id
          originalId
          title
          content
          image {
            alt
            gatsbyImageData(placeholder: TRACED_SVG)
          }
          model {
          apiKey
        }
        }
      }
    }
  }
`