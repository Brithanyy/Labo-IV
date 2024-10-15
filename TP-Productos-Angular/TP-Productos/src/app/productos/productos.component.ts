import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos = [
    {id: 0, nombre: "Producto A", precio: 100, descuento: true},
    {id: 1, nombre: "Producto B", precio: 200, descuento: false},
    {id: 2, nombre: "Producto C", precio: 300, descuento: true},
  ];
  idInput = 0;
  nombreInput = "";
  precioInput = 0;
  opcionInput= true;
  idInputDelete = 0;
  seleccionado = null;
  idInputDescuento = 0;
  agregarProducto() {
   
    const idExiste = this.productos.find(producto => producto.id === this.idInput);
    if(idExiste) this.idInput = this.productos.length;

    this.productos.push({
      id: this.idInput,
      nombre: this.nombreInput,
      precio: this.precioInput,
      descuento: this.opcionInput,
    });
    this.limpiarInputs(); 
  };
  limpiarInputs() {
    this.idInput = 0;
    this.nombreInput = "";
    this.precioInput = 0;
    this.opcionInput = true;
    this.idInputDelete = 0;
    this.idInputDescuento = 0;
  };
  eliminarProducto(idEliminar : number): boolean {
    for (let i = 0; i < this.productos.length; i++) {
      if(this.productos[i].id === Number(idEliminar)) {
        this.productos.splice(i,1);
        this.limpiarInputs();
        return true;
      } 
    }
    this.limpiarInputs();
    return false;
  }
  alertProductoEliminado(idEliminar : number) {
    const eliminado = this.eliminarProducto(idEliminar);
    if(eliminado) alert("Producto eliminado con exito");
    else alert("No se encontro el producto");
  }
  aplicarDescuento(idDecuento : number) {
    for (let i = 0; i < this.productos.length; i++) {
      if(this.productos[i].id === Number(idDecuento)) {
        if(this,this.productos[i].descuento === true) {
          alert("El producto ya tiene aplicado un descuento.");
          break;
        }else {
          this.productos[i].descuento = true;
          this.limpiarInputs();
          }
        } 
     }
  }
  quitarDescuento(idDecuento : number) {
    for (let i = 0; i < this.productos.length; i++) {
      if(this.productos[i].id === Number(idDecuento)) {
        if(this.productos[i].descuento === false){
          alert("El producto no tiene descuento.");
        } else {
          this.productos[i].descuento = false;
          this.limpiarInputs();
          break;
          }
        } else alert("No se encontró el producto")
     }
  }
}