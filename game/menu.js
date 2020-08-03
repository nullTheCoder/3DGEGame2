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


let selectedMenu = 2;

let menusScenes = []

function start() {
    engine_setScreen(30, 10)
    load_add_things()
    engine_changeScene("menu")

    eventlistener = document.addEventListener('keydown', logKeyMenu);
    menusScenes.push([
        "~~~~~~~~~~~~~~~~~~~",
        "       >Play<      ",
        "                   ",
        "        info       ",
        "                   ",
        "    how to play    ",
        "                   ",
        "  press z or space ",
        "      to choose    ",
        "~~~~~~~~~~~~~~~~~~~"
    ])
    menusScenes.push([
        "~~~~~~~~~~~~~~~~~~~",
        "        Play       ",
        "                   ",
        "       >info<      ",
        "                   ",
        "    how to play    ",
        "                   ",
        "  press z or space ",
        "      to choose    ",
        "~~~~~~~~~~~~~~~~~~~"
    ])
    menusScenes.push([
        "~~~~~~~~~~~~~~~~~~~",
        "        Play       ",
        "                   ",
        "        info       ",
        "                   ",
        "   >how to play<   ",
        "                   ",
        "  press z or space ",
        "      to choose    ",
        "~~~~~~~~~~~~~~~~~~~"
    ])


}

function logKeyMenu(e) {
    if (e.key == "w") {selectedMenu-- }
    if (e.key == "s") { selectedMenu++ }
    if (e.key == "ArrowUp") { selectedMenu-- }
    if (e.key == "ArrowDown") { selectedMenu++ }

    if (selectedMenu > 2) {
        selectedMenu = 0
    }
    if (selectedMenu < 0) {
        selectedMenu = 2
    } 

    engine_displayBackground(menusScenes[selectedMenu])

    if (e.key == "z" || e.key == " ") {
        if (selectedMenu == 0) {

        }
        else if (selectedMenu == 1) {

        }
        else if (selectedMenu == 2) {
            howToPlay()
        }



    }


}

function howToPlay() {
    selectedMenu = 0 
    document.removeEventListener("keydown", logKeyMenu)
    eventlistener = document.addEventListener('keydown', logKeyHowToPlay);


}


function logKeyHowToPlay(e) {





}