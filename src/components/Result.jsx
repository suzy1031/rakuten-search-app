import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid } from '@mui/material';

function subString(string) {
  const name = string;
  if (name.length > 45) {
    const splitName = name.substring(0, 45);
    return splitName + '...';
  } else {
    return name;
  }
}

const Result = ({ result }) => {
  return (
    <>
      <Grid container spacing={2}>
        {result?.Items?.length >= 1
          ? result.Items.map((item, index) => (
              <Grid item xs={2} key={index}>
                <Card sx={{ maxWidth: 300, height: 320 }}>
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      height='140'
                      image={item.Item.mediumImageUrls[0].imageUrl}
                      alt={item.Item.mediumImageUrls[0].imageUrl}
                    />
                    <CardContent>
                      <Typography gutterBottom variant='h6' component='div'>
                        {item.Item.itemPrice.toLocaleString()}円
                      </Typography>
                      <Typography variant='body2' color='text.secondary'>
                        {subString(item.Item.itemName)}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))
          : null}
      </Grid>
    </>
  );
};
export default Result;
