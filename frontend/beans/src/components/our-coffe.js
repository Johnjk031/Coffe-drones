import React from 'react'
import './our-cofe.css'
import header from './graphics-header.svg'
import eva from './eva.jpeg'
import footer from './graphics-footer.svg'

const About = () => {
    return (
        <section>
            <section className="our-cofe">
                <img src={header} alt="header" />
                
                <section className="wrapper">
                <h1 className="coffe-header">Vårt kaffe</h1>

                <section>

                <p className="coffe-text"><strong>Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.</strong></p>



                    <p className="coffe-text">

                        Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.

                    </p>
                    <p className="coffe-text">
                        Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.
                    </p>

                </section>

            <article className="flex-our-coffe">
                <img className="eva" src={eva} alt="eva" width="74px" height="74px" />
                <h2>Eva Cortado</h2>
                <p>VD och Grundare</p>
            </article>
            </section>
              <img src={footer} alt="footer" />
            </section>
        </section>
    )
}

export default About