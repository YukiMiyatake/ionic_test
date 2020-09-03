import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StreamingPage} from '../modal/streaming/streaming.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(
    private modalCtrl: ModalController,
  ) {    
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: StreamingPage,
      cssClass: 'app-streaming', // 効いてる？？
      componentProps: {
        'test': 'Hoge',
      }
    });
    return await modal.present();
  }


}
