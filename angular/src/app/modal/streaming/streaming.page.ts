import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-streaming',
  templateUrl: './streaming.page.html',
  styleUrls: ['./streaming.page.scss'],
})

export class StreamingPage implements OnInit {
  @Input() test: string;

  constructor(
    private modalCtrl: ModalController,
  ) { }

  
  close() {
    this.modalCtrl.dismiss();
  }
  
  ngOnInit() {
  }

}
