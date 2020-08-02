import { DemoRestService } from './../services/demo-rest.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  activeTabId: string;
  sub: any;
  constructor(private readonly router: Router,
    private route: ActivatedRoute,
    private demoRestService: DemoRestService) { }

  ngOnInit() {
    console.log("Dashboard Component");
    this.sub = this.route.params.subscribe(o => {
      if (o) {
        this.activeTabId = 'tab' + o.id;
      }
    });

    // Subscribing to Rest Service
    this.demoRestService.getConfig().subscribe(o => {
      console.log(o);
    })
  }

  handleSignout() {
    localStorage.removeItem('POC_DASHBOARD_TOKEN_KEY');
    this.router.navigate(['/poc/login']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
