/* eslint-disable react/prop-types */
// ========== Home
// import all modules
import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'

// import all components
import {
  Container,
  Navbar,
  Hero
} from '../components'

class Home extends Component {
  componentDidMount () {
    document.title = 'Coffee Shop | Home'
  }

  render () {
    return (
			<Fragment>
				<Hero>
					<Container fluid>
						<Navbar />
						<h1>Home</h1>
					</Container>
				</Hero>
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
