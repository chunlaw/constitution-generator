import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core'

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          社運會計妹
        </Typography>
        <a href="https://github.com/chunlaw/constitution-generator/">Source Code</a>
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#eee',
    color: 'black',
  },
  title: {
    flexGrow: 1
  }
}))

export default Header