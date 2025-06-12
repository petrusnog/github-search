<template lang="html">
    <div v-show="show" class="user" :class="{ 'loading' : loading }">
        <Cabecalho></Cabecalho>
        <main>
            <aside>
                <Userprofile :avatar="user.avatar_url" :name="user.name" :username="user.login"></Userprofile>
                <Iconedinfo v-if="user.company" icon="fa-briefcase">{{ user.company }}</Iconedinfo>
                <Iconedinfo v-if="user.location" icon="fa-compass">{{ user.location }}</Iconedinfo>
                <!-- <Iconedinfo icon="fa-star">0</Iconedinfo> -->
                <Iconedinfo v-if="user.public_repos" icon="fa-archive">{{ user.public_repos }}</Iconedinfo>
                <Iconedinfo v-if="user.followers" icon="fa-user">{{ user.followers }}</Iconedinfo>
            </aside>
            <div class="user-repos">
                <Repo v-for="repo in repos" :link="repo.html_url">
                    <template v-slot:title>{{ repo.name }}</template>
                    <template v-slot:description>{{ repo.description }}</template>
                    <template v-slot:stars>{{ repo.stargazers_count }}</template>
                </Repo>
            </div>
        </main>
    </div>
</template>

<script>
    import Cabecalho from './Cabecalho.vue';
    import Userprofile from './Userprofile.vue';
    import Iconedinfo from './Iconedinfo.vue';
    import Repo from './Repo.vue';

    export default {
        components: {
            Cabecalho,
            Userprofile,
            Iconedinfo,
            Repo
        },

        data() {
            return {
                show: false,
                user: {},
                repos: {},
                loading: false
            }
        },

        methods: {
            userFound ( user ) {
                this.show = true;
                this.user = user;

                //Caso usuário exista, busque pelos seus repositórios
                axios
                .get('https://api.github.com/users/' + user.login + '/repos' )
                .then( response => {
                    this.repos = response.data;
                })
                .catch( error => {
                    console.log( error );
                })
            },
            userRepos ( repos ) {
                this.show = true;
                this.repos = repos;
            },
            loadingPage () {
                this.loading = true;
            },
            loadedPage () {
                this.loading = false;
            },
            backButtonClicked ()  {
                this.show = false;
            }
        },

        created() {
            Event.listen('user-found', ( user ) => this.userFound( user ) );
            Event.listen('back-button-clicked', () => this.backButtonClicked() );
            Event.listen('loading', () => this.loadingPage() );
            Event.listen('loaded', () => this.loadedPage() );
        }
    }
</script>

<style lang="css" scoped>

    .user {
        padding: 20px;
        max-width: 1400px;
        margin-left: auto;
        margin-right: auto;
        transition: all .5s;
        opacity: 1;
    }

    .user.loading{
        opacity: .6;
    }

    .user aside{
        margin-bottom: 30px;
    }

    @media screen and ( min-width: 768px ) {
        .user main{
            display: grid;
            grid-template-columns: 300px 1fr;
            grid-gap: 4em;
        }
        .user aside{
            margin-bottom: 0;
        }
    }
</style>
