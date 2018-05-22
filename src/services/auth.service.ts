import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

//New import
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthService{
    userName: string;
    token: string;
    loggedIn: boolean;
    url = 'https://angularservertest.herokuapp.com/auth';
    //url = 'http://localhost:8000/auth';

    constructor(private http: Http, private storage: Storage){
        this.userName = '';
        this.loggedIn = false;
    }

    login(userInfo){
        let url = `${this.url}/login`;
        let iJson = JSON.stringify(userInfo);
        return this.http.post(url, iJson, {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).map(res => res.text()).map(res => {
            if(res=="error" || res=="nofound"){
                this.loggedIn = false;
            }else{
                //localStorage.setItem('token', res);
                this.storage.set('token', res);
                this.userName = userInfo.user;
                //localStorage.setItem('currentUser', this.userName);
                this.storage.set('currentUser', this.userName);
                this.loggedIn = true;
            }
            return this.loggedIn;
        });
    }

    logout(): void{
        //localStorage.removeItem('token');
        //localStorage.removeItem('currentUser');
        this.storage.remove('token');
        this.storage.remove('currentUser');
        this.userName = '';
        this.loggedIn = false;
    }

    isLoggedIn(){
        
        this.storage.get('token').then(id_token => {
            this.token = id_token;
            console.log("El token es: "+this.token);
            if (this.token != null) {
                this.storage.get('currentUser').then((val) => {
                    this.userName = val;
                });
                this.loggedIn = true;
                console.log("El token esta"+this.loggedIn);
                return this.loggedIn;
            }else{
              this.loggedIn = false;
              console.log("El token no esta"+this.loggedIn);
                return this.loggedIn;
            }
          });
    }
}