import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SignInService } from '../Authentication/sign-in/sharedData/sign-in.service';

export const authGuard: CanActivateFn = (route, state) => {
  const signInService = inject(SignInService);
  const router = inject(Router);

  const isAuthenticated = !!signInService.currentUserValue;

  if(!isAuthenticated){
    alert("Unauthorized!! You need to login first.")
    router.navigate(['/']);
    return false;
  }
  return isAuthenticated;
};
