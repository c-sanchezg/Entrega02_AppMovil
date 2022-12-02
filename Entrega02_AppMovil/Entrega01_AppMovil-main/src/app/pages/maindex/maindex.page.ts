import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { GeoclimaService } from 'src/app/services/geoclima.service';


@Component({
  selector: 'app-maindex',
  templateUrl: './maindex.page.html',
  styleUrls: ['./maindex.page.scss'],
})
export class MaindexPage implements OnInit {

  todayDate = new Date()
  pageTitle = 'Inicio';
  loading : HTMLIonLoadingElement;
  weathertemp: any;
  cityname: any;
  weatherdetail: any;
  respuesta: any;

  constructor(private loadingCtrl: LoadingController, private geoclimaService: GeoclimaService) {}

  ngOnInit(): void {
    this.cargarLoading('Cargando');
    this.geoclimaService.getLocation();
  }

  cargarLoading(message: string){
    this.presentLoading(message);
    setTimeout(() => {
      this.loading.dismiss();
    },2000);
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingCtrl.create({
      message,
    });

    await this.loading.present();
  }

  obtenerClima(){
    this.geoclimaService.getGeolocation().then(results => {
      this.respuesta = results;
      this.cityname = this.respuesta.name;
      this.weathertemp = this.respuesta.main.temp;
      this.weatherdetail = this.respuesta.weather[0].description;
    })
  }

}