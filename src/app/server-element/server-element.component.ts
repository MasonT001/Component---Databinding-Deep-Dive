import { AfterContentChecked, AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation,AfterViewChecked,AfterViewInit, OnDestroy, ViewChild, ElementRef, ContentChild, ComponentFactoryResolver, Output } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck,AfterContentInit,AfterContentChecked,OnDestroy {
  @Input() element: { type: string, name: string, content: string }
  @Output() name: string;

  @ViewChild('heading', {static: true}) header: ElementRef;

  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit Called!')
    console.log('Text Content:' + this.header.nativeElement.textContent)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges Called!")
    console.log(changes)
  }

  ngDoCheck(): void {
    console.log("ngDoCheck Called!")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit Called!")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked Called!")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit Called!")
    console.log("Text Content:" + this.header.nativeElement.textContent)
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked Called!")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy Called!")
  }

}
