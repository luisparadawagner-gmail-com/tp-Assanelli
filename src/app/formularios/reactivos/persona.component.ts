import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators, FormArray } from '@angular/forms';

@Component({
    selector: 'app-reactive-persona',
    templateUrl: './persona.component.html'
})
export class PersonaComponent {
   // nombreControl = new FormControl('');
   // apellidoControl = new FormControl('');
   // edadControl = new FormControl('55');

constructor(private fb: FormBuilder) {}

   personaForm = this.fb.group({
       nombre: ['Nico', Validators.required ],       
       apellido: [ '' ],
       direccion: [ '' ],
       localidad: [ '' ],
       edad: [ '' ],
       telefonos: this.fb.array ([ this.fb.control('') ])
        
   });
   
   get telefono() {
       return this.personaForm.get('telefonos') as FormArray;
   }

   agregarTelefono() {
       this.telefono.push(this.fb.control(''));
   }

   guardarPersona() {
       debugger;
       this.personaForm.value;
       console.warn(this.personaForm.value)
   }


}