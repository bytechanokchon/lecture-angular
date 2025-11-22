import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IInvestmentInputModel } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
  standalone: true
})
export class UserInputComponent {
  @Output('calculate') calculateEvent = new EventEmitter<IInvestmentInputModel>();
  enteredInitialInvestment: string = '0';
  enteredAnnualInvestment: string = '0';
  enteredExpectedReturn: string = '0';
  enteredDuration = '10';

  onSubmitForm(): void {
    this.calculateEvent.emit({
      initialInvestment: Number(this.enteredInitialInvestment),
      duration: Number(this.enteredDuration),
      expectedReturn: Number(this.enteredExpectedReturn),
      annualInvestment: Number(this.enteredAnnualInvestment)
    });

   this.enteredInitialInvestment = '0';
   this.enteredAnnualInvestment = '0';
   this.enteredExpectedReturn = '0';
   this.enteredDuration = '0';
  }
}
