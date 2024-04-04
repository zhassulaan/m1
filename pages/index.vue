<template>
	<div class="home container">
		<!-- Hero -->
		<div class="home-hero">
			<Banner :items="main_banners.results">
				<template v-slot="{ swipperObject }">
					<img :src="swipperObject.image" alt="Hero banner" class="home-hero__image" />
					<div class="home-hero__background"></div>
					<div class="home-hero__content">
						<h1 class="title">{{ swipperObject.title }}</h1>
						<div class="info">
							<Button :text="$t('more')" class="info-button1" v-if="isDevice" />
							<div class="info-button2" @click="router.push('/booking')">
								<h6 class="text">{{ $t('book') }}</h6>
								<icon-chevron-blue class="icon"/>
							</div>
						</div>
					</div>
				</template>
			</Banner>
		</div>

		<!-- Brands -->
		<div v-if="isDevice">
			<h2 class="home-title">{{ $t('markHeader') }}</h2>
			<div class="home-brands">
				<slider :items="[...brands, ...brands]" :hasPagination="false">
					<template v-slot="{ sliderObject }">
						<div class="home-brands__item">
							<img :src="sliderObject.image" :alt="sliderObject.name" class="icon" />
						</div>
					</template>
				</slider>
			</div>
		</div>

		<!-- Advanteges -->
		<div v-if="isDevice">
			<h2 class="home-title" id="advantages">{{ $t('advantagesHeader') }}</h2>
			<div class="home-advantages">
				<box-advantage v-for="(advantageItem, id) in advantages.results" :key="id">
					<template #icon>
						<img :src="advantageItem.image" :alt="advantageItem.title" />
					</template>
					<template #info>
						<h6 class="title">{{ advantageItem.title }}</h6>
						<p class="text">{{ advantageItem.text }}</p>
					</template>
				</box-advantage>
			</div>
		</div>

		<!-- Services - mobile -->
		<div v-if="!isDevice">
			<div class="home-header1">
				<h2 class="home-title">{{ $t('services') }}</h2>
				<h6 class="btn" @click="router.push('/services')">{{ $t('see_all') }}</h6>
			</div>
			<div class="home-services">
				<slider :items="services.results" :hasPagination="false">
					<template v-slot="{ sliderObject }">
						<box-service :item="sliderObject" />
					</template>
				</slider>
			</div>
		</div>

		<div v-if="!isDevice">
			<h2 class="home-title">{{ $t('reglamentHeader') }}</h2>
			<div class="home-reglament">
				<div class="home-reglament__content">
					<img src="@/assets/images/main_image.png" alt="Reglament background image" class="home-reglament__content-image" />
					<div class="home-reglament__content-background"></div>
					<div class="home-reglament__content-left">
						<div class="item">
							<div class="item-icon">
								<icon-mobile-reglament1 />
							</div>
							<div class="item-text">
								<p class="name">Воздушный фильтр</p>
								<h6 class="count">10 тыс. км.</h6>
							</div>
						</div>
						<div class="item">
							<div class="item-icon">
								<icon-mobile-reglament2 />
							</div>
							<div class="item-text">
								<p class="name">Охлаждающая жидкость</p>
								<h6 class="count">30 тыс. км.</h6>
							</div>
						</div>
						<div class="item">
							<div class="item-icon">
								<icon-mobile-reglament3 />
							</div>
							<div class="item-text">
								<p class="name">Маслов в коробке АКПП</p>
								<h6 class="count">40-60 тыс. км.</h6>
							</div>
						</div>
						<div class="item">
							<div class="item-icon">
								<icon-mobile-reglament4 />
							</div>
							<div class="item-text">
								<p class="name">Маслов в коробке МКПП</p>
								<h6 class="count">30-90 тыс. км.</h6>
							</div>
						</div>
						<div class="item">
							<div class="item-icon">
								<icon-mobile-reglament5 />
							</div>
							<div class="item-text">
								<p class="name">Колодки для АКПП</p>
								<h6 class="count">25-30 тыс. км.</h6>
							</div>
						</div>
						<div class="item">
							<div class="item-icon">
								<icon-mobile-reglament6 />
							</div>
							<div class="item-text">
								<p class="name">Колодки для МКПП</p>
								<h6 class="count">35-50 тыс. км.</h6>
							</div>
						</div>
					</div>
					<icon-logo-white class="home-reglament__content-logo" @click="router.push('/reglament')" />
					<div class="home-reglament__content-right">
						<div class="item">
							<div class="item-text">
								<p class="name">Топливный фильтр</p>
								<h6 class="count">10-20 тыс. км.</h6>
							</div>
							<div class="item-icon">
								<icon-mobile-reglament7 />
							</div>
						</div>
						<div class="item">
							<div class="item-text">
								<p class="name">Масло в дифференциалах</p>
								<h6 class="count">30-60 тыс. км.</h6>
							</div>
							<div class="item-icon">
								<icon-mobile-reglament8 />
							</div>
						</div>
						<div class="item">
							<div class="item-text">
								<p class="name">Ремни ГРМ</p>
								<h6 class="count">80-120 тыс. км.</h6>
							</div>
							<div class="item-icon">
								<icon-mobile-reglament9 />
							</div>
						</div>
						<div class="item">
							<div class="item-text">
								<p class="name">Масло в раздаточной коробке</p>
								<h6 class="count">30 тыс. км.</h6>
							</div>
							<div class="item-icon">
								<icon-mobile-reglament1 />
							</div>
						</div>
						<div class="item">
							<div class="item-text">
								<p class="name">Свечи зажигания</p>
								<h6 class="count">10 тыс. км.</h6>
							</div>
							<div class="item-icon">
								<icon-mobile-reglament1 />
							</div>
						</div>
					</div>
				</div>
				<Button :text="'Подробнее'" />
			</div>
		</div>

		<div v-if="!isDevice">
			<div class="home-header2">
				<h2 class="home-title">{{ $t('active_discount') }}</h2>
				<h6 class="btn " @click="router.push('/discount')">{{ $t('see_all') }}</h6>
			</div>
			<div class="home-discount">
				<slider :items="discounts.results" :hasPagination="false">
					<template v-slot="{ sliderObject }">
						<box-discount :item="sliderObject" />
					</template>
				</slider>
			</div>
		</div>

		<h2 v-if="!isDevice" class="home-title">{{ $t('bannerHeader') }}</h2>
		<div class="home-banner2">
			<Banner :items="Array.of(banner)">
				<template v-slot="{ swipperObject }">
					<img :src="swipperObject.image" alt="banner" class="home-banner2__image" />
					<div class="home-banner2__background"></div>
					<div class="home-banner2__content">
						<icon-logo-white v-if="!isDevice" class="logo" />
						<h6 v-if="isDevice" class="title">{{ swipperObject.title }}</h6>
						<h6 v-if="!isDevice" class="title">{{ swipperObject.title.split('. ')[1] }}</h6>
						<div v-if="isDevice" class="info">
							<box-banner v-for="item in swipperObject.items" :key="item.id" :type=" item.id === 3 ? 2 : 1">
								<p class="text"><b>{{ item.title }}</b> — {{ item.text }}</p>
							</box-banner>
						</div>
					</div>
				</template>
			</Banner>
		</div>

		<div v-if="!isDevice" class="home-infos">
			<slider :items="[...banner.items, ...banner.items]" :hasPagination="false">
				<template v-slot="{ sliderObject }">
					<box-info :item="sliderObject" />
				</template>
			</slider>
		</div>

		<div v-if="!isDevice">
			<h2 id="advantages" class="home-title">{{ $t('advantagesHeader') }}</h2>
			<div class="home-advantages">
				<slider :items="advantages.results" :hasPagination="false">
					<template v-slot="{ sliderObject }">
						<box-advantage>
							<template #icon>
								<img :src="sliderObject.image" :alt="sliderObject.title" />
							</template>
							<template #info>
								<h6 class="title">{{ sliderObject.title }}</h6>
								<div class="textbox">
									<p class="text">{{ sliderObject.text }}</p>
								</div>
							</template>
						</box-advantage>
					</template>
				</slider>
			</div>
		</div>

		<div v-if="!isDevice">
			<h2 class="home-title">{{ $t('markHeader') }}</h2>
			<div class="home-brands">
				<slider :items="[...brands, ...brands]" :hasPagination="false">
					<template v-slot="{ sliderObject }">
						<div class="home-brands__item btn">
							<img :src="sliderObject.image" :alt="sliderObject.name" class="icon" />
						</div>
					</template>
				</slider>
			</div>
		</div>

		<!-- Services -->
		<div v-if="isDevice">
			<h2 class="home-title">{{ $t('services') }}</h2>
			<div class="home-services">
				<box-service v-for="(serviceItem, id) in services.results" :key="id" :item="serviceItem" />
			</div>
		</div>

		<!-- Bonuses -->
		<div v-if="isDevice" id="bonuses" class="home-bonuses">
			<h2 class="home-title">{{ $t('active_discount') }}</h2>
			<div class="home-bonuses__content">
				<div v-for="(bonus, id) in bonuses.results" :key="id" class="home-bonuses__content-item">
					<img :src="bonus.image" :alt="bonus.title" class="image" />
					<div class="background"></div>
					<div class="info">
						<h1 class="info-title">{{ `${ bonus.percent }%` }}</h1>
						<h6 class="info-text">{{ bonus.text }}</h6>
					</div>
					<opener />
				</div>
			</div>
		</div>

		<!-- Works -->
		<div v-if="isDevice">
			<h2 class="home-title">{{ $t('works') }}</h2>
			<div class="home-works">
				<slider :items="works.results">
					<template v-slot="{ sliderObject }">
						<box-work :item="sliderObject" />
					</template>
				</slider>
			</div>
		</div>

		<!-- Discount -->
		<div v-if="isDevice">
			<h2 id="discount" class="home-title">{{ $t('discounts') }}</h2>
			<div class="home-discount">
				<slider :items="discounts.results">
					<template v-slot="{ sliderObject }">
						<box-discount :item="sliderObject" />
					</template>
				</slider>
			</div>
		</div>

		<!-- News -->
		<div v-if="isDevice">
			<h2 class="home-title">{{ $t('news') }}</h2>
			<div class="home-news">
				<slider :items="news.results">
					<template v-slot="{ sliderObject }">
						<div class="home-news__item">
							<div class="home-news__item-background"></div>
							<img :src="sliderObject.image" alt="" class="home-news__item-image" />
							<h6 class="text">{{ sliderObject.title }}</h6>
							<opener @click="router.push(`/news/${sliderObject.id}`)" />
						</div>
					</template>
				</slider>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { brands } from "@/assets/data";

	const router = useRouter();
	const isDevice = useIsDevice();
	const { data: main_banners } = await useFetch('http://86.107.45.124:8007/api/main_page/main_banners/');
	const { data: advantages } = await useFetch('http://86.107.45.124:8007/api/main_page/advantages/');
	const { data: banner } = await useFetch('http://86.107.45.124:8007/api/main_page/banner/');
	const { data: services } = await useFetch('http://86.107.45.124:8007/api/service/category/');
	const { data: bonuses } = await useFetch('http://86.107.45.124:8007/api/main_page/bonus/');
	const { data: works } = await useFetch('http://86.107.45.124:8007/api/main_page/our_works/');
	const { data: discounts } = await useFetch('http://86.107.45.124:8007/api/service/action/');
	const { data: news } = await useFetch('http://86.107.45.124:8007/api/main_page/news/');
</script>
