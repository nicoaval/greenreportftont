import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUserSubscription: Subscription;

    constructor(
    ) {

    }

    ngOnInit() {
    }

    private loadAllUsers() {
    }
}