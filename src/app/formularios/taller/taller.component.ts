import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators, FormArray } from '@angular/forms';

@Component({
    selector: 'app-taller',
    templateUrl: './taller.component.html',
})
export class tallerComponent {
    constructor(private fb: FormBuilder) {}

    tallerForm = this.fb.group({
        unidad: ['', Validators.required],
        fechaIngreso: [''],
        origen: this.fb.group ({
            yacimiento: [''],
            nroPozo: [''],
        }),
        faltantes: this.fb.array([this.fb.control('')]),
    });

    get faltantes() {
        return this.tallerForm.get('faltantes') as FormArray;
    }

    agregarFaltantes () {
        this.faltantes.push(this.fb.control(''));
    }

    submit() {
        debugger;
        this.tallerForm.value;

        this.tallerForm.setValue({
            unidad: '',
            fechaIngreso: '',
            origen: {
                yacimiento: '',
                nroPozo: '',
            },
            faltantes: this.faltantes.value,
        });

    }

}