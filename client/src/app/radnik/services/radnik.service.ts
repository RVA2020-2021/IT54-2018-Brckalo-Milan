import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Radnik } from '../models/radnik.model';

import { API } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class RadnikService {
  constructor(private http: HttpClient) {}

  getList(): Observable<Radnik[]> {
    return this.http.get<Radnik[]>(`${API.path}/radnik`).pipe(catchError(this.handleError));
  }

  getOne(radnikId: number): Observable<Radnik> {
    return this.http.get<Radnik>(`${API.path}/${radnikId}`).pipe(catchError(this.handleError));
  }

  post(radnik: Radnik): Observable<any> {
    return this.http.post(`${API.path}/radnik`, radnik).pipe(catchError(this.handleError));
  }

  put(radnik: Radnik): Observable<any> {
    return this.http.put(`${API.path}/radnik`, radnik).pipe(catchError(this.handleError));
  }

  delete(radnikId: number): Observable<any> {
    return this.http.delete(`${API.path}/radnik/${radnikId}`).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }

    return throwError('Something bad happened. Please try again later.');
  }
}
