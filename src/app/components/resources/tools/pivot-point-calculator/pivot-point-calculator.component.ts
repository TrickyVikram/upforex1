import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  Renderer2,
  AfterViewInit,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
@Component({
  selector: 'app-pivot-point-calculator',
  templateUrl: './pivot-point-calculator.component.html',
  styleUrls: ['./pivot-point-calculator.component.scss'],
})
export class PivotPointCalculatorComponent implements AfterViewInit {
  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    this.loadScript();
  }

  private loadScript(): void {
    const script = this.renderer.createElement('script');
    script.src =
      'https://www.cashbackforex.com/Content/remote/remote-widgets.js';
    script.type = 'text/javascript';
    script.async = true;

    script.onload = () => {
      this.initializeCalculator();
    };

    if (isPlatformBrowser(this.platformId))
      this.renderer.appendChild(document.body, script);
  }

  private initializeCalculator(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const RemoteCalc = (window as any).RemoteCalc;
    if (typeof RemoteCalc === 'function') {
      RemoteCalc({
        Url: 'https://www.cashbackforex.com',
        TopPaneStyle:
          'YmFja2dyb3VuZDogIzM0MzU0MCA7IGNvbG9yOiB3aGl0ZTsgYm9yZGVyLWJvdHRvbTogbm9uZTs=',
        BottomPaneStyle:
          'YmFja2dyb3VuZDogIzE1MTgxZDsgYm9yZGVyOiBzb2xpZCAwcHggIzJhMmUzOTsgY29sb3I6ICNmZmY7',
        ButtonStyle:
          'YmFja2dyb3VuZDogIzUxYjc0ODsgY29sb3I6IHdoaXRlOyBib3JkZXItcmFkaXVzOiAyMHB4Ow==',
        TitleStyle:
          'dGV4dC1hbGlnbjogbGVmdDsgZm9udC1zaXplOiA0MHB4OyBmb250LXdlaWdodDogNTAwOw==',
        TextboxStyle:
          'YmFja2dyb3VuZDogIzE1MTgxZDsgY29sb3I6ICNmZmY7IGJvcmRlcjogc29saWQgMHB4ICM5MTk0YTE7',
        ContainerWidth: '100%',
        HighlightColor: 'rgba(0,0,0,1.0)',
        IsDisplayTitle: false,
        IsShowChartLinks: false,
        IsShowEmbedButton: false,
        CompactType: 'large',
        Calculator: 'pivot-point-calculator',
        ContainerId: 'pivot-point-calculator-488524',
      });
    }
  }
}
