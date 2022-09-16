import React, { useEffect, useState } from "react";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

const Homepage = () => {
  const [photos, setPhotos] = useState([]);
  const getApi = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/albums/1/photos"
    );
    //const data = await response.json();
    //console.log(data);
    setPhotos(await response.json());
  };
  useEffect(() => {
    getApi();
  }, []);
  return (
    <div style={{ margin: "5rem", paddingBottom: "10rem" }}>
      <Card sx={{ maxWidth: 345 }}>
        {photos.map((cur) => {
          return (
            <div>
              <CardMedia
                component="img"
                height="140"
                image={cur.thumbnailUrl}
                alt="img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {cur.title}
                </Typography>
              </CardContent>
              <br />
            </div>
          );
        })}
      </Card>
    </div>
  );
};

export default Homepage;
