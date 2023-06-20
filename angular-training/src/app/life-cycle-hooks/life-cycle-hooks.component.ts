import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { LifeCycleHooks } from '../shared/models/life-cycle-hooks.model';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.scss'],
})
export class LifeCycleHooksComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    OnDestroy
{
  lifeCycleHooks: LifeCycleHooks = {
    randomNumber: 0,
  };
  @ViewChild('randomNumberParagraph')
  randomNumberParagraph!: ElementRef;

  constructor() {}

  ngOnChanges() {
    this.printWhichEventWasCalled('OnChanges');
  }

  getRandomNumber() {
    this.lifeCycleHooks.randomNumber = Math.round(Math.random() * 2023);
  }

  addCoolNumberTextToSubHeading() {
    const subHeadingValue: string =
      this.randomNumberParagraph.nativeElement.innerText;

    this.randomNumberParagraph.nativeElement.innerText =
      subHeadingValue.replace('Random ', 'Random Cool ');
  }

  ngOnInit() {
    this.printWhichEventWasCalled('OnInit');
  }

  ngDoCheck() {}

  ngAfterContentInit() {}

  ngAfterContentChecked() {}

  ngAfterViewChecked() {}

  ngOnDestroy() {}

  printWhichEventWasCalled(eventName: string): void {
    console.log(eventName);
  }
}
