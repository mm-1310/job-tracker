import React from "react"

import { withStyles } from "@mui/styles"

const styles = theme => ({
    headerTitleDiv: {
        margin: 0,
        padding: 0,
        height: '100px',
        background: '#252525',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerTitle: {
        textTransform: 'capitalize',
        margin: 0,
        padding: 0,
        color: '#bd9860'
    }
})

const Title = (props) => (
    <div className={props.classes.headerTitleDiv}>
        <h1 className={props.classes.headerTitle}>track your jobs</h1>
    </div>
)

export default withStyles(styles)(Title)