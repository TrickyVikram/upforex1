import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appSwipe]',
})
export class SwipeDirective {
  @Output() leftSwipe = new EventEmitter<number>();
  @Output() rightSwipe = new EventEmitter<number>();

  private touchEvent!: TouchEvent | null;
  private mouseEvent!: MouseEvent | null;

  // Touch events
  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.touchEvent = event;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    if (this.touchEvent) {
      const downX: number = this.touchEvent.changedTouches[0].pageX;
      const upX: number = event.changedTouches[0].pageX;

      const difference = downX - upX;
      if (difference >= 10) {
        this.leftSwipe.emit(difference);
      } else if (difference <= -10) {
        this.rightSwipe.emit(difference);
      }
      this.touchEvent = null;
    }
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    event.preventDefault();
    this.mouseEvent = event;
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    event.preventDefault();
    if (this.mouseEvent) {
      const downX: number = this.mouseEvent.pageX;
      const upX: number = event.pageX;
      const difference = downX - upX;

      if (difference >= 10) {
        this.leftSwipe.emit(difference);
      } else if (difference <= -10) {
        this.rightSwipe.emit(difference);
      }
      this.mouseEvent = null;
    }
  }
}
