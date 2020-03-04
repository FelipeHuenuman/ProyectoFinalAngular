import { Component, OnInit } from '@angular/core';
import { DIGIMON,Nivel } from 'src/interfaces';
import { DigimonService } from 'src/app/services/digimon.service';

@Component({
  selector: 'app-filtro-nivel',
  templateUrl: './filtro-nivel.component.html',
  styleUrls: ['./filtro-nivel.component.css']
})
export class FiltroNivelComponent implements OnInit {

  constructor(public digimonService:DigimonService) { }
  
  niveles:Array<string>=[];
  digimon_level:Array<DIGIMON>;
  digimonsLoaded: boolean;
  digimons:Array<DIGIMON>;
  //digimon:DIGIMON;

  ngOnInit(): void {
    this.digimonsLoaded = false;
    this.listarNiveles();
    this.getDigimonsByLevel(null);
  }

  

  getDigimonsByLevel(event): void {
    if(event!=null){
      this.digimonService.getDigimonsByLevel(event.target.value).subscribe((data: Array<DIGIMON>) => {
        this.digimon_level = data;  
      });
    }else{
      this.digimonService.getAllDigimon().subscribe((data: Array<DIGIMON>) => {
        this.digimon_level = data; 
    });
    }
    this.digimonsLoaded = true;
  }

  listarNiveles(){
    this.digimonService.getAllDigimon().subscribe((data: Array<DIGIMON>) => {
      for(var i=0;i<data.length;i++){
        if(!this.containsObject(data[i].level,this.niveles)){
          this.niveles.push(data[i].level);
        }
      }
    });

  }


  containsObject(obj, list) {
    var x;
    for (x in list) {
        if (list.hasOwnProperty(x) && list[x] === obj) {
            return true;
        }
    }

    return false;
  }
}
