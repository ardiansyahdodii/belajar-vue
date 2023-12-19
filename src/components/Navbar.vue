<template>
    <div class="navbar">
        <RouterLink to="/">Dashboard</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/user">User</RouterLink>
        <RouterLink to="/pinia">Pinia</RouterLink>
    </div>
</template>

<style>
a {
    margin-right: 10px;
}
.navbar {
    background-color: burlywood;
    padding: 10px;
}
</style>