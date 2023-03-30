import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding, OnInit, ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-button[customButton]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit {

  @Input()
  iconAlign: 'left' | 'right' = 'left';

  @Input()
  color: 'primary' | 'secondary';
  @HostBinding('class.custom-button')
  _customButtom = true;

  constructor() {
  }

  @HostBinding('class.custom-button--outline')
  _outline = false;

  @Input()
  set outline(value: boolean) {
    this._outline = value !== null && `${value}` !== 'false';
  }

  @HostBinding('class.custom-button--primary')
  get light(): boolean {
    return this.color === 'primary'
  }

  @HostBinding('class.custom-button--secondary')
  get dark(): boolean {
    return this.color === 'secondary'
  }

  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }

  ngOnInit(): void {
  }


}
