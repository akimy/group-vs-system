import React from 'react';
import cn from 'classnames';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from 'react-redux';

import Checkbox from '@mui/material/Checkbox';
import { red } from '@mui/material/colors';

import styles from './styles.module.css';
import { removePlayer, togglePlayerSecondLive, togglePlayerFirstLive, togglePlayerStatus } from '../../actions';

const Player = ({id}) => {
    const dispatch = useDispatch();

    const onRemovePlayer = (id) => dispatch(removePlayer(id));
    const onTogglePlayerStatus = (id) => dispatch(togglePlayerStatus(id));
    const onTogglePlayerFirstLive = (id) => dispatch(togglePlayerFirstLive(id));
    const onTogglePlayerSecondLive = (id) => dispatch(togglePlayerSecondLive(id));

    const player = useSelector((state) => state.players.find(player => player.id === id));

    const {name, isActive, firstLive, secondLive, inBattle} = player;

    return (
        <div className={cn(styles.root, inBattle && styles.rootActive, !isActive && styles.rootDisabled)}>
            <div className={styles.name}>
                {name}

                <div className={styles.clearIcon}>
                    <ClearIcon fontSize="small" color="error" onClick={() => onRemovePlayer(id)}/>
                </div>
            </div>

            <div className={styles.controls}>
                {firstLive ? <FavoriteIcon fontSize="small" color="error" onClick={() => onTogglePlayerFirstLive(id)} /> : <FavoriteBorderIcon fontSize="small" color="error" onClick={() => onTogglePlayerFirstLive(id)} /> }
                {secondLive ? <FavoriteIcon fontSize="small" color="error" onClick={() => onTogglePlayerSecondLive(id)}/> : <FavoriteBorderIcon fontSize="small" color="error" onClick={() => onTogglePlayerSecondLive(id)} />}

                <Checkbox
                    checked={isActive}
                    onChange={() => onTogglePlayerStatus(id)}
                    size="small"
                    sx={{
                    color: red[800],
                        '&.Mui-checked': {
                            color: red[600],
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default Player;