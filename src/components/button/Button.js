/* eslint-disable react/prop-types */
// ========== Button
// import all modules
import React, { Fragment } from 'react'

// import style
import styled from './style/style.module.scss'

export function Button (props) {
  switch (props.variant) {
    case 'primary' : {
      return (
				<Fragment>
					<button type={props.type} className={`${styled.btn} ${styled[props.size]} ${styled.primary} ${props.rounded && styled.rounded}`}>
						{ props.children }
					</button>
				</Fragment>
      )
    }

    case 'primary-outline' : {
      return (
				<Fragment>
					<button type={props.type} className={`${styled.btn} ${styled[props.size]} ${styled['primary-outline']} ${props.rounded && styled.rounded}`}>
						{ props.children }
					</button>
				</Fragment>
      )
    }

    case 'secondary' : {
      return (
				<Fragment>
					<button type={props.type} className={`${styled.btn} ${styled[props.size]} ${styled.secondary} ${props.rounded && styled.rounded}`}>
						{ props.children }
					</button>
				</Fragment>
      )
    }

    case 'secondary-outline' : {
      return (
				<Fragment>
					<button type={props.type} className={`${styled.btn} ${styled[props.size]} ${styled['secondary-outline']} ${props.rounded && styled.rounded}`}>
						{ props.children }
					</button>
				</Fragment>
      )
    }

    case 'no-outline' : {
      return (
				<Fragment>
					<button type={props.type} className={`${styled.btn} ${styled[props.size]} ${styled['no-outline']}`}>
						{ props.children }
					</button>
				</Fragment>
      )
    }

    default : {
      return <Fragment />
    }
  }
}
