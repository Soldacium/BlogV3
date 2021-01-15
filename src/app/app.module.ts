import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './end-user/welcome/welcome.component';
import { PostsListComponent } from './end-user/posts-list/posts-list.component';
import { PostViewComponent } from './end-user/post-view/post-view.component';
import { NavComponent } from './end-user/nav/nav.component';
import { FooterComponent } from './end-user/footer/footer.component';
import { AboutComponent } from './end-user/about/about.component';
import { PostPreviewComponent } from './end-user/post-preview/post-preview.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { AdminOptionsComponent } from './admin/admin-options/admin-options.component';
import { AdminPostViewComponent } from './admin/admin-post-view/admin-post-view.component';
import { AdminPostsListComponent } from './admin/admin-posts-list/admin-posts-list.component';
import { AdminPostMakeComponent } from './admin/admin-post-make/admin-post-make.component';
import { AccessDeniedComponent } from './admin/access-denied/access-denied.component';
import { NotFoundComponent } from './end-user/not-found/not-found.component';
import { AdminComponent } from './admin/admin.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { InputComponent } from './shared/components/input/input.component';
import { MailComponent } from './shared/components/mail/mail.component';
import { SearchComponent } from './shared/components/search/search.component';
import { SubscribeComponent } from './shared/components/subscribe/subscribe.component';
import { TagsComponent } from './shared/components/tags/tags.component';
import { TriangleComponent } from './shared/components/triangle/triangle.component';
import { BackgroundComponent } from './end-user/background/background.component';
import { EndUserComponent } from './end-user/end-user.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PostsListComponent,
    PostViewComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    PostPreviewComponent,
    AdminLoginComponent,
    AdminNavComponent,
    AdminOptionsComponent,
    AdminPostViewComponent,
    AdminPostsListComponent,
    AdminPostMakeComponent,
    AccessDeniedComponent,
    NotFoundComponent,
    AdminComponent,
    ButtonComponent,
    InputComponent,
    MailComponent,
    SearchComponent,
    SubscribeComponent,
    TagsComponent,
    TriangleComponent,
    BackgroundComponent,
    EndUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
