import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import changeState from "../store/actions";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
    const login = useSelector(state => state.login)
    const dispatch = useDispatch();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        MyApp
                    </Typography>
                    {
                        login ?
                            <Button color="inherit" onClick={() => dispatch(changeState(false))}>LogOut</Button>
                            : <Button onClick={() => dispatch(changeState(true))} color="inherit">Login</Button>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    )
}
