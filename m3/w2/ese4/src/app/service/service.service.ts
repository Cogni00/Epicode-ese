import { platformBrowserTesting } from '@angular/platform-browser/testing';
import { Interface } from '../models/interface';

//Funzione per leggere tutti i dati
let posts: Interface[];

export function callArray() {
    fetch("http://localhost:3000/posts")
   .then((response) => response.json())
   .then((data) => posts = data);
}

export function deletePost(id : number) {
    fetch("http://localhost:3000/posts/"+id, {
        method: 'DELETE',
    })

}

export function getPosts() {
    return posts;
}

export function updatePost( data: Partial<Interface>, id:number) {
    posts = posts.map(post => post.id == id? {...post,...data}:post )
    return posts.find( post => post.id == id) as Interface
}

