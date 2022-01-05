export class Provider {
  providerId: number
  name: string
  rebatesTotal: number
  grossPayTotal: number
  workerCount: number
  payrollAdminTotal: number
  labourCostTotal: number
  complianceStats: ComplienceStats | null

  public constructor(data: Provider) {
    Object.assign(this, data);
  }

  get complianceScore() {
    return this.complianceStats?.Total || 0
  }

  workForceTotal(totalWorkerCount: number) {
    return ((this.workerCount / totalWorkerCount) * 100).toFixed(1)
  }
}

export interface ComplienceStats {
  OpsEmpStatusChecked: number
  Total: number
  TaxStatus: number
  Identification: number
  RightToWork: number
  OpsChecked: number
  Contract: number
  EmpStatusReview: number
}
