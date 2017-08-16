import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {PcDetailImg} from "../../pc-list-data";
import {PcDetailService} from "../pc-detail.service";
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-detail-image',
  templateUrl: './detail-image.component.html',
  styleUrls: ['./detail-image.component.css'],
  providers: [PcDetailService]
})
export class DetailImageComponent implements OnInit, AfterViewInit   {
  @Input() public pcCode: string;
  pcDetailImg: PcDetailImg;

  constructor(private service: PcDetailService) { }

  ngOnInit() {
    this.service.getPcDetailImg(this.pcCode).subscribe( (detailImg) => this.pcDetailImg = detailImg,
      (err) => {console.log(err)});
  }

  ngAfterViewInit() {
    var event = false;
    $('#DetailImgSlide').carousel({
    }).on('mouseover', '.list-group li', function() {
      event = true;
      $('.list-group li').removeClass('active');
      $(this).addClass('active');
    }).on('slid.bs.carousel', function(e) {
      if(!event) {
        var count = $('.list-group').children().length -1;
        var current = $('.list-group li.active');
        current.removeClass('active').next().addClass('active');
        var id = parseInt(current.data('slide-to'));
        if(count == id) {
          $('.list-group li').first().addClass('active');
        }
      }
      event = false;
    });
  }
}
