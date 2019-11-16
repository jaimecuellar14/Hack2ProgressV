import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';
import { timeout } from 'q';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public selectedRange:number=0;
  public nuevo=0;
  public pasos:any=0;
 
  constructor(private geolocation: Geolocation) {
    console.log("HEY!");
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude);
      this.pasos = resp.coords.latitude;
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
  
     setInterval(()=>{
     let watch = this.geolocation.watchPosition({enableHighAccuracy: true});
     watch.subscribe((data) => {
       if(Math.abs(this.pasos-data.coords.latitude) >= 0.0000100 ){
        this.selectedRange = this.selectedRange +10;
       }
      this.pasos = data.coords.latitude;
      console.log(data.coords.latitude);
     });
    },1000);
  }
  
  onSucess(){
    
    
  };

  close(){
    alert(this.selectedRange)
  }

  save(){
    alert(this.selectedRange)
  }
 
  contador(){
    setInterval(()=>{
      this.selectedRange=this.selectedRange+1;
      this.nuevo=(this.selectedRange/100);
      if(this.selectedRange==100){
        var items:any = document.getElementsByClassName('el5');
        for (let i = 0; i <= items.length; i++) {
            let element = items[i];
            try {
              element.style.color = "#4c8dff";
            } catch (error) {
              
            }
          
        }    
        clearInterval();
      }
      if(this.selectedRange>=1 && this.selectedRange<20){
        var items:any = document.getElementsByClassName('el1');
        for (let i = 0; i <= items.length; i++) {
            let element = items[i];
            try {
              element.style.color = "#4c8dff";
            } catch (error) {
              
            }
        }    
      }

      if(this.selectedRange>=20 && this.selectedRange<40){
        var items:any = document.getElementsByClassName('el2');
        for (let i = 0; i <= items.length; i++) {
            let element = items[i];
            try {
              element.style.color = "#4c8dff";
            } catch (error) {
              
            }
        }    
      }

      if(this.selectedRange>=40 && this.selectedRange<60){
        var items:any = document.getElementsByClassName('el3');
        for (let i = 0; i <= items.length; i++) {
            let element = items[i];
            try {
              element.style.color = "#4c8dff";
            } catch (error) {
              
            }
        }    
      }

      if(this.selectedRange>=60 && this.selectedRange<80){
        var items:any = document.getElementsByClassName('el4');
        for (let i = 0; i <= items.length; i++) {
            let element = items[i];
            try {
              element.style.color = "#4c8dff";
            } catch (error) {
              
            }
        }    
      }
      
    },100);
  }

  ngOnInit(){
    //this.contador();
  };
}
