import { Component, Input, OnChanges } from '@angular/core';
import { LabourStats } from '@app/core/models/LabourStats';
import { Provider } from '@app/core/models/Provider';
import { SortKey } from '@app/core/models/TableKeys';
import { compare } from '@app/core/utils/utils';

@Component({
  selector: 'custom-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnChanges {
  @Input() tableData: LabourStats

  ngOnChanges(): void {
    if (this.tableData && !this.sorted.length) {
      this.sort('name')
    }
  }

  sortedKey: SortKey
  sortOrder: boolean = true

  public sorted: Provider[] = []

  get totalData(): Provider {
    this.tableData.total.name = "TOTAL"
    return this.tableData.total
  }

  get directContractors(): Provider {
    return this.tableData.directContractors
  }

  get providers(): Provider[] {
    return this.tableData.providers
  }

  sortingBy(key: SortKey): boolean {
    return this.sortedKey == key
  }

  get providersData() {
    return this.sortingBy('name') ? this.providers : [...this.providers, this.directContractors]
  }

  sort(key: SortKey) {
    if (this.sortedKey == key) {
      if (!this.sortOrder) {
        this.sortedKey = null
      }
      this.sortOrder = !this.sortOrder
    } else {
      this.sortOrder = true
      this.sortedKey = key
    }

    const compareKey = key == 'workForce' ? 'workerCount' : key

    this.sorted = [...this.providersData].sort((a, b) => compare(a[compareKey], b[compareKey]))
    !this.sortOrder && this.sorted.reverse()
  }
}
