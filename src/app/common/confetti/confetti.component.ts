import { Component, Inject, PLATFORM_ID } from '@angular/core';
import confetti, { Options } from 'canvas-confetti';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-confetti',
  templateUrl: './confetti.component.html',
  styleUrls: ['./confetti.component.scss'],
})
export class ConfettiComponent {
  defaultOptions: Options = {
    startVelocity: 50,
    spread: 360,
    ticks: 1000,
    gravity: 1,
    scalar: 2.2,
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  public triggerConfetti() {
    if (isPlatformBrowser(this.platformId)) {
      const money = confetti.shapeFromText({ text: '💲' });
      const coin = confetti.shapeFromText({ text: '🪙' });
      confetti({
        ...this.defaultOptions,
        particleCount: 300,
        origin: { x: 0.5, y: 0.5 },
        shapes: [money, coin],
      });
    }
  }
}
