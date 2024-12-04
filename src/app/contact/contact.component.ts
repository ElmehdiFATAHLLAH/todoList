import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataContactService } from '../services/data-contact.service';
import { RouterModule } from '@angular/router';
import { Contact } from '../services/Contact';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  dataContact: any;
  contactFiltre:any;
  existe: boolean = false;
  elementChercher:string="";
  filtrer:boolean=false;
  constructor(private service: DataContactService) { }

  ngOnInit(): void {
    this.service.get().subscribe((reponse) => {
      this.dataContact = reponse;
      this.contactFiltre=reponse;
    })
  }

  supprimer(id: number) {
    this.existe = true;
    this.service.supprimer(id);
  }

  chercher(elemCherche: string) { 
    if (!elemCherche.trim()) {
      this.contactFiltre = [...this.dataContact];
      this.filtrer=false;
    } else {
      this.filtrer=true;
      this.contactFiltre = this.dataContact.filter((contact:Contact) =>
        contact.id.toString().includes(elemCherche) ||
        contact.Nom.toLowerCase().includes(elemCherche.toLowerCase()) || 
        contact.Prenom.toLowerCase().includes(elemCherche.toLowerCase()) || 
        contact.email.toLowerCase().includes(elemCherche.toLowerCase()) ||
        contact.tel.toLowerCase().includes(elemCherche.toLowerCase())
      );
    }
  }
  
}
