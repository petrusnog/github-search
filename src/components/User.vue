<template lang="html">
    <div v-show="show" class="user">
        <Cabecalho></Cabecalho>
        <main>
            <aside>
                <Userprofile></Userprofile>
                <Userdetails></Userdetails>
            </aside>
            <div class="user-repos">
                <Repo>
                    <template v-slot:title>ecorp-Python-Exploit</template>
                    <template v-slot:description>This is a simple exploit that breaks down the Capitalism system.</template>
                    <template v-slot:stars>0</template>
                </Repo>
                <Repo>
                    <template v-slot:title>JWT Breaker</template>
                    <template v-slot:description>This is a simple auth token broke algoritm, it runs in Python.</template>
                    <template v-slot:stars>0</template>
                </Repo>
            </div>
        </main>
    </div>
</template>

<script>
    import Cabecalho from './Cabecalho.vue';
    import Userprofile from './Userprofile.vue';
    import Userdetails from './Userdetails.vue';
    import Repo from './Repo.vue';

    export default {
        components: {
            Cabecalho,
            Userprofile,
            Userdetails,
            Repo
        },

        data() {
            return {
                show: false
            }
        },

        methods: {
            userFound () {
                this.show = true;
            }
        },

        created() {
            Event.listen('user-found', () => this.userFound() );
        }
    }
</script>

<style lang="css" scoped>

    .user {
        padding: 20px;
        max-width: 1400px;
        margin-left: auto;
        margin-right: auto;
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
