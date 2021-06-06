import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-app-info-dialog',
  templateUrl: './app-info-dialog.component.html',
  styleUrls: ['./app-info-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppInfoDialogComponent {}
