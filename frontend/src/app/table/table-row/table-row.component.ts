import { Component, Input } from '@angular/core';
import { SortKey } from '@app/core/models/TableKeys';
import { Provider } from '@models/Provider';

@Component({
  selector: 'tr[custom-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent {
  @Input() darker: boolean = false
  @Input() sortedKey: SortKey

  @Input() item: Provider
  @Input() totalWorkerCount: number

  get complianceScore() {
    return `${Math.round(this.item.complianceScore)}%`
  }

  sortingBy(key: SortKey): boolean {
    return this.sortedKey == key
  }

  formatCost(cost: number): string {
    const poundFormat = Intl.NumberFormat('en-GB')
    const total = Math.round(cost / 100)
    return total ? poundFormat.format(total) : '-'
  }

  get workForceTotal() {
    return `${this.item.workForceTotal(this.totalWorkerCount)}%`
  }
}
