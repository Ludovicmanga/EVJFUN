import { Card } from "@mui/material";
import styles from "./FormContainer.module.css";
import * as React from "react";

export default function FormContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <Card sx={{ padding: 4, width: "40rem", borderRadius: 6 }}>
        {children}
      </Card>
    </div>
  );
}
