import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { TokenStorageService } from '../../services/auth/token-storage.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private tokenStorageService: TokenStorageService
    ) { }
    token: any;
    tokenDecoded: any;

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.tokenStorageService.getUser();
        this.token = this.tokenStorageService.getToken();
        if (user && this.token) {
            this.tokenDecoded = jwtDecode(JSON.stringify(this.token))
            console.log(this.tokenDecoded)
            const role = this.tokenDecoded.authorities[0];
            if (!route.data['role'] || route.data['role'].indexOf(role) === -1) {
                this.router.navigate(['/']);
            return false;
            }
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}