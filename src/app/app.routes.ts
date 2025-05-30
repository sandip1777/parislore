import { Routes } from '@angular/router';
import { StoryGridComponent } from './story-grid/story-grid.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';


export const routes: Routes = [
  { path: '', component: StoryGridComponent, pathMatch: 'full' },
  { path: 'stories', component: StoryGridComponent },
  { path: 'submit', component: SubmitFormComponent }
];
