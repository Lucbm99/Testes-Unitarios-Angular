import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Investiments } from '../model/investiments';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListInvestimentsService {

  private baseUrl: string = "https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json";

  constructor(
    private _httpClient: HttpClient
  ) { }

  public list(): Observable<Array<Investiments>> {
    return this._httpClient.get<Array<Investiments>>(this.baseUrl)
      .pipe(
        map(
          res => res
        )
      )
  }
}
