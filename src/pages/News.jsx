import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import loadingGif from '../assets/loading.gif';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getirData, clearAnItem,removeAllNews } from '../features/newsSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import RestartAltIcon from '@mui/icons-material/RestartAlt';


const News = () => {
  const dispatch=useDispatch()

  const {news,loading}=useSelector((state)=>state.newsSlice)

  useEffect(()=>{
    dispatch(getirData())
  },[dispatch])


  return (
    <>
   
      {loading ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <img src={loadingGif} alt="gif" width="90%" height="800px" />
        </Box>
      ) : (
        <><Box
          xs={{ d: "flex" }}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          
          {news.map((item, index) => (
            <Card sx={{ maxWidth: 345, m: 5, maxHeight: 600 }} key={index}>
              <CardMedia
                component="img"
                height="250"
                image={ item.urlToImage}
                alt="img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.content}
                </Typography>
              </CardContent>
              <CardActions sx={{justifyContent:'space-between'}}>
                <Button sx={{color: 'red'}} size="small" onClick={()=>dispatch(clearAnItem(item.publishedAt))} >
                  Delete this item
                </Button>
                <Button sx={{color: 'green'}} size="small" href={item.url} target="_blank">
                  Detail
                </Button>
              </CardActions>
            </Card>
          ))}
          
          
        </Box>
        {
          news.length !== 0 ? (
          <Button variant="contained" color='error' component="button" size='large' sx = {{margin: '0 auto', marginBottom: 5, display: "flex"}} onClick = {() => dispatch(removeAllNews())} startIcon = {<DeleteIcon /> }>
            Remove all news
          </Button> 
          )  
          : 
          (
          <Button variant="contained" color='success' component="button" size='large' onClick = {() => dispatch(getirData())} sx = {{margin: '0 auto', marginTop: 40, display: "flex"}} startIcon = {<RestartAltIcon />}>
            Get news again
          </Button>
          )
        }
        </>
        
        
      )}
    </>
  );
};

export default News;
