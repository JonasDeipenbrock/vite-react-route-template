import {
    AppBar,
    Box,
    Button,
    Container,
    Stack,
    Toolbar,
    Typography
} from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

/**
 * Shared layout component
 */
const Layout = () => {
    return (
        <Container maxWidth='xl'>
            <AppBar position='sticky'>
                <Toolbar
                    sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Stack direction='row'>
                        <Typography
                            variant='h6'
                            component='div'
                            sx={{ flexGrow: 1 }}>
                            Vite-React-Route-Template
                        </Typography>
                        <Stack
                            direction='row'
                            sx={{ pl: 5 }}
                            spacing={2}
                            height={'100%'}>
                            <Link
                                to={'/'}
                                style={{
                                    textDecoration: 'none',
                                    padding: 4,
                                    color: 'white',
                                    fontWeight: 'bold',
                                    flexGrow: 1,
                                    marginTop: 3
                                }}>
                                Home
                            </Link>
                            <Link
                                to={'history'}
                                style={{
                                    textDecoration: 'none',
                                    padding: 4,
                                    color: 'white',
                                    fontWeight: 'bold',
                                    flexGrow: 1,
                                    marginTop: 2
                                }}>
                                History
                            </Link>
                        </Stack>
                    </Stack>
                    <Button>
                        <Typography color='white'>Login</Typography>
                    </Button>
                </Toolbar>
            </AppBar>
            {/* Renderes the currently active route */}
            <Outlet />
        </Container>
    );
};
export default Layout;
