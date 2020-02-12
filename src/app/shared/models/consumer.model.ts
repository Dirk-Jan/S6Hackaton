import { Place } from './place.model';

export interface Consumer {
    electricityPrice: string; 
    place: Place;
}