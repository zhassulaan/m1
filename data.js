import tesla from "./assets/images/logos/tesla.png";
import mercedes from "./assets/images/logos/mercedes.png";
import lexus from "./assets/images/logos/lexus.png";
import bentley from "./assets/images/logos/bentley.png";
import hyundai from "./assets/images/logos/hyundai.png";
import bmw from "./assets/images/logos/bmw.png";
import cadillac from "./assets/images/logos/cadillac.png";
import servicesImage1 from "./assets/images/services1.png";
import servicesImage2 from "./assets/images/services2.png";
import servicesImage3 from "./assets/images/services3.png";
import servicesImage4 from "./assets/images/services4.png";
import servicesImage5 from "./assets/images/services5.png";
import servicesImage6 from "./assets/images/services6.png";
import servicesImage7 from "./assets/images/services7.png";
import instruments from "./assets/icons/instruments.svg";
import steering from "./assets/icons/steering.svg";
import diagnostics from "./assets/icons/diagnostics.svg";
import wrench from "./assets/icons/wrench.svg";
import brake from "./assets/icons/brake.svg";
import fan from "./assets/icons/fan.svg";
import tire from "./assets/icons/tire.svg";
import accumulator from "./assets/icons/accumulator.svg";
import washing from "./assets/icons/washing.svg";

