<template>
  <div class="example-container">
    <h1>路由示例</h1>
    <%_ if (appType === "main") { _%>
    <router-link to="/child">跳转到子应用</router-link>
    <%_ } _%>
  </div>
</template>
