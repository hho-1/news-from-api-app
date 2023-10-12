import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../features/authSlice';
import { getirData } from '../features/newsSlice';



export default function Navbar() {

  const email = useSelector((state)=>state.authSlice.email)
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const handleLogout = () => {

    dispatch(deleteUser())

    navigate("/login")
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={()=>dispatch(getirData())}
          >
            {
              email === "apiUser" ? "World News" : "Welcome to latest World-News App"
            }
             
          </Typography>

          {email === "apiUser" ? (
            <>
              <Typography sx={{color: 'yellow', marginRight: '5vw'}}>Welcome apiUser</Typography>
              <Button color="inherit" onClick={handleLogout}>LogOut</Button>
            </>
          ) : (
            <>
              <Typography sx={{color: 'yellow', marginRight: '5vw'}}>Use 'apiUser' as email and a random password to log in</Typography>
              <Button color="inherit">LogIn</Button>
            </>
            
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
