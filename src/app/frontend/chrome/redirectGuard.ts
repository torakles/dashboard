import {Injectable, Component} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';

@Injectable()
export class RedirectGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    //console.log(state);
    if (route.params['redirect'] === 'true') {
      window.open(route.params['externalUrl'], '_blank');
    } else {
      setTimeout(() => {
        window.location.reload();
      }, 100);

      this.router.navigate(['externalPage'], {queryParams: {url: route.params['externalUrl']}});
    }

    return true;
  }
}
