<template>
	<div class="booking container">
		<hierarchy :path="[$t('booking')]"/>
		<h3 class="container-title">{{ $t('booking') }}</h3>
		<h5 class="booking-title" v-if="garage?.cars.length && garage">Выберите авто из Вашего гаража:</h5>
		<div class="booking-content car_list" v-if="garage">
			<car-box :item="carItem" :class="{ 'active': selectedCar === idx }" v-for="(carItem, idx) in garage?.cars" :key="idx" @click="selectedCar = idx" />
		</div>
		<h5 class="booking-title">Добавить авто</h5>
		<div class="booking-content car_add">
			<Select :label="'Марка авто'" :items="items" :withSearch="true" class="car_add-option" v-model="newCar.mark" @select="selectMark" />
			<Select :label="'Модель авто:'" :items="items" :withSearch="true" class="car_add-option" v-model="newCar.model" @select="selectModel" />
			<Input :type="'text'" :placeholder="$t('mileage') + ':'" class="booking-content__option  car_add-option" v-model="newCar.mileage" />
			<Select :label="$t('issue_year') + ':'" :items="items" :withSearch="true" class="car_add-option" v-model="newCar.year" @select="selectYear" />
		</div>
		<h5 class="booking-title">Выберите нужную услугу:</h5>
		<div class="booking-content service">
			<box-service :item="serviceItem" :withCheckbox="true" v-for="(serviceItem, idx) in services2" :key="idx" />
		</div>
		<h5 class="booking-title">Выберите станцию обслуживания</h5>
		<div class="booking-content">
			<box-contact :branch="selectedBranch" @open="modal = 1" />
		</div>
		<div class="booking-content free_places">
			<img src="../assets/images/background.png" alt="Background" class="free_places-image" />
			<div class="free_places-container">
				<h6 class="free_places-container__text">Есть свободные места на Пушкина</h6>
				<Button :type="1" :text="'Забронировать'" class="free_places-container__button" />
			</div>
		</div>
		<h5 class="booking-title">Ваши данные:</h5>
		<div class="booking-content main_info">
			<Input :type="'text'" :placeholder="'Ваше имя'" class="booking-content__option  main_info-option" v-model="newCar.name" />
			<Input :type="'text'" :placeholder="'Ваш номер телефона'" class="booking-content__option  main_info-option" v-model="newCar.phone" />
		</div>
		<div class="schedule">
			<h5 class="booking-title">Укажите дату:</h5>
			<h5 class="booking-title">Укажите время:</h5>
			<div class="calendar_modal" v-if="!isDevice">
				<span>
					<h6 class="calendar_modal-title">{{ selectedDay }}</h6>
				</span>
				<icon-chevron-blue class="btn" @click="modal = 2" />
			</div>
			<calendar v-if="(modal && modal === 2) || isDevice" :day="selectedDay" @close="modal = 0" />
			<div class="schedule-time">
				<div class="schedule-time__boxes" v-if="isDevice">
					<div class="schedule-time__box" :class="{ 'active': selectedTime === item.id }" v-for="item in times" :key="item.id" @click="selectedTime = item.id">
						<icon-clock />
						{{ item.time.slice(0, 5) }}
					</div>
				</div>
				<div class="schedule-time__boxes" v-else>
					<div class="schedule-time__box">
						<icon-clock />
						{{ selectedTime }}
					</div>
					<icon-chevron-blue class="btn" @click="modal = 3" />
				</div>
				<div class="schedule-time__reference">
					<p class="schedule-time__reference-text">Рекомендуемое время записи</p>
					<p class="schedule-time__reference-text">Недоступно</p>
					<p class="schedule-time__reference-text">Выбранное время</p>
				</div>
			</div>
		</div>
		<Button :type="2" :text="'Записаться на СТО'" @click="submit()" />
		<modal-branch v-if="modal && modal === 1 && !isDevice" :branches="branches" :branch="selectedBranch" @close="modal = 0" @confirm="selectBranch" />
		<modal-schedule v-if="modal && modal === 3 && !isDevice" :items="times" :time="selectedTime" @close="modal = 0" @confirm="selectTime" />
	</div>
</template>

<script setup>
	import { services2, branches } from "@/assets/data";

	const isDevice = useIsDevice();
	const selectedCar = ref(-1);
	const newCar = {};
	const items = ["Alfa Romeo", "Tesla", "Fiat", "Ford"];
	const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Августь", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
	const branch = ref(0);
	const service = ref(0);
	const date = new Date();
	const today = date.getDate();
	const month = date.getMonth();
	const year = date.getFullYear();
	const { data: timesData } = await useFetch('http://86.107.45.124:8007/api/reserve/subdivisions/');
	const times = timesData.value?.results[branch.value].fasts[service.value].schedule;
	// const times = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"];
	let modal = ref(0);
	let selectedBranch = branches[0];
	let selectedDay = `${today} ${monthNames[month]} ${year}`;
	const selectedTime = ref(times[0].id);
	let item = {};

	const { data: garage } = await useFetch('http://86.107.45.124:8007/api/garage/', {
		headers: {
			Authorization: `Bearer ${ getAccessToken() }`
		},
	});

	function selectMark(mark) {
		newCar.mark = mark;
	}
	function selectModel(model) {
		newCar.model = model;
	}
	function selectYear(year) {
		newCar.year = year;
	}
	function selectBranch(branch) {
		selectedBranch = branch;
	}
	function selectDay(day) {
		selectedDay = day;
	}
	function selectTime(time) {
		selectedTime = time;
	}
	function submit() {
		item.branch = selectedBranch
		console.log(item);
	}
</script>
