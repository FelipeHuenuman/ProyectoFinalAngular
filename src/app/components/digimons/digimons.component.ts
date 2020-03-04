import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { DigimonService } from 'src/app/services/digimon.service';
import { Subscription, Subject } from 'rxjs';
import { DIGIMON } from 'src/interfaces';


@Component({
  selector: 'app-digimons',
  templateUrl: './digimons.component.html',
  styleUrls: ['./digimons.component.css']
})
export class DigimonsComponent implements OnInit {

  
  @Output() exportDigimons = new EventEmitter();
  digimonsLoaded: boolean;
  digimons:Array<DIGIMON>;
  digimon_id:DIGIMON;
  
  constructor(public digimonService:DigimonService) { }

  ngOnInit(): void {
    this.digimonsLoaded = false;
    this.getDigimons();
  }


  getDigimons(): void {
      this.digimonService.getAllDigimon().subscribe((data: Array<DIGIMON>) => {
      this.digimons = data;
      this.digimonsLoaded = true;
    });
  }

  getDigimonsById(id:number):void{
    this.digimonService.getDigimonsById(id).subscribe((data: DIGIMON)=>{
      this.digimon_id=data;
    });
  }
}
