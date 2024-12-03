import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataContactService {

  constructor(private router:Router) { }
  public static id=0;

  private listContacts:any[] = [
    { id: ++DataContactService.id, Nom: "FATAHLLAH", Prenom: "El Mehdi", dateN:"2004-04-18", email:"elmehdifatahllah@gmail.com", tel:"0644181520" },
    { id: ++DataContactService.id, Nom: "RONALDO", Prenom: "Cristiano", dateN:"1985-05-28", email:"ronaldo.cristiano@gmail.com", tel:"0744152718" },
    { id: ++DataContactService.id, Nom: "MALDINI", Prenom: "Paoulo", dateN:"1972-06-07", email:"maldini.paoulo@gmail.com", tel:"0744152718" },
    { id: ++DataContactService.id, Nom: "IBRAHIMOVIC", Prenom: "Zlatan", dateN:"1982-08-23", email:"hamzahart@gmail.com", tel:"0688172619" },
    { id: ++DataContactService.id, Nom: "PATO", Prenom: "Alexander", dateN:"1992-09-21", email:"haythamkebbal@gmail.com", tel:"0617629824" }
  ];

  private contactsSub=new BehaviorSubject<any[]>(this.listContacts);
  contacts=this.contactsSub.asObservable();

  public get():Observable<any>{
      return this.contacts;
  }

  public ajouter(contact: any){
    contact.id=++DataContactService.id;
    this.listContacts.push(contact);
    this.contactsSub.next(this.listContacts);
    this.router.navigate(['/']);
  }

  public modifier(contact: any){
    const index=this.listContacts.findIndex(c1=> c1.id==contact.id);

    if(index!=-1){
      this.listContacts[index]=contact;
      this.contactsSub.next(this.listContacts);
      this.router.navigate(['voirContact', contact.id]);
    }

  }

  public supprimer(id: number){
      this.listContacts=this.listContacts.filter(c=>c.id!=id);
      this.contactsSub.next(this.listContacts);
  }

}
