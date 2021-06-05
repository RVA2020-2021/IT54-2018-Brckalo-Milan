import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Sektor } from '../models/sektor.model';

import { API } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class SektorService {
  constructor(private http: HttpClient) {}

  getList(): Observable<Sektor[]> {
    return this.http.get<Sektor[]>(`${API.path}/sektor`).pipe(catchError(this.handleError));
  }

  getListByPreduzece(preduzeceId: number): Observable<Sektor[]> {
    return this.http.get<Sektor[]>(`${API.path}/sektor/preduzece/${preduzeceId}`).pipe(catchError(this.handleError));
  }

  getOne(sektorId: number): Observable<Sektor> {
    return this.http.get<Sektor>(`${API.path}/sektor/${sektorId}`).pipe(catchError(this.handleError));
  }

  post(sektor: Sektor): Observable<any> {
    return this.http.post(`${API.path}/sektor`, sektor).pipe(catchError(this.handleError));
  }

  put(sektor: Sektor): Observable<any> {
    return this.http.put(`${API.path}/sektor`, sektor).pipe(catchError(this.handleError));
  }

  delete(sektorId: number): Observable<any> {
    return this.http.delete(`${API.path}/sektor/${sektorId}`).pipe(catchError(this.handleError));
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
