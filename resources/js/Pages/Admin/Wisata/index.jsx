import Sidebar from '@/Components/Admin/Sidebar';
import Tablewisata from '@/Components/Admin/Tablewisata';
import Navbar from '@/Components/Navbar';
import { Head, Link } from '@inertiajs/react';

export default function Index(props) {
    return (
        <>
            <div className=" min-h-screen bg-slate-50">
                <Navbar user={props.auth.user} />
                <Head title="Dashboard" />
                <Sidebar />

                <div className="py-12">

                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-56">
                        <div className="btn-group btn-group-vertical lg:btn-group-horizontal left-0">
                            <Link href={route("create.wisata")} className="btn btn-primary">Tambah Data</Link>
                        </div>
                        <Tablewisata places={props.places.data} />
                    </div>
                </div>
            </div>
        </>
    );
}
