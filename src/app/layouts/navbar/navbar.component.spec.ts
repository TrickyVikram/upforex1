import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { NavbarComponent } from './navbar.component';
import { LanguageService } from 'src/app/core/services/language.service';
import { HybridTranslationService } from 'src/app/core/services/hybrid-translation.service';
import { Store } from 'src/app/Store/store';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let languageService: jasmine.SpyObj<LanguageService>;
  let hybridTranslationService: jasmine.SpyObj<HybridTranslationService>;
  let store: jasmine.SpyObj<Store>;

  beforeEach(async () => {
    const languageSpy = jasmine.createSpyObj(
      'LanguageService',
      ['setLanguage', 'getCurrentLanguage'],
      {
        languages: [
          { code: 'en', name: 'English', flag: '🇬🇧' },
          { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
          { code: 'ar', name: 'العربية', flag: '🇸🇦' },
          { code: 'fr', name: 'Français', flag: '🇫🇷' },
          { code: 'es', name: 'Español', flag: '🇪🇸' },
          { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
          { code: 'zh-CN', name: '中文 (简体)', flag: '🇨🇳' },
          { code: 'zh-TW', name: '中文 (繁體)', flag: '🇹🇼' },
          { code: 'ja', name: '日本語', flag: '🇯🇵' },
          { code: 'pt', name: 'Português', flag: '🇧🇷' },
          { code: 'ru', name: 'Русский', flag: '🇷🇺' },
        ],
        currentLanguage$: {
          subscribe: jasmine.createSpy('subscribe').and.returnValue(() => {}),
        },
      },
    );

    const hybridSpy = jasmine.createSpyObj('HybridTranslationService', [
      'setLanguage',
    ]);
    const storeSpy = jasmine.createSpyObj('Store', ['s3BaseUrl']);

    storeSpy.s3BaseUrl.and.returnValue('https://example.com/');

    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [RouterTestingModule, NgbModule, TranslateModule.forRoot()],
      providers: [
        { provide: LanguageService, useValue: languageSpy },
        { provide: HybridTranslationService, useValue: hybridSpy },
        { provide: Store, useValue: storeSpy },
        TranslateService,
      ],
    }).compileComponents();

    languageService = TestBed.inject(
      LanguageService,
    ) as jasmine.SpyObj<LanguageService>;
    hybridTranslationService = TestBed.inject(
      HybridTranslationService,
    ) as jasmine.SpyObj<HybridTranslationService>;
    store = TestBed.inject(Store) as jasmine.SpyObj<Store>;

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with current language', () => {
    expect(component.currentLanguage).toBeDefined();
  });

  it('should have languages array populated', () => {
    expect(component.languages).toBeDefined();
    expect(component.languages.length).toBeGreaterThan(0);
  });

  it('should toggle menu collapse on button click', () => {
    component.isMenuCollapsed = true;
    component.dropDownBtnClicked('', '');
    expect(component.isMenuCollapsed).toBe(true);
  });

  it('should change language and set localStorage', () => {
    spyOn(localStorage, 'setItem');
    const langCode = 'ar';

    component.changeLanguage(langCode);

    expect(languageService.setLanguage).toHaveBeenCalledWith(langCode, true);
    expect(hybridTranslationService.setLanguage).toHaveBeenCalledWith(langCode);
    expect(localStorage.setItem).toHaveBeenCalledWith('uf_lang_manual', 'true');
    expect(localStorage.setItem).toHaveBeenCalledWith('uf_lang', langCode);
  });
});
