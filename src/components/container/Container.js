/* eslint-disable react/prop-types */
// ========== Container
// import all modules
import React, { Fragment } from 'react'

// import styled
import styled from './style/style.module.scss'

export function Container (props) {
  return (
		<Fragment>
			<div className={styled.container}>
				{ props.children }
			</div>
		</Fragment>
  )
}
