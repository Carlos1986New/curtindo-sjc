// Função para exibir a aba selecionada
function showTab(tabId) {
    // Esconde todas as abas
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');
  
    // Mostra apenas a aba selecionada
    document.getElementById(tabId).style.display = 'block';
  }
  