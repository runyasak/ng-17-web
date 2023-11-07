import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collapse-content',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="collapse-plus collapse rounded-none border-b border-[rgba(255,255,255,0.12)]"
    >
      <input class="min-h-[2.75em]" type="checkbox" />
      <div
        class="collapse-title min-h-[2.75em] px-0 pb-[1.25em] pt-0 after:!-top-[6px] after:!right-0 after:!h-6 after:!w-6 after:text-center after:text-2xl"
      >
        {{ title }}
      </div>
      <div class="collapse-content flex flex-col gap-4"><ng-content /></div>
    </div>
  `,
})
export class CollapseContentComponent {
  @Input() title = '';
}
