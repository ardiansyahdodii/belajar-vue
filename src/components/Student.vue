
<template>
    <div>
        Ini adalah data dari siswa bernama : {{ studentName }}
        <button @click="showData">Show Detail</button>
    </div>
</template>

<script>
export default{
    props: {
        studentName: String,
    },
    emits: ['response'],
    methods: {
        showData(){
            this.$emit('response', this.studentName)
        }
    }
}
</script>

// props => data dari parent ke child
// emits => data dari child ke parent