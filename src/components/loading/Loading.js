// ========== Loading
// import all modules
import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLoading } from '../../redux/actions/loading'
import { setToken } from '../../redux/actions/auth'

// import styles
import styled from './style/style.module.scss'

export function Loading () {
  const loading = useSelector(state => state.loading.loading)
  const dispatch = useDispatch()

  const handleLoading = () => {
    dispatch(setLoading(!loading))
    dispatch(setToken('ini token'))
  }

  return (
		<Fragment>
			<div>
				<button type="button" className={styled.btn} onClick={handleLoading}>Start Loading</button>
			</div>
		</Fragment>
  )
}
