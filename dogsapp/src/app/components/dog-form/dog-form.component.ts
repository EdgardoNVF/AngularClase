import { Component, inject } from '@angular/core';
import { Dog, DogService } from '../../services/dog.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { Router } from '@angular/router'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dog-form',
  imports: [ 
    ReactiveFormsModule, 
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
   ],
  templateUrl: './dog-form.component.html',
  styleUrl: './dog-form.component.css'
})
export class DogFormComponent {
  private service:DogService=inject(DogService);
  private build=inject(FormBuilder)
  private router=inject(Router)

  form=this.build.group({
    breed: ['', [
      Validators.required, 
      Validators.maxLength(50), 
      Validators.pattern(/^[a-z,A-Z,\s]/)]],
    
    description: ['', [
        Validators.required, 
        Validators.maxLength(200), 
        Validators.pattern(/^[a-z,A-Z,\s]/)]],
    
    urlImage: ['', [
      Validators.pattern(/^https?:\/\/[^\s]+?\.(jpg|jpeg|png)$/),
      Validators.required,
      Validators.maxLength(200)
    ]]
  });

  submit(){
    let breed=this.form.controls.breed.value!;
    let description=this.form.controls.description.value!;
    let urlImage=this.form.controls.urlImage.value!;

    let dog:Dog={
      id:0,
      breed:breed,
      description:description,
      urlImage:urlImage
    }

    this.service.insertDog(dog).pipe(take(1)).subscribe({
      next: value => {
        this.router.navigate(['dogs'])
      },
      error: err=>{console.log(err)}
    });
  }

}
