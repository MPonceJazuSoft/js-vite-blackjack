import _ from "underscore";

/**
 * Esta funcion crea un nuevo Deck
 * @param {Array<string>} tiposDeCarta Ejmplo: ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales  Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} Regresa un nuevo deck.
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta || tiposDeCarta.length === 0 ) throw new Error ('TiposDeCarta es obligatorio');
    if(!tiposEspeciales || tiposEspeciales.length === 0 ) throw new Error ('tiposEspeciales es obligatorio');

    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
};