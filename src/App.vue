<template>
  <div>
    <Navbar />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  components: {
    Navbar
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
.content{
  margin: 10px;
  font-size: 1.5rem;
  font-weight: 700;
}
</style>






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
