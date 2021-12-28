// ========== Navbar
// import all modules
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

// import all components
import { Container, Button } from '../'

// import asset files
import CoffeeLogo from '../../assets/img/coffee-icon.png'

// import style
import styled from './style/style.module.scss'

export function Navbar () {
  return (
		<Fragment>
			<nav className={styled.navbar}>
				<Container className={styled.container}>
					<div className={styled['navbar-brand']}>
						<figure className={styled.figure}>
							<img className={styled.brand} src={CoffeeLogo} alt="Coffee Logo" />
							<figcaption className={styled['brand-text']}>
								Coffee Shop
							</figcaption>
						</figure>
					</div>
					<ul className={styled['nav-item']}>
						<li className={styled.items}>
							<Link to="/" className={`${styled.link} ${styled['link-active']}`}>
								Home
							</Link>
						</li>
						<li className={styled.items}>
							<Link to="/product" className={`${styled.link}`}>
								Product
							</Link>
						</li>
						<li className={styled.items}>
							<Link to="/cart" className={`${styled.link}`}>
								Your Chart
							</Link>
						</li>
						<li className={styled.items}>
							<Link to="/history" className={`${styled.link}`}>
								History
							</Link>
						</li>
					</ul>
					<div className={styled['nav-side']}>
						<div className={styled['nav-side-container']}>
							<div className={styled['btn-col']}>
								<Button type="button" variant="no-outline" size="md" rounded>
									Login
								</Button>
							</div>
							<div className={styled['btn-col']}>
								<Button type="button" variant="primary" size="md" rounded>
									Sign Up
								</Button>
							</div>
						</div>
					</div>
				</Container>
			</nav>
		</Fragment>
  )
}
