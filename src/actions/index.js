function makeActionCreator(type, ...argNames) {
    return function (...args) {
            const action = { type }
            argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index]
        })

        return action
    }
}
  

export const ADD_PLAYER = 'ADD_PLAYER';
export const REMOVE_PLAYER = 'REMOVE_PLAYER';
export const TOGGLE_PLAYER_STATUS = 'TOGGLE_PLAYER_STATUS';
export const TOGGLE_PLAYER_1ST_LIVE = 'TOGGLE_PLAYER_1ST_LIVE';
export const TOGGLE_PLAYER_2ND_LIVE = 'TOGGLE_PLAYER_2ND_LIVE';
export const SHUFFLE = 'SHUFFLE';
export const SHUFFLE_END = 'SHUFFLE_END';
export const WRITE_LOG = 'WRITE_LOG';

export const addPlayer = makeActionCreator(ADD_PLAYER, 'id', 'name', 'teamN');
export const removePlayer = makeActionCreator(REMOVE_PLAYER, 'id');
export const togglePlayerStatus = makeActionCreator(TOGGLE_PLAYER_STATUS, 'id');
export const togglePlayerFirstLive = makeActionCreator(TOGGLE_PLAYER_1ST_LIVE, 'id');
export const togglePlayerSecondLive = makeActionCreator(TOGGLE_PLAYER_2ND_LIVE, 'id');
export const shuffle = makeActionCreator(SHUFFLE, 'isFinished', 'teamN');
export const shuffleEnd = makeActionCreator(SHUFFLE_END);
export const writeLog = makeActionCreator(WRITE_LOG, 'message');