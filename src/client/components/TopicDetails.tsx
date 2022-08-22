import React from "react";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { ListItem } from "./ListItem";

const useStyles = makeStyles<Theme>((theme: Theme) =>
  createStyles({
    stargazer: {
      color: "#FFC83D",
    },
    subtitle: {
      marginBottom: "0px",
    },
    title: {
      margin: "0px",
    },
  })
);

type Topic = {
  name: string;
  stargazerCount: number;
};

type TopicDetailsProps = {
  name: string;
  stargazerCount: number;
  relatedTopics: Array<Topic>;
  setTerm: CallableFunction;
};

const TopicDetails = ({
  name,
  stargazerCount,
  relatedTopics,
  setTerm,
}: TopicDetailsProps) => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <h1 className={classes.title}>{name}</h1>
        <span className={classes.stargazer}>
          ⭐{stargazerCount.toLocaleString()}
        </span>
      </div>
      <h3 className={classes.subtitle}>Related Topics</h3>
      {!relatedTopics.length ? (
        <div className={classes.noRelatedTopics}>No Related Topics</div>
      ) : (
        relatedTopics.map(({ name, stargazerCount }) => (
          <ListItem
            key={name}
            name={name}
            stargazerCount={stargazerCount}
            setTerm={setTerm}
          />
        ))
      )}
    </div>
  );
};

export default TopicDetails;
