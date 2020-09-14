import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return 'Angular Export Exceljs';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
