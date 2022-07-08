import { Component, OnInit } from '@angular/core';
import { Event } from './event';
import { EventsService } from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {
    events: Event[] = [];

    constructor(private eventsService: EventsService) { }

    ngOnInit(): void {
        this.getEvents();
    }

    getEvents(): void {
        this.eventsService.getEvents()
            .subscribe(events => this.events = events);
    }
}