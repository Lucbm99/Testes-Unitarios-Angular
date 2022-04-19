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

  public investiments!: Array<Investiments>;

  constructor(
    private _listInvestimentsService: ListInvestimentsService
  ) { }

  ngOnInit(): void {
    this._listInvestimentsService.list().subscribe(
      (res) => (this.investiments = res));
  }

}
