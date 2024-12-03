import { Component, OnInit } from '@angular/core';
import { DataContactService } from '../services/data-contact.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-contact.component.html',
  styleUrls: ['./detail-contact.component.css']
})
export class DetailContactComponent implements OnInit {

  dataContact: any[] = []; 
  id: string | null = null;
  idExiste: boolean = false;
  contact: any;

  constructor(private data: DataContactService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.data.get().subscribe((response) => {
      this.dataContact = response;

      this.id = this.route.snapshot.paramMap.get("id");

      if (this.id) {
        this.contact = this.dataContact.find(c => c.id == this.id);

        if (this.contact) {
          this.idExiste = true;
        } else {
          this.idExiste = false;
        }
      }
    });
  }
}
