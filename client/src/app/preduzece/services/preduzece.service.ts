import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Preduzece } from '../models/preduzece.model';

import { API } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class PreduzeceService {
  constructor(private http: HttpClient) {}

  getList(): Observable<Preduzece[]> {
    return this.http.get<Preduzece[]>(`${API.path}/preduzece`).pipe(catchError(this.handleError));
  }

  getOne(preduzeceId: number): Observable<Preduzece> {
    return this.http.get<Preduzece>(`${API.path}/preduzece/${preduzeceId}`).pipe(catchError(this.handleError));
  }

  post(preduzece: Preduzece): Observable<any> {
    return this.http.post(`${API.path}/preduzece`, preduzece).pipe(catchError(this.handleError));
  }

  put(preduzece: Preduzece): Observable<any> {
    return this.http.put(`${API.path}/preduzece`, preduzece).pipe(catchError(this.handleError));
  }

  delete(preduzeceId: number): Observable<any> {
    return this.http.delete(`${API.path}/preduzece/${preduzeceId}`).pipe(catchError(this.handleError));
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
