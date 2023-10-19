import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shivneri_nagar';
  data:any
  constructor(private http: HttpClient) {

    this.http.get('https://kontests.net/api/v1/all').subscribe((res:any)=>{
      this.data = res
      console.log(res)
    })
  }
}