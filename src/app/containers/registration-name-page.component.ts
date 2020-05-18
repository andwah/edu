import { Component, OnInit, AfterViewInit, AfterContentChecked, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderService } from '../header.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-registration-name-page',
	templateUrl: './registration-name-page.component.html',
	styleUrls: [ './registration-name-page.component.css' ]
})
export class RegistrationNamePageComponent implements OnInit, OnDestroy {
	registrationForm: FormGroup;
	months: string[] = [
		'Janurai',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	pageTitle: string = 'Registration';
	// sub:Subscription;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private formBuilder: FormBuilder,
		private headerService: HeaderService
	) {
		this.registrationForm = this.formBuilder.group({
			name: '',
			year: 2000,
			selectedMonth: null
		});
	}

	ngOnInit(): void {
		//    this.headerService.setBackUrl()
		this.headerService.setTitle('Registration (name)');
		this.headerService.backButtonVisibility = true;

		// this.sub = this.route.queryParams.subscribe(params => {
		//   this.headerService.setBackUrl(params['redirectTo']);
		// });
	}

	ngOnDestroy(): void {
		// if( this.sub) {
		//   this.sub.unsubscribe();
		// }
	}
	onSubmit(formData) {
		//    this.registrationForm.reset();
		console.warn('Your information has been submitted', formData);
		//    this.router.navigateByUrl('task-categories');
		this.router.navigate([ '/task-categories' ]);
	}

	onNavigationToMenu(): void {
		//		console.log('to menu');
		//		this.router.navigateByUrl('');
	}
}
