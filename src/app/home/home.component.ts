import { Component, OnInit } from '@angular/core';
import { Apod } from '../shared/model/apod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apod: Apod = {
    copyright: "Sarah Brands",
    date: "2018-10-18",
    explanation: "On October 10, a new telescope reflected the light of the setting Sun. With dark horizon above and sunset colors below, its segmented mirror inverts an image of the beautiful evening sky in this snapshot from the Roque del Los Muchachos Observatory on the Canary Island of La Palma. The mirror segments cover a 23 meter diameter and are mounted in the open structure of the Large Scale Telescope 1, inaugurated as the first component of the Cherenkov Telescope Array (CTA). Most ground-based telescopes are hindered by the atmosphere that blurs, scatters, and absorbs light. But cherenkov telescopes are designed to detect very high energy gamma rays and actually require the atmosphere to operate. As the gamma rays impact the upper atmosphere they produce air showers of high-energy particles. A large, fast camera at the common focus images the brief flashes of optical light, called Cherenkov light, created by the air shower particles. The flashes reveal the incoming gamma ray timing, direction, and energy. Ultimately more than 100 Cherenkov telescopes are planned for the CTA at locations in both northern and southern hemispheres on planet Earth.",
    hdurl: "https://apod.nasa.gov/apod/image/1810/CTA_inauguratedSarahBrands.jpg",
    media_type: "image",
    service_version: "v1",
    title: "Cherenkov Telescope at Sunset",
    url: "https://apod.nasa.gov/apod/image/1810/CTA_inauguratedSarahBrands1024.jpg"
  }
  constructor() { }

  ngOnInit() {
  }

}
