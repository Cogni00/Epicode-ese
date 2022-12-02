import { platformBrowserTesting } from '@angular/platform-browser/testing';
import { Interface } from '../models/interface';
import { Users } from '../models/users';

//Funzione per leggere tutti i dati

let users : Users[] = [];
let userChild: Users[] = [];

export function getPosts() {
    let f = fetch("http://localhost:3000/posts/");
    let r = f.then((res): Promise<Interface[]> => {
        return res.json();
    })
    return r
}

export function getPostFiltered( a: boolean) {
    let t = getPosts().then((res) => {
    let arrayFiltrato = res.filter((e) => {
     return e.active == a
    });
    return arrayFiltrato
    })
    return t

}

export function deletePost(id : number) {
    fetch("http://localhost:3000/posts/"+ id, {
        method: 'DELETE',
    })

}

export function updatePost( a: boolean, id: number) {
    fetch("http://localhost:3000/posts/"+ id,{
         method : 'PATCH',
        body : JSON.stringify({active: a,}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })
}

export function getUsers() {
    let f = fetch("http://localhost:3000/users");
    let u = f.then((res): Promise<Users[]> => {
        return res.json();
    })
    let x = u.then(res =>{ users = res})
    return u

}

export function userId( id: number) {
    let indexUser = users.findIndex((user) => {
      return user.id == id;
    });

    userChild = [];

    return userChild.push(users[indexUser])
}

export function invioUtente() {
    return userChild;
}




