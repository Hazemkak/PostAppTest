@extends('layouts.app')

@section('content')
    <div class="flex justify-center">
        <div class="w-8/12 p-6 rounded-lg">
        <div class="overflow-hidden bg-white rounded-md shadow-md p-4 mb-8">
            <form action="/posts/add" method="post">
                @csrf
                <input class=" @error('title') bg-red-100 @enderror w-full rounded-md p-2 mb-3 bg-gray-100" placeholder="Enter Post Title" type="text" name="title" id="" value="{{ old('title') }}">
                <textarea class="@error('body') bg-red-100 @enderror w-full rounded-md p-2 bg-gray-100" name="body" id="" rows="5" placeholder="Enter Post Content" value="{{ old('body') }}"></textarea>
                <button class="float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">POST</button>
            </form>
            @if ($errors->any())
                <div class="alert alert-danger">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li class="text-red-500">{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
        </div>
        @if ($posts->count())
            @foreach ($posts as $post )
            <a href="{{ route('posts.show', $post->id) }}">
                <div  class="bg-white rounded-md shadow-md p-2">
                    <h3 class="font-bold pb-2">{{ $post->title }}</h3>
                    <p>{{ $post->body }}</p>
                </div>
            </a>
                <br>
            @endforeach
            {{ $posts->links() }}
        @else

        @endif
        </div>
    </div>
@endsection
