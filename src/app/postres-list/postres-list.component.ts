import { Component, OnInit } from '@angular/core';
import { Postre } from '../postre';
import { PostresDataService } from '../postres-data.service';

@Component({
  selector: 'postres-list',
  templateUrl: './postres-list.component.html',
  styleUrls: ['./postres-list.component.scss']
})
export class PostresListComponent implements OnInit {
  postres: Postre[]= [];
  constructor(private postresDataService: PostresDataService) { }

  ngOnInit(): void {
    this.postresDataService.getAll().subscribe( postres => {this.postres= postres});
  }

}
