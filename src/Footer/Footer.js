import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div class="container-fluid backgroundFooter">
            <div class="row col-12">
                <div class="col-2">
                    <img src="imagens\brasaoprefeitura.png" className=" imgFooter w-15"></img>
                </div>
                <div class="col-8">
                    <div className="d-flex justify-content-center ">
                        <span className="spanTextFooter">
                            Escola Municipal Maurício de Souza<br/>
                            Email de contato: emmauriciosouza@pbh.com
                        </span>                            
                    </div>
                </div>
                
            </div>
        </div>        
    );
}

export default Footer;