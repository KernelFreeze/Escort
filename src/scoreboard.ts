import { JSONTextComponent, MCFunction, say, scoreboard, team, Variable, _ } from "sandstone";
import * as game from "./game";
import * as teams from "./teams";

const titleStatus = Variable(0)
const oldGamemode = Variable(2);

MCFunction('_update_scoreboard', () => {
    updateHeader();
}, { runEachTick: true });

MCFunction('_init_scoreboard', () => {
    updateEntries();
}, { runOnLoad: true });

function updateEntry(value: number, text: JSONTextComponent) {
    let name = '§c'.repeat(value + 1);
    team.remove("scoreboard" + value);
    team.add("scoreboard" + value)
    team.modify("scoreboard" + value, "prefix", text);
    team.join("scoreboard" + value, name);
}

function createEntry(value: number) {
    scoreboard.players.add('§c'.repeat(value + 1), '_scoreboard', value);
    updateEntry(value, "\"\"");
}

function createEntries(amount: number) {
    for (let i = 0; i < amount; i++) {
        createEntry(i);
    }
}

function recreateEntries() {
    scoreboard.objectives.remove('_scoreboard')
    scoreboard.objectives.add('_scoreboard', 'dummy', { "text": "     Escolta     ", "bold": true, "color": "gold" });
    scoreboard.objectives.setDisplay('sidebar', '_scoreboard');

    _.if(game.gameMode.equalTo(1), () => {
        createEntries(8);
    }).else(() => {
        createEntries(6);
    });
}

function updateEntries() {
    _.if(oldGamemode.notEqualTo(game.gameMode), () => {
        recreateEntries();
        oldGamemode.set(game.gameMode);
    })

    _.if(game.gameMode.equalTo(1), () => {
        updateEntry(6, `{"text":"  Modalidad:","color":"aqua"}`);
        updateEntry(5, `{"text":"  Normal","color":"white"}`);

        updateEntry(3, `{"text":"  Datapack:","color":"light_purple"}`);
        updateEntry(2, `{"text":"  v1.0.0","color":"white"}`);
    }).else(() => {
        updateEntry(3, `{"text":"[Esperando para]","color":"gold"}`);
        updateEntry(2, `{"text":"[iniciar]","color":"gold"}`);
    });
}

function updateHeader() {
    let module = titleStatus.dividedBy(10).moduloBy(title.length);

    for (let i = 0; i < title.length; i++) {
        _.if(module.equalTo(i), () => {
            let currentTitle = title[i];
            scoreboard.objectives.modify('_scoreboard', 'displayname', currentTitle);
        })
    }

    titleStatus.add(1);
}

const title = [
    {
        "text": " \u0020 \u0020 Escoltar \u0020 \u0020 ",
        "color": "gold",
        "bold": true
    },
    [
        {
            "text": " \u0020 \u0020 E",
            "color": "yellow",
            "bold": true
        },
        {
            "text": "scoltar \u0020 \u0020 ",
            "color": "gold",
            "bold": true
        }
    ],
    [
        {
            "text": " \u0020 \u0020 E",
            "color": "gold",
            "bold": true
        },
        {
            "text": "s",
            "color": "yellow",
            "bold": true
        },
        {
            "text": "coltar \u0020 \u0020 ",
            "color": "gold",
            "bold": true
        }
    ],
    [
        {
            "text": " \u0020 \u0020 Es",
            "color": "gold",
            "bold": true
        },
        {
            "text": "c",
            "color": "yellow",
            "bold": true
        },
        {
            "text": "oltar \u0020 \u0020 ",
            "color": "gold",
            "bold": true
        }
    ],
    [
        {
            "text": " \u0020 \u0020 Esc",
            "color": "gold",
            "bold": true
        },
        {
            "text": "o",
            "color": "yellow",
            "bold": true
        },
        {
            "text": "ltar \u0020 \u0020 ",
            "color": "gold",
            "bold": true
        }
    ],
    [
        {
            "text": " \u0020 \u0020 Esco",
            "color": "gold",
            "bold": true
        },
        {
            "text": "l",
            "color": "yellow",
            "bold": true
        },
        {
            "text": "tar \u0020 \u0020 ",
            "color": "gold",
            "bold": true
        }
    ],
    [
        {
            "text": " \u0020 \u0020 Escol",
            "color": "gold",
            "bold": true
        },
        {
            "text": "t",
            "color": "yellow",
            "bold": true
        },
        {
            "text": "ar \u0020 \u0020 ",
            "color": "gold",
            "bold": true
        }
    ],
    [
        {
            "text": " \u0020 \u0020 Escolt",
            "color": "gold",
            "bold": true
        },
        {
            "text": "a",
            "color": "yellow",
            "bold": true
        },
        {
            "text": "r \u0020 \u0020 ",
            "color": "gold",
            "bold": true
        }
    ],
    [
        {
            "text": " \u0020 \u0020 Escolta",
            "color": "gold",
            "bold": true
        },
        {
            "text": "r",
            "color": "yellow",
            "bold": true
        },
        {
            "text": " \u0020 \u0020 ",
            "color": "gold",
            "bold": true
        }
    ],
    [
        {
            "text": " \u0020 \u0020 Escoltar",
            "color": "yellow",
            "bold": true
        },
        {
            "text": " \u0020 \u0020 ",
            "color": "gold",
            "bold": true
        }
    ],
    {
        "text": " \u0020 \u0020 Escoltar \u0020 \u0020 ",
        "color": "gold",
        "bold": true
    }
]

export {updateEntries}