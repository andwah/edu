import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderService } from 'src/app/header.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit, OnDestroy {
  menuTitle: string;
  sub: Subscription = null;
  showBackButton: boolean = false;

  title: string = 'App menu';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public headerService: HeaderService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.sub = this.headerService.titleChanged$.subscribe((title) => {
      //			console.log('Set header:' + title);
      this.title = title;
      this.ref.detectChanges(); // TODO: Read why i need this???
    });

    //		headerService.backButtonVisibility
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  backClick(): void {
    //    this.router.navigateByUrl(this.headerService.getBackUrl());

    if (this.headerService.redirectUrl) {
      let redirectTo = this.headerService.redirectUrl;
      this.headerService.redirectUrl = null;
      this.router.navigateByUrl(redirectTo);
      //			this.router.navigate([ redirectTo ]);
    } else {
      this.router.navigate(['../'], { relativeTo: this.route });
    }

    //		this.router.navigateByUrl(["../"]);
    //  let backUrl:string = this.headerService.getBackUrl();
    //  if(backUrl) {
    //    this.router.navigateByUrl(backUrl+"");  // TODO: Why do i need to make it string?.
    //  }
  }
}
