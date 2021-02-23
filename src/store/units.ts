import { Unit } from './types';

export class UnitsManager {
    private units: Array<Unit>;

    constructor() {
        this.units = [
            {
                name: 'spear',
                speed: 18
            },
            {
                name: 'sword',
                speed: 22
            },
            {
                name: 'axe',
                speed: 18
            },
            {
                name: 'archer',
                speed: 18
            },
            {
                name: 'spy',
                speed: 9
            },
            {
                name: 'light',
                speed: 10
            },
            {
                name: 'marcher',
                speed: 10
            },
            {
                name: 'heavy',
                speed: 11
            },
            {
                name: 'ram',
                speed: 30
            },
            {
                name: 'catapult',
                speed: 30
            },
            {
                name: 'knight',
                speed: 10
            },
            {
                name: 'snob',
                speed: 35
            },
        ]
    }

    getUnits() {
        return this.units
    }

    getSpeedOrdered() {
        return this.units.sort((a, b) => a.speed - b.speed );
    }
}