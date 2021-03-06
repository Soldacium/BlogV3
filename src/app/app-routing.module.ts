import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './end-user/welcome/welcome.component';
import { PostsListComponent } from './end-user/posts-list/posts-list.component';
import { PostViewComponent } from './end-user/post-view/post-view.component';
import { AboutComponent } from './end-user/about/about.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminOptionsComponent } from './admin/admin-options/admin-options.component';
import { AdminPostsListComponent } from './admin/admin-posts-list/admin-posts-list.component';
import { AdminPostMakeComponent } from './admin/admin-post-make/admin-post-make.component';
import { NotFoundComponent } from './end-user/not-found/not-found.component';
import { AdminComponent } from './admin/admin.component';
import { EndUserComponent } from '@user/end-user.component';

const routes: Routes = [
  {
    path: '',
    component: EndUserComponent,
    children: [
      { path: '', component: WelcomeComponent, data: {animation: 'WelcomePage'} },
      { path: 'posts', component: PostsListComponent, data: {animation: 'PostsListPage'}},
      { path: 'post/:id', component: PostViewComponent, data: {animation: 'PostViewPage'}},
      { path: 'about', component: AboutComponent, data: {animation: 'AboutPage'} },
    ]
  },
  {
    path: 'login',
    component: AdminLoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: 'make-post', component: AdminPostMakeComponent},
      {path: 'make-edit', component: AdminPostMakeComponent},
      {path: 'posts', component: AdminPostsListComponent},
      {path: 'options', component: AdminOptionsComponent},
    ],
    // redirectTo: AccessDeniedComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
