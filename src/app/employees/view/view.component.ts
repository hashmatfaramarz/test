import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id;
  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() { 
    let outerThis = this;
    this.
      _activatedRoute.
      params.
      subscribe(function (params) {
        outerThis.id = params['id'];
      });
    }

}
