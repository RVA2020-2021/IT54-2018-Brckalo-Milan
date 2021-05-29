import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Obrazovanje } from '../interfaces/obrazovanje.interface';

import { API } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class ObrazovanjeService {
  constructor(private http: HttpClient) {}

  getList(): Observable<Obrazovanje[]> {
    return this.http.get<Obrazovanje[]>(`${API.path}/obrazovanje`).pipe(catchError(this.handleError));
  }

  getOne(obrazovanjeId: number): Observable<Obrazovanje> {
    return this.http.get<Obrazovanje>(`${API.path}/${obrazovanjeId}`).pipe(catchError(this.handleError));
  }

  post(obrazovanje: Obrazovanje): Observable<Obrazovanje> {
    return this.http.post<Obrazovanje>(`${API.path}/obrazovanje`, obrazovanje).pipe(catchError(this.handleError));
  }

  put(obrazovanjeId: number, obrazovanje: Obrazovanje): Observable<Obrazovanje> {
    return this.http.put<Obrazovanje>(`${API.path}/obrazovanje/${obrazovanjeId}`, obrazovanje).pipe(catchError(this.handleError));
  }

  delete(obrazovanjeId: number): Observable<unknown> {
    return this.http.delete(`${API.path}/${obrazovanjeId}`).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }

    return throwError('Something bad happened. Please try again later.');
  }
}
