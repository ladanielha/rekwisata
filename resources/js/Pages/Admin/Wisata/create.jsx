import Sidebar from '@/Components/Admin/Sidebar';
import Navbar from '@/Components/Navbar';
import { Inertia } from '@inertiajs/inertia';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import Map from "react-map-gl/maplibre";



export default function Create(props, errors) {
    const [namatempat, setNamatempat] = useState('');
    const [alamat, setAlamat] = useState('');
    const [desc, setDesc] = useState('');

    
    //function "storePost"
    const storeWisata = async (e) => {
        e.preventDefault();

        Inertia.post('/storewisata', {
            namatempat: namatempat,
            alamat: alamat,
            desc: desc,
        });
    }
    console.log("cek", props)

    return (
        <>
            <div className=" min-h-screen bg-slate-50">
                <Navbar user={props.auth.user} />
                <Head title="Dashboard" />
                <Sidebar />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-44">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">

                                <div className="card-header">
                                    <span className="font-weight-bold">Tambah Tempat Wisata</span>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={storeWisata}>

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Nama Wisata</label>
                                            <input type="text" className="form-control" value={namatempat} onChange={(e) => setNamatempat(e.target.value)} placeholder="Nama Wisata" />
                                        </div>
                                        {props.errors.namatempat && (
                                            <div className="alert alert-danger">
                                                {props.errors.namatempat}
                                            </div>
                                        )}

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Alamat</label>
                                            <textarea className="form-control" value={alamat} onChange={(e) => setAlamat(e.target.value)} placeholder="Jl, Asd no 1" rows={4}></textarea>
                                        </div>
                                        {props.errors.alamat && (
                                            <div className="alert alert-danger">
                                                {props.errors.alamat}
                                            </div>
                                        )}

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Desc</label>
                                            <textarea className="form-control" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Jl, Asd no 1" rows={4}></textarea>
                                        </div>
                                        {props.errors.desc && (
                                            <div className="alert alert-danger">
                                                {props.errors.desc}
                                            </div>
                                        )}

                                        <div>
                                            <button type="submit" className="btn btn-md btn-success me-2"><i className="fa fa-save"></i> Simpan</button>
                                        </div>
                                    </form>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

            );
}
