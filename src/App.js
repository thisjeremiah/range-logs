import React, { Component } from 'react'
import styled from 'styled-components'
import tachyons from 'styled-components-tachyons'
import RangeLogs from 'components/RangeLogs'
import { times } from 'ramda'
import moment from 'moment'

const seedLogs = times(index => ({
  rangeStart: moment().add(index * 30, 'minutes').valueOf(),
  rangeEnd: moment().add(index * 30 + 5, 'minutes').valueOf(),
  message: `${index} is my favorite number`
}))

const logs = seedLogs(500)
const filter = '5'
const range = {
  start: moment().add(2, 'days').valueOf(),
  end: moment().add(5, 'days').valueOf()
}

const Div = styled.div`
  ${tachyons};
  font-family: monospace;
`

class App extends Component {
  render() {
    return (
      <Div w_100 vh_100>
        <RangeLogs logs={logs} filter={filter} range={range} />
      </Div>
    )
  }
}

export default App
