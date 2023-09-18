import Image from 'next/image';

export default function Item({data}){
    const name = data.properties.이름. title[0].plain_text;
    const description = data.properties.description.rich_text[0].plain_text;
    const imagesrc = data.cover.external.url;

    //console.log(data.cover.external)
    return(
        <div className="project-card">
            <Image
                className='rounded-t-lg'
                src={imagesrc}
                alt='cover'
                width='200'
                height='60'
                layout='responsive'
                objectFit='none'
                quality={100}
            />
            <div className='p-4 flex flexx-col'>
                <h1>{name}</h1>
            </div>
        </div>
    )
}