import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  profileName = '';
  age: number;
  found: boolean;

  constructor(private httpClient: HttpClient) {

  }
  onKeyUp(event: any) {
    this.profileName = event.target.value;
  }

  getProfile() {
    console.log(this.profileName);
    this.httpClient.get(`https://my-json-server.typicode.com/Sleep-Less-Coder/fake-json-rest-endpoint/profiles?name=${this.profileName}`)
      .subscribe(
      (data: any[]) => {
        if (data.length) {
          console.log(data);
          this.age = data[0].age;
          this.found = true;
        }
      }
      );
  }

  postProfile() {
    this.httpClient.post(`https://my-json-server.typicode.com/Sleep-Less-Coder/fake-json-rest-endpoint/profiles`,
      {
        'name': 'Jason',
        'age': 23,
        'country': 'Australia'
      })
      .subscribe(
      (data: any) => {
        console.log(data);
      }
      );
  }
}
