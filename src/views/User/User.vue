<template>
    <div>
        Ini adalah halaman User

        <div class="content-user">
            <div class="title-list">User list : </div>
            <RouterLink :to="`/user/${user.params}`" v-for="user in users" :key="user.params">
                <div>
                    {{ user.name }}
                </div>
            </RouterLink>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [
                {
                    params: 'dodi',
                    name: 'Dodi',
                },
                {
                    params: 'ardiansyah',
                    name: 'Ardiansyah'
                }
            ]
        }
    }
}
</script>

<style scoped>
.content-user {
    margin: 10px;
    font-size: 1rem;
}

.title-list {
    margin-bottom: 10px;
}
a{
    margin: auto;
}
</style>