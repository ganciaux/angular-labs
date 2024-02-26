import { Component, Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, CanDeactivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-guard',
  standalone: true,
  imports: [],
  templateUrl: './guard.component.html',
  styleUrl: './guard.component.css'
})
export class GuardComponent {

}

export function isLoggedInGuard(): CanActivateFn {
  return (route, state) => {
    const router = inject(Router);
    console.log('isLoggedInGuard')
    return router.parseUrl("/login");
  };
}

export const canDeactivateFeedbackRouteGuard: CanDeactivateFn<GuardComponent> = (
  component: GuardComponent
) => {
  console.log('canDeactivateFeedbackRouteGuard')
  if (true) {
    return window.confirm("Are you sure you want to leave?");
  } else {
    return true;
  }
};