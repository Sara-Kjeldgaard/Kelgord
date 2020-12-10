<template>
    <header>
        <nav>
            <a id="logoTop" href="">
                <img src="/images/Logo-Kelgord.svg" />
            </a>
            <ul class="nav-list">
                <li>
                    <a v-bind:class="{active: active === 'OmKelgord'}"  href="">Om Kelgord</a>
                </li>
                <li>
                    <a class="active" href="">Kerneværdier</a>
                </li>
                <li>
                    <a href="">Kompetencer</a>
                </li>
                <li>
                    <a href="">Konsulentydelser</a>
                </li>
                <li>
                    <a href="">Kontakt</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
module.export = {
    props: ["active"]
}
</script>

<style>
nav {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;
    box-shadow: 0px 0px 16px #0000002f;
}

.nav-list {
    list-style-type: none;
    display: flex;
    align-items: center;
    height: 100%;
}

.nav-list li {
    display: block;
}

.nav-list a {
    text-decoration: none;
    color: black;
    display: block;
    width: 180px;
    padding: 0 20x;
    text-align: center;
    transition: all .2s ease; 
}

.nav-list a:hover,  .nav-list .active {
    color: #d66b00;
    font-weight: bold;
}

#logoTop {
    height: 60%;
}

#logoTop img {
    height: 100%;
}
</style>
