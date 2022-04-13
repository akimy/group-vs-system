export const selectPlayerById = (state, id) => {
    return state.players.find(player => player.id === id);
}