import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ese2';

  @ViewChild('form', { static: true }) form!: NgForm;

  hero: any = {
      nome: '',
      alterego: '',
      superpotere: '',
      nemico: '',
      pianeta: '',
      debolezza: ''

  }

   ngOnInit(): void {

   }

   submit() {
    console.log('Form inviato: ', this.form);
    this.hero.nome = this.form.value.heroInfo.name;
    this.hero.alterego = this.form.value.heroInfo.alterego;
    this.hero.superpotere = this.form.value.heroInfo.superpower;
    this.hero.nemico = this.form.value.heroInfo.enemy;
    this.hero.pianeta = this.form.value.heroInfo.planet;
    this.hero.debolezza = this.form.value.heroInfo.weakness;

    this.form.resetForm();
    console.log(this.hero)


   }







}


