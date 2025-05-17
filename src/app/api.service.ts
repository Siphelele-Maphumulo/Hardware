import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost/Siyeshe%20holdings/backend/';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.getAuthToken()}`,
    });
  }

  private getAuthToken(): string | null {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData).stsTokenManager?.accessToken : null;
  }

  private handleError(error: any): Observable<never> {
    console.error('API Error:', error);
    return throwError(() => new Error(error.message || 'Server error'));
  }
  // Customer Operations
  addCustomer(data: any): Observable<any> {
    return this.http
      .post(`${this.baseUrl}create.php`, data, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  addTotal(data: any): Observable<any> {
    return this.http
      .post(`${this.baseUrl}total.php`, data, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  getCustomers(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}getSingleCustomer.php`, {
        headers: this.getHeaders(),
      })
      .pipe(catchError(this.handleError));
  }

  // Product Operations
  getProducts(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}getProducts.php`, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  // Local JSON Data
  getAllMenuMaterials(): Observable<any> {
    return this.http
      .get('assets/json/allMaterials.json')
      .pipe(catchError(this.handleError));
  }

  getAllYourOrders(): Observable<any> {
    return this.http
      .get('assets/json/yourOrder.json')
      .pipe(catchError(this.handleError));
  }
}
