import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AccountsAPI } from './accounts.api';
import { LoginAPI } from './login.api';

@Injectable()
export class RobinhoodService {
    constructor(
        public Accounts: AccountsAPI,      
        public Login: LoginAPI) { }
}

