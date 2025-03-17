import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CotizacionService } from '../../services/cotizacion.service';

@Component({
  selector: 'app-cotizacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cotizacion.component.html',
  styleUrl: './cotizacion.component.css',
})
export class CotizacionComponent {
  dolarOficial: any = {};
  dolarBlue: any = {};
  solPeruanoCompra: number = 0;
  solPeruanoVenta: number = 0;
  solPeruanoCompraBlue: number = 0;
  solPeruanoVentaBlue: number = 0;

  constructor(private cotizacionService: CotizacionService) {}
  ngOnInit() {
    this.cotizacionService.getCotizacion().subscribe((data) => {
      console.log('Data API', data);
      this.dolarOficial = data.oficial;
      this.dolarBlue = data.blue;

      this.solPeruanoCompra = 0.003429 * this.dolarOficial.value_buy;
      this.solPeruanoVenta = 0.003429 * this.dolarOficial.value_sell;

      this.solPeruanoCompraBlue = 0.003429 * this.dolarBlue.value_buy;
      this.solPeruanoVentaBlue = 0.003429 * this.dolarBlue.value_sell;
    });
  }
}
