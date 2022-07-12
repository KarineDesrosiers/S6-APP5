import { Component, OnInit } from '@angular/core';
import { EventsService } from './events.service';
import { Event } from './event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
    interval: any;
    events: Event[] = [];
    displayedColumns: string[] = ['action', 'address'];

    constructor(private eventsService: EventsService) { }
    
    ngOnInit(): void {
        this.getEvents();
        this.interval = setInterval(() => { 
            this.getEvents(); 
        }, 1000);
    }

    getEvents(): void {
        this.eventsService.getEvents().subscribe((response) => {
            this.events = response;
        }, (error) => {
            console.log('Error getEvents(): ', error);
        });
    }
}
