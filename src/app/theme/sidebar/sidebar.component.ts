import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from '../../config/config.service';
import { Language } from '../../models/languages';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  languages: Array<Language>;

  constructor(
    private translate: TranslateService,
    private configService: ConfigService) { }

  ngOnInit() {
    this.configService.getConfig('assets/config/languages.json')
    .subscribe((languages:  Array<Language>) => {
      this.languages = languages;
    });
  }

  changeLocaleTo(language: string) {
    this.translate.setDefaultLang(language);
  }

}
