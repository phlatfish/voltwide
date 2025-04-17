<script>
  import Router from 'svelte-spa-router';
  import Layout from './lib/Layout.svelte';
  import Home from './pages/Home.svelte';
  
  // Route configuration
  const routes = {
    '/': Home,
    // Add more routes here
    '*': Home, 
  };
</script>

<Layout>
  <Router {routes} />
</Layout>
