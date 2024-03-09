import { Component } from '@angular/core';
// import { GalleryItem, ImageItem } from 'ng-gallery';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  // images: GalleryItem[]=[];

  itemsPerSlide = 3;
  slides = [
    {image: '../../assets/Imgs/1.jpg'},
    {image: '../../assets/Imgs/2.jpg'},
    {image: '../../assets/Imgs/3.jpg'},
    {image: '../../assets/Imgs/8.jpg'},
    {image: '../../assets/Imgs/5.jpg'},
    {image: '../../assets/Imgs/6.jpg'},
    {image: '../../assets/Imgs/8.jpg'},
    {image: '../../assets/Imgs/5.jpg'},
    {image: '../../assets/Imgs/6.jpg'},
  ];

  ngOnInit() {
    // Set items array
    // this.images.push( new ImageItem({ src: '../../assets/Imgs/6.jpg', thumb: '../../assets/Imgs/6.jpg' }))
    // this.images.push( new ImageItem({ src: '../../assets/Imgs/7.jpg', thumb: '../../assets/Imgs/7.jpg' }))
    // this.images.push( new ImageItem({ src: '../../assets/Imgs/9.jpg', thumb: '../../assets/Imgs/9.jpg' }))
    // this.images.push( new ImageItem({ src: '../../assets/Imgs/10.jpg', thumb: '../../assets/Imgs/10.jpg' }))
    // this.images.push( new ImageItem({ src: '../../assets/Imgs/3.jpg', thumb: '../../assets/Imgs/3.jpg' }))
    // this.images.push( new ImageItem({ src: '../../assets/Imgs/11.jpg', thumb: '../../assets/Imgs/11.jpg' }))
    // this.images.push( new ImageItem({ src: '../../assets/Imgs/8.jpg', thumb: '../../assets/Imgs/8.jpg' }))
    // this.images.push( new ImageItem({ src: '../../assets/Imgs/9.jpg', thumb: '../../assets/Imgs/9.jpg' }))
    // this.images.push( new ImageItem({ src: '../../assets/Imgs/6.jpg', thumb: '../../assets/Imgs/6.jpg' }))

  }

}
