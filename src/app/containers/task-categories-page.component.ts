import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderService } from '../header.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-task-categories-page',
	templateUrl: './task-categories-page.component.html',
	styleUrls: [ './task-categories-page.component.css' ]
})
export class TaskCategoriesPageComponent implements OnInit, OnDestroy {
	pageTite: string = '[USER-NAME]';
	// sub: Subscription;
	constructor(private route: ActivatedRoute, private router: Router, private headerService: HeaderService) {}
	ngOnDestroy(): void {
		// if (this.sub) {
		// 	this.sub.unsubscribe();
		// }
	}

	ngOnInit(): void {
		this.headerService.setTitle('Nisse Nilsson');
		this.headerService.backButtonVisibility = true;
		// this.sub = this.route.queryParams.subscribe(params => {
		//   this.headerService.setBackUrl(params['redirectTo']);
		// });
	}
	// ngAfterViewInit() {
	// }

	navigateToOptions(): void {
		this.router.navigate([ '/options' ], { queryParams: { redirectTo: this.route.snapshot.url } });
		//this.router.navigateByUrl("options");
	}
}
