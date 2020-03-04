import { Component, OnInit } from '@angular/core';
import { DIGIMON } from 'src/interfaces';
import { DigimonService } from 'src/app/services/digimon.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-filtro-nombre',
  templateUrl: './filtro-nombre.component.html',
  styleUrls: ['./filtro-nombre.component.css']
})
export class FiltroNombreComponent implements OnInit {
  digimon_nombre:DIGIMON;
  constructor(public digimonService:DigimonService) { }

  ngOnInit(): void {
  }

  getDigimonsByNombre(event):void{    
    this.digimonService.getDigimonsByNombre(event.target.value)
    .subscribe((data: DIGIMON)=>{
      this.digimon_nombre=data;
    }
    ,
    (error:HttpErrorResponse) => { 
      this.digimon_nombre=undefined;
    });
  }

}
