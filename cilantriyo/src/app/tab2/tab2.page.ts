import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  intentos:number=2;
  BAG = "DRAGULA";
  subs = new Subscription();
  num_columnas:any[]=[1,2,3,4,5];
  frutas:any[] = [
    {
      name:"Manzanas",
      src:"../assets/icon/apple.png"
    },
    {
      name:"Peras",
      src:"../assets/icon/pear.png"
    }
  ];

  verduras:any[]=[
    {
      name:"Tomates",
      src:"../assets/icon/tomato.png"
    },
    {
      name:"Pepinos",
      src:"../assets/icon/cucumber.png"
    }
  ]
  constructor(private dragulaService: DragulaService) {
    
      
      this.subs.add(dragulaService.drag(this.BAG)
      .subscribe(({ el }) => {
        if (this.intentos==0){
          this.dragulaService.destroy(this.BAG);
        }
        this.removeClass(el, 'ex-moved');
      })
    );
    
    
      this.subs.add(dragulaService.drop(this.BAG)
      .subscribe(({ el }) => {
        this.intentos=this.intentos-1;
        this.addClass(el, 'ex-moved');
      })
    );
    
    this.subs.add(dragulaService.over(this.BAG)
      .subscribe(({ el, container }) => {
        console.log('over', container);
        this.addClass(container, 'ex-over');
      })
    );
    this.subs.add(dragulaService.out(this.BAG)
      .subscribe(({ el, container }) => {
        console.log('out', container);
        this.removeClass(container, 'ex-over');
      })
    );
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }
  addClass(el,str){

  }
  removeClass(el,str){

  }
}
