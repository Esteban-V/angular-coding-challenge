import { Injectable } from '@angular/core';
import { LabourStats, LabourStatsResponse } from '../models/LabourStats';
import { Provider } from '../models/Provider';
import { ApiProvider } from '../providers/server';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  constructor(private api: ApiProvider) { }

  public initialRequest(): Promise<LabourStats> {
    return new Promise<any>((resolve, reject) => {
      this.api.getLabourStats().subscribe({
        next: (value: LabourStatsResponse) => {
          const providers = value[0].providers.map((provider) => new Provider(provider))
          const directContractors = new Provider(value[0].directContractors[0])
          const total = new Provider(value[0].total[0])

          const result: LabourStats = {
            providers,
            directContractors,
            total
          }
          resolve(result)
        },
        error: reject
      });
    })
  }
}
