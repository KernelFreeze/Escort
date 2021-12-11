import { give, MCFunction, team, Selector, tellraw, _, say, scoreboard, effect, clear, execute, setworldspawn } from 'sandstone';
import * as game from './game';
import * as teams from './teams';
import * as effects from './effects';

const classSelectorBook = "written_book{pages:['[\"\",{\"text\":\"Selecci\u00F3n de Clase\",\"bold\":true,\"color\":\"#3E9CBE\"},{\"text\":\"\\\\n\\\\n\\\\n\\\\n\",\"color\":\"reset\"},{\"text\":\" \\\\u2b1d\",\"bold\":true,\"color\":\"#515151\"},{\"text\":\" \",\"color\":\"reset\",\"bold\":true},{\"text\":\"Escoltado\",\"bold\":true,\"color\":\"dark_aqua\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"\/function escort:_select_class_1\"},\"hoverEvent\":{\"action\":\"show_text\",\"contents\":[\"\",{\"text\":\"ESCOLTADO \",\"bold\":\"true\",\"color\":\"#7A2685\"},{\"text\":\"\\\\u2764\",\"color\":\"red\"},{\"text\":\"\\\\u2764\\\\u2764\\\\u2764\\\\u2764\\\\u2764\\\\u2764\",\"color\":\"#CACACA\"},{\"text\":\"\\\\n\\\\n\"},{\"text\":\"\\\\u25fd\",\"color\":\"#8F8F8F\"},{\"text\":\" Un miembro por equipo\",\"color\":\"dark_purple\"},{\"text\":\"\\\\n\"},{\"text\":\"\\\\u25fd\",\"color\":\"#8F8F8F\"},{\"text\":\" Velocidad II\",\"color\":\"dark_purple\"}]}},{\"text\":\"\\\\n\\\\n \",\"color\":\"reset\",\"bold\":true},{\"text\":\"\\\\u2b1d\",\"bold\":true,\"color\":\"#515151\"},{\"text\":\" \",\"color\":\"reset\",\"bold\":true},{\"text\":\"M\u00E9dico\",\"bold\":true,\"color\":\"dark_aqua\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"\/function escort:_select_class_2\"},\"hoverEvent\":{\"action\":\"show_text\",\"contents\":[\"\",{\"text\":\"M\u00C9DICO \",\"bold\":\"true\",\"color\":\"#7A2685\"},{\"text\":\"\\\\u2764\\\\u2764\\\\u2764\",\"color\":\"red\"},{\"text\":\"\\\\u2764\\\\u2764\\\\u2764\\\\u2764\",\"color\":\"#CACACA\"},{\"text\":\"\\\\n\\\\n\"},{\"text\":\"\\\\u25fd\",\"color\":\"#8F8F8F\"},{\"text\":\" Dos miembros por\\\\n equipo\",\"color\":\"dark_purple\"},{\"text\":\"\\\\n\"},{\"text\":\"\\\\u25fd\",\"color\":\"#8F8F8F\"},{\"text\":\" Velocidad I\",\"color\":\"dark_purple\"},{\"text\":\"\\\\n\"},{\"text\":\"\\\\u25fd\",\"color\":\"#8F8F8F\"},{\"text\":\" Poci\u00F3n arrojadiza\\\\n  de regeneraci\u00F3n I\",\"color\":\"dark_purple\"},{\"text\":\"\\\\n\"},{\"text\":\"\\\\u25fd\",\"color\":\"#8F8F8F\"},{\"text\":\" Manzana dorada\",\"color\":\"dark_purple\"}]}},{\"text\":\"\\\\n\\\\n \",\"color\":\"reset\",\"bold\":true},{\"text\":\"\\\\u2b1d\",\"bold\":true,\"color\":\"#515151\"},{\"text\":\" \",\"color\":\"reset\",\"bold\":true},{\"text\":\"Escolta\",\"bold\":true,\"color\":\"dark_aqua\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"\/function escort:_select_class_3\"},\"hoverEvent\":{\"action\":\"show_text\",\"contents\":[\"\",{\"text\":\"ESCOLTA \",\"bold\":\"true\",\"color\":\"#7A2685\"},{\"text\":\"\\\\u2764\\\\u2764\\\\u2764\\\\u2764\\\\u2764\",\"color\":\"red\"},{\"text\":\"\\\\u2764\\\\u2764\",\"color\":\"#CACACA\"},{\"text\":\"\\\\n\\\\n\"},{\"text\":\"\\\\u25fd\",\"color\":\"#8F8F8F\"},{\"text\":\" Tres miembros\\\\n  por equipo\",\"color\":\"dark_purple\"},{\"text\":\"\\\\n\"},{\"text\":\"\\\\u25fd\",\"color\":\"#8F8F8F\"},{\"text\":\" Fuerza I\",\"color\":\"dark_purple\"},{\"text\":\"\\\\n\"},{\"text\":\"\\\\u25fd\",\"color\":\"#8F8F8F\"},{\"text\":\" Ca\u00EDda lenta\",\"color\":\"dark_purple\"}]}},{\"text\":\"\\\\n\\\\n \",\"color\":\"reset\",\"bold\":true},{\"text\":\"\\\\u2b1d\",\"bold\":true,\"color\":\"#515151\"},{\"text\":\" \",\"color\":\"reset\",\"bold\":true},{\"text\":\"Tanque\",\"bold\":true,\"color\":\"dark_aqua\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"\/function escort:_select_class_4\"},\"hoverEvent\":{\"action\":\"show_text\",\"contents\":[\"\",{\"text\":\"TANQUE \",\"bold\":\"true\",\"color\":\"#7A2685\"},{\"text\":\"\\\\u2764\\\\u2764\\\\u2764\\\\u2764\\\\u2764\\\\u2764\\\\u2764\",\"color\":\"red\"},{\"text\":\"\\\\n\\\\n\"},{\"text\":\"\\\\u25fd\",\"color\":\"#8F8F8F\"},{\"text\":\" Dos miembros\\\\n  por equipo\",\"color\":\"dark_purple\"},{\"text\":\"\\\\n\"},{\"text\":\"\\\\u25fd\",\"color\":\"#8F8F8F\"},{\"text\":\" Lentitud I\",\"color\":\"dark_purple\"},{\"text\":\"\\\\n\"},{\"text\":\"\\\\u25fd\",\"color\":\"#8F8F8F\"},{\"text\":\" Resistencia I\",\"color\":\"dark_purple\"},{\"text\":\"\\\\n\"},{\"text\":\"\\\\u25fd\",\"color\":\"#8F8F8F\"},{\"text\":\" 10 panes\",\"color\":\"dark_purple\"}]}}]'],title:\"Selecci\u00F3n de Clase\",author:KernelFreeze,display:{Name:'{\"text\":\"Selecci\u00F3n de clase\",\"color\":\"gold\",\"bold\":true}',Lore:[\"Elige la clase que deseas jugar\"]}}";
const gameSettingsBook = "written_book{pages:['[\"\",{\"text\":\"Administraci\u00F3n de la Partida\",\"bold\":true,\"color\":\"gold\"},{\"text\":\"\\\\n\\\\n\",\"color\":\"reset\",\"bold\":true},{\"text\":\"  \\\\ud83d\\\\udde1\",\"bold\":true,\"color\":\"dark_red\"},{\"text\":\" \",\"bold\":true,\"color\":\"dark_green\"},{\"text\":\"[Iniciar]\",\"bold\":true,\"color\":\"dark_green\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"\/function escort:start\"}},{\"text\":\"\\\\n\",\"color\":\"reset\",\"bold\":true},{\"text\":\"  \\\\ud83d\\\\udd31\",\"bold\":true,\"color\":\"dark_red\"},{\"text\":\" \",\"color\":\"reset\",\"bold\":true},{\"text\":\"[Pausar]\",\"bold\":true,\"color\":\"dark_green\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"\/function escort:pause\"}},{\"text\":\"\\\\n\\\\n\",\"color\":\"reset\",\"bold\":true},{\"text\":\"  \\\\ud83c\\\\udff9\",\"bold\":true,\"color\":\"dark_red\"},{\"text\":\" \",\"color\":\"reset\",\"bold\":true},{\"text\":\"[Reiniciar]\",\"bold\":true,\"color\":\"red\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"\/function escort:reset\"}},{\"text\":\"\\\\n\",\"color\":\"reset\",\"bold\":true},{\"text\":\"  \\\\ud83e\\\\uddea\",\"bold\":true,\"color\":\"dark_red\"},{\"text\":\" \",\"color\":\"reset\",\"bold\":true},{\"text\":\"[Nuevo mundo]\",\"bold\":true,\"color\":\"red\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"\/function escort:new_world\"}},{\"text\":\"\\\\n\\\\n\",\"color\":\"reset\",\"bold\":true},{\"text\":\"  \\\\ud83c\\\\udfa3\",\"bold\":true,\"color\":\"dark_red\"},{\"text\":\" \",\"color\":\"reset\",\"bold\":true},{\"text\":\"[Recargar]\",\"bold\":true,\"color\":\"blue\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"\/reload\"}},{\"text\":\"\\\\n\\\\n\",\"color\":\"reset\",\"bold\":true},{\"text\":\"  \\\\u2697\",\"bold\":true,\"color\":\"dark_red\"},{\"text\":\" \",\"color\":\"reset\",\"bold\":true},{\"text\":\"[Retos]\",\"bold\":true,\"color\":\"dark_purple\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"\/function escort:challenges\"}},{\"text\":\"\\\\n \",\"color\":\"reset\"}]'],title:Partida,author:KernelFreeze,display:{Name:'{\"text\":\"Opciones de la Partida\",\"color\":\"gold\",\"bold\":true}'}}"

