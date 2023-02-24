import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function PostCard({title, body, users, id}) {

  const [thisUser, setThisUser] = React.useState({})
  React.useEffect(() => {
    async function getUser(){
      try {
        let thsUser = await users.filter(item => {
          return item.id === id
        })
        setThisUser(thsUser)
      } catch (error) {
        console.log(error)
      }
    }
    getUser()
  },[users])

  return (
    <div className=" ">
      <Card sx={{ minWidth: 275,  }} className='shadow-lg mb-5 mx-auto border md:w-96'  >
      <CardContent>
        {/* <Typography variant="h5" component="div">
          {title}
        </Typography> */}
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {title}
        </Typography>
        <Typography  sx={{ mb: 1.5 }}  variant="body1">
          {body}
        </Typography>
        <Typography variant="body2">
          Posted by: {thisUser[0]?.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Comments</Button>
      </CardActions>
    </Card>
    </div>
  );
}