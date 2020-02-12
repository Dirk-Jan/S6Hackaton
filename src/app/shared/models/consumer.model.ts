import { ElectricityPerDay } from './electricityPerDay.model';
import { Place } from './place.model';

export interface Consumer {
    Id: number; 
    place: Place;
    electricityCosts: string; 
    electricityConsumedPerDay: ElectricityPerDay[];
}