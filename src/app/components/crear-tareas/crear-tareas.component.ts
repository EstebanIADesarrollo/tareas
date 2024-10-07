import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-tareas',
  templateUrl: './crear-tareas.component.html',
  styleUrls: ['./crear-tareas.component.css']
})
export class CrearTareasComponent {
  nombre = new FormControl('', [Validators.required, Validators.minLength(3)]);
  edad = new FormControl('',[Validators.required, Validators.min(18), Validators.max(100)]);
  habilidades = new FormControl('',[Validators.minLength(3)]);
}
