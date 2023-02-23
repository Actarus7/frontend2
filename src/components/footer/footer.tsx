import "./styles/styles.css"

export function Footer(props: any) {


    // Affichage
    return (
        <>
            <div className="container-fluid p-3 mb-2 bg-dark bg-gradient text-white">

                <div className="row justify-content-start text-center">
                    <div className="col-4">
                        <p className="footer">Happy Training</p>
                    </div>



                    <div className="col-2">
                        <div className="row justify-content-start text-center">
                            <p className="suivez_nous">Suivez-nous</p>
                        </div>
                        <div className="row justify-content text-center">
                            <div className="réseaux col-1">
                                <img src="/footer-images/facebook.png" className="réseaux" alt="icon" width="48" height="48" />
                            </div>
                            <div className="réseaux col-1">
                                <img src="/footer-images/telegram.png" className="réseaux" alt="icon" width="48" height="48" />
                            </div>
                            <div className="réseaux col-1">
                                <img src="/footer-images/instagram.png" className="réseaux" alt="icon" width="48" height="48" />
                            </div>
                            <div className="réseaux col-1">
                                <img src="/footer-images/facebook.png" className="réseaux" alt="icon" width="48" height="48" />
                            </div>
                        </div>
                        <div className="row justify-content-start text-center">
                            <p className="suivez_nous">Tel:</p>
                            <p className="numero">+33 607080910</p>
                        </div>
                    </div>



                    <div className="footer-third-column col-6">
                        <div className="footer-third-column-row row justify-content text-center">
                            <div className="footer-right col-3">
                                <p className="footer-right-titles">Entraînement</p>
                                <p>
                                    Landing Page<br />
                                    Popup Builder<br />
                                    Web-design<br />
                                    Content<br />
                                    Integrations
                                </p>
                            </div>
                            <div className="footer-right col-3">
                                <p className="footer-right-titles">Use Cases</p>
                                <p>
                                    Web-designers<br />
                                    Marketers<br />
                                    Small Business<br />
                                    Website Builder<br />
                                </p>
                            </div>
                            <div className="footer-right col-3">
                                <p className="footer-right-titles">Company</p>
                                <p>
                                    About Us<br />
                                    Careers<br />
                                    FAQs<br />
                                    Teams<br />
                                    Contact Us
                                </p>
                            </div>

                        </div>
                    </div>

                </div>


                <div className="row justify-content-start text-center">
                    <div className="col-1">
                        <p className="footer_mentions_legales">Privacy Policy</p>
                    </div>
                    <div className="col-1">
                        <p className="footer_mentions_legales">Terms Of Use</p>
                    </div>
                    <div className="col-1">
                        <p className="footer_mentions_legales">Sales and Refunds</p>
                    </div>
                    <div className="col-1">
                        <p className="footer_mentions_legales">Legal</p>
                    </div>
                    <div className="col-1">
                        <p className="footer_mentions_legales">Site Map</p>
                    </div>
                </div>
            </div>
        </>
    );

}