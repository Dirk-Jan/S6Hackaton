import { ElectricityPerDay } from './electricityPerDay.model';
import { Place } from './place.model';

export interface Producer {
    Id: number; 
    place: Place;
    electricityRevenue: string;
    electricityProducedPerDay: ElectricityPerDay[];
}