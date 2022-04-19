import { TestBed } from '@angular/core/testing';

import { ListInvestimentsService } from './list-investiments.service';
import { 
  HttpClientTestingModule, 
  HttpTestingController 
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Investiments } from '../model/investiments';

describe('ListInvestimentsService', () => {
  let service: ListInvestimentsService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  const baseURL: string = 'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json';

  const mockList: Array<Investiments> = [
    {
      name: 'Banco 1',
      value: 100
    },
    {
      name: 'Banco 2',
      value: 100
    },
    {
      name: 'Banco 3',
      value: 100
    },
    {
      name: 'Banco 4',
      value: 100
    },
    {
      name: 'Banco 5',
      value: 100
    },
  ]
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ListInvestimentsService);
  });

  httpClient = TestBed.inject(HttpClient);
  httpTestingController = TestBed.inject(HttpTestingController);
  
  afterEach(() => {
    httpTestingController.verify()
  })
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
