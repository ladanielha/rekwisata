import { Link } from "@inertiajs/react";


const Paginator = ({ meta }) => {
    console.log(meta)
    const current = meta.curent_page;
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;

    return (

        <div className="btn-group">
            {prev && <Link href={prev}className=" btn btn-outline ">«</Link>}
            <button className=" btn btn-outline">{current}</button>
            {next && <Link href={next}className=" btn btn-outline">»</Link>}
        </div>
    
    )
}

export default Paginator