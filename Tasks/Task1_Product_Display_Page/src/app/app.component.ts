import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task1_Product_Display_Page';

  Products = [
    {
      name:'Laptop', price:70000, av: true
    },
    {
      name:'Mobile', price:15000, av: false
    },
    {
      name:'Tablet', price:25000, av: true
    }
  ]
  logProductDetails(product: any) {
    alert(`
      Product Name: ${product.name}
      Product Price: ${product.price}
      Availability: ${product.av ? 'Available' : 'Out of Stock'}
    `);
  }

  showAddForm = false;

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }
  
  newProduct: { name: string; price: number | null; av: boolean } = { name: '', price: null, av: true };
  addProduct() {
    if (this.newProduct.name && this.newProduct.price !== null) {
      // Add the new product to the Products array
      // this.Products.push({});

      // Reset the form and hide it
      this.newProduct = { name: '', price: null, av: true };
      this.showAddForm = false;
    } else {
      alert('Please fill out all fields before saving.');
    }
  }

 }
