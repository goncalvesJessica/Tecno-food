import { Component, ElementRef, NgZone, OnInit, OnDestroy } from '@angular/core';

declare var VanillaTilt: any;
@Component({
  selector: 'app-capa',
  templateUrl: './capa.component.html',
  styleUrls: ['./capa.component.css']
})
export class CapaComponent implements OnInit {
  private elemento: HTMLElement;
  private instanciaTilt: any;

  constructor(private el: ElementRef, private zone: NgZone) {
    this.elemento = el.nativeElement;
  }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.inicializarTilt();
    });
  }
  ngOnDestroy() {
    if (this.instanciaTilt) {
      this.instanciaTilt.destroy();
    }
  }

  private inicializarTilt() {
    // Tiny Slider
    const slider = tns({
      container: ".slider",
      items: 3,
      mouseDrag: true,
      autoplay: false,
      center: true,
      loop: false,
      nav: false,
      controlsContainer: "#custom-control",
      controlsPosition: "bottom",
    });

    // Vanilla Tilt
    this.instanciaTilt = new VanillaTilt(this.elemento);
  }
}
function tns(arg0: { container: string; items: number; mouseDrag: boolean; autoplay: boolean; center: boolean; loop: boolean; nav: boolean; controlsContainer: string; controlsPosition: string; }) {
  throw new Error('Function not implemented.');
}

