import { Component, inject, signal } from '@angular/core';
import { Dog, DogService } from '../../services/dog.service';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dog-table',
  imports: [MatCardModule, MatIconModule, RouterLink],
  templateUrl: './dog-table.component.html',
  styleUrl: './dog-table.component.css'
})
export class DogTableComponent {
  private service: DogService =inject(DogService);
  dogs=signal<Dog[]>([]);


  ngOnInit(){
    this.service.getDogs().subscribe({
      next: values=>{this.dogs.set(values)},
      error: err=>{console.log(err)}
    });
  }


  deleteDog(id:number){
     this.service.deleteDog(id).subscribe({
      error: err=>{console.log(err)}
     });
  }
}
