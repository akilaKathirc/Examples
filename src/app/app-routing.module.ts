import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlassMorphismComponent } from './glass-morphism/glass-morphism.component';
import { NeonButtonComponent } from './neon-button/neon-button.component';
import { NgrxNewComponent } from './ngrx-new/ngrx-new.component';
import { PseudoElementsComponent } from './pseudo-elements/pseudo-elements.component';
import { RxjsOperatorsComponent } from './rxjs/rxjs-operators/rxjs-operators.component';
import { ViewChildrenComponent } from './view-children/view-children.component';

const routes: Routes = [
  { path: 'neon', component: NeonButtonComponent },
  { path: 'ngrx', component: NgrxNewComponent },
  { path: 'pseudo', component: PseudoElementsComponent },
  { path: 'glass', component: GlassMorphismComponent },
  { path: 'view', component: ViewChildrenComponent },
  { path: 'rxjs', component: RxjsOperatorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
