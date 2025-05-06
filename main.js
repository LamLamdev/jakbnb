function loadTokenomics(event) {
    event.preventDefault(); // Prevent default <a> behavior
  
    fetch('tokenomics.html')
      .then(res => res.text())
      .then(html => {
        document.getElementById('content').innerHTML = html;
        window.scrollTo({ top: document.getElementById('content').offsetTop, behavior: 'smooth' });
      })
      .catch(err => console.error('Error loading Tokenomics:', err));
  }
  