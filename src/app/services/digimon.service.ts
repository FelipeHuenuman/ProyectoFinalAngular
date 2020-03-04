import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DIGIMON } from 'src/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DigimonService {
  digimon:DIGIMON;
  digiAPI: any;
  //digiSpeciesAPI: any;

  constructor(private http:HttpClient) { 
    this.digiAPI=environment.digimonURL;
    //this.digiSpeciesAPI=environment.digi
  }
  getAllDigimon(): Observable<Array<DIGIMON>>{
    return this.http.get<Array<DIGIMON>>(`${this.digiAPI}`)
  }

  getDigimonsByNombre(digimonName: any): Observable<DIGIMON>{
    
    return this.http.get<DIGIMON>(`${this.digiAPI}/name/${digimonName}`).pipe(catchError(this._handleError));

  }

  getDigimonsById(digimonId: any): Observable<DIGIMON>{
    return this.http.get<DIGIMON>(`${this.digiAPI}/id/${digimonId}`);
  }
  getDigimonsByLevel(level:string): Observable<Array<DIGIMON>>{
    return this.http.get<Array<DIGIMON>>(`${environment.digimonURL}/level/${level}`);
  }


  private _handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      //lado cliente
      console.log('An Error occurred :',error.error.message);
    }else{
      //backend
      console.log(`Backend retuned code ${error.status}, `+`body was :${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
