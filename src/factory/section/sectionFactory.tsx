import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import parse from 'react-html-parser'

type Props = {
    data: Queries.DatoCmsUnionForDatoCmsHomeSections
}

export const SectionFactory = ({ data }: Props) => {

    console.log(data.model?.apiKey)
    if (data?.model?.apiKey === 'section') {

        console.log('it was a section')
        return <Section data={data}  />
    } else {

        return <SectionWIthImage data={data}  />
    }

    return <h1> No Match</h1>

}
type SectionProps = { data: Queries.DatoCmsSection }

const Section = ({ data }: SectionProps) => (
    <div id={data.originalId} className=" p-8 border my-10 mx-auto shadow-md bg-white rounded-lg w-9/12 flex items-center justify-center align-middle">
        <article className="prose prose-md">
            {parse(data?.content)}
        </article>

    </div>
)

type SectionWithImageProps = { data: Queries.DatoCmsSectionWithImage }
const SectionWIthImage = ({ data }: SectionWithImageProps) => (
    <div id={data.originalId} className=" p-8 border my-10 mx-auto shadow-md bg-white rounded-lg w-9/12 flex items-center justify-center align-middle">
        <article className="prose prose-md">
            {parse(data?.content)}
        </article>

    </div>
)