<template>
    <div>
        Ini Halaman Detail User : {{ this.$route.params.name }}
        <br>
        <div>
            <div>
                <RouterLink :to="`/user/${this.$route.params.name}/profile`">
                    {{ this.$route.params.name }}'s Profile
                </RouterLink>
            </div>
            <div>
                <RouterLink :to="`/user/${this.$route.params.name}/posts`">{{ this.$route.params.name }}'s Posts
                </RouterLink>
            </div>
        </div>
    </div>
</template>