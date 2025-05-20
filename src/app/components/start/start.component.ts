import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {

  constructor(
    private rout: Router
  ) { }

  ngOnInit() {}

  login() {
    this.rout.navigate(['login']);
  }

  startX: number = 0;
sliderThumb: any;
trackWidth: number = 0;

startSlide(event: any) {
  event.preventDefault();
  this.sliderThumb = event.target.closest('.slider-thumb');
  const track = document.querySelector('.slider-track') as HTMLElement;
  this.trackWidth = track.offsetWidth;

  const moveEvent = (e: any) => {
    let clientX = e.clientX || e.touches[0].clientX;
    let offset = clientX - track.getBoundingClientRect().left - 30;
    offset = Math.max(0, Math.min(offset, this.trackWidth - 60));
    this.sliderThumb.style.left = offset + 'px';

    if (offset >= this.trackWidth - 70) {
      document.removeEventListener('mousemove', moveEvent);
      document.removeEventListener('mouseup', endEvent);
      document.removeEventListener('touchmove', moveEvent);
      document.removeEventListener('touchend', endEvent);
      this.login(); // call your login
    }
  };

  const endEvent = () => {
    this.sliderThumb.style.left = '0px';
    document.removeEventListener('mousemove', moveEvent);
    document.removeEventListener('mouseup', endEvent);
    document.removeEventListener('touchmove', moveEvent);
    document.removeEventListener('touchend', endEvent);
  };

  document.addEventListener('mousemove', moveEvent);
  document.addEventListener('mouseup', endEvent);
  document.addEventListener('touchmove', moveEvent);
  document.addEventListener('touchend', endEvent);
}



}
