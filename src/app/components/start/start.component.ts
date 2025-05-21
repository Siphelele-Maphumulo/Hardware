import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  showLoader: boolean = true;
  loaderProgress: number = 0;
  signatureVisible: boolean = false;
  pulseState: boolean = false;

  constructor(private rout: Router) {}

  ngOnInit() {
    this.startLoader();
    setInterval(() => {
      this.pulseState = !this.pulseState;
    }, 1500);
  }

  startLoader() {
    const interval = setInterval(() => {
      this.loaderProgress += 1;
      if (this.loaderProgress === 50) this.signatureVisible = true;
      if (this.loaderProgress >= 100) {
        clearInterval(interval);
        this.showLoader = false;
      }
    }, 50);
  }

  login() {
    this.rout.navigate(['login']);
  }

  startSlide(event: any) {
    event.preventDefault();
    const sliderThumb = event.target.closest('.slider-thumb');
    const track = document.querySelector('.slider-track') as HTMLElement;
    const trackWidth = track.offsetWidth;

    const moveEvent = (e: any) => {
      let clientX = e.clientX || e.touches[0].clientX;
      let offset = clientX - track.getBoundingClientRect().left - 30;
      offset = Math.max(0, Math.min(offset, trackWidth - 60));
      sliderThumb.style.left = offset + 'px';

      if (offset >= trackWidth - 70) {
        this.cleanupEvents(moveEvent, endEvent);
        this.login();
      }
    };

    const endEvent = () => {
      sliderThumb.style.left = '0px';
      this.cleanupEvents(moveEvent, endEvent);
    };

    document.addEventListener('mousemove', moveEvent);
    document.addEventListener('mouseup', endEvent);
    document.addEventListener('touchmove', moveEvent);
    document.addEventListener('touchend', endEvent);
  }

  cleanupEvents(moveEvent: any, endEvent: any) {
    document.removeEventListener('mousemove', moveEvent);
    document.removeEventListener('mouseup', endEvent);
    document.removeEventListener('touchmove', moveEvent);
    document.removeEventListener('touchend', endEvent);
  }
}
