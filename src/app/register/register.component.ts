import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  titulo = 'Registrate en Shoppy'
  mensaje = "Usuario registrado exitosamente"
  registrado = false;
  nombre: String = ""
  apellido: String = ""

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  registrarUsuario(){

    this.registrado = true;
    this.mensaje = "Usuario registrado exitosamente"
  }

}
