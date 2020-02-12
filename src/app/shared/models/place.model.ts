import { Weather } from './weather.model';

export interface Place{
    weatherPerDay: Weather[];
    coordinateLatitude: number;
    coordinateLongitude: number; 
}