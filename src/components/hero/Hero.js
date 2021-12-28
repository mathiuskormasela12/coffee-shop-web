/* eslint-disable react/prop-types */
// ========== Hero
// import all modules
import React, { Fragment } from 'react'

export function Hero (props) {
  return (
		<Fragment>
			<div style={hero}>
				{ props.children }
			</div>
		</Fragment>
  )
}

const hero = {
  backgroundColor: 'white',
  minHeight: '100vh'
}
