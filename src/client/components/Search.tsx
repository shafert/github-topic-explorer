import React, {
  ChangeEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
} from "react";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Button, Grid, TextField } from "@material-ui/core";

const useStyles = makeStyles<Theme>((theme: Theme) =>
  createStyles({
    button: {
      color: "#000",
      backgroundColor: "#FFC83D",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "#d79f3b",
      },
    },
    buttonWrapper: {
      marginTop: "10px",
      padding: "0px 5px",
    },
    container: {
      margin: "10px",
      marginTop: "120px",
    },
    inputOverride: {
      paddingLeft: "5px",
    },
    inputWrapper: {
      marginTop: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "end",
      alignItems: "center",
      padding: "0px 5px",
    },
    textField: {
      width: "100%",
      backgroundColor: "#FFF",
    },
    title: {
      margin: "0px",
    },
  })
);

type SearchProps = {
  searchTerm: string;
  onChange: ChangeEventHandler;
  checkEnter: KeyboardEventHandler;
  doSearch: MouseEventHandler;
};

const Search = ({
  searchTerm,
  onChange,
  checkEnter,
  doSearch,
}: SearchProps) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Search for a Topic</h2>
      <Grid container>
        <Grid item xs={12} sm={10} className={classes.inputWrapper}>
          <TextField
            value={searchTerm}
            placeholder="Search..."
            onChange={onChange}
            onKeyDown={checkEnter}
            className={classes.textField}
            InputProps={{
              className: classes.inputOverride,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={2} className={classes.buttonWrapper}>
          <Button
            className={classes.button}
            onClick={doSearch}
            data-testid="search-button"
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Search;
