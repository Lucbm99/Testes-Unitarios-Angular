import { Component, OnInit } from '@angular/core';

//Interface
import { Investiments } from '../../model/investiments';
import { ListInvestimentsService } from '../../services/list-investiments.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public investiments: Array<Investiments> = [
    {
      name: "Itaú",
      value: 100
    },
    {
      name: "Nubank",
      value: 100
    },
    {
      name: "Banco Santander",
      value: 100
    },
    {
      name: "C6 Bank",
      value: 100
    },
  ]
  constructor(
    private _listInvestimentsService: ListInvestimentsService
  ) { }

  ngOnInit(): void {
    this._listInvestimentsService.list().subscribe(
      (res) => console.log(res)
    )
  }

}
