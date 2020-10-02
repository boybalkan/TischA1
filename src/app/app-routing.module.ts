import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'games-for-individuals',
    loadChildren: () => import('./games-for-individuals/games-for-individuals.module').then( m => m.GamesForIndividualsPageModule)
  },
  {
    path: 'games-for2',
    loadChildren: () => import('./games-for2/games-for2.module').then( m => m.GamesFor2PageModule)
  },
  {
    path: 'games-for4',
    loadChildren: () => import('./games-for4/games-for4.module').then( m => m.GamesFor4PageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'activities',
    loadChildren: () => import('./activities/activities.module').then( m => m.ActivitiesPageModule)
  },
  {
    path: 'ho-t',
    loadChildren: () => import('./games/ho-t/ho-t.module').then( m => m.HoTPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
