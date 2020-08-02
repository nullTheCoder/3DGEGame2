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

let currentLevel = 0

let replayingMovments = false

//---------------------------------------------------------------------------------------------------
function game_start() {
    engine_setScreen(30, 10) 
    load_add_things()

    engine_changeScene("level0")

    eventlistener = document.addEventListener('keydown', logKey);
}

//---------------------------------------------------------------------------------------------------
function logKey(e) {
    recordedKeys.push(e)

    console.log(engine_checkMoveObject("player", 0, 1))

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

    if (e.key == "r") { //----- reset
        console.log("reset")
        
        die()
        return
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

    if (special_symbol == "%" && !replayingMovments) {
        recordedKeys.pop()
        replayingMovments  = true
        replay()

        return
    }
    if (special_symbol == "@" && replayingMovments == true) {
        console.log("yep")
        additional_playAnimationScene("progressed", levelUp)

        return true

    }

    if (engine_checkMoveObject("player", 0, 1)[1].symbol === '^') {
        die()
    }


}
//---------------------------------------------------------------------------------------------------
function handle(save) {
    let ss = null
    console.log(save)
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
//---------------------------------------------------------------------------------------------------
function die() {
    engine_setObjectPosition("player", 1, 6)
    recordedKeys = []
    eventlistener = document.addEventListener('keydown', logKey);
    replayingMovments = false
}
//---------------------------------------------------------------------------------------------------
function replay() {
    replayingMovments = true
    document.removeEventListener("keydown", logKey)

    current_i = recordedKeys.length

    currenttiming = setInterval(replay_count_down, 100)

}
//---------------------------------------------------------------------------------------------------
function replay_count_down() {
    let lkt
    if (current_i < 0) {
        clearTimeout(currenttiming)
        document.addEventListener('keydown', logKey);
        recordedKeys = []
        replayingMovments = false
    }

    if (recordedKeys[current_i] === undefined) { }
    else if (recordedKeys[current_i].key == "a") {
        lkt = logKey({ key: 'd' })
    }
    else if (recordedKeys[current_i].key == "d") {
        lkt = logKey({ key: 'a' })
    }
    else {
        lkt = logKey(recordedKeys[current_i])
    }

    if (lkt === true) {
        clearTimeout(currenttiming)
        document.addEventListener('keydown', logKey);
        recordedKeys = []
        replayingMovments = false
    }

    current_i--

}

//---------------------------------------------------------------------------------------------------

function levelUp() {
    currentLevel++
    engine_changeScene("level" + currentLevel)
}