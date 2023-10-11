import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../features/authSlice';



export default function Navbar() {

  const email = useSelector((state)=>state.authSlice.email)
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const handleLogout=()=>{

    dispatch(deleteUser())

    navigate("/login")
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
          >
            World News 
          </Typography>

          {email === "osman" ? (
            <Button color="inherit" onClick={handleLogout}>LogOut</Button>
          ) : (
            <Button color="inherit">LogIn</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
