import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FirstSectionComponent } from './components/first-section/first-section.component';
import { FormComponent } from './components/form/form.component';
import { InputComponent } from './components/form/input/input.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/tasks/task/task.component';
import { BlogComponent } from './components/blog/blog.component';
import { AppRoutingModule } from './app-routing.module';
import { FulltaskComponent } from './components/tasks/fulltask/fulltask.component';
import { FbComponent } from './components/fb/fb.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstSectionComponent,
    FormComponent,
    InputComponent,
    TasksComponent,
    TaskComponent,
    BlogComponent,
    FulltaskComponent,
    FbComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
