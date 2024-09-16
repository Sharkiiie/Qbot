import { Component } from '../types.js';
import { guildCommand } from './commands/guild.js';
import { plshelpCommand } from './commands/plshelp/chat-input-command.js';
import { plshelpMessageCommand } from './commands/plshelp/message-command.js';
import { spoonfeedCommand } from './commands/spoonfeed/chat-input-command.js';
import { spoonfeedMessageCommand } from './commands/spoonfeed/message-command.js';

export default {
    commands: [
        guildCommand,
        plshelpCommand,
        plshelpMessageCommand,
        spoonfeedCommand,
        spoonfeedMessageCommand,
    ],
} satisfies Component;
