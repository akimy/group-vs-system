import { clone } from 'ramda';
import { v4 as uuidv4 } from 'uuid';

import { ADD_PLAYER, REMOVE_PLAYER, SHUFFLE, TOGGLE_PLAYER_STATUS, TOGGLE_PLAYER_1ST_LIVE, TOGGLE_PLAYER_2ND_LIVE } from "../actions"
import { selectPlayerById } from '../selectors';

function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        } else {
            return state
        }
    }
}

const getRandomArrEl = (arr) => {
    const index = Math.floor(Math.random() * arr.length);

    return arr[index];
}

const generateLog = (state, message) => {
    const logs = state.logs;

    return [
        {id: uuidv4(), message, time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})},
        ...logs,
    ];
}

export default createReducer([], {
    [ADD_PLAYER]: (state, {id, name, teamN}) => {
        
       return {
           ...state,
           players: [
               ...state.players,
               {id, name, teamN, isActive: true, firstLive: true, secondLive: true, inBattle: false},
           ],
           logs: generateLog(state, `${name} added to team #${teamN}`),
       };
    },

    [REMOVE_PLAYER]: (state, {id}) => {
        const player = selectPlayerById(state, id);

        return {
            ...state,
            players: state.players.filter(player => player.id !== id),
            logs: generateLog(state, `${player.name} removed`),
        }
    },

    [TOGGLE_PLAYER_STATUS]: (state, {id}) => {
        const player = selectPlayerById(state, id);

        const index = state.players.findIndex(player => player.id === id);
        const players = clone(state.players);

        players[index].isActive = !players[index].isActive;

        return {
            ...state,
            players,
            logs: generateLog(state, `${player.name} is now ${player.isActive ? 'inactive' : 'active'}`),
        }
    },

    [TOGGLE_PLAYER_1ST_LIVE]: (state, {id}) => {
        const player = selectPlayerById(state, id);

        const index = state.players.findIndex(player => player.id === id);
        const players = clone(state.players);

        players[index].firstLive = !players[index].firstLive;

        return {
            ...state,
            players,
            logs: generateLog(state, `${player.name} ${!players[index].firstLive ? 'lost one live' : 'recieved one live'}`),
        }
    },

    [TOGGLE_PLAYER_2ND_LIVE]: (state, {id}) => {
        const player = selectPlayerById(state, id);

        const index = state.players.findIndex(player => player.id === id);
        const players = clone(state.players);

        players[index].secondLive = !players[index].secondLive;

        return {
            ...state,
            players,
            logs: generateLog(state, `${player.name} ${!players[index].secondLive ? 'lost one live' : 'recieved one live'}`),
        }
    },

    [SHUFFLE]: (state, {isFinished}) => {
        const players = clone(state.players);

        const team1ActivePlayers = players.filter(player => player.teamN === 1 && player.isActive);
        const team2ActivePlayers = players.filter(player => player.teamN === 2 && player.isActive);

        if (team1ActivePlayers.length === 0 || team2ActivePlayers.length === 0) {
            return state;
        }

        const p1 = getRandomArrEl(team1ActivePlayers);
        const p2 = getRandomArrEl(team2ActivePlayers);

        players.forEach(player => {
            player.inBattle = false;
        });

        p1.inBattle = true;
        p2.inBattle = true;

        return {
            ...state,
            players,
            logs: isFinished ? generateLog(state, `Match started ${p1.name} vs ${p2.name}`) : state.logs,
        }
    }
})