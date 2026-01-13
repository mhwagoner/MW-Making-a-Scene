class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
        console.log('Play: constructor');
    }

    init(stats) {
        console.log();
        this.HP = stats.HP;
        this.EXP = stats.EXP;
    }

    create() {
        console.log('Play: create');
        console.log(`HP: ${this.HP} EXP: ${this.EXP}`);

        this.scene.add('statsOverlayScene', StatsOverlay, false);
        this.scene.launch('statsOverlayScene');
    }

    update() {
        //console.log('Play: update');
    }
}