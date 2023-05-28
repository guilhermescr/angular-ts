import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstSectionComponent } from './components/first-section/first-section.component';
import { BlogComponent } from './components/blog/blog.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { FormComponent } from './components/form/form.component';
import { FulltaskComponent } from './components/tasks/fulltask/fulltask.component';
import { FbComponent } from './components/fb/fb.component';
import { FbAuthPageComponent } from './components/fb-auth-page/fb-auth-page.component';

const routes: Routes = [
  {
    path: 'firstsection',
    component: FirstSectionComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'tasks',
    component: TasksComponent,
  },
  {
    path: 'tasks/:id',
    component: FulltaskComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'firebase',
    component: FbComponent,
  },
  {
    path: 'authentication',
    component: FbAuthPageComponent,
  },
  {
    path: '',
    redirectTo: 'firstsection',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: FirstSectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
