import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { LedService } from './led.service';

@Component({
  selector: 'app-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.scss']
})
export class LedComponent implements OnInit {
    ledState: boolean = false;

    constructor(private ledService: LedService) { }

    ngOnInit(): void {
        
    }

    postLedState(ledState: boolean): void {
        this.ledService.postLedState(ledState).subscribe((response) => {
            console.log('Response postLedState(): ', response);
        }, (error) => {
            console.log('Error postLedState(): ', error);
        });
    }

    toggle(event: MatSlideToggleChange) {
        this.ledState = event.checked;
        this.postLedState(this.ledState);
    }
}
