import React, { useContext } from 'react'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import GeneratorContext from '../GeneratorContext'

const MainInputBox = () => {
  const classes = useStyles()
  const { GeneratorDataScheme, dataObj, setDataObj } = useContext(GeneratorContext)
  const setData = (title, value) => {
    let tmpData = JSON.parse(JSON.stringify(dataObj))
    tmpData[title] = value
    setDataObj(tmpData)
  }

  return (
    <div className={classes.container}>
      {GeneratorDataScheme.map(scheme => {
          return (
            <TextField
              key={"input-"+scheme.title}
              label={scheme.title}
              variant='outlined'
              fullWidth={true}
              margin='normal'
              multiline={scheme.type === 'textarea'}
              placeholder={scheme.default}
              value={dataObj[scheme.title]}
              onChange={(e) => {setData(scheme.title, e.target.value)}}
            />
          )
      })}
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  container:{
    height: '75vh'
  }
}))

export default MainInputBox