import { Routes } from '@angular/router';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormModuleComponent } from './form-module/form-module.component';
import { ObservableComponent } from './observable/observable.component';
import { isLoggedInGuard, GuardComponent, canDeactivateFeedbackRouteGuard } from './guard/guard.component';
import { ErrorComponent } from './error/error.component';
import { HttpComponent } from './http/http.component';

export const routes: Routes = [
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'control-flow',
    component: ControlFlowComponent,
  },
  {
    path: 'life-cycle',
    component: LifeCycleComponent,
  },
  {
    path: 'data-binding',
    component: DataBindingComponent,
  },
  {
    path: 'directive',
    component: DirectiveComponent,
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent,
  },
  {
    path: 'form-module',
    component: FormModuleComponent,
  },
  {
    path: 'observable',
    component: ObservableComponent,
  },
  {
    path: 'guard',
    component: GuardComponent,
    //canActivate: [isLoggedInGuard],
    //canDeactivate: [canDeactivateFeedbackRouteGuard]

  },
  {
    path: 'http',
    component: HttpComponent,
  },
];
