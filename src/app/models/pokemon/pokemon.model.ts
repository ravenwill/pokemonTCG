export class ResponsePokemon {
    cards: CardsPokemon[] = [];
}

export class CardsPokemon {
    id: string = '';
    name: string = '';
    imageUrlHiRes: string = '';
    types: string[] = [];
    attacks: AttacksPokemon[] = [];
    resistances: AttackStrong[] = [];
    weaknesses: AttackStrong[] = [];
}

export class AttacksPokemon {
    name: string;
    convertedEnergyCost: number;
    damage: number;
    text: string;
}

export class AttackStrong {
    type: string;
    value: string;
}
