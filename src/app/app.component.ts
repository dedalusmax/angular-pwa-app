import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog, MatSort } from '@angular/material';

import { User } from './shared/models/user';
import { UserService } from './shared/services/user.service';
import { Role } from './shared/models/role';
import { RoleService } from './shared/services/role.service';
import { Currency } from './shared/models/currency';
import { CurrencyService } from './shared/services/currency.service';

import { DialogOverviewExampleComponent } from './dialog-overview-example.component';

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  isDarkTheme = false;

  displayedColumns = ['id', 'roleId', 'parentUserId', 'userName', 'email', 'displayName'];
  dataSource = new MatTableDataSource<User>();
  displayedRoleColumns = ['id', 'name', 'displayName'];
  roles = new MatTableDataSource<Role>();
  displayedCurrenciesColumns = ['id', 'displayName', 'toUSD', 'fromUSD'];
  currencies = new MatTableDataSource<Currency>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,
    private userService: UserService,
    private roleService: RoleService,
    private currencyService: CurrencyService) { }

  ngOnInit() {
    this.getUsers();
    this.getRoles();
    this.getCurrencies();

  }

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe((users: Array<User>) => {
        this.dataSource.data = users;
      },
      error => {
        console.log(error);
      });
  }

  getRoles() {
    this.roleService.getRoles()
      .subscribe((roles: Array<Role>) => {
        this.roles.data = roles;
      },
      error => {
        console.log(error);
      });
  }

  getCurrencies() {
    this.currencyService.getCurrencies()
      .subscribe((currencies: Array<Currency>) => {
        this.currencies.data = currencies;
      },
      error => {
        console.log(error);
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogOverviewExampleComponent, {
      data: this.isDarkTheme
    });
  }
}
