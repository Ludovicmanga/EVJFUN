import { Skeleton } from "@mui/material";
import styles from "./DrawerSkeleton.module.css";

export default function DrawerSkeleton() {
  return (
    <div className={styles.container}>
      <Skeleton
        variant="rectangular"
        width="100%"
        height="100%"
        sx={{
          borderRadius: "0px", // Remove border radius to match the full container
        }}
      />
    </div>
  );
}