MCFunction('_book', () => {
    _.if(game.gameStarted.notEqualTo(1), () => {
        execute.as(Selector('@a', { nbt: { Inventory: [] } })).run(() => {
            give('@s', gameSettingsBook);
            give('@s', classSelectorBook);
        })

    })
}, { runEachTick: true });

MCFunction('book', giveBooksToAll);

function joinTeam(index: number) {
    effect.clear('@s');

    teams.playerTeam('@s').set(index);
    team.join(teams.id[index]);
    teams.playerCount[index].add(1);

    tellraw("@s", [{ "text": "Te has unido al equipo ", "color": "red" }, { "text": teams.name[index], "bold": true, "color": "gold" }, { "text": ".", "color": "red" }])

    effects.setMaxHealth(teams.maxHealth[index]);

    _.if(game.gameStarted.notEqualTo(1), () => {
        clear('@s', 'minecraft:golden_apple');
        clear('@s', 'minecraft:bread');
        clear('@s', 'minecraft:splash_potion');

        switch (index) {
            case 1:
                // pot splash de regen
                give('@s', 'splash_potion{Potion:"minecraft:regeneration"}');

                // 1 golden apple
                give('@s', 'minecraft:golden_apple');
                break
            case 3:
                // 10 breads
                give('@s', 'minecraft:bread', 10);
                break
        }
    });
}

