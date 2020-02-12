import { Place } from './place.model';
import { ElectricityPerDay } from './electricityPerDay.model';

export interface Consumer {
    electricityPrice: string; 
    place: Place;
    electricityConsumedPerDay: ElectricityPerDay[];
}