<template>
    <header>
        <!-- v-bind:class er vues måde at sætte css klasser på hvis noget javascript er sandt. Her sætter vi feks klassen landing på hvis active er lig med landing -->
        <nav v-bind:class="{ landing: active === 'landing' }">
            <!-- V-on:click svarer addEventlistener("click") i Vue - vi siger til vue at når man klikker på elementet skal den køre funktionen changeMenu -->
            <button id="burgerMenu" v-on:click="changeMenu()">
                <!-- v-if er ligesom if i javascript. Det er Vues måde at vise et element hvis noget er sandt (ligesom en normal if) -->
                <img
                    v-if="active === 'landing'"
                    src="/images/burger_hvid.svg"
                />
                <img
                    v-if="active !== 'landing'"
                    src="/images/burger_blue.svg"
                />
            </button>
            <a id="logoTop" href="/">
                <img id="logo" src="/images/Logo-Kelgord.svg" />
                <img
                    v-if="active !== 'landing'"
                    id="logoMobile"
                    src="/images/Logo-Kelgord.svg"
                />
                <img
                    v-if="active === 'landing'"
                    id="logoMobile"
                    src="/images/Logo-Kelgord-blue.svg"
                />
            </a>
            <ul class="nav-list" v-bind:class="{ open: menuOpen }">
                <li>
                    <button id="menuClose" v-on:click="changeMenu()">
                        <img src="/images/menu-close.svg" />
                    </button>
                </li>
                <li>
                    <a id="logoMenu" href="/">
                        <img src="/images/Logo-Kelgord.svg" />
                    </a>
                </li>
                <li>
                    <a
                        v-bind:class="{ active: active === 'OmKelgord' }"
                        href="/OmKelgord.html"
                        >Om Kelgord</a
                    >
                </li>
                <li>
                    <a
                        v-bind:class="{ active: active === 'Kerneværdier' }"
                        href="/Kernevaerdier.html"
                        >Kerneværdier</a
                    >
                </li>
                <li>
                    <a
                        v-bind:class="{ active: active === 'Kompetencer' }"
                        href="/Kompetencer.html"
                        >Kompetencer</a
                    >
                </li>
                <li>
                    <a
                        v-bind:class="{ active: active === 'Konsulentydelser' }"
                        href="/Konsulentydelser.html"
                        >Konsulentydelser</a
                    >
                </li>
                <li>
                    <a
                        v-bind:class="{ active: active === 'Kontakt' }"
                        href="/Kontakt.html"
                        >Kontakt</a
                    >
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
/* (module.exports) dette er js som fortæller Vue at det vi sætter det lig med er js delen af vores komponent. 
    Kildehenvisning: https://vuejs.org/v2/guide/single-file-components.html*/

module.exports = {
    /*(props) Bruges til at give retten til at angive en variabel til en komponent i Vue
    (active) Er en variabel til en komponent i Vue*/
    props: ["active"],

    /* Data er variabler i vores komponent. Det her svarer til at skrive var menuOpen = false i normal javascript  */
    data: function() {
        return {
            menuOpen: false
        };
    },
    /* Methods er funktioner i Vue komponenter. */
    methods: {
        changeMenu: function() {
            this.menuOpen = !this.menuOpen;
        }
    }
};
</script>

<style>
#burgerMenu {
    display: none;
}

nav {
    height: 80px;
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
    text-align: center;
    transition: all 0.2s ease;
}

.nav-list a:hover,
.nav-list .active {
    color: #d66b00;
    font-weight: bold;
}

#logoTop {
    height: 60%;
}

#logoTop img {
    height: 100%;
}

#logoMobile,
#logoMenu,
#menuClose {
    display: none;
}

/* Styling for mobil */
@media only screen and (max-width: 768px) {
    nav {
        justify-content: center;
        box-shadow: none;
    }

    nav.landing {
        background-color: #314467;
    }

    .nav-list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: fixed;
        top: 0;
        left: -100%;
        width: 100vw;
        bottom: 0;
        background-color: white;
        z-index: 10;
        margin: 0;
        padding: 0;
        transition: all 0.2s ease;
    }

    .nav-list.open {
        left: 0;
    }

    .nav-list li {
        padding: 10px 0;
        margin: 10px 0;
    }

    .nav-list li a {
        font-size: 20px;
    }

    #burgerMenu,
    #menuClose {
        display: block;
        position: absolute;
        top: 25px;
        /* Vi fjerner den styling som browseren har på knapper */
        background-color: transparent;
        border: none;
        outline: none;
    }

    #burgerMenu {
        left: 25px;
    }

    #menuClose {
        right: 25px;
    }

    #logoMenu {
        display: block;
        width: 20%;
        position: absolute;
        top: 100px;
        left: 40%;
    }

    #logoMenu img {
        width: 100%;
        height: auto;
    }

    #logoMobile {
        display: block;
    }

    #logo {
        display: none;
    }
}
</style>
