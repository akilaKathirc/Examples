import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducer } from './store/todo.reducer';
import { TodoService } from './todo.service';
import { TodoEffects } from './store/todo.effects';
import { NeonButtonComponent } from './neon-button/neon-button.component';
import { NgrxComponent } from './ngrx/ngrx.component';
import { PseudoElementsComponent } from './pseudo-elements/pseudo-elements.component';
import { GlassMorphismComponent } from './glass-morphism/glass-morphism.component';
import { ViewChildrenComponent } from './view-children/view-children.component';
import { NgrxNewComponent } from './ngrx-new/ngrx-new.component';
import { ngrxEffects } from './ngrx-new/store/ngrxnew.effects';
import { ngrxreducer } from './ngrx-new/store/ngrxnew.reducers';
import { RxjsOperatorsComponent } from './rxjs/rxjs-operators/rxjs-operators.component';

@NgModule({
  declarations: [AppComponent, NeonButtonComponent, NgrxComponent, PseudoElementsComponent, GlassMorphismComponent, ViewChildrenComponent, NgrxNewComponent, RxjsOperatorsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule,
    StoreModule.forRoot(
      // { todos: reducer },
      {totodooo: ngrxreducer}),
    EffectsModule.forRoot([TodoEffects, ngrxEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule { }
