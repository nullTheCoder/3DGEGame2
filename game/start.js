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

let YDownvelocity = 0
let YUpvelocity = 0

let recordedKeys = []

let current_i

let currenttiming

let didYouTouchDeThing = false

function game_start() {
    engine_setScreen(30, 10) 
    load_add_things()

    engine_changeScene("t0")

    eventlistener = document.addEventListener('keydown', logKey);
}


function logKey(e) {
    let special_symbol = null

    if (e.key == "a") {
        let save = engine_moveObject("player", -1, 0)
        special_symbol = handle(save)
    }
    if (e.key == "d") {
        let save = engine_moveObject("player", 1, 0)
        special_symbol = handle(save)
    }

    if (engine_checkMoveObject("player", 0, 1)[0]) {
        YUpvelocity -= 0.5
        YDownvelocity += 0.5
    }

    for (let i = 0; i + 1 < YDownvelocity; i++) {
        let save = engine_moveObject("player", 0, 1)
        if (save[0] === false) {
            YDownvelocity = 0
            special_symbol = handle(save)
            return
        }
    }

    if (!engine_checkMoveObject("player", 0, 1)[0]) {
        YUpvelocity = 0
        YDownvelocity = 0
    }

    if (e.key == "w" && engine_checkMoveObject("player", 0, 1)[0] != true) {
        YUpvelocity = 2 
    }

    for (let i = 0; i + 1 < YUpvelocity; i++) {
        let save = engine_moveObject("player", 0, -1)
        if (save[0] === false) {
            special_symbol = handle(save)
        }
    }

    if (special_symbol == "%") {
        didYouTouchDeThing = true
        replay()

        return
    }
    if (special_symbol == "@" && didYouTouchDeThing) {
        console.log("yep")
        additional_playAnimationScene("progressed")

        return
    }

    recordedKeys.push(e)

}

function handle(save) {
    let ss = null

    if (save[1].symbol === "^") {
        die()
    }

    else if (save[1].symbol === "%") {
        ss = "%"
    }

    else if (save[1].symbol === "@") {
        ss = "@"
    }

    return ss
}

function die() {
    engine_setObjectPosition("player", 1, 6)
    recordedKeys = []
    eventlistener = document.addEventListener('keydown', logKey);
    didYouTouchDeThing = false
}

function replay() {
    document.removeEventListener("keydown", logKey)

    current_i = recordedKeys.length

    currenttiming = setInterval(replay_count_down, 100)

}

function replay_count_down() {

    if (current_i < 0) {
        clearTimeout(currenttiming)
        document.addEventListener('keydown', logKey);
        recordedKeys = []
    }

    if (recordedKeys[current_i] === undefined) { }
    else if (recordedKeys[current_i].key == "a") {
        logKey({ key: 'd' })
    }
    else if (recordedKeys[current_i].key == "d") {
        logKey({ key: 'a' })
    }
    else {
        logKey(recordedKeys[current_i])
    }


    current_i--

}