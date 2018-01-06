<?php
include('../../components/htmlHead.php');
include('../../layout/nav.php');
?>

    <section id="header" class="js-container">
        <img src="../../assets/images/logopl.svg" alt="" class="header_logo-img">

        <a href="#concept"><img src="../../assets/images/arrow.svg" alt="" class="header_arrow-img"></a>
    </section>


    <section id="concept"  class="video-wrapper" >
            <video width="60%" preload="auto"  poster="../../assets/images/concept/Capture%20d’écran%202017-12-30%20à%2017.36.52.png">
                <source src="../../assets/images/concept/PL_clipvid-low.mp4" type="video/mp4"/>
            </video>
    </section>


    <section class="container-fluid py-5" id="participer">
        <div class="row justify-content-center">
            <div class="col-md-3 col-sm-6 col-8 justify-content-center text-center">
                <div class="container-picto  m-auto d-flex justify-content-center align-items-center">
                    <img src="../../assets/images/participate/friends.svg" alt="picto">
                </div>
                <h2 class="mt-4 pt-2 pb-1 px-4 d-inline-block" style="transform: rotate(-1deg);">Trouve des amis</h2>
                <p class="pb-5 pb-md-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequatur doloribus, ducimus ea facere, incidunt ipsam iste</p>
            </div>
            <div class="col-md-3 col-sm-6 col-8 justify-content-center text-center">
                <div class="container-picto  m-auto d-flex justify-content-center align-items-center">
                    <img src="../../assets/images/participate/download.svg" alt="picto" width="40%">
                </div>
                <h2 class="mt-4 pt-2 pb-1 px-4 d-inline-block" style="transform: rotate(1deg);">Télécharge l'appli</h2>
                <p class="pb-5 pb-md-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequatur doloribus, ducimus ea facere, incidunt ipsam iste</p>
            </div>
            <div class="col-md-3 col-sm-6 col-8 justify-content-center text-center">
                <div class="container-picto  m-auto d-flex justify-content-center align-items-center">
                    <img src="../../assets/images/participate/addList.svg" alt="picto">
                </div>
                <h2 class="mt-4 pt-2 pb-1 px-4 d-inline-block" style="transform: rotate(1.43deg);">Ajoute tes sons</h2>
                <p class="pb-5 pb-md-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequatur doloribus, ducimus ea facere, incidunt ipsam iste</p>
            </div>
            <div class="col-md-3 col-sm-6 col-8 justify-content-center text-center">
                <div class="container-picto  m-auto d-flex justify-content-center align-items-center">
                    <img src="../../assets/images/participate/enjoy.svg" alt="picto">
                </div>
                <h2 class="mt-4 pt-2 pb-1 px-4 d-inline-block" style="transform: rotate(-1deg);">Enjoy !</h2>
                <p class="pb-5 pb-md-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequatur doloribus, ducimus ea facere, incidunt ipsam iste</p>
            </div>
        </div>
    </section>



<section class="container-fluid py-5 js-container" id="newsletter">

    <div class="align-items-center">
        <div class="row justify-content-center">
            <div class="col-md-6 col-8 text-center">
                <h2 class=""> keep in touch</h2>
                <p>Restes au courant de toutes nos nouveautés ! <br> pour reçevoir la newsletter ajoutes ton mail juste là :</p>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="input-group col-md-6 col-8">
                <!-- form action="#"-->
                <input type="email" class="form-control" placeholder="Ton e-mail" aria-label="Ton e-mail" aria-describedby="basic-addon2">
                <div class="input-group-append">
                    <button class="btn btn-link" type="button">Envoyer</button>
                </div>
                <!--/form-->
            </div>
        </div>
    </div>


</section>




<?php
include('../../layout/footer.php');
include('../../components/htmlClosing.php');
?>