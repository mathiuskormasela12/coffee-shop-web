/* eslint-disable react/prop-types */
// ========== Hero Home Background
// import all components
import React, { Fragment } from 'react'

// import styled
import styled from './style/style.module.scss'

export function HeroHomeBackground (props) {
  return (
		<Fragment>
			<div className={styled.hero}>
				{ props.children }
			</div>
		</Fragment>
  )
}
