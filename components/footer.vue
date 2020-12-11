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
}

.contact-footer {
    border: 1px solid #d66b00;
    border-radius: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 20px;
    margin-right: 30px;
}

.contact-footer img {
    height: 80%;
    padding-right: 20px;
}

#soMeFooter img {
    width: 70px;
    margin-left: 300px;
}
</style>
