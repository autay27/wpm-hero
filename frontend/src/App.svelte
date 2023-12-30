<script lang="ts">
  import Challenge from './lib/Challenge.svelte'
  import Journal from './lib/Journal.svelte'
  import { Router, link, Route } from "svelte-routing";

  export let url = "";
</script>

<main>
  <h1>WPM Hero</h1>

  <Router {url}>
    <nav class="topnav">
      <a href="/write" class='link' use:link>Write</a>
      <a href="/journal" class='link' use:link>Journal</a>
    </nav>
    <div>
      <Route path="/write" component={Challenge} />
      <Route path="/journal" component={Journal} />
    </div>
  </Router>

</main>


<style>

  .topnav {
    background-color: #333;
    overflow: hidden;
  }
  
  .topnav a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
  
  .topnav a:hover {
    background-color: #ddd;
    color: black;
  }
  
  
  </style>