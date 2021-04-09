import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  Grid,
  IconButton
} from '@material-ui/core'
import MainInputBox from './components/MainInputBox'
import ResultText from './components/ResultText'
import {
  FileCopy as FileCopyIcon
} from "@material-ui/icons"

const MainBody = () => {
  const classes = useStyles()
  const copyToClipboard = () => {
    var r = document.createRange()
    r.selectNode(document.getElementById('result'))
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(r)
    document.execCommand('copy')
    window.getSelection().removeAllRanges()
  }

  return (
    <Grid container className={classes.gridContainer}>
      <Grid item xs={12} md={6}>
        <h3>資料輸入</h3>
        <MainInputBox />
      </Grid>
      <Grid item xs={12} md={6}>
        <h3>憲章<IconButton aria-label='複製憲章' onClick={copyToClipboard}><FileCopyIcon /></IconButton></h3>
        <ResultText />
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    [theme.breakpoints.down('md')]: {
      marginBottom: '100px',
      height: '100%'
    },
    "& .MuiGrid-item": {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: "10px"
    }
  }
}))

export default MainBody