import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public toastController: ToastController) {}

  openSite(url){
    window.open(url);
  }
  async like(){ //função de pop-up (assincrona pois pode demorar para carregar)
    const toast = await this.toastController.create({
      message: 'Obrigada por favoritar.',
      duration: 2000
    });
    toast.present();
  }
}


