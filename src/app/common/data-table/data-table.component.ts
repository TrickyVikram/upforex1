import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, distinctUntilChanged, fromEvent, of } from 'rxjs';
import { Store } from 'src/app/Store/store';

export interface ColumnValue {
  [key: string]: string | number;
}

export interface TableColumn {
  key: string | 'actions';
  name: string;
  actions?: Action[];
  icon?: string;
  type?: string;
}

interface Action {
  name: string;
  icon?: string;
  class?: string;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  searchTerm = new FormControl('');

  @Input() columns: TableColumn[] = [];
  @Input() data: ColumnValue[] = [];
  @Input() pageNum: number = 1;
  @Input() pageLimit: number = 10;
  @Input() collectionSize: number = 10;
  @Input() buttonTitle: string = '';
  @Input() isLoading: boolean = false;

  @Output() actionEmitter = new EventEmitter<{
    action: string;
    item: ColumnValue;
  }>();

  @Output() pageChangeEmitter = new EventEmitter<number>();
  @Output() pageSizeChangeEmitter = new EventEmitter<number>();
  @Output() searchEmitter = new EventEmitter<string>();
  @Output() addActionEmitter = new EventEmitter<void>();
  @Output() contentEmitter = new EventEmitter<ColumnValue>();

  s3BaseUrl: string = this.store.s3BaseUrl();

  constructor(private store: Store, private ngbModal: NgbModal) {}

  ngOnInit(): void {
    this.searchTerm.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((search) => {
        if (typeof search === 'string') {
          this.searchEmitter.emit(search);
        }
      });
  }

  handleActions(action: Action, item: ColumnValue) {
    this.actionEmitter.emit({ action: action.name, item });
  }

  handlePageChange(pageNum: number) {
    this.pageChangeEmitter.emit(pageNum);
  }

  handlePageSizeChange(event: Event) {
    const pageSize = Number((event.target as HTMLSelectElement).value);
    this.pageSizeChangeEmitter.emit(pageSize);
  }
}
