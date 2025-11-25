import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.html',
})
export class Form {
  name = signal('');
  email = signal('');

  isValid = computed(() =>
    this.name().length > 2 && this.email().includes('@')
  );
}
