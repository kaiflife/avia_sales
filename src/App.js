import React from "react";
import logo from "./logo.css";
import app from "./App.css";
import gallary from "./mobileGallary.css";
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<div className='logo' />
				<div className='header-text'>
					<p />
				</div>
				<div className='selector-city'>
					<p />
					<div className='selector'>
						<div />
						<div />
					</div>
				</div>
				<div className='input-city'>
					<p />
				</div>
				<div className='date'>
					<div className='date-to' />
					<div className='date-from' />
				</div>
				<div className='ticket-type'>
					<div className='selector-ticket' />
				</div>
				<div className='find-tickets'>
					<p>Найти билеты</p>
				</div>
			</header>{" "}
			<main className='App-main'>
				<div className='popular-flights'>
					<div className='logo-way' />
					<p>Популярные направления перелётов из города</p>
					<div className='popular-city' />
				</div>
				<div className='travel-selector'>
					<div className='travel-slot'>
						<div className='travel-item'>
							<p>Text</p>
						</div>
					</div>

					<div className='travel-slot'>
						<div className='travel-item'>
							<p>Text</p>
						</div>
					</div>

					<div className='travel-slot'>
						<div className='travel-item'>
							<p>Text</p>
						</div>
					</div>

					<div className='travel-slot'>
						<div className='travel-item'>
							<p>Text</p>
						</div>
					</div>

					<div className='travel-slot'>
						<div className='travel-item'>
							<p>Text</p>
						</div>
					</div>

					<div className='travel-slot'>
						<div className='travel-item'>
							<p>Text</p>
						</div>
					</div>
				</div>
				<div className='Gallary'>
					<div className='photo'>
						<img />
						<div className='ticket-info'>
							<div>
								<p>City</p>
								<p>Country</p>
							</div>
							<div>
								<p>Cost</p>
								<p>Date</p>
							</div>
						</div>
					</div>

					<div className='photo'>
						<img />
						<div className='ticket-info'>
							<div>
								<p>City</p>
								<p>Country</p>
							</div>
							<div>
								<p>Cost</p>
								<p>Date</p>
							</div>
						</div>
					</div>

					<div className='photo'>
						<img />
						<div className='ticket-info'>
							<div>
								<p>City</p>
								<p>Country</p>
							</div>
							<div>
								<p>Cost</p>
								<p>Date</p>
							</div>
						</div>
					</div>

					<div className='photo'>
						<img />
						<div className='ticket-info'>
							<div>
								<p>City</p>
								<p>Country</p>
							</div>
							<div>
								<p>Cost</p>
								<p>Date</p>
							</div>
						</div>
					</div>

					<div className='photo'>
						<img />
						<div className='ticket-info'>
							<div>
								<p>City</p>
								<p>Country</p>
							</div>
							<div>
								<p>Cost</p>
								<p>Date</p>
							</div>
						</div>
					</div>

					<div className='photo'>
						<img />
						<div className='ticket-info'>
							<div>
								<p>City</p>
								<p>Country</p>
							</div>
							<div>
								<p>Cost</p>
								<p>Date</p>
							</div>
						</div>
					</div>
				</div>
				<div className='popular-flights'>
					<div className='logo-way' />
					<p>Лучшие цены на авиабилеты за последний месяц</p>
				</div>
				<div className='country-tickets'>
					<div className='flights'>
						<div className='country'>
							<div className='country-icon' />
							<div className='country-from'>
								<p>Симферополь (Крым)</p>
								<p>КРЫМ</p>
							</div>
						</div>

						<div className='country-to'>
							<div className='country-name'>
								<p>Из Москвы</p>
								<p>Из Санкт-Петербурга</p>
								<p>Из Новосибирска</p>
								<p>Из Екатеринбурга</p>
								<p>Из Челябинска</p>
							</div>
							<div className='country-cost'>
								<p>от 4 813 ₽</p>
								<p>от 4 813 ₽</p>
								<p>от 15 127 ₽</p>
								<p>от 4 813 ₽</p>
								<p>от 4 813 ₽</p>
							</div>
						</div>
					</div>
					<div className='flights'>
						<div className='country'>
							<div className='country-icon' />
							<div className='country-from'>
								<p>Симферополь (Крым)</p>
								<p>КРЫМ</p>
							</div>
						</div>

						<div className='country-to'>
							<div className='country-name'>
								<p>Из Москвы</p>
								<p>Из Санкт-Петербурга</p>
								<p>Из Новосибирска</p>
								<p>Из Екатеринбурга</p>
								<p>Из Челябинска</p>
							</div>
							<div className='country-cost'>
								<p>от 4 813 ₽</p>
								<p>от 4 813 ₽</p>
								<p>от 15 127 ₽</p>
								<p>от 4 813 ₽</p>
								<p>от 4 813 ₽</p>
							</div>
						</div>
					</div>
					<div className='flights'>
						<div className='country'>
							<div className='country-icon' />
							<div className='country-from'>
								<p>Симферополь (Крым)</p>
								<p>КРЫМ</p>
							</div>
						</div>

						<div className='country-to'>
							<div className='country-name'>
								<p>Из Москвы</p>
								<p>Из Санкт-Петербурга</p>
								<p>Из Новосибирска</p>
								<p>Из Екатеринбурга</p>
								<p>Из Челябинска</p>
							</div>
							<div className='country-cost'>
								<p>от 4 813 ₽</p>
								<p>от 4 813 ₽</p>
								<p>от 15 127 ₽</p>
								<p>от 4 813 ₽</p>
								<p>от 4 813 ₽</p>
							</div>
						</div>
					</div>
				</div>
				<div className='adv-one'>
					<p>
						Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
						стран мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и
						728 авиакомпаний.
					</p>
					<p>
						Цены, найденные пользователями за последние 48 часов, не являются
						офертой.
					</p>
				</div>
				<div className='Special-offers'>
					<p>Спецпредложения на авиабилеты</p>
					<div className='offer'>
						<div className='offer-main'>
							<div className='offer-object'>
								<div className='offer-title'>
									<p>Билеты от 499 рублей</p>
								</div>
								<div className='offer-name'>
									<p>POBEDA</p>
									<div>
										<p>от 499 Р</p>
										<p>Осталось 45 дней</p>
									</div>
								</div>
								<div className='offer-info'>
									<p>
										Билеты от 499 рублей! Специальное предложение от
										авиакомпании Победа
									</p>
								</div>
								<div>
									<button>Узнать подробнее</button>
								</div>
							</div>

							<div className='offer-object'>
								<div className='offer-title'>
									<p>Билеты от 499 рублей</p>
								</div>
								<div className='offer-name'>
									<p>POBEDA</p>
									<div>
										<p>от 499 Р</p>
										<p>Осталось 45 дней</p>
									</div>
								</div>
								<div className='offer-info'>
									<p>
										Билеты от 499 рублей! Специальное предложение от
										авиакомпании Победа
									</p>
								</div>
								<div>
									<button>Узнать подробнее</button>
								</div>
							</div>

							<div className='offer-object'>
								<div className='offer-title'>
									<p>Билеты от 499 рублей</p>
									<div className='special-logo' />
								</div>
								<div className='offer-name'>
									<p>POBEDA</p>
									<div>
										<p>от 499 Р</p>
										<p>Осталось 45 дней</p>
									</div>
								</div>
								<div className='offer-info'>
									<p>
										Билеты от 499 рублей! Специальное предложение от
										авиакомпании Победа
									</p>
								</div>
								<div>
									<button>Узнать подробнее</button>
								</div>
							</div>
						</div>
						<div className='offer-footer'>
							<a href=''>
								<p>Смотреть все предложения</p>
							</a>
							<p>* средняя цена по направлению</p>
						</div>
					</div>
				</div>
				<div className='guide'>
					<div className='guide-title'>
						<div className='guide-icon' />
						<p>Как купить авиа билеты?</p>
					</div>
					<p>
						Aviasales.ru — это метапоисковик авиабилетов. Мы ищем билеты на
						самолет по сотням авиакомпаний и находим за считанные минуты самые
						дешевые авиабилеты. Чтобы купить авиабилет дешево, воспользуйтесь
						нашим поиском, который совершенно бесплатно сравнивает цены на
						авиабилеты онлайн и находит самые дешевые перелеты. Больше нет
						смысла ходить в авиакассы, обзванивать агентства — дешевый билет
						находится на расстоянии клика. На нашем сайте вы можете подобрать
						дешевые билеты на самолет в Европу, Азию и на другие континенты. Мы
						написали для вас простую инструкцию о том, как пользоваться поиском
						и экономить на перелетах от 1000 до 20 000 руб в год.
						<a href=''> Подробнее</a>
					</p>

					<div className='guide-title'>
						<p>
							<b>@ ЭЛЕКТРОННЫЙ АВИБИЛЕТ</b>
						</p>
					</div>
					<p>
						Электронный авиабилет — это, по сути, обычный билет на самолет, но
						только в менее привычном для путешественника виде. Вся информация об
						авиаперелете (данные пассажира, маршрут следования) хранится в
						электронной базе, а пассажир получает на руки маршрут-квитанцию.
						Некоторые пассажиры, купив авиабилет онлайн и получив
						маршрут-квитанцию, удивлены ее видом — это обыкновенный лист формата
						А4, на котором распечатана вся информация о предстоящем перелете.
						Однако это действительно официальный документ, подтверждающий
						договор между авиаперевозчиком и пассажиром. При регистрации на рейс
						пассажир должен предъявить маршрут-квитанцию вместе с удостоверением
						личности точно так же, как предъявляют обыкновенный бумажный билет.
						Следует отметить, что электронный билет, приобретенный онлайн, стоит
						дешевле своего бумажного аналога. <a href=''> Подробнее</a>
					</p>

					<div className='guide-title'>
						<div className='guide-icon' />
						<p>
							<b>20 СОВЕТОВ АВИАПУТЕШЕСТВЕННИКАМ</b>
						</p>
					</div>
					<p>
						Есть масса путеводителей по странам, но ни одного о том, как
						провести время в самолете. Для того, чтобы сделать ваш перелет
						максимально комфортным, мы написали 20 советов о подготовке к
						путешествию. Ведь настоящее путешествие начинается со слов «Добро
						пожаловать на борт нашего самолета»! <a href=''> Подробнее</a>
					</p>
				</div>
			</main>
			<div className='footer'>
				<div className='footer-header'>
					<p>Скачай мобильное приложение Aviasales.ru</p>
					<div className='rate' />
					<p> Более 103 000 оценок</p>
					<div className='app-info'>
						<img src='test.png' />
						<div className='app-devices'>
							<div>
								<div className='device-icon' />
								<p>Iphone and Ipad</p>
							</div>

							<div>
								<div className='device-icon' />
								<p>Iphone and Ipad</p>
							</div>

							<div>
								<div className='device-icon' />
								<p>Iphone and Ipad</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
