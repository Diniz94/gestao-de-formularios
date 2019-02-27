import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';

import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})

export class ApiService{

    constructor(private http: HttpClient){}

    private formatErrors(error: any) {
        return throwError(error.error);
    }

    post(path: string, body: Object): Observable<any> {
        return this.http.post(
            `${environment.apiUrl}${path}`, body, {observe: 'response'}
        ).pipe(catchError(this.formatErrors));
    }   

    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http.get(`${environment.apiUrl}${path}`, { params })
          .pipe(catchError(this.formatErrors));
      }
    
}