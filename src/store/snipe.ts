import dayjs from "dayjs";
import { AttactFormTypes } from "../AttackForm";
import { distanceBetween } from './map'

export type SnipeDataType = {
    attack_at: string;
    attack_barbarian_at: string;
    cancel_attack_at: string;
    cancel_suport_command_at: string;
    attack_barbarian_village_url: string;
    commands_place_url: string;
}

const getTimeFromMinutes = (minutes: number) => {
    var timeHours = Math.floor(minutes / 60);          
    var timeMinutes = minutes % 60;

    return timeHours + ":" + timeMinutes;
}

const snipe = (values: AttactFormTypes): SnipeDataType => {
    const nearest_babarian_village_coords = values.nearest_babarian_village_coords.replace('|', ';');
    const distanceFromBarbarianVillage = distanceBetween(values.defender_coords, values.nearest_babarian_village_coords);

    console.log(distanceFromBarbarianVillage);

    let supportTime = 100;
    if (values.defender_slowest_unit) {
        supportTime = distanceFromBarbarianVillage * values.defender_slowest_unit.speed;
    }

    console.log(values.defender_slowest_unit, 'defender_slowest_unit', supportTime);

    const totalTimeBeforeAttack = 2 * values.support_max_time;

    const parsedDateTime = dayjs(values.attack_datetime);

    const cacelSuportTime = getTimeFromMinutes(supportTime);

    console.log(cacelSuportTime, 'cacelSuportTime');

    return {
        attack_barbarian_at: parsedDateTime.subtract(totalTimeBeforeAttack, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
        cancel_attack_at: parsedDateTime.subtract(values.support_max_time, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
        cancel_suport_command_at: cacelSuportTime,
        attack_at: parsedDateTime.format('YYYY-MM-DD HH:mm:ss'),
        attack_barbarian_village_url: 'https://' + values.world + '.tribalwars.com.pt/game.php?screen=map#' + nearest_babarian_village_coords,
        commands_place_url: 'https://' + values.world + '.tribalwars.com.pt/game.php?screen=place'
    };
}

export default snipe;