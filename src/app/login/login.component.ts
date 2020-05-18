import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['./style.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;
    returnUrl: string;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
    ) {

    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    }
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.router.navigate([this.returnUrl]);
    }
}
