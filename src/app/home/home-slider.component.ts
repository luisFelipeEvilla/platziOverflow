import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-slider',
    templateUrl: './home-slider.component.html',
    styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit {
    slideIndex = 1;
    slides;
    dots;
    constructor() {
    }

    ngOnInit(): void {
        this.slides = document.getElementsByClassName('mySlides');
        this.dots = document.getElementsByClassName('dot');
        this.showSlides(this.slideIndex);
    }

    showSlides(n) {
        let i;
        if (n > this.slides.length) { this.slideIndex = 1; }
        if (n < 1) { this.slideIndex = this.slides.length; }
        for (i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display = 'none';
        }
        for (i = 0; i < this.dots.length; i++) {
            this.dots[i].className = this.dots[i].className.replace(' active', '');
        }
        this.slides[this.slideIndex - 1].style.display = 'block';
        this.dots[this.slideIndex - 1].className += ' active';
    }

    currentSlide(n) {
    this.showSlides(this.slideIndex = n);
    }

    plusSlides(n) {
    this.showSlides(this.slideIndex += n);
    }
}
