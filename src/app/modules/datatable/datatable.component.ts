import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import 'datatables.net-responsive';
import 'datatables.net-responsive-bs4';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent {

    // Our array of clients
    clients: any[];
    // Our future instance of DataTable
    dataTable: any;

    // Adding a reference to the change detector in our constructor 
    constructor(
        private http: HttpClient, 
        private chRef: ChangeDetectorRef){}

    ngOnInit(){

        this.http.get('https://5a5a9e00bc6e340012a03796.mockapi.io/clients')
            .subscribe((data: any[]) => {

            this.clients = data;
        
            // You'll have to wait that changeDetection occurs and projects data into 
            // the HTML template, you can ask Angular to that for you ;-)
            this.chRef.detectChanges();
        
            // Now you can use jQuery DataTables :
            const table: any = $('table');

            this.dataTable = table.DataTable({
                responsive : true
            });

        });
    }
        

}
