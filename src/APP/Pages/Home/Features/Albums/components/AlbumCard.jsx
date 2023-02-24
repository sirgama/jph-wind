import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardMedia } from '@mui/material';


export default function AlbumCard({title,  photos, id}) {

  const [Photo, setPhoto] = React.useState({})
  React.useEffect(() => {
    async function getUser(){
      try {
        let Pht = await photos.filter(item => {
          return item.albumId === id
        })
        setPhoto(Pht)
      } catch (error) {
        console.log(error)
      }
    }
    getUser()
  },[photos])

  return (
    <div className=" ">
     <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Photo[0]?.url}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}