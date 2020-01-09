import React from 'react';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { SportsHockey as IconUserName, VpnKey as IconPassword } from '@material-ui/icons'
const styles = theme => ({
    margin: {
        margin: theme.spacing(2),
    },
    padding: {
        padding: theme.spacing(),
        width: '400px',
        margin: '100px auto'
    }
});

class LoginTab extends React.Component {

    onSubmit = e => {
        e.preventDefault()
        console.log('----------------------- onSubmit()');
        console.log(e?.target?.elements?.username?.value);
        console.log(e?.target?.elements?.password?.value);
    };

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.padding}>
                <div className={classes.margin}>
                    <form onSubmit={this.onSubmit}>
                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <IconUserName color="primary"/>
                            </Grid>
                            <Grid item md={true} sm={true} xs={true}>
                                <TextField id="username" label="Username" type="email" fullWidth autoFocus required />
                            </Grid>
                        </Grid>
                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <IconPassword color="primary" />
                            </Grid>
                            <Grid item md={true} sm={true} xs={true}>
                                <TextField id="password" label="Password" type="password" fullWidth required />
                            </Grid>
                        </Grid>
                        <Grid container justify="center" style={{ marginTop: '10px' }}>
                            <Button type="submit" variant="outlined" color="primary" style={{ textTransform: "none" }}>Login</Button>
                        </Grid>
                    </form>
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(LoginTab);