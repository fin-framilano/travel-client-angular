import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'fin-homeadmin-container',
  templateUrl: './homeadmin-container.component.html',
  styleUrls: ['./homeadmin-container.component.css']
})


export class HomeAdminContainerComponent implements OnInit {

  navbarOptions: string[] = ['packets', 'reservations']

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      //Questo id è il nome di variable assegnato nei path in product-routing
      this.router.navigateByUrl('/homeadmin/packets')
    });

  }

  navbarSelection(column_id: number) {
    this.router.navigateByUrl('/homeadmin/'+this.navbarOptions[column_id])
  }
}
