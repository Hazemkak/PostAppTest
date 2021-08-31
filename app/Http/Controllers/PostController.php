<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Post;
use Nette\Utils\Json;

class PostController extends Controller
{
    public function index(){//used with react.js 
        $posts=Post::all();
        return $posts;//returning the array of tuples
    }
    public function save(Request $req){//used with react.js "not working err:csrf token mismatch"
        $validatedData = $req->validate([
            'title' => 'nullable',
            'body' => 'nullable',
        ]);

        return json_encode($validatedData);
    }

    public function show(Request $req){
        $postID=$req->post;
        $postTuple=Post::where('id',$postID)->first();
        return view('postshow',[
            'post'=>$postTuple,
        ]);
    }

    

    public function postview(){
        $posts=Post::orderBy('created_at','desc')->paginate(10);
        return view('post',[
            'posts'=>$posts,
        ]);
    }

    public function store(Request $req){
        $validated = $req->validate([
            'title' => 'required|max:55',
            'body' => 'required|max:255',
        ]);

        Post::create([
            'title'=>$req->title,
            'body'=>$req->body,
        ]);

        return redirect('/');
    }
}
