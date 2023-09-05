import { AboutUs, DividerLine, Faq, H1, H2, LightSpot, RandomText, ShortenUrlForm } from './components';

export default function HomePage() {
	return (
		<main className='max-lg:space-y-16 max-xl:space-y-32 xl:space-y-48'>
			<section id='shorten' className='flex flex-col items-center justify-center max-md:mt-24 md:mt-36'>
				<div className='max-w-xl'>
					<div className='text-center'>
						<H1>Zero Width Shortener</H1>

						<p className='text-zws-purple-100 text-lg'>
							Shorten URLs with zero width characters, instead of <RandomText length={6} initial='XyGa7z' />.
						</p>

						<div className='mt-16'>
							<ShortenUrlForm />
						</div>
					</div>
				</div>
			</section>

			<section id='faq' className='flex flex-col lg:items-center'>
				<H2>Frequently Asked Questions</H2>
				<DividerLine />
				<Faq />
			</section>

			<section id='about-us'>
				<LightSpot className='transform max-lg:w-0 max-lg:h-0 max-lg:-translate-x-[200px] xl:translate-x-[200px] 2xl:translate-x-[370px] -translate-y-[145px]' />
				<H2>About us</H2>

				<AboutUs />
			</section>
		</main>
	);
}
