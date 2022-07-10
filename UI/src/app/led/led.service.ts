import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LedService {
    private ledUrl = 'http://localhost:3001/api/led';

    constructor(private http: HttpClient) {}

    getLedState(): Observable<boolean> {
        return this.http.get<boolean>(this.ledUrl);
    }
}
