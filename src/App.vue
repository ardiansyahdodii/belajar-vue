<template>
  <div>
    <div>
      <RouterLink to="/">Dashboard</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterView />
    </div>
  </div>
</template>

<script>

</script>






<!-- <template>
  <div>
    <Student @response="showData" studentName="Dodi" />
    <Student @response="(select) => selectedStudent = select" studentName="Ardiansyah" />
    <div>
      Student dipilih : {{ selectedStudent }}
    </div>
  </div>
</template>

<script>
import Student from './components/Student.vue';
export default {
  components: {
    Student
  },
  data() {
    return {
      selectedStudent: '',
    }
  },
  methods: {
    showData(select) {
      this.selectedStudent = select
    }
  }
}

</script> -->

<!-- <style scoped>
</style> -->
