import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  intentos:number=3;
  BAG = "DRAGULA";
  subs = new Subscription();
  num_columnas:any[]=[1,2,3,4,5];
  frutas:any[] = [
    {name:"Manzanas",src:"../assets/icon/apple.png"
    },
    {name:"Peras",src:"../assets/icon/pear.png"
    },
    {name:"Tomates",src:"../assets/icon/tomato.png"
    },
    {name:"Pepinos",src:"../assets/icon/cucumber.png"
    },
    {name:"Pino",src:"../assets/icon/tree.png"},
    {name:"Palmera",src:"../assets/icon/palm-tree.png"}
  ];

  constructor(private dragulaService: DragulaService) {
    
      
      this.subs.add(dragulaService.drag(this.BAG)
      .subscribe(({ el }) => {
        
        //this.removeClass(el, 'ex-moved');
      })
    );
    
    
      this.subs.add(dragulaService.drop(this.BAG)
      .subscribe(({ el, target }) => {
        if (this.intentos!=0){
        this.intentos=this.intentos-1;
        target.classList.add("plantada");
        target.classList.remove("tierra");
        el.setAttribute("style", "margin-left:3px;margin-top:15px")
        }
      })
    );
    
    this.subs.add(dragulaService.over(this.BAG)
      .subscribe(({ el, container }) => {
        if (this.intentos!=0){
        //console.log('over', container);
        container.setAttribute("style", "border:1px solid;")
        
       // this.addClass(container, 'ex-over');
        }
      })
    );
    this.subs.add(dragulaService.out(this.BAG)
      .subscribe(({ el, container }) => {
        if (this.intentos!=0){
        //console.log(' out', container);
        container.setAttribute("style", "border:none;")
        
        //this.removeClass(container, 'ex-over');
        }
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
