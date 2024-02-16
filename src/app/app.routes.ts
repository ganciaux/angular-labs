import { Routes } from '@angular/router';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveComponent } from './directive/directive.component';

export const routes: Routes = [
    {
        path: 'control-flow',
        component: ControlFlowComponent
    },
    {
        path: 'life-cycle',
        component: LifeCycleComponent
    }
    ,
    {
        path: 'data-binding',
        component: DataBindingComponent
    },
    {
        path: 'directive',
        component: DirectiveComponent
    }
];
