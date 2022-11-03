import Link from 'next/link'
import styles from './nav-links.module.scss'


const NavLinks = ( ) => (
	<ul className={styles.links} role='list'>
		<li>
			<Link href='./'>
				<a>
					<p>
						home
					</p>
				</a>
			</Link>
		</li>

		<li>
			<Link href='./blog'>
				<a>
					<p>
						blog
					</p>
				</a>
			</Link>
		</li>

		{/*
			<li>
				<Link href='./about'>
					<a>
						<p>
							about
						</p>
					</a>
				</Link>
			</li>
		*/}
	</ul>
)

export {NavLinks}
