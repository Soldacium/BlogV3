import { Component, EventEmitter, Output } from '@angular/core';
import { SearchOptions } from '@shared/models/search-options.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() searchOptionsChange = new EventEmitter<string>();
  @Output() acceptSearch = new EventEmitter<string>();


  eventTypes: string[] = ['Party', 'Meeting', 'Concert', 'Happening', 'Opening', ];
  eventTags: string[] = [
    'Huge place', 'Small place', 'Free drinks', 'Charity',
    'Dancing', 'Drinking', 'Gastronomy', 'Open space',
    'Closed space', 'Sponsored', 'Pay-as-you-go', 'Need invite',
    'Science', 'Culture', 'Religion', 'Sport', 'Weird', 'Innovative' ];

  chosenTags: string[] = [];
  chosenType = '';

  options: SearchOptions = {
    name: '',
    type: '',
    tags: [],
    dateMax: '',
    dateMin: ''
  };


  pickType(type: string): void{
    this.chosenType === type ? this.chosenType = '' : this.chosenType = type;
  }
  pickTag(tag: string): void {
    const isTag = this.chosenTags.includes(tag);
    if (isTag == false) {
      this.chosenTags.push(tag);
    } else {
      this.chosenTags.splice(this.chosenTags.indexOf(tag), 1);
    }
  }

  search(): void{

    this.modifySearchOptions();
  }

  modifySearchOptions(): void{
    // this.options.start ==='' ? this.options.start = new Date('July 27, 2020 23:30:00').toString() : new Date(this.options.start).toString();
    // this.options.end ==='' ? this.options.end = new Date('July 27, 2080 23:30:00').toString() : new Date(this.options.end).toString();

    this.options.type = this.chosenType;
    this.options.tags = this.chosenTags;

    this.options.name = this.options.name.toLowerCase();
  }

  resetSearchOptions(): void{
    this.options = {
      name: '',
      type: '',
      tags: [],
      dateMax: '',
      dateMin: ''
    };
  }

}