export const brands = [
	{
		name: "tesla",
		image: tesla,
	},
	{
		name: "mercedes",
		image: mercedes,
	},
	{
		name: "lexus",
		image: lexus,
	},
	{
		name: "bentley",
		image: bentley,
	},
	{
		name: "hyundai",
		image: hyundai,
	},
	{
		name: "bmw",
		image: bmw,
	},
	{
		name: "cadillac",
		image: cadillac,
	},
];
export const services = [
	{
		name: "Техническое обслуживание",
		description: [
			"Замена воздушного фильтра",
			"Замена масляного насоса",
			"Замена масляного фильтра",
			"Замена помпы",
			"Замена приводного ремня",
			"Замена прокладки поддона",
			"Замена ролика приводного ремня",
			"Замена сажевого фильтра",
		],
		icon: instruments,
	},
	{
		name: "Ремонт рулевого управления",
		description: [
			"Замена внутреннего ШРУСа",
			"Замена гидроусилителя",
			"Замена крестовины рулевого вала",
			"Замена наружного ШРУСа",
			"Замена насоса гидроусилителя",
			"Замена пыльника ШРУСа",
			"Замена пыльника наружного ШРУСа",
			"Замена пыльника рулевой рейки",
		],
		icon: steering,
	},
	{
		name: "Диагностика автомобиля",
		description: [
			"Диагностика АБС",
			"Диагностика АКПП",
			"Диагностика ГРМ",
			"Диагностика МКПП",
			"Диагностика авто перед покупкой",
			"Диагностика вариатора",
			"Диагностика выхлопной системы",
			"Диагностика генератора",
		],
		icon: diagnostics,
	},
	{
		name: "Ремонт выхлопной системы",
		description: [
			"Замена впускного коллектора",
			"Замена выпускного коллектора",
			"Замена глушителя",
			"Замена гофры",
			"Замена катализатора на пламегаситель",
			"Замена лямбда зонда",
			"Замена приемной трубы глушителя",
		],
		icon: wrench,
	},
	{
		name: "Ремонт тормозной системы",
		description: [
			"Замена вакуумного усилителя",
			"Замена главного тормозного цилиндра",
			"Замена заднего суппорта",
			"Замена колодок стояночного тормоза",
			"Замена переднего суппорта",
		],
		icon: brake,
	},
	{
		name: "Ремонт кондиционеров и отопления",
		description: [
			"Антибактериальная обработка",
			"Замена испарителя",
			"Замена компрессора",
			"Замена патрубков системы охлаждения",
			"Замена радиатора кондиционера",
			"Замена радиатора охлаждения",
			"Замена радиатора печки",
			"Замена ремня кондиционера",
		],
		icon: fan,
	},
	{
		name: "Шиномонтажные работы",
		description: [
			"Балансировка колес",
			"Балансировка колес r13 радиус",
			"Балансировка колес r15 радиус",
			"Балансировка колес r16 радиус",
			"Балансировка колес r17 радиус",
			"Балансировка колеса r14 радиус",
			"Шиномонтаж",
		],
		icon: tire,
	},
	{
		name: "Ремонт электрооборудования автомобиля",
		description: [
			"Замена блока предохранителей",
			"Замена генератора",
			"Замена датчика кислорода",
			"Замена датчика положения дроссельной заслонки",
			"Замена датчика положения коленвала",
			"Замена датчика положения распредвала",
			"Замена датчика скорости",
		],
		icon: accumulator,
	},
];
export const services2 = [
	{
		name: "Замена фильтров",
		description: [
			"Масляный",
			"Воздушный",
			"Салонный",
			"Топливный",
		],
		icon: instruments,
		image: servicesImage1,
	},
	{
		name: "Обслуживание тормозных систем",
		description: [
			"Замена тормозных дисков",
			"Замена тормозных колодок",
			"Проточка тормозных дисков",
			"Замена тормозной жидкости",
		],
		icon: brake,
		image: servicesImage2,
	},
	{
		name: "Техническое обслуживание",
		description: [
			"Регулировка Фар",
			"Замена ламп",
			"Замена щёток стеклоочистителей",
			"Промывка радиатора печки",
		],
		icon: wrench,
		image: servicesImage3,
	},
	{
		name: "Геометрия колес",
		description: [
			"Балансировка колес",
			"Балансировка колес r13 радиус",
			"Балансировка колес r15 радиус",
			"Балансировка колес r16 радиус",
			"Балансировка колес r17 радиус",
			"Шиномонтаж",
			"Шиномонтаж r15 радиус",
			"Шиномонтаж r16 радиус",
		],
		icon: tire,
		image: servicesImage4,
	},
	{
		name: "Замена технических жидкостей",
		description: [
			"Масло в двигателе",
			"Охлаждающей жидкости (Антифриз)",
			"Жидкости ГУР",
			"Жидкостей в редукторе (мостах)",
		],
		icon: diagnostics,
		image: servicesImage5,
	},
	{
		name: "Ремонт ходовой части",
		description: [
			"Замена внутреннего ШРУСа",
			"Замена гидроусилителя",
			"Замена крестовины рулевого вала",
			"Замена наружного ШРУСа",
		],
		icon: steering,
		image: servicesImage6,
	},
	{
		name: "Мойка",
		description: [
			"Автомойка",
			"Уборка салона",
			"Очистка от битума",
			"Полировка интерьера",
		],
		icon: washing,
		image: servicesImage7,
	},
];
export const user = {
	name: "Иванов Андрей Николаевич",
	city: "Астана",
	region: "Севастопольский пер. 34, Астана 020000, Казахстан",
	register_date: "05.05.2023",
};
export const branches = [
	{
		id: 1,
		title: "ул. Н. Назарбаев, 216 А",
		description: "“Пятое колесо”",
	},
	{
		id: 2,
		title: "ул. Н. Назарбаев, 254",
		description: "АЦ “Пилот”",
	},
	{
		id: 3,
		title: "ул. А. Пушкина, 132",
		description: "",
	},
	{
		id: 4,
		title: "ул. П. Чайковского, 2",
		description: "",
	},
	{
		id: 5,
		title: "ул. Болатбаева 65 Б",
		description: "",
	},
];
export const notifications = [
	{
		title: "Началась обслуживание автомобиля",
		services: ["Замена шин"],
		date: "30.05.2023",
		time: "11:12",
		rated: true,
	},
	{
		title: "Началась обслуживание автомобиля",
		services: ["Замена шин"],
		date: "30.05.2023",
		time: "12:12",
		rated: false,
	},
];
