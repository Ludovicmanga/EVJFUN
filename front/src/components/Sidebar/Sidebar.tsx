"use client";
import Drawer from "@mui/material/Drawer";
import tinycolor from "tinycolor2";
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import magicIcon from "../../../public/magic-wand.png";
import groupIcon from "../../../public/group.png";
import toolBoxIcon from "../../../public/tool-box.png";
import cocoImg from "../../../public/logo.png";
import styles from "./Sidebar.module.css";
import Image from "next/image";
import { goToHomePage, goToToolboxPage } from "@/src/utils/utils";
import { useState, useEffect } from "react";
import DrawerSkeleton from "../DrawerSkeleton/DrawerSkeleton";
import EcologicalInfo from "../EcologicalInfo/EcologicalInfo";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isBigScreen = useMediaQuery("(min-width: 40rem)");

  const menuItems = [
    {
      icon: <Image src={magicIcon} alt="Logo" height={20} />,
      text: "Générateur de destinations",
      action: goToHomePage,
    },
    {
      icon: <Image src={toolBoxIcon} alt="Logo" height={20} />,
      text: "Ma boîte à outils EVJF",
      action: goToToolboxPage,
    },
    {
      icon: <Image src={groupIcon} alt="Logo" height={20} />,
      text: "Qui sommes-nous ?",
      action: goToHomePage,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 0);
  }, []);

  return (
    <>
      {isLoading ? (
        <DrawerSkeleton />
      ) : (
        <div>
          <div className={styles.openSidebarBurgerButton}>
            <IconButton onClick={() => setIsOpen(!isOpen)}>
              <MenuIcon fontSize="large" />
            </IconButton>
          </div>
          <Drawer
            variant="temporary"
            anchor="left"
            open={isOpen}
            onClose={() => setIsOpen(false)}
            sx={{
              "& .MuiDrawer-paper": { borderWidth: 0 },
            }}
          >
            <div
              style={{
                width: 250,
                height: "100%",
                background: tinycolor("DE8D63").lighten(7).toString(),
                padding: "2rem 16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div className={styles.sidebarTopContent}>
                <List>
                  {menuItems.map((item) => (
                    <ListItem
                      key={item.text}
                      disablePadding
                      sx={{ marginBottom: "0.3rem" }}
                      onClick={item.action}
                    >
                      <ListItemButton>
                        <ListItemText primary={item.text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </div>
              <div>
                <EcologicalInfo />
              </div>
            </div>
          </Drawer>
        </div>
      )}
    </>
  );
}
