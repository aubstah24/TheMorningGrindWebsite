import bobaMenu from '../images/boba-menu.png';
import coffeeMenu from '../images/coffee-menu.png';

export const MenuPage = () => {
    return (

        <div className="menu-page">

            <section className="menu-section">
                <h2>Our Boba Menu</h2>
                <img src={bobaMenu} alt="Menu for Boba Drinks"/>
            </section>


            <section className="menu-section">
                <h2>Our Kopa Menu</h2>
                <img src={coffeeMenu} alt="Menu for Boba Drinks"/>
            </section>

        </div>
    )
}