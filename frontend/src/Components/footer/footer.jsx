import './footer.css';


export default function Footer() {
    return (
		<div id='Footer'>
			<footer>
				<div class="footer-left">
					<h1>FOTTIK®</h1>
					{/* <p>¡Bienvenido/a a Electroverse! Somos tu destino confiable y apasionado para descubrir las últimas y más emocionantes innovaciones en el mundo de la tecnología.</p>
					<p> nos dedicamos apasionadamente a ofrecerte una amplia gama de productos electrónicos de alta calidad, Desde smartphones elegantes, laptops potentes y </p>
					<p> computadoras personales hasta dispositivos inteligentes</p> */}
				</div>
				<div class="footer-center">
					<h2>Social</h2>
					<ul>
						<li><a href=""><i class="fa-brands fa-twitter"></i> Twitter</a></li>
						<li><a href=""><i class="fa-brands fa-instagram"></i> Instagram</a></li>
						<li><a href=""><i class="fa-brands fa-facebook"></i> Facebook</a></li>
					</ul>
				</div>
				<div class="footer-right">
					<h2>Ayuda</h2>
					<ul>
						<li><a href="">Soporte</a></li>
						<li><a href="">Contáctenos</a></li>
						<li><a href="">Tel: 2613463748</a></li>
					</ul>
				</div>
				
				
			</footer>
			<div class="derechos_reser"> 
					<h4>&copy; 2020 - 2024 <b>FOTTIK</b> - All rights reserved.</h4>
					

			</div>
		</div>


    )
}