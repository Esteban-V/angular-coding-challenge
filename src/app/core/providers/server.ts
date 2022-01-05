import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timeout } from 'rxjs/operators';
import { LabourStatsResponse } from '@models/LabourStats';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiProvider {
  private requestTimeout = 5000; //5 seconds

  private static ServerAddress = environment.serverUrl;
  private static ApiPath = "/application/";
  private BaseUrl

  //Base Routes
  private static LabourStats = "labourstats";

  private options!: Object;

  constructor(public http: HttpClient) {
    this.BaseUrl = `${ApiProvider.ServerAddress}${ApiProvider.ApiPath}`
    this.createHeaders()
  }

  private createHeaders() {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
    this.options = { headers }
  }

  public getLabourStats() {
    const request = `${this.BaseUrl}${ApiProvider.LabourStats}`;
    return this.http.get<LabourStatsResponse>(request, this.options).pipe(
      timeout(this.requestTimeout)
    );
  }
}
