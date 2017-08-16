import { Component, OnInit } from '@angular/core';
import 'hammerjs';
import 'font-awesome/css/font-awesome.css';
import {NgxGalleryImage} from "ngx-gallery/lib/ngx-gallery-image.model";
import {NgxGalleryOptions} from "ngx-gallery/lib/ngx-gallery-options.model";

@Component({
  selector: 'app-main-img-slide',
  templateUrl: './main-img-slide.component.html',
  styleUrls: ['./main-img-slide.component.css']
})
export class MainImgSlideComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '100%',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/1-small.jpg',
        medium: 'assets/1-medium.jpg',
        big: 'assets/1-big.jpg'
      },
      {
        small: 'assets/2-small.jpg',
        medium: 'assets/2-medium.jpg',
        big: 'assets/2-big.jpg'
      },
      {
        small: 'assets/3-small.jpg',
        medium: 'assets/3-medium.jpg',
        big: 'assets/3-big.jpg'
      }
    ];
  }

}
