import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], // <-- Necesario para que funcionen los enlaces
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {}