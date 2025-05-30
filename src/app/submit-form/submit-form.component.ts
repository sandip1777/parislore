import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-submit-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './submit-form.component.html',
  styleUrl: './submit-form.component.scss'
})
export class SubmitFormComponent {
  name = '';
  email = '';
  title = '';
  body = '';
  submitted = false;
  error = false;

  async onSubmit() {
    this.submitted = false;
    this.error = false;
    const payload = {
      name: this.name,
      email: this.email,
      title: this.title,
      body: this.body
    };
    try {
      const response = await fetch('/api/submit-lore', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (result.success) {
        this.submitted = true;
        this.name = '';
        this.email = '';
        this.title = '';
        this.body = '';
        setTimeout(() => this.submitted = false, 3000);
      } else {
        this.error = true;
        alert('Thank you for your lore')
      }
    } catch {
      this.error = true;
       alert('Thank you for your lore')
    }
  }
}
