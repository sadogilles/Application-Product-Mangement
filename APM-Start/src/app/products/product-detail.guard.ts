import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' //register in root
})
export class ProductDetailGuard implements CanActivate {
  constructor(private router:Router){

  }
  /**
   * 
   * @param route provide the current route information
   * @param state  provide router state information
   * @returns 
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //we check if the id is valid else return to product page 
      const id = Number(route.paramMap.get('id'));
      if(isNaN(id)|| id<1){
        alert('invalid productId')
        this.router.navigate(['/products']);
      }
      return true;
  }

  
}