function checkIfTeamMember(index: number, newIndex: number) {
    _.if(teams.playerTeam('@s').equalTo(index), () => {
        teams.playerCount[index].remove(1);
        team.leave('@s');
        tellraw("@s", [{ "text": "Has abandonado el equipo ", "color": "red" }, { "text": teams.name[index], "bold": true, "color": "gold" }, { "text": ".", "color": "red" }])
        joinTeam(newIndex);
    }).else(() => {
        if (index < teams.id.length - 1) {
            checkIfTeamMember(index + 1, newIndex);
        } else {
            joinTeam(newIndex);
        }
    });
}

function selectClass(index: number) {
    _.if(teams.playerCount[index].lessThan(teams.maxPlayers[index]), () => {
        checkIfTeamMember(0, index);
    }).else(() => {
        tellraw("@s", [{ "text": "El equipo ", "color": "red" }, { "text": teams.name[index], "bold": true, "color": "gold" }, { "text": " está lleno, intenta unirte a otro.", "color": "red" }])
    });
}

MCFunction('_select_class_1', () => {
    selectClass(0)
});

MCFunction('_select_class_2', () => {
    selectClass(1)
});

MCFunction('_select_class_3', () => {
    selectClass(2)
});

MCFunction('_select_class_4', () => {
    selectClass(3)
});

MCFunction('new_world', () => {
    game.worldOffset.add(1);

    _.if(game.worldOffset.equalTo(0), () => {
        setworldspawn(['20000', '0', '20000']);
    }).elseIf(game.worldOffset.equalTo(1), () => {
        setworldspawn(['40000', '0', '40000']);
    }).elseIf(game.worldOffset.equalTo(2), () => {
        setworldspawn(['60000', '0', '60000']);
    }).elseIf(game.worldOffset.equalTo(3), () => {
        setworldspawn(['80000', '0', '80000']);
    }).elseIf(game.worldOffset.equalTo(4), () => {
        setworldspawn(['100000', '0', '100000']);
    }).elseIf(game.worldOffset.equalTo(5), () => {
        setworldspawn(['120000', '0', '120000']);
    }).elseIf(game.worldOffset.equalTo(6), () => {
        setworldspawn(['140000', '0', '140000']);
    }).elseIf(game.worldOffset.equalTo(7), () => {
        setworldspawn(['160000', '0', '160000']);
    }).elseIf(game.worldOffset.equalTo(8), () => {
        setworldspawn(['180000', '0', '180000']);
    }).elseIf(game.worldOffset.equalTo(9), () => {
        setworldspawn(['200000', '0', '200000']);
    }).elseIf(game.worldOffset.equalTo(10), () => {
        setworldspawn(['220000', '0', '220000']);
    }).elseIf(game.worldOffset.equalTo(11), () => {
        setworldspawn(['240000', '0', '240000']);
    }).elseIf(game.worldOffset.equalTo(12), () => {
        setworldspawn(['260000', '0', '260000']);
    }).elseIf(game.worldOffset.equalTo(13), () => {
        setworldspawn(['280000', '0', '280000']);
    }).elseIf(game.worldOffset.equalTo(14), () => {
        setworldspawn(['300000', '0', '300000']);
    }).elseIf(game.worldOffset.equalTo(15), () => {
        setworldspawn(['320000', '0', '320000']);
    }).elseIf(game.worldOffset.equalTo(16), () => {
        setworldspawn(['340000', '0', '340000']);
    }).elseIf(game.worldOffset.equalTo(17), () => {
        setworldspawn(['360000', '0', '360000']);
    }).elseIf(game.worldOffset.equalTo(18), () => {
        setworldspawn(['380000', '0', '380000']);
    });
});

function giveBooksToAll() {
    let selector = Selector('@a')
    give(selector, classSelectorBook);
    give(selector, gameSettingsBook);
}

export { giveBooksToAll }