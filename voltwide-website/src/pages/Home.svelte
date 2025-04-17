<script>
  // Social media links
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/voltwide/' },
    { name: 'YouTube', url: 'https://youtube.com/@voltwide' },
    { name: 'GitHub', url: 'https://github.com/Voltwide' },
    { name: 'Instagram', url: 'https://www.instagram.com/voltwide/' },
    { name: 'Discord', url: '#' }
  ];
  
  // Email contact
  const email = 'voltwide0@gmail.com';
</script>

<section class="hero">
  <div class="container">
    <h1>Voltwide</h1>
    <p class="tagline">Empowering worldwide.</p>
  </div>
</section>

<section class="about">
  <div class="container">
    <h2>About Us</h2>
    <p>
      Voltwide is a 501(c)(3) non-profit dedicated to empowering youth in the applied sciences. We aim to create innovative educational resources, create a diverse community, and host fun and engaging events. 
    </p>
  </div>
</section>

<section class="tools">
  <div class="container">
    <h2>Our Resources</h2>
    
    <div class="tool-card">
      <div class="tool-content">
        <h3>Atom Builder</h3>
        <p>
          An interactive simulation that allows users to build atoms by
          adding protons, neutrons, and electrons. Discover the elements as you create
          their atomic structures.
        </p>
        <a href="./atom-builder/index.html" class="tool-link">Launch Atom Builder</a>
      </div>
    </div>
  </div>
</section>

<section class="contact">
  <div class="container">
    <h2>Connect With Us</h2>
    
    <div class="social-links-text">
      {#each socialLinks as link}
        <a href={link.url} class="social-link-text" target="_blank" rel="noopener noreferrer">{link.name}</a>
      {/each}
    </div>
    
    <p class="email">
      <a href="mailto:{email}">{email}</a>
    </p>
  </div>
</section>

<style>
  /* Hero section */
  .hero {
    background: linear-gradient(135deg, #2c3e50, #3498db);
    color: white;
    text-align: center;
    padding: 100px 0;
  }
  
  .hero h1 {
    color: white;
  }
  
  .tagline {
    font-size: 1.5rem;
    margin-bottom: 40px;
  }
  
  /* About section */
  .about {
    background-color: white;
  }
  
  .about p {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }
  
  /* Tools section */
  .tools {
    background-color: #f5f7fa;
  }
  
  .tool-card {
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    margin-bottom: 30px;
    transition: transform 0.3s, box-shadow 0.3s;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .tool-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  }
  
  .tool-content {
    padding: 30px;
  }
  
  .tool-link {
    display: inline-block;
    color: #3498db;
    text-decoration: none;
    font-weight: 600;
    margin-top: 10px;
    transition: color 0.3s;
  }
  
  .tool-link:hover {
    color: #2980b9;
  }
  
  /* Contact section */
  .contact {
    background-color: white;
    text-align: center;
  }
  
  .social-links-text {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 30px;
  }
  
  .social-link-text {
    color: #3498db;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    padding: 8px 16px;
    border-radius: 4px;
    transition: background-color 0.2s, color 0.2s;
  }
  
  .social-link-text:hover {
    background-color: #f0f7fc;
    color: #2980b9;
  }
  
  .email {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 1.2rem;
  }
  
  .email a {
    color: #3498db;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .email a:hover {
    color: #2980b9;
  }
  
  /* Responsive design */
  @media (max-width: 768px) {
    section {
      padding: 40px 0;
    }
    
    h1 {
      font-size: 2.8rem;
    }
    
    h2 {
      font-size: 1.8rem;
    }
    
    .hero {
      padding: 60px 0;
    }
    
    .tagline {
      font-size: 1.2rem;
    }
    
    .social-links-text {
      flex-direction: column;
      gap: 15px;
    }
  }
</style> 