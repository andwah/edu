import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class HeaderService {
	private titleSource: BehaviorSubject<string> = new BehaviorSubject('No title');
	titleChanged$ = this.titleSource.asObservable();
	//	private _redirectUrl: string;
	//   getTitle(): Observable<string> {
	//     return this.title$.asObservable();
	// }
	// _showBackButton: boolean = false;
	// setBackButton(show: boolean): void {
	// 	this._showBackButton = show;
	// }

	public backButtonVisibility: boolean = false;
	private _redirectUrl: string;
	set redirectUrl(value: string) {
		//		console.log('[SET BACK URL] ' + value);
		this._redirectUrl = value;
	}

	get redirectUrl(): string {
		//		console.log('[GET BACK URL] ' + this._redirectUrl);
		return this._redirectUrl;
	}

	setTitle(title: string) {
		//  console.log("[SET HEADER TITLE] "+title);
		this.titleSource.next(title);
	}

	constructor() {}
}
