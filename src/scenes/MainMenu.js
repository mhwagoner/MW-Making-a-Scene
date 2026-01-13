class MainMenu extends Phaser.Scene {
    constructor() {
        super('mainMenuScene');
        console.log('MainMenu: constructor');
    }

    init() {
        console.log('MainMenu: init');
        this.HP = 100;
        this.EXP = 0;
        console.log(`HP: ${this.HP} EXP: ${this.EXP}`);
    }

    create() {
        console.log('MainMenu: create');

        let playerStats = {
            HP: this.HP,
            EXP: this.EXP
        };

        console.log(playerStats.HP);

        this.scene.start('playScene', playerStats);
    }
}