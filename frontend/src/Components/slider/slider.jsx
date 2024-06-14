import './slider.css';

import slider1 from "../../multimedia/slider-img-1.jpg";
import slider2 from "../../multimedia/slider-img-2.jpg";
import slider3 from "../../multimedia/slider-img-3.jpg";
import slider4 from "../../multimedia/slider-img-4.jpg";

import canon from "../../multimedia/canon-top.jpg";
import nikon from "../../multimedia/nikon-top.jpg";
import sony from "../../multimedia/sony-top.jpg";
import fujifilm from "../../multimedia/fujifilm-top.jpg";

import { Form, Link } from 'react-router-dom';

export default function Slider() {
    return (
        <div id='bodySlider'>
            <div className='page-title'>
                <h1>
                    ¡Bienvenido a Fottik!
                </h1>
                <h3>
                    - La tienda online de Cámaras Mas Grande del País -
                </h3>
            </div>

			<div className="slider">

				<ul>
					<li><img src={slider1} alt=""/></li>
					<li><img src={slider2} alt=""/></li>
					<li><img src={slider3} alt=""/></li>
					<li><img src={slider4} alt=""/></li>
				</ul>

			</div>
			<div class="botonMasComprados">
				<button><h3>Más Comprados</h3></button>
			</div>
			<div className='itemsMasComprados'>
				<div class="containerMasComprados">
					
						<div class="cuadro">
							<Link to="/" className="linkTitle">
								<div>
									<div class="masComprados">
										<h2>CANON</h2>
										<img src={canon} alt="" />
									</div>
								</div>
							</Link>
						</div>
					

						<div class="cuadro">
							<Link to="/" className="linkTitle">
								<div>
									<div class="masComprados">
										<h2>NIKON</h2>
										<img src={nikon} alt="" />
									</div>
								</div>
							</Link>
						</div>

						<div class="cuadro">
							<Link to="/" className="linkTitle">
								<div>
									<div class="masComprados">
										<h2>SONY</h2>
										<img src={sony} alt="" />
									</div>
								</div>
							</Link>
						</div>

						<div class="cuadro">
							<Link to="/" className="linkTitle">
								<div>
									<div class="masComprados">
										<h2>FUJIFILM</h2>
										<img src={fujifilm} alt="" />
									</div>
								</div>
							</Link>
						</div>

				</div>

				<div class="botonMasComprados">
					<button><h3>Ofertas</h3></button>
				</div>

				<div className='itemsOfertas'>
					<div className='itemOfertas'>
						<Link to="/" className="linkTitle">
							<figure>
								<img src={canon} alt="" />
							</figure>
							<div className='info-oferta'>
								<h2> 15% on Canon</h2>
							</div>
						</Link>
					</div>
					
					<div className='itemOfertas'>
						<Link to='/' className="linkTitle">
							<figure>
								<img src={sony} alt="" />
							</figure>
							<div className='info-oferta'>
								<h2> 5% on Sony</h2>
							</div>
						</Link>
					</div>

					<div className='itemOfertas'>
						<Link to='/' className="linkTitle">
							<figure>
								<img src={fujifilm} alt="" />
							</figure>
							<div className='info-oferta'>
								<h2>25% en Fujifilm</h2>
							</div>
						</Link>
					</div>
				</div>
			</div>
			
		</div>


    )
}