import { Injectable } from '@angular/core';

export interface Story {
  image: string;
  title: string;
  snippet: string;
}

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private stories: Story[] = [
    {
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      title: 'The Hidden Cafés of Paris',
      snippet: 'Discover the secret spots where Parisians sip their coffee away from the crowds.'
    },
    {
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
      title: 'Midnight Walks by the Seine',
      snippet: 'Experience the magic of Paris after dark along the city’s iconic river.'
    },
    {
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      title: 'Parisian Street Art',
      snippet: 'A visual journey through the city’s vibrant and ever-changing murals.'
    },
    {
      image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
      title: 'Bakeries at Dawn',
      snippet: 'Meet the bakers who keep Paris supplied with fresh croissants every morning.'
    },
    {
      image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
      title: 'Lost in Montmartre',
      snippet: 'Wander the winding streets and discover the artistic soul of Paris.'
    },
    {
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      title: 'A Day at the Markets',
      snippet: 'From fresh produce to antiques, explore the best markets in the city.'
    }
  ];

  getStories(): Story[] {
    return this.stories;
  }
}