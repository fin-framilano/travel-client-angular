import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'fin-home-user-container',
  templateUrl: './home-user-container.component.html',
  styleUrls: ['./home-user-container.component.css']
})
export class HomeUserContainerComponent implements OnInit {
  
  navbarOptions: string[] = ['packets', 'reservations']

  currentUserId: number = 0

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      //Questo id è il nome di variable assegnato nei path in product-routing
      this.currentUserId = p['user_id']
      this.router.navigateByUrl('/homeuser/'+this.currentUserId+'/packets')
    });

  }

  navbarSelection(column_id: number) {
    this.router.navigateByUrl('/homeuser/'+this.currentUserId+'/'+this.navbarOptions[column_id])
  }
}
