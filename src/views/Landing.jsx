import React from 'react'

const Landing = () => {
    return (
        <>
            <main>


                <div className="container-fluid main mb-5">

                    <div id="myCarousel" className="carousel carousel-fade slide" data-ride="carousel" data-interval="3000">
                        <div className="carousel-inner">
                            <div className="item active background a"></div>
                        </div>
                    </div>

                    <div className="covertext">
                        <div className="col-lg-12" style={{margin: 0}}>
                            <h1 className="title">educARse</h1>
                            <h3 className="subtitle">Somos una plataforma destinada a los estudiantes y profesionales de la
                                educacion.</h3>
                        </div>
                        <div id="unexplorar" className="col-xs-12 explore">
                            <a href="/register"><button type="button" className="btn btn-lg explorebtn">UNETE</button></a>
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}

export default Landing