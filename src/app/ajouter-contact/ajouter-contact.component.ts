import { Component, inject } from '@angular/core';
import { DataContactService } from '../services/data-contact.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ajouter-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './ajouter-contact.component.html',
  styleUrl: './ajouter-contact.component.css'
})
export class AjouterContactComponent {
  service=inject(DataContactService)
  contact={
    Nom:"",
    Prenom:"",
    dateN:"",
    email:"",
    tel:""
  }
  ajouter(formulaire:any){
    if(formulaire.valid){
      this.service.ajouter(this.contact);
      this.reset();
    }
  }

  reset(){
    this.contact={
      Nom:"",
      Prenom:"",
      dateN:"",
      email:"",
      tel:""
    }
  }

}
