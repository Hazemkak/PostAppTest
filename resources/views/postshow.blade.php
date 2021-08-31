@extends('layouts.app')

@section('content')
    <div class="flex justify-center">
        <div class="w-8/12 p-6 rounded-lg">
            <div class="bg-white rounded-md shadow-md p-2">
                <h3 class="font-bold pb-2">{{ $post->title }}</h3>
                <p>{{ $post->body }}</p>
            </div>
        </div>
    </div>

@endsection
