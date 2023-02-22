


export function Navbar(props: any) {

    // Affichage
    return (
        <>
        <div>Test Navbar</div>
        <nav className="navbar navbar-expand-lg bg-red">

            <div className="container-fluid  ">

                <img src="./logo192.png" alt="icon" width="100" height="70" className="mx-5 ms-0 logo" onClick={() => props.setPage('accueil')}/>

                <span className="navbar-brand text-white" >Happy Training</span>



                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                <div className="collapse navbar-collapse flex-row-reverse no-wrap" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active txt-yl" aria-current="page" href="#" onClick={() => props.setPage('accueil')}>Accueil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link txt-yl" href="#" onClick={() => props.setPage('a propos')}>A Propos</a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
        </>
    );
};