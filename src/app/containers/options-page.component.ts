import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderService } from '../header.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-options-page',
	templateUrl: './options-page.component.html',
	styleUrls: [ './options-page.component.css' ]
})
export class OptionsPageComponent implements OnInit, OnDestroy {
	sub: Subscription;

	constructor(private route: ActivatedRoute, private router: Router, private headerService: HeaderService) {}

	ngOnInit(): void {
		this.headerService.setTitle('Options');
		this.headerService.backButtonVisibility = true;

		this.sub = this.route.queryParams.subscribe((params) => {
			this.headerService.redirectUrl = params['redirectTo'][0]; // TODO: check for null and why we do [0]
		});
	}

	ngOnDestroy(): void {
		if (this.sub) {
			this.sub.unsubscribe();
		}
		// this.headerService.setBackUrl(null);
	}

	signOut(): void {
		this.router.navigateByUrl('');
	}
}
