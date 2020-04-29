<template>
  <div class="container p-0" style="background-color: #e3f2fd;">
    <!-- <b-navbar  
      class="fixed-bottom p-0" 
      type="dark"
      variant="dark"
      style="background-color: #e3f2fd;"
    >
      <b-navbar-nav 
        style="width: 100%" 
        justified
        clacc="bnavbarnav"
      >
        <b-nav-item
          to="/"
          active-class="active p-0" 
          exact
        >
          <b-icon
            icon="house" 
            font-scale="2"
          />
          <br>
          <span class="textSpanIcon">Главная</span>
        </b-nav-item>
        <b-nav-item 
          to="/search"
          active-class="active p-0" 
          class="p-0"
        >
          <b-icon 
            icon="search"
            font-scale="2"
          />
          <br>  
          <span class="textSpanIcon">Поиск</span>
        </b-nav-item>
        <b-nav-item 
          to="/book"
          active-class="active p-0"
        >
          <b-icon 
            icon="book"
            font-scale="2"
          />
          <br>
          <span class="textSpanIcon">Мои книги</span>
        </b-nav-item>
        <b-nav-item 
          to="/person"
          active-class="active p-0"
        >
          <b-icon 
            icon="person"
            font-scale="2"
            class="b-icon"
          />
          <br>
          <span class="textSpanIcon">Профиль</span>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar > -->
    

  
  <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  
};
</script>

<style scoped>
  .textSpanIcon {
    font-size: 0.8em;
  }
  .b-icon {
    /*padding: 5px;*/
    margin-bottom: -0.4em;
  }
  .bnavbarnav {
    background-color: #e3f2fd;
  }
  .nav-link {
    padding: 0px;
  }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
}
</style>
