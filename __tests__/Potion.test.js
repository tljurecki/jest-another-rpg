const Potion = require('../lib/Potion.js');

test('creates a health potion object', () => {
    const potion = new Potion('health');

    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
});

test('creates a random potion object', () => {
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});

test('uses a potion from inventory', ()=> {
    const player = new Player ('Dave');
    player.inventory = [new Potion(), new Potion(), new Potion()];
    const oldCount = player.inventory.length;

    player.userPotion(1);

    expect(player.inventory.length).toBeLessThan(oldCount);
});