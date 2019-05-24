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
					<div className='travel-item'>
						<p>Text</p>
					</div>
					<div className='travel-item'>
						<p>Text</p>
					</div>
					<div className='travel-item'>
						<p>Text</p>
					</div>
					<div className='travel-item'>
						<p>Text</p>
					</div>
					<div className='travel-item'>
						<p>Text</p>
					</div>
					<div className='travel-item'>
						<p>Text</p>
					</div>
				</div>
				<div className='Gallary'>
					<div className='photo'>
						<img />
						<div className='ticket-info' />
					</div>
					/>
				</div>
			</main>
		</div>
	);
}

export default App;
