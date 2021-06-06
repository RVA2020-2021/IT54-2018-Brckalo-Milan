import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-author-info-dialog',
  templateUrl: './author-info-dialog.component.html',
  styleUrls: ['./author-info-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorInfoDialogComponent {}
