/**
 *
 * @param {Array <String>} deck
 * @returns {String}
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0){
        throw new Error('No hay cartas en el Deck');
    }
    const carta= deck.pop();
    return carta;
};