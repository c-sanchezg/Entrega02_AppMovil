import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'maindex',
    loadChildren: () => import('./pages/maindex/maindex.module').then( m => m.MaindexPageModule)
  },
  {
    path: 'havetrip',
    loadChildren: () => import('./pages/havetrip/havetrip.module').then( m => m.HavetripPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'needtrip',
    loadChildren: () => import('./pages/needtrip/needtrip.module').then( m => m.NeedtripPageModule)
  },
  {
    path: 'tripprog',
    loadChildren: () => import('./pages/tripprog/tripprog.module').then( m => m.TripprogPageModule)
  },
  {
    path: 'modal-crud',
    loadChildren: () => import('./pages/modal-crud/modal-crud.module').then( m => m.ModalCrudPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },  {
    path: 'crear-usuario',
    loadChildren: () => import('./pages/crear-usuario/crear-usuario.module').then( m => m.CrearUsuarioPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'crud',
    loadChildren: () => import('./pages/crud/crud.module').then( m => m.CrudPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
