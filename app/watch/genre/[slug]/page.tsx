
import GenrePage from "@/components/Genre/GenrePage";



export default function Page({ params }: { params: { slug: number} }){
    return <GenrePage genre={params.slug}/>
}