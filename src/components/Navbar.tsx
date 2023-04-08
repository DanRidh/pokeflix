import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import PokeFlixLogo from '../assets/pokeflix_logo.png';

interface Props {
  // Define any props required here if we need to add props in future
}

interface Pages {
  title: string,
  route: string
}

const pages: Pages[] = [
  {
    title: 'Home',
    route: '/'
  },
  {
    title: 'Favorites',
    route: '/favorites'
  }
];

const Navbar: React.FC<Props> = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState<HTMLElement | null>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position='static' color='default'>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Link to="/">
            <Box
              component="img"
              sx={{
                display: { xs: 'none', md: 'flex' },
                height: 40,
                p: 2,
                mr: 10
              }}
              alt="pokeFlix Logo"
              src={PokeFlixLogo}
            />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu-navbar"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Link to={page.route}>
                  <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Link to="/">
            <Box
              component="img"
              sx={{
                mr: 1,
                display: { xs: 'flex', md: 'none' },
                height: 30,
                p: 2
              }}
              alt="pokeFlix Logo"
              src={PokeFlixLogo}
            />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to={page.route}>
                <Button
                  key={page.title}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block', fontSize: '1rem' }}
                >
                  {page.title}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;