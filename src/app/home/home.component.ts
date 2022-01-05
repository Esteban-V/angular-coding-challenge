import { Component, OnInit } from '@angular/core';
import { LabourStats } from '@models/LabourStats';
import { DataServiceService } from '@app/core/services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public data: LabourStats

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.initialRequest().then((response) => {
      this.data = response
    }).catch((error) => {

    })
  }
}
