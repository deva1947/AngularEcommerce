import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(furnitureDetails: any[], searchTerm: string): any[] {
    if (!furnitureDetails || !searchTerm) {
      return furnitureDetails;
    }

    searchTerm = searchTerm.toLowerCase();
    return furnitureDetails.filter(furniture =>
      furniture.name.toLowerCase().includes(searchTerm)
    );
  }
}
