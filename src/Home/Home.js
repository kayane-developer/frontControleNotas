import React from "react";

import Footer from "../Footer/Footer";
import "../Home/Home.css";

function Home (){
    return(
        
        <div className="container-fluid backgroundHome">
            <div className="row">
                <div className="col-12 divTitles">   
                    <h4>Escola Municipal Maurício de Souza</h4>
                    <h3>Controle de Notas Estudantis 2022</h3>

                </div>
            </div>
            <div className="row">
                <div className="col-8 columnButtons">
                    <button type= "button" className="btn btn-primary">SOU ALUNO</button><br/>
                    <button type= "button" className="btn btn-primary">SOU PROFESSOR</button>
                </div>
            </div>
        <Footer/>
        </div>

    )
}

export default Home;