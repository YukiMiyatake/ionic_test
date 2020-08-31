import { Component } from '@angular/core';


//import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';

/*
let options: StreamingVideoOptions = {
  successCallback: () => { console.log('Video played') },
  errorCallback: (e) => { console.log('Error streaming') },
  orientation: 'landscape',
  shouldAutoClose: true,
  controls: false
};

*/
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //constructor(private streamingMedia: StreamingMedia) { }

  ngOnInit() {
    //this.streamingMedia.playVideo('https://developer.apple.com/streaming/examples/advanced-stream-ts.html', options);
  }
  playStream() {
    //this.streamingMedia.playVideo('https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_ts/master.m3u8');
    //    this.streamingMedia.playVideo('http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_30mb.mp4');
  }

  //  constructor() {}

}
