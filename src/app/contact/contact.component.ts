import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataContactService } from '../services/data-contact.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  dataContact: any;
  existe: boolean = false;
  constructor(private service: DataContactService) { }

  ngOnInit(): void {
    this.service.get().subscribe((response) => {
      this.dataContact = response;
    })
  }

  supprimer(id: number) {
    this.existe = true;
    this.service.supprimer(id);
  }
}
