<template>
	<div class="calendar-background" v-if="!isDevice" @click="closeModal"></div>
	<div class="calendar">
		<p class="calendar-title">{{ monthNames[month] }} {{ year }}</p>
		<icon-x class="close btn" v-if="!isDevice" @click="closeModal" />

		<div class="calendar-header">
			<p class="calendar-header__weekday" v-for="(weekDay, idx) in weekDayNames" :key="idx">{{ weekDay }}</p>
		</div>
		<div class="calendar-body">
			<div class="calendar-body__week" v-for="(week, weekIdx) in calendar" :key="weekIdx">
				<p
					class="calendar-body__week-day"
					v-for="(day, dayIdx) in week"
					:key="dayIdx"
					:class="{ 'weekNumber': (dayIdx === 0), 'weekDay': (dayIdx && dayIdx < 5 && isCurrentWeek(weekIdx, dayIdx)),'weekEnd': (dayIdx >= 5 && isCurrentWeek(weekIdx, dayIdx)), 'active': day.id === activeDay }"
					@click="(day.id >= today && day.id <= today + 6) ? activeDay = day.id : null"
				>
					{{ day.numb || day }}
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
	const isDevice = useIsDevice();
	const props = defineProps({
		day: String,
	});
	const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Августь", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
	const weekDayNames = ["", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
	const date = new Date();
	const month = date.getMonth();
	const year = date.getFullYear();
	const today = date.getDate();
	const activeDay = ref(today);
	const calendar = getCalendarMatrix();

	const emit = defineEmits(["close"]);

	function closeModal() {
		emit("confirm", `${activeDay.value} ${monthNames[month]} ${year}`);
		emit("close");
	};

	function getCalendarMatrix() {
		const calendar = [];
		const firstDayOfMonth = new Date(year, month, 1);
		const lastDayOfMonth = new Date(year, month + 1, 0);
		const daysInMonth = lastDayOfMonth.getDate();
		const startDayOfWeek = firstDayOfMonth.getDay();
		let week = [];
		// Fill in the days before the current month
		for (let i = startDayOfWeek - 1; i > 0; i--) {
			const previousMonth = new Date(year, month, 0);
			const day = previousMonth.getDate() - i + 1;
			week.push({ id: -i, numb: String(day) });
		}
		// Fill in the days of the current month
		for (let day = 1; day <= daysInMonth; day++) {
			week.push({ id: day, numb: String(day) });
			if (week.length === 7) {
				calendar.push(week);
				week = [];
			}
		}
		// Fill in the days after the current month
		let nextMonthDay = 1;
		while (week.length < 7) {
			week.push({ id: daysInMonth + nextMonthDay, numb: String(nextMonthDay)});
			nextMonthDay++;
		}
		calendar.push(week);
		getWeekNumbers(calendar);
		return calendar;
	};
	function getWeekNumbers(calendar) {
		const currentMonth = new Date(date.getFullYear(), month, 1);
		const nextMonth = new Date(date.getFullYear(), month + 1, 1);
		const startingMonth = new Date(date.getFullYear(), 0, 1);
		const totalDays1 = Math.floor((currentMonth - startingMonth) / (24 * 60 * 60 * 1000));
		const totalDays2 = Math.floor((nextMonth - startingMonth) / (24 * 60 * 60 * 1000));
		const startingNumber = Math.ceil(totalDays1 / 7);
		const endingNumber = Math.ceil(totalDays2 / 7);
		const weekNnumbers = [""];
		for (let i = 0; i <= endingNumber - startingNumber; i++) {
			calendar[i].unshift(startingNumber + i);
		}
		return weekNnumbers;
	};

	// const isCurrentDay = (weekIdx, dayIdx) => {
	// 	const currentWeek = calendar[weekIdx];
	// 	const currentDay = currentWeek[dayIdx];
	// 	return currentDay === String(today);
	// };
	const isCurrentWeek = (weekIdx, dayIdx) => {
		const currentWeek = calendar[weekIdx];
		const day = currentWeek[dayIdx];
		return parseInt(day.numb) <= today + 6 && parseInt(day.numb) >= today;
	};
	// const isPreviousMonth = (weekIdx, dayIdx, day) => {
	// 	if (weekIdx === 0 && dayIdx !== 0 && day > 7) {
	// 		return true;
	// 	}
	// 	return false;
	// };
	// const isNextMonth = (weekIdx, dayIdx, day) => {
	// 	const lastWeekIdx = calendar.length - 1;
	// 	if (weekIdx === lastWeekIdx && dayIdx !== 0 && day <= 7) {
	// 		return true;
	// 	}
	// 	return false;
	// };
</script>

<style scoped lang="scss">
	.calendar {
		width: 313px;
		height: 327px;
		background-color: #FFF;
		border-radius: 12px;
		padding: 20px 20px 30px;
		.close.btn {
			position: absolute;
			top: 10px;
			right: 10px;
		}
		&-title {
			grid-area: title;
			width: 84px;
			height: 22px;
			font-weight: 400;
			font-size: 14px;
			line-height: 17px;
			text-align: center;
			color: #FFF;
			background-color: #000000;
			border-radius: 4px;
			margin: 0 auto 9px;
			padding: 2.5px 0;
		}
		&-header {
			grid-area: header;
			display: flex;
			justify-content: space-between;
			margin-bottom: 21.4px;
			&__weekday {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 22px;
				height: 22px;
				font-size: 12px;
				line-height: 15px;
				color: #656565;
			}
		}
		&-body {
			display: flex;
			flex-direction: column;
			gap: 16.4px;
			&__week {
				display: flex;
				justify-content: space-between;
				&-day {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 22px;
					height: 22px;
					font-size: 14px;
					line-height: 17px;
					color: #CDCDCD;
					cursor: pointer;
				}
				.weekNumber {
					font-size: 10px;
					font-weight: 200;
					line-height: 12px;
					color: #525252;
					background-color: #E2E2E2;
					border-radius: 4px;
				}
				.weekDay {
					color: #656565;
				}
				.weekEnd {
					color: #6889FF;
				}
				.active {
					color: #FFF;
					background-color: #6889FF;
					border-radius: 4px;
				}
			}
		}
	}
	@media screen and (max-width: 480px) {
		.calendar {
			&-background {
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, .3);
				z-index: 4;
			}
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 5;
		}
	}
</style>
