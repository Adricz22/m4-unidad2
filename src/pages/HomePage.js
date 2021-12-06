import '../styles/components/pages/HomePage.css'
const HomePage = (props) => {
    return (
        <main className="holder">
        <div className="homeimg">
            <img src="img/home/img01.jpg" alt="Avion"/>
        </div>
        <div className="columnas">
            <div className="bienvenidos left">
                <h2>Bienvenidos</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nesciunt provident a ipsa est,
                    quae tenetur asperiores harum recusandae sit tempora perspiciatis ad animi ipsum, excepturi
                    laboriosam possimus unde modi.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nesciunt provident a ipsa est,
                    quae tenetur asperiores harum recusandae sit tempora perspiciatis ad animi ipsum, excepturi
                    laboriosam possimus unde modi.</p>
            </div>
            <div className="testimonios right">
                <h2>Testimonios</h2>
                <div className="testimonio">
                    <span className="cita">Simplemente Excelente</span>
                    <span className="autor">Juan Perez - zapatos.com</span>
                </div>
            </div>
        </div>

    </main>
    )
}

export default HomePage;