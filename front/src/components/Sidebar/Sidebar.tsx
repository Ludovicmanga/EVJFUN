"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Image from "next/image";
import logo from "../../../public/coco.png";
import styles from "./Sidebar.module.css";
import GroupsIcon from "@mui/icons-material/Groups";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import { useMediaQuery } from "@mui/material";
import { goToHomePage } from "@/src/utils/utils";

const drawerWidth = 280;

export default function PermanentDrawerLeft() {
  const bigScreen = useMediaQuery("(min-width: 40rem)");

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#DE8D63",
          },
        }}
        variant={bigScreen ? "permanent" : "temporary"}
        anchor="left"
        open={false}
      >
        <div className={styles.logoContainer} onClick={goToHomePage}>
          <Image height={150} alt="logo" src={logo} />
        </div>
        <List>
          {[
            { title: "Qui sommes-nous ?", icon: <GroupsIcon /> },
            { title: "Nos bons plans", icon: <AutoFixHighIcon /> },
            { title: "Notre mission", icon: <SportsScoreIcon /> },
            { title: "Nous contacter", icon: <MailIcon /> },
          ].map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
