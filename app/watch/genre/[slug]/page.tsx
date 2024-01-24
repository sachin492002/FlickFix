import GenrePage from "@/components/Genre/GenrePage";


export default function Page({ params }: { params: { slug: number} }){
    return <GenrePage url={params.slug} type={'genre'}/>
}