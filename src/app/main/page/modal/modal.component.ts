import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ModalAnimations } from './modal.animations';
import { LongTermGoalActionTypes, UpdateLongTermGoal } from 'src/app/core/store/long-term-goal/long-term-goal.actions';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: ModalAnimations,
})
export class ModalComponent implements OnInit {
  // --------------- INPUTS AND OUTPUTS ------------------
  @Input() dataFromWidget: any;
  @Output() close = new EventEmitter<void>();
  // --------------- LOCAL AND GLOBAL STATE --------------

  // --------------- DATA BINDING ------------------------

  // --------------- EVENT BINDING -----------------------

  // --------------- HELPER FUNCTIONS AND OTHER ----------
  closeModal() {
    this.close.emit(); // Notify parent to close the modal
    this.dataFromWidget.oneYear = document.forms["editForm"]["oneYear"].value;
    this.dataFromWidget.fiveYear = document.forms["editForm"]["fiveYears"].value;
  }


  constructor() { }

  ngOnInit(): void {
  }
}
