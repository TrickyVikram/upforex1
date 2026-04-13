import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Store } from 'src/app/Store/store';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-mt5',
  templateUrl: './mt5.component.html',
  styleUrls: ['./mt5.component.scss'],
})
export class Mt5Component implements OnInit {
  constructor(
    private store: Store,
    @Inject(PLATFORM_ID) private platformId: Object,
    private titleService: Title,
    private metaService: Meta
  ) {}

  selectedDownload = '1';
  s3URL!: string;

  ngOnInit() {
    this.s3URL = this.store.s3BaseUrl();

    // ✅ Set Meta Title & Description
    this.titleService.setTitle(
      'Trade on MT5 Platform | Top Multi Asset Trading Platform'
    );
    this.metaService.updateTag({
      name: 'description',
      content:
        'Trade on MT5 Platform with UPFOREX, the trusted Multi Asset Trading Platform offering powerful tools, secure trading, and affordable costs. Trade Smarter!',
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'mt5 platform, multi asset trading platform​',
    });
  }

  changeSelect(event: Event) {
    const value = (event.target as HTMLSelectElement).value || '1';
    this.selectedDownload = value;
  }

  mt5WindowsDownload() {
    if (!isPlatformBrowser(this.platformId)) return;
    const filename = 'upforex5setup.exe';
    const filePath = `assets/download/${filename}`;
    const anchor = document.createElement('a');
    anchor.style.display = 'none';
    anchor.href = filePath;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  images: string[] = [
    this.store.s3BaseUrl() + 'assets/images/mt5/mt5_1.webp',
    this.store.s3BaseUrl() + 'assets/images/mt5/mt5_2.webp',
    this.store.s3BaseUrl() + 'assets/images/mt5/mt5_3.webp',
    this.store.s3BaseUrl() + 'assets/images/mt5/mt5_4.webp',
    this.store.s3BaseUrl() + 'assets/images/mt5/mt5_5.webp',
    this.store.s3BaseUrl() + 'assets/images/mt5/mt5_6.webp',
    this.store.s3BaseUrl() + 'assets/images/mt5/mt5_7.webp',
  ];
}
