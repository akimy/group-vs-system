import React, {Fragment} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import Player from '../Player';
import TextField from '@mui/material/TextField';

import styles from './styles.module.css';

import { addPlayer } from '../../actions';

const Team = ({teamN}) => {
    const dispatch = useDispatch();
    const onEnterName = (name) => dispatch(addPlayer(uuidv4(), name, teamN));
    const teamPlayers = useSelector((state) => state.players.filter(player => player.teamN === teamN));

    return (
        <Fragment>
            <div className={styles.root}>
                {teamPlayers.map(({id, name}) => <Player key={id} id={id} name={name} />)}

                <div className={styles.input}>
                    <TextField id="standard-basic" label="Add player" variant="standard" onKeyDown={(event => {
                        if (event.keyCode === 13) {
                            const target = event.target;

                            onEnterName(target.value);
                            target.value = '';
                        }
                    })} />
                </div>

            </div>


        </Fragment>
    );
};

export default Team;