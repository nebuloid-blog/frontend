import styles from '../Home.module.scss'
import type {FC} from 'react'

const Addresses: FC<Record<never, never>> = ( ) => (
	<address>
		<dl>
			<div className = {styles['definition-group']}>
				<dt>Location</dt>
				<dd>
					<i>Los Angeles, California</i>
				</dd>
			</div>

			<div className = {styles['definition-group']}>
				<dt>Email</dt>
				<dd>
					<a href = 'mailto:hello@nebuloid.dev'>
						hello@nebuloid.dev
					</a>
				</dd>
			</div>

			<div className = {styles['fill-group']}>
				<div className = {styles['definition-group']}>
					<dt>Social</dt>
					<dd>
						<ul>
							<li>
								<a href = 'https://www.linkedin.com/in/noltron000/'>
									Linkedin
								</a>
							</li>

							<li>
								<a href = 'https://github.com/noltron000'>
									GitHub
								</a>
							</li>
						</ul>
					</dd>
				</div>
			</div>
		</dl>
	</address>
)

export {Addresses}
