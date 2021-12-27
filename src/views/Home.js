/* eslint-disable react/prop-types */
// ========== Home
// import all modules
import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'

// import all components
import { Loading, Container } from '../components'

class Home extends Component {
  render () {
    return (
			<Fragment>
				<Container>
					<h1>Home {this.props.token && 'TOKEN'}</h1>
					<Loading />
					{
						this.props.loading && (
							<p>Loading...</p>
						)
					}
				</Container>
			</Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading.loading,
    token: state.auth.token
  }
}

export default connect(mapStateToProps, null)(Home)
