<template>
    <footer>
        <a class="contact-footer">
            <img src="/images/Mail.svg" />
            <span>kontakt@kelgord.dk </span>
        </a>
        <a class="contact-footer">
            <img src="/images/Phone.svg" />
            <span>+45 12343456</span>
        </a>
        <span>Savonlinnavej 20, 8600 Silkeborg, DK</span>
        <a id="soMeFooter">
            <img src="/images/Linkedin.svg" />
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
}

.contact-footer img {
    height: 60%;
    padding-right: 10px;
}

#soMeFooter img {
    width: 50px;
    margin-left: 300px;
}
</style>
