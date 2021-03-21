import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    position: "relative"
  },
  toolbar: theme.mixins.toolbar,
  bg: {
    backgroundColor: "rgb(39, 15, 43)",
    padding: "2%",
    height: "122vh",
    [theme.breakpoints.up("xs")]: {
      height: "130vh"
    },
    [theme.breakpoints.between("sm", "md")]: {
      height: "210vh"
    }
  },
  layout: {
    marginTop: "5%",
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),

    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    boxShadow: "0px 10px 15px 18px rgba(183, 25, 211,0.1)",
    borderRadius: "20px",
    border: "4px solid purple",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginTop: 60
    },
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  },
  divider: {
    margin: "20px 0"
  },
  spinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));
