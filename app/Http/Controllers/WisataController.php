<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Request;
use App\Http\Resources\PlacesCollection;
use App\Models\Places;
use Inertia\Inertia;



class WisataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $places = new PlacesCollection(Places::paginate(20));
        return Inertia::render('Admin/Wisata/index',[ 
            'places'=> $places]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Wisata/create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        /*$validateForm = $request->validate([
            'lat' => ['required', 'min:4', 'max:100'],
            'long' => ['required', 'min:4', 'max:100'],
            'name' => ['required', 'min:3', 'max:255'],
            'description' => ['max:500'],
            'image' => ['required','mimes:jpg,jpeg,png,avif', 'max:4096'],
            'rating' => ['required'],
        ]);*/

       //set validation
       $request->validate([
        'namatempat'   => 'required',
        'alamat' => 'required',
        'desc' => 'required',
        ]);

        //create post
        Places::create([
            'namatempat'     => $request->namatempat,
            'alamat'   => $request->alamat,
            'desc'   => $request->desc
        ]);

        //redirect
        return redirect()->route('admin.wisata')->with('message', 'Data Berhasil Disimpan!');
        
        //return redirect()->route('posts.index');
        
     
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'namatempat'   => 'required',
            'alamat' => 'required',
            'desc' => 'required',
            ]);
    
            //create post
            Places::create([
                'namatempat'     => $request->namatempat,
                'alamat'   => $request->alamat,
                'desc'   => $request->desc
            ]);
    
            //redirect
            return redirect()->route('admin.wisata')->with('message', 'Data Berhasil Disimpan!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
