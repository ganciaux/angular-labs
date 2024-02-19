import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-module',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-module.component.html',
  styleUrl: './form-module.component.css',
})
export class FormModuleComponent {
  user = {
    name: '',
    email: '',
  };

  onSubmit() {
    if (this.user.name && this.user.email) {
      // Envoi du formulaire
      console.log(this.user);
    }
  }
}
