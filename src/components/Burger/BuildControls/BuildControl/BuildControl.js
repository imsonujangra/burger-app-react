import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => (
    <div classes={classes.BuildControl}>
        <div classes={classes.Label}>{props.label}</div>
        <button  classes={classes.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
        <button  classes={classes.More} onClick={props.added} >More</button>
    </div>
)

export default buildControl;