import { Injectable } from '@angular/core';

import { WebApiService } from './web-api.service';
import { BASE_URL } from '../../../environments/environment';

import { Role } from '../models/role';

@Injectable()
export class RoleService {

    private apiPath: string;

    constructor(private webApiService: WebApiService) {
        this.apiPath = BASE_URL + 'Role';
    }

    getRoles = () => {
        return this.webApiService.getList(this.apiPath);
    }

    saveRole = (role: Role) => {
        return this.webApiService.save(this.apiPath, role);
    }
}
