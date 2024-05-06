import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full'
  },
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: 'timetables',
    loadChildren: () => import('./timetables/timetables.module').then(m => m.TimetablesPageModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then( m => m.CoursesPageModule)
  },
  {
    path: 'messageboard',
    loadChildren: () => import('./messageboard/messageboard.module').then( m => m.MessageboardPageModule)
  },
  {
    path: 'list-students',
    loadChildren: () => import('./pages/list-students/list-students.module').then( m => m.ListStudentsPageModule)
  },
  {
    path: 'add-student',
    loadChildren: () => import('./pages/add-student/add-student.module').then( m => m.AddStudentPageModule)
  },
  {
    path: 'update-student',
    loadChildren: () => import('./pages/update-student/update-student.module').then( m => m.UpdateStudentPageModule)
  },
  {
    path: 'list-lecturers',
    loadChildren: () => import('./pages/list-lecturers/list-lecturers.module').then( m => m.ListLecturersPageModule)
  },
  {
    path: 'list-modules',
    loadChildren: () => import('./pages/list-modules/list-modules.module').then( m => m.ListModulesPageModule)
  },
  
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
