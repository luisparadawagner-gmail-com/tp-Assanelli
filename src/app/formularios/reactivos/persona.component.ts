import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-reactive-persona',
    templateUrl: './persona.component.html'
})
export class PersonaComponent {
    nombreControl = new FormControl('');
    apellidoControl = new FormControl('');
    edadControl = new FormControl('11');
}