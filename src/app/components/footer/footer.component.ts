import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  copyToClipboard(toCopy:string){
    navigator.clipboard.writeText(toCopy);
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
