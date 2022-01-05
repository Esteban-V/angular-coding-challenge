import { Provider } from "@models/Provider";

export interface LabourStatsResponse {
  providers: Provider[]
  directContractors: [Provider]
  total: [Provider]
}

export interface LabourStats {
  providers: Provider[]
  directContractors: Provider
  total: Provider
}
