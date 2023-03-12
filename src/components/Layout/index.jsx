import React from 'react';

import Button from '@mui/material/Button';
import CycloneIcon from '@mui/icons-material/Cyclone';
import Log from '../Log';
import Team from '../Team';

import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { shuffle } from '../../actions';

const selectVsPlayers = (state) => {
    const players = state.players;

    const p1 = players.find(player => player.teamN === 1 && player.inBattle && player.isActive);
    const p2 = players.find(player => player.teamN === 2 && player.inBattle && player.isActive);

    return {
        p1, p2,
    }
}

const getActivePlayersCount = (players, teamN) => {
    return players
        .filter(player => player.teamN === teamN && player.isActive === true && player.inBattle === false).length;
}

const selectIsLeftButtonDisabled = (state) => {
    const players = state.players;

    const activePlayersCount = getActivePlayersCount(players, 1);
    const {p2} = selectVsPlayers(state);

    return activePlayersCount === 0 || !Boolean(p2);
}

const selectIsRightButtonDisabled = (state) => {
    const players = state.players;

    const activePlayersCount = getActivePlayersCount(players, 2);
        const {p1} = selectVsPlayers(state);

    return activePlayersCount === 0  || !Boolean(p1);
}

const selectIsMainButtonDisabled = (state) => {
    const players = state.players;

    const team1ActivePlayersCount = getActivePlayersCount(players, 1);
    const team2ActivePlayersCount = getActivePlayersCount(players, 2);

    return team1ActivePlayersCount === 0 || team2ActivePlayersCount === 0;
}

const dispatchShuffle = (dispatch, teamN = null) => {
    let maxCount = 15;

    for(let i = 0; i <= maxCount; i++) {
        let isFinished = i === maxCount;

        setTimeout(() => {
            dispatch(shuffle(isFinished, teamN));
        }, 70 * i)
    }
}

const Layout = () => {
    const dispatch = useDispatch();

    const onShuffle = () => {
        dispatchShuffle(dispatch, null)
    };

    const onShuffleL = () => {
        dispatchShuffle(dispatch, 1)
    };

    const onShuffleR = () => {
        dispatchShuffle(dispatch, 2)
    };

    const {p1, p2} = useSelector(selectVsPlayers);
    const isLeftButtonDisabled = useSelector(selectIsLeftButtonDisabled);
    const isRightButtonDisabled = useSelector(selectIsRightButtonDisabled);
    const isMainButtonDisabled = useSelector(selectIsMainButtonDisabled);

    const showVsString = Boolean(p1) && Boolean(p2);

    return (
        <div className={styles.root}>
            <Log />

            <div className={styles.battlefield}>
                <div className={styles.wrapper}>
                    {showVsString && (
                        <div className={styles.vsString}>
                            {p1.name} vs {p2.name}
                        </div>
                    )}

                    <Team teamN={1} />

                    <div className={styles.separator}></div>

                    <Team teamN={2} />
                </div>

                <div>
                    <Button disabled={isLeftButtonDisabled} onClick={onShuffleL} variant="contained" color="error" endIcon={<CycloneIcon /> }>
                        L
                    </Button>

                    <Button disabled={isMainButtonDisabled} className={styles.mainButton} onClick={onShuffle} variant="contained" color="error" endIcon={<CycloneIcon /> }>
                        Start
                    </Button>

                    <Button disabled={isRightButtonDisabled} onClick={onShuffleR} variant="contained" color="error" endIcon={<CycloneIcon /> }>
                        R
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Layout;