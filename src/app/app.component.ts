import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular_portfolio';

  constructor(private toastr: ToastrService) { }

  button(){
    this.toastr.success("The toastr is working perfectly")
  }

}
