import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  Renderer2,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { UniversalCanonicalService } from './core/services/universal-canonical.service';
import { LanguageService } from './core/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'upforex_Frontend';
  isAdminRoute: boolean = false;
  private readonly homeHreflangAlternates = [
    { hreflang: 'en', href: 'https://www.upforex.com/' },
    { hreflang: 'hi', href: 'https://www.upforex.com/hi/' },
    { hreflang: 'ar', href: 'https://www.upforex.com/ar/' },
    { hreflang: 'fr', href: 'https://www.upforex.com/fr/' },
    { hreflang: 'es', href: 'https://www.upforex.com/es/' },
    { hreflang: 'de', href: 'https://www.upforex.com/de/' },
    { hreflang: 'zh-Hans', href: 'https://www.upforex.com/zh-cn/' },
    { hreflang: 'zh-Hant', href: 'https://www.upforex.com/zh-tw/' },
    { hreflang: 'ja', href: 'https://www.upforex.com/ja/' },
    { hreflang: 'pt-BR', href: 'https://www.upforex.com/pt/' },
    { hreflang: 'ru', href: 'https://www.upforex.com/ru/' },
    { hreflang: 'x-default', href: 'https://www.upforex.com/' },
  ];
  private readonly localizedLanguageByPath: Record<string, string> = {
    hi: 'hi',
    ar: 'ar',
    fr: 'fr',
    es: 'es',
    de: 'de',
    'zh-cn': 'zh-CN',
    'zh-tw': 'zh-TW',
    ja: 'ja',
    pt: 'pt',
    ru: 'ru',
  };

  constructor(
    private ngbModal: NgbModal,
    private renderer: Renderer2,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
    private canonicalService: UniversalCanonicalService,
    private languageService: LanguageService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.languageService.initLanguage();
    }
    if (isPlatformBrowser(this.platformId))
      this.isAdminRoute = location.pathname.includes('admin');
    if (this.isAdminRoute) return;

    // ✅ Tawk script load
    const script = this.renderer.createElement('script');
    script.text = `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/67c736fc31a20f190e279ac9/1ilh2titl';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
      })()`;

    if (isPlatformBrowser(this.platformId)) {
      this.renderer.appendChild(document.body, script);
    }
  }

  ngOnInit(): void {
    if (this.isAdminRoute) return;

    // Handle both SSR and client-side routing
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => {
        this.updateMetaTags(data);
      });

    // Also handle the initial route for SSR
    let currentRoute = this.activatedRoute;
    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
    }

    // Get initial route data
    currentRoute.data.subscribe((data) => {
      this.updateMetaTags(data);
    });
  }

  private updateMetaTags(data: any): void {
    // ✅ Meta tags update
    if (data['title']) this.titleService.setTitle(data['title']);
    if (data['description'])
      this.metaService.updateTag({
        name: 'description',
        content: data['description'],
      });
    if (data['keywords'])
      this.metaService.updateTag({
        name: 'keywords',
        content: data['keywords'],
      });

    this.applyLocalizedRouteLanguage();
    this.updateHomeHreflangTags();

    // ✅ Canonical tag update (SSR and client-side compatible)
    const baseUrl = isPlatformBrowser(this.platformId)
      ? (typeof window !== 'undefined' ? window.location.origin : 'https://www.upforex.com')
      : 'https://www.upforex.com';

    const currentUrl = baseUrl + this.router.url;
    this.canonicalService.setCanonicalURL(currentUrl);
  }

  private updateHomeHreflangTags(): void {
    const head = this.document.head;
    head
      .querySelectorAll('link[data-home-hreflang]')
      .forEach((link) => this.renderer.removeChild(head, link));

    const pathSegments = this.getCurrentPathSegments();
    const isHomePage =
      pathSegments.length === 0 ||
      (pathSegments.length === 1 &&
        this.localizedLanguageByPath[pathSegments[0]] !== undefined);
    if (!isHomePage) return;

    this.homeHreflangAlternates.forEach(({ hreflang, href }) => {
      const link = this.renderer.createElement('link');
      this.renderer.setAttribute(link, 'rel', 'alternate');
      this.renderer.setAttribute(link, 'hreflang', hreflang);
      this.renderer.setAttribute(link, 'href', href);
      this.renderer.setAttribute(link, 'data-home-hreflang', '');
      this.renderer.appendChild(head, link);
    });
  }

  private applyLocalizedRouteLanguage(): void {
    const [languagePath] = this.getCurrentPathSegments();
    const language = languagePath
      ? this.localizedLanguageByPath[languagePath]
      : undefined;

    if (language) this.languageService.setLanguage(language, true);
  }

  private getCurrentPathSegments(): string[] {
    const path = this.router.url.split(/[?#]/, 1)[0].replace(/\/+$/, '');
    return path.split('/').filter(Boolean);
  }

  // ✅ Update canonical URL (SSR-friendly)
  updateCanonicalUrl(url: string) {
    if (isPlatformBrowser(this.platformId)) {
      // Remove existing canonical tag
      const existingCanonical = document.querySelector('link[rel="canonical"]');
      if (existingCanonical) {
        existingCanonical.remove();
      }

      // Add new canonical tag
      const linkElement = document.createElement('link');
      linkElement.setAttribute('rel', 'canonical');
      linkElement.setAttribute('href', url);
      document.head.appendChild(linkElement);
    }
  }

  // ✅ Canonical tag function (legacy support)
  setCanonical(url: string) {
    this.canonicalService.setCanonicalURL(url);
  }

  ngOnDestroy() {}
}
