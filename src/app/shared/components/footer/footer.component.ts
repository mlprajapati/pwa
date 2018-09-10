import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HeaderService } from '../header/header.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit,OnDestroy {
  //activeClass:string='dashboard';
  @Input() activeClass;
  constructor(private router: Router,private headerService:HeaderService) { }

  ngOnInit() {
   
    console.log("--------- ",this.activeClass)
  }
  
  goToPage(page){
    this.router.navigate(['pages/'+page]);
  }
  ngOnDestroy(){
   
  }
}
