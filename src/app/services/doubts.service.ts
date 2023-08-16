import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DoubtsService {
  constructor(private http: HttpClient) {}
  getAllDoubts() {
    return this.http.get(
      'https://vast-hamlet-33530.herokuapp.com/api/v1/doubt'
    );
  }
  createDoubts(data: any) {
    console.log(data);

    return this.http.post(
      'https://vast-hamlet-33530.herokuapp.com/api/v1/doubt',
      data
    );
  }
  getSingleDoubts(id: any) {
    return this.http.get(
      `https://vast-hamlet-33530.herokuapp.com/api/v1/doubt/${id}`
    );
  }
  deleteDoubt(id: any, ans: any) {
    console.log('this is ans');

    console.log(ans);

    // `https://vast-hamlet-33530.herokuapp.com/api/v1/doubt/${id}`,
    return this.http.post(`http://localhost:5000/api/v1/doubt/${id}`, {
      answer: ans,
    });
  }
}
