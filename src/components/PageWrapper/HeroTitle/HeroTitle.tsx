import styles from './hero-title.module.scss'

type Props = Record<never, never>

const HeroTitle: React.FC<Props> = ( ) => (
	<hgroup className={styles['hero-title']}>
		<h1 className='hero'>
			<svg
				viewBox='0 0 105.625 15'
				xmlns='http://www.w3.org/2000/svg'
				style={{fontSize: '1rem'}}
			>
				<text
					x='50%'
					y='63.5%'
					dominantBaseline='middle'
					textAnchor='middle'
				>
					<tspan style={{fontStyle: 'italic'}}>
						N
					</tspan>
					<tspan>
						e
					</tspan>
					<tspan style={{fontStyle: 'italic'}}>
						b
					</tspan>
					<tspan>
						ul
					</tspan>
					<tspan style={{fontStyle: 'italic'}}>
						o
					</tspan>
					<tspan>
						id
					</tspan>
				</text>
			</svg>
		</h1>

		<p className='heading'>
			Developer Portfolio
		</p>
	</hgroup>
)

export {HeroTitle}
