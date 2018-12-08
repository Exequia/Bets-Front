import { Component, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bets';

  constructor(private translate: TranslateService, private elementRef: ElementRef) {
      this.translate.setDefaultLang('es');
  }

  mangaeSidebar() {
    const active = 'active';
    const sidebar = this.elementRef.nativeElement.querySelector('#sidebar');
    if (sidebar.classList.length === 0) {
      sidebar.classList.add(active);
    } else {
      sidebar.classList.remove(active);
    }
  }
}
