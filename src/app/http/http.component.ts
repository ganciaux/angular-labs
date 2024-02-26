import { HttpClient } from '@angular/common/http';
import { Component, Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-http',
  standalone: true,
  imports: [CommonModule],
  providers:[HttpClient],
  templateUrl: './http.component.html',
  styleUrl: './http.component.css'
})
export class HttpComponent {
  postService=inject(PostsService)
  posts$=this.postService.getAllPosts();

  deletePost(id:number){
    console.log('deletePost:', id)
    this.postService.deletePost(id).subscribe()
  }

  getPost(id:number){
    console.log('getPost:', id)
    this.postService.getPostByID(id).subscribe()
  }
}

interface Post{
id:number,
title: string,
views: number
}

@Injectable({ providedIn: "root" })
export class PostsService {
  private readonly http = inject(HttpClient);

  getAllPosts(): Observable<Post[]> {
    console.log("PostsService: getAllPosts:" )
    return this.http.get<Post[]>(`${environment.apiURL}/posts`);
  }

  getPostByID(PostID: number): Observable<Post> {
    console.log("PostsService: getPostByID:", PostID )
    return this.http.get<Post>(`${environment.apiURL}/posts/${PostID}`);
  }

  addPost(post: Post): Observable<Post> {
    console.log("PostsService: addPost:", post )
    return this.http.post<Post>(`${environment.apiURL}/posts`, { post });
  }

  deletePost(PostID: number): Observable<Post> {
    console.log("PostsService: deletePost:", PostID )
    return this.http.delete<Post>(`${environment.apiURL}/posts/${PostID}`);
  }
}