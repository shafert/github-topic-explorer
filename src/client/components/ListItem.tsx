import React from "react";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles<Theme>((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "space-between",
      cursor: "pointer",
      padding: "5px 10px",
      margin: "10px",
      borderRadius: "5px",
      border: "1px solid #000",
      boxShadow: "1px 2px #000",
      backgroundColor: "#46474f",
    },
    topic: {
      fontWeight: "bold",
    },
    stargazer: {
      color: "#FFC83D",
    },
  })
);

type ListItemProps = {
  name: string;
  stargazerCount: number;
  setTerm: CallableFunction;
};

export const ListItem = ({ name, stargazerCount, setTerm }: ListItemProps) => {
  const classes = useStyles();
  return (
    <div onClick={() => setTerm(name)} className={classes.container}>
      <div className={classes.topic}>{name}</div>
      <div className={classes.stargazer}>
        ⭐{stargazerCount.toLocaleString()}
      </div>
    </div>
  );
};
