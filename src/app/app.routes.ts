import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PageIntrouvableComponent } from './page-introuvable/page-introuvable.component';
import { DetailContactComponent } from './detail-contact/detail-contact.component';
import { ModifierContactComponent } from './modifier-contact/modifier-contact.component';
import { AjouterContactComponent } from './ajouter-contact/ajouter-contact.component';

export const routes: Routes = [
    {path:"", component:ContactComponent},
    {path:"about", component:AboutComponent},
    {path:"ajouterContact", component: AjouterContactComponent},
    {path:"voirContact/:id", component: DetailContactComponent},
    {path: "modifierContact/:id", component: ModifierContactComponent},
    {path : "**", component: PageIntrouvableComponent}
];
