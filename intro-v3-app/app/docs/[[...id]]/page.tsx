interface Params {
    id: string
}

const DocsPage = ({ params }: { params: Params }) => {
    console.log(params)
    return <div>Docs Page ID: {params.id}</div>
}

export default DocsPage
