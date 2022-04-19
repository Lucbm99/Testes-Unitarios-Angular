import { ComponentFixture, TestBed } from '@angular/core/testing';
import { 
  HttpClientTestingModule, 
  HttpTestingController 
} from '@angular/common/http/testing';
import { BankingComponent } from './banking.component';
import { ListComponent } from '../investiments/components/list/list.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingComponent, ListComponent ],
      imports: [HttpClientTestingModule]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //componente deverá ser criado
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // U => teste unitário
  it(`(U) getPoupanca: should have poupanca = 10`, () => {
    expect(component.getPoupanca).toEqual(10);
  });

  it(`(U) getCarteira(): should have carteira = 50`, () => {
    expect(component.getCarteira).toEqual(50);
  });

  it(`(U) setSacar(): should transfer poupanca from carteira`, () => {
    component.setSacar('10');    
    expect(component.getPoupanca).toEqual(0);
    expect(component.getCarteira).toEqual(60);
  });

  //testando ifs
  it(`(U) setSacar(): should transfer poupanca don't have string (isNaN) or poupanca < value`, () => {
    expect(component.setSacar('string')).not.toBeTruthy();
    expect(component.setSacar('100')).not.toBeTruthy();

    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  });


  // I => teste de interface
  it(`(I) setSacar(): should transfer poupanca from carteira`, () => {
    let element = fixture.debugElement.nativeElement;
    element.querySelector('#input-sacar').value = "10"
    element.querySelector('#sacar').click();
    fixture.detectChanges();

    expect(element.querySelector('#get-carteira').textContent).toEqual('60');
  });

  it(`(U) setDepositar(): should transfer carteira from poupanca`, () => {
    component.setDepositar('50');    
    expect(component.getCarteira).toEqual(0);
    expect(component.getPoupanca).toEqual(60);
  });

    //testando ifs
    it(`(U) setDepositar(): should transfer carteira don't have string (isNaN) or carteira < value`, () => {
      expect(component.setDepositar('string')).not.toBeTruthy();
      expect(component.setDepositar('100')).not.toBeTruthy();
  
      expect(component.getPoupanca).toEqual(10);
      expect(component.getCarteira).toEqual(50);
    });

    // I => teste de interface
    it(`(I) setDepositar(): should transfer carteira from poupanca`, () => {
      let element = fixture.debugElement.nativeElement;
      element.querySelector('#input-depositar').value = "10"
      element.querySelector('#depositar').click();
      fixture.detectChanges();

      expect(element.querySelector('#get-poupanca').textContent).toEqual('20');

    });
});
