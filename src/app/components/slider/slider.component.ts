import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterViewInit {
    @ViewChild('carousel') carousel: ElementRef | undefined;
  
    ngAfterViewInit() {
      this.startAutoAnimation();
    }
  
    startAutoAnimation() {
      setInterval(() => {
        this.nextSlide();
      }, 3000); // Change slide every 3 seconds (adjust as needed)
    }
  
    nextSlide() {
      if (this.carousel) {
        this.carousel.nativeElement.querySelector('.carousel-control-next').click();
      }
    }
  
    prevSlide() {
      if (this.carousel) {
        this.carousel.nativeElement.querySelector('.carousel-control-prev').click();
      }
    }
  }
