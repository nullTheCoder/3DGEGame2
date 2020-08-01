// The Three Day Engine
// Copyright(C) 2020 The TDE Team
//
// This program is free software: you can redistribute it and / or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.See the
// GNU General Public License for more details.
// You should have received a copy of the GNU General Public License
// along with this program.If not, see https://www.gnu.org/licenses/.

function load_add_things() {
    engine_addScene({

        name: "t0", background: [
            "####################",
            "#                  #",
            "#                  #",
            "#                  #",
            "#                  #",
            "#@                 #",
            "#                 %#",
            "###   ###   ########",
            "#                  #",
            "#__________________#",
            "                    "
        ],
        walls: [
            "####################",
            "#                  #",
            "#                  #",
            "#                  #",
            "#                  #",
            "#@                 #",
            "#                 %#",
            "###   ###   ########",
            "#                  #",
            "#                  #",
            "#^^^^^^^^^^^^^^^^^^#"
        ],
        objects: [{
            name: "player", symbol: "!", x: 1, y: 6
        }]

    })

    additional_addAnimatedScene("progressed", 0.1, [[
        "####################",
        "#                  #",
        "#                  #",
        "#                  #",
        "#                  #",
        "#       _______    #",
        "#       \     /    #",
        "#        \ 1 /     #",
        "#         | |      #",
        "#         / \      #",
        "####################"
    ], [
            "####################",
            "#                  #",
            "#                  #",
            "#    c             #",
            "#                  #",
            "#       _______    #",
            "#       \     /    #",
            "#        \ 1 /     #",
            "#         | |      #",
            "#         / \      #",
            "####################"
        ], [
            "####################",
            "#                  #",
            "#                  #",
            "#    co            #",
            "#                  #",
            "#       _______    #",
            "#       \     /    #",
            "#        \ 1 /     #",
            "#         | |      #",
            "#         / \      #",
            "####################"
        ], [
            "####################",
            "#                  #",
            "#                  #",
            "#    com           #",
            "#                  #",
            "#       _______    #",
            "#       \     /    #",
            "#        \ 1 /     #",
            "#         | |      #",
            "#         / \      #",
            "####################"
        ], [
            "####################",
            "#                  #",
            "#                  #",
            "#    comp          #",
            "#                  #",
            "#       _______    #",
            "#       \     /    #",
            "#        \ 1 /     #",
            "#         | |      #",
            "#         / \      #",
            "####################"
        ], [
            "####################",
            "#                  #",
            "#                  #",
            "#    compl         #",
            "#                  #",
            "#       _______    #",
            "#       \     /    #",
            "#        \ 1 /     #",
            "#         | |      #",
            "#         / \      #",
            "####################"
        ], [
            "####################",
            "#                  #",
            "#                  #",
            "#    comple        #",
            "#                  #",
            "#       _______    #",
            "#       \     /    #",
            "#        \ 1 /     #",
            "#         | |      #",
            "#         / \      #",
            "####################"
        ],
        [
            "####################",
            "#                  #",
            "#                  #",
            "#    complet       #",
            "#                  #",
            "#       _______    #",
            "#       \     /    #",
            "#        \ 1 /     #",
            "#         | |      #",
            "#         / \      #",
            "####################"
        ],
        [
            "####################",
            "#                  #",
            "#                  #",
            "#    complete      #",
            "#                  #",
            "#       _______    #",
            "#       \     /    #",
            "#        \ 1 /     #",
            "#         | |      #",
            "#         / \      #",
            "####################"
        ],
        [
            "####################",
            "#                  #",
            "#                  #",
            "#    completed     #",
            "#                  #",
            "#       _______    #",
            "#       \     /    #",
            "#        \ 1 /     #",
            "#         | |      #",
            "#         / \      #",
            "####################"
        ]])






}