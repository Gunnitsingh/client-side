import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { Member } from 'src/app/_models/membet';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
member:Member | undefined;
gallaryOptions:NgxGalleryOptions[]=[];
gallaryImages:NgxGalleryImage[]=[];

  constructor(
    private memberService:MembersService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.loadMember()

    this.gallaryOptions = [{
      width : '500px',
      height :'500px',
      imagePercent : 100,
      thumbnailsColumns : 4,
      imageAnimation: NgxGalleryAnimation.Slide,
      preview : false
    }
  ];
 
  }

  loadMember(){
    const userName = this.route.snapshot.paramMap.get('username')
    if(!userName)return;
    this.memberService.getMember(userName).subscribe({
      next:member => {
        this.member = member
        this.gallaryImages = this.getImages();
      }
    })
  }

  getImages(){
    if(!this.member) return [];
    const imgUrl = [];
    for (const photos of this.member.photos){
      imgUrl.push({
        small : photos.url,
        medium: photos.url,
        big: photos.url
      })
    }
    return imgUrl;
  }

  onLike(){}
}
