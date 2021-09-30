import { getGifts } from "../../../helpers/getGifs";

describe('Prueba con getGifs Fetch', () => {
    test('debe de traer 10 elementos ', async () => {
        const gifs = await getGifts('Goku');
        expect(gifs.length).toBe(10);
    })

    test('debe de traer 0 elementos ', async () => {
        const gifs = await getGifts('');
        expect(gifs.length).toBe(0);
    })
    
})
