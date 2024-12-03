import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DataContactService } from '../services/data-contact.service';
import { routes } from '../app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modifier-contact',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './modifier-contact.component.html',
  styleUrl: './modifier-contact.component.css'
})
export class ModifierContactComponent implements OnInit {
  id: string | null = null;
  dataContact: any[] = [];
  exist: boolean = false;
  contact: any;

  constructor(private routes: ActivatedRoute) { }
  data = inject(DataContactService);

  ngOnInit(): void {
    this.data.get().subscribe((response) => {
      this.dataContact = response;
    })

    this.id = this.routes.snapshot.paramMap.get("id");
    if (this.id) {
      this.contact = this.dataContact.find(c => c.id == this.id);
      if (this.contact) {
        this.exist = true;
      }
      else {
        this.exist = false;
      }
    }
  }

  reset() {
    this.contact = {
      Nom: "",
      Prenom: "",
      email: "",
      dateN: "",
      tel: "",
    }
  }

  submit(formulaire: any) {
    if (formulaire.valid) {
      this.data.modifier(this.contact);
      this.reset();
    }
  }





}
