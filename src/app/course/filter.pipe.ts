import { Pipe, PipeTransform } from '@angular/core';
import { MockReviews, mockReviews } from './tabbar/tabbar.component';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(mockReviews:MockReviews[],searchName:string):MockReviews[] {
    if(!mockReviews || !searchName){
      return mockReviews;
    }
    return mockReviews.filter(mockReviews=>mockReviews.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1);
  }

}
