import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StoryService, Story } from '../story.service';

@Component({
  selector: 'app-story-grid',
  imports: [CommonModule],
  templateUrl: './story-grid.component.html',
  styleUrl: './story-grid.component.scss'
})
export class StoryGridComponent {
  stories: Story[];
  constructor(private storyService: StoryService) {
    this.stories = this.storyService.getStories();
  }
}
