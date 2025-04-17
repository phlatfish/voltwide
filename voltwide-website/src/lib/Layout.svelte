<script>
</script>

<main>
  <slot></slot>
</main>

<style>
  main {
    font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
  }
  
  :global(.container) {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  :global(section) {
    padding: 60px 0;
  }
  
  :global(h1), :global(h2), :global(h3) {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 20px;
  }
  
  :global(h1) {
    font-size: 3.5rem;
    margin-bottom: 10px;
  }
  
  :global(h2) {
    font-size: 2.2rem;
    margin-bottom: 30px;
    text-align: center;
  }
  
  :global(h3) {
    font-size: 1.6rem;
    color: #3498db;
  }
  
  :global(p) {
    font-size: 1.1rem;
    margin-bottom: 20px;
  }
  
  @media (max-width: 768px) {
    :global(.container) {
      padding: 20px;
    }
  }
</style> 