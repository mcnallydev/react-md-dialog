import React from 'react'
import Dialog from '../dist'

const errors = [
  {
    message: 'Example error 1.'
  },
  {
    message: 'Example error 2.'
  }
]

const App = () =>
  <div>
    <Dialog show={true} progressBar={false} errors={errors}>
      <div>
        Hello world
      </div>
    </Dialog>
  </div>

export default App
