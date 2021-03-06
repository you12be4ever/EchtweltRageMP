"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: Tim Koepsel
 * @Date: 2019-02-05 22:17:28
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-08-26 20:17:51
 */
const settings = require("../../config/modsettings.json");
const Worldmap_js_1 = require("../world/Worldmap.js");
const CoreLog_js_1 = require("./CoreLog.js");
const commands_js_1 = require("./commands/commands.js");
class CoreGame {
    constructor() {
    }
    InitGame() {
        // Default Settings
        commands_js_1.default.InitCommands();
        CoreLog_js_1.default.PrintConsole('Client Commands has been loaded');
        Worldmap_js_1.default.InitWorldmap();
        CoreLog_js_1.default.PrintConsole('World Map initialisation process complete');
        mp.world.time.set(settings.StartTime.hours, settings.StartTime.minutes, settings.StartTime.seconds);
        CoreLog_js_1.default.PrintConsole('World Clock set to ' + mp.world.time.hour + ':' + mp.world.time.minute);
    }
    ChangeWeather(newWeather, duration = 15000) {
        let oldweather = mp.world.weather;
        mp.world.setWeatherTransition(newWeather, duration);
        CoreLog_js_1.default.AddLog('Weather has been changed from ' + JSON.stringify(oldweather) + ' to ' + JSON.stringify(mp.world.weather) + ' with a duration of ' + duration.toString());
    }
    ChangeWorldTime(hour, minute, second) {
        let oldtime = mp.world.time;
        mp.world.time.set(hour, minute, second);
        CoreLog_js_1.default.AddLog('Time has been changed from ' + JSON.stringify(oldtime) + ' to ' + JSON.stringify(mp.world.time));
    }
    HandleColShapes(player, shape) {
    }
}
const Game = new CoreGame();
exports.default = Game;
//# sourceMappingURL=CoreGame.js.map