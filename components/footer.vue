<template>
    <footer>
        <div id="footerText">
            <a class="contact-footer" href="mailto:kontakt@kelgord.dk">
                <img src="/images/Mail.svg" alt="mail"/>
                <span>kontakt@kelgord.dk</span>
            </a>
            <a class="contact-footer" href="tel:004524594429">
                <img src="/images/Phone.svg" alt="phone"/>
                <span>+45 24594429</span>
            </a>
            <span>Savonlinnavej 20, 8600 Silkeborg, DK</span>
        </div>
        <a id="soMeFooter" href="https://www.linkedin.com/in/nkjeldgaard/?locale=da_DK"target="_blank">
            <img src="/images/Linkedin.svg" alt="linkedin"/>
        </a>
    </footer>
</template>

<style>
footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    font-size: 13px;
}

#footerText {
    display: flex;
    align-items: center;
}
.contact-footer {
    border: 1px solid #d66b00;
    border-radius: 30px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px 10px;
    margin-right: 30px;
    /* Dette brgues så teksten aldrig vil dele sig i to linjer */
    white-space: nowrap;
    text-decoration: none;
    color: black;
}

.contact-footer img {
    height: 60%;
    padding-right: 10px;
}

#soMeFooter img {
    width: 50px;
    margin-left: 300px;
}

/* Styling for mobil */
@media only screen and (max-width: 1030px) {
    footer {
        /*Flex start gør at indholdet lægger sig i starten af forælderen. */
        align-items: flex-start;
    }

    #footerText {
        flex-direction: column;
    }

    #soMeFooter img {
        margin-left: 20px;
    }

    .contact-footer {
        margin-bottom: 10px;
    }
}
</style>
