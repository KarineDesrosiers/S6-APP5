import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LedService {
    private ledUrl = 'http://localhost:3001/api/led';

    constructor(private http: HttpClient) {}

    postLedState(ledState: boolean) {
        return this.http.post(this.ledUrl, ledState);
    }
}
