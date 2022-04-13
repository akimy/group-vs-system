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

    const p1 = players.find(player => player.teamN === 1 && player.inBattle);
    const p2 = players.find(player => player.teamN === 2 && player.inBattle);

    return {
        p1, p2,
    }
}

const Layout = () => {
    const dispatch = useDispatch();

    const onShuffle = () => {
        let maxCount = 15;

        for(let i = 0; i <= maxCount; i++) {
            let isFinished = i === maxCount;

            setTimeout(() => {
                dispatch(shuffle(isFinished))
            }, 70 * i)
        }
    };

    const {p1, p2} = useSelector(selectVsPlayers);
    const showVsString = Boolean(p1) && Boolean(p2);
    

    return (
        <div className={styles.root}>
            <Log />

            <div className={styles.battlefield}>
                {showVsString && (
                    <div className={styles.vsString}>
                        {p1.name} vs {p2.name}
                    </div>
                )}

                <div className={styles.wrapper}>
                    <Team teamN={1} />

                    <div className={styles.separator}></div>

                    <Team teamN={2} />
                </div>

                <Button onClick={onShuffle} variant="contained" color="error" endIcon={<CycloneIcon /> }>
                    Start
                </Button>
            </div>
        </div>
    );
};

export default Layout;