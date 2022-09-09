import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Link from "next/link";

export default function HomePost({ blog }) {
  return (
    <>
      <Grid item xs={2} sm={4} md={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={blog.img}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {blog.title.slice(0, 25)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Typography sx={{ display: "flex" }}>
                  {" "}
                  <Avatar
                    sx={{ width: 26, height: 26 }}
                    alt="Remy Sharp"
                    src={blog.author.profile}
                  />{" "}
                  &nbsp;
                  {blog.author.name}
                </Typography>
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <CalendarMonthIcon sx={{ fontSize: "14px" }} /> &nbsp;
                  {blog.date}
                </Typography>
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <AccessTimeIcon sx={{ fontSize: "14px" }} />
                  &nbsp; {blog.reading}
                </Typography>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ pb: 4 }}>
            <Link href={`/component/${blog.id}`}>
              <Button variant="outlined" size="medium" color="primary">
                Learn More
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
