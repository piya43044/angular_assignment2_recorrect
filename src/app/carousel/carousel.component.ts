import { Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Carousel } from '../models/carousel.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  addSlideForm !: FormGroup;
  carouselArray : Carousel[]=[
    {
      imageUrl : 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      slideCaption : 'Tree sunset with cloudy sky'
    },
    {
      imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGewZLB_J3GeL5Bw5uq2BSCMc6SShvudaxVhtpiUy_DQ&s',
      slideCaption : 'Nature Beauty'
    }
  ];


  ngOnInit(){
    this.addSlideForm = new FormGroup({
      imageUrl : new FormControl('', [Validators.required, Validators.minLength(6)]),
      slideCaption : new FormControl('',Validators.required)
    })
  }

  // Add Slides
  addSlide(){
    const imageUrl = this.addSlideForm.value.imageUrl;
    const caption = this.addSlideForm.value.slideCaption;
    const carousel : Carousel = { imageUrl: imageUrl , slideCaption : caption};
    // console.log(this.addSlideForm);
    this.carouselArray.push(carousel);
    this.addSlideForm.reset();
  }

  // Delete Slides
  deleteSlide(index : number){
    this.carouselArray.splice(index,1);
    // console.log(this.carouselArray);
  }
}
