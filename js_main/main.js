// main.js - Main script for DOCTORAZ Learning Platform (PERFORMANCE OPTIMIZED & DATA LOADING FIXED)

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM fully loaded. Initializing DOCTORAZ Platform scripts (Optimized & Fixed Version)...");

  // =========================================================================
  // SECTION 1: CORE ELEMENTS & STATE MANAGEMENT
  // =========================================================================
  const sidebar = document.getElementById("sidebar");
  const sidebarToggle = document.getElementById("sidebar-toggle");
  const navLinks = document.querySelectorAll(".nav-link");
  const pageTitle = document.getElementById("page-title");
  const themeToggle = document.getElementById("theme-toggle");
  const toast = document.getElementById('toast');
  const footer = document.querySelector('footer');

  // --- State Management ---
  // A global object to hold data from dynamically loaded scripts.
  if (typeof window.globalData === 'undefined') {
    window.globalData = {};
  }
  
  // Cache for loaded script states to avoid re-loading
  const scriptLoadState = new Map();

  // State for pagination
  const paginationState = {
    lessons: { currentPage: 0, itemsPerPage: 12 },
    exercises: { currentPage: 0, itemsPerPage: 12 },
    challenges: { currentPage: 0, itemsPerPage: 12 },
    exam: { currentPage: 0, itemsPerPage: 12 },
  };

  // Initialize Lucide Icons
  try {
    lucide.createIcons();
  } catch (e) {
    console.error("Lucide icons could not be created during initial load:", e);
  }

  // =========================================================================
  // SECTION 2: DYNAMIC SCRIPT & DATA LOADING
  // =========================================================================
  
  /**
   * Dynamically loads a JavaScript file and returns a promise.
   * Prevents reloading scripts that are already loaded.
   * @param {string} src - The path to the script.
   * @returns {Promise<void>}
   */
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      // If script is already loaded or loading, resolve immediately.
      if (scriptLoadState.has(src)) {
        if(scriptLoadState.get(src) === 'loaded') {
          resolve();
        } else {
          // If it's in the process of loading, wait for it to finish.
          document.querySelector(`script[src="${src}"]`).addEventListener('load', () => resolve());
        }
        return;
      }
      
      scriptLoadState.set(src, 'loading');
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        scriptLoadState.set(src, 'loaded');
        resolve();
      };
      script.onerror = () => {
        scriptLoadState.delete(src); // Allow retrying on error
        reject(new Error(`Script load error for ${src}`));
      };
      document.head.appendChild(script);
    });
  }

  /**
   * Loads data for a specific section (e.g., 'lessons', 'exercises').
   * It ensures the corresponding JS data file is loaded before rendering content.
   * @param {string} sectionId - The ID of the section to load data for.
   */
  async function loadDataForSection(sectionId) {
    const listElement = document.getElementById(`${sectionId}-list`);
    const paginationElement = document.getElementById(`${sectionId}-pagination`);
    if (!listElement) return;

    listElement.innerHTML = `<p class="text-text-muted p-4 col-span-full text-center">Loading...</p>`;
    if (paginationElement) paginationElement.innerHTML = '';

    try {
      // Dynamically load the JS file containing the data array (e.g., 'js/lessons.js')
      // The script will attach its data to window.globalData
      await loadScript(`js/${sectionId}.js`);
      
      const dataArray = window.globalData[sectionId];
      
      if (!dataArray) {
        throw new Error(`Data for '${sectionId}' not found after loading script. Check if the variable is correctly named in the JS file.`);
      }

      // Initial render with pagination
      renderPaginatedContent(sectionId, dataArray);

    } catch (error) {
      console.error(`Failed to load data for ${sectionId}:`, error);
      listElement.innerHTML = `<p class="text-accent-red p-4 col-span-full text-center">Sorry, content could not be loaded. Please check the file path and variable names.</p>`;
    }
  }


  // =========================================================================
  // SECTION 3: NAVIGATION
  // =========================================================================
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      sidebar.classList.toggle("-translate-x-full");
    });
  }
  document.addEventListener("click", (e) => {
    if (sidebar && !sidebar.contains(e.target) && !e.target.closest("#sidebar-toggle")) {
      sidebar.classList.add("-translate-x-full");
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      sidebar.classList.remove('-translate-x-full');
    } else {
      sidebar.classList.add('-translate-x-full');
    }
  });

  function showSection(sectionId) {
    const currentActiveSection = document.querySelector('.content-section.active-section');
    if (currentActiveSection) {
      currentActiveSection.style.opacity = '0';
      currentActiveSection.style.transform = 'translateY(20px)';
      currentActiveSection.addEventListener('transitionend', function handleTransitionEnd() {
        currentActiveSection.classList.add('hidden');
        currentActiveSection.classList.remove('active-section');
        currentActiveSection.removeEventListener('transitionend', handleTransitionEnd);
        displayNewSection(sectionId);
      }, { once: true });
    } else {
      displayNewSection(sectionId);
    }
  }

  function displayNewSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
      section.classList.add('hidden');
      section.classList.remove('active-section');
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'none';
    });

    const targetSection = document.getElementById(`${sectionId}-section`);
    if (targetSection) {
      targetSection.classList.remove('hidden');
      void targetSection.offsetWidth;
      targetSection.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
      targetSection.style.opacity = '1';
      targetSection.style.transform = 'translateY(0)';
      targetSection.classList.add('active-section');

      const activeNavLink = document.querySelector(`.nav-link[data-content="${sectionId}"]`);
      pageTitle.textContent = activeNavLink?.querySelector("span")?.textContent || (sectionId.charAt(0).toUpperCase() + sectionId.slice(1));
    } else {
      pageTitle.textContent = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
    }

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.dataset.content === sectionId);
    });

    footer.classList.toggle('hidden', sectionId !== 'welcome');

    // --- DYNAMIC LOADING LOGIC TRIGGER ---
    const contentSections = ["lessons", "exercises", "challenges", "exam"];
    if (contentSections.includes(sectionId)) {
      // Check if data is already loaded to avoid re-rendering if not necessary
      if (!window.globalData[sectionId]) {
         paginationState[sectionId].currentPage = 0;
         const listElement = document.getElementById(`${sectionId}-list`);
         if(listElement) listElement.innerHTML = ''; 
         loadDataForSection(sectionId);
      }
    }

    if (window.innerWidth < 1024) {
      sidebar.classList.add("-translate-x-full");
    }
  }
  
  navLinks.forEach(link => {
    link.addEventListener("click", () => showSection(link.dataset.content));
  });

  showSection('welcome');
  
  document.getElementById("start-learning-button")?.addEventListener('click', () => showSection('lessons'));

  // =========================================================================
  // SECTION 4: DYNAMIC CONTENT POPULATION & PAGINATION
  // =========================================================================
  function renderPaginatedContent(type, dataArray) {
    const state = paginationState[type];
    const listElement = document.getElementById(`${type}-list`);
    const paginationElement = document.getElementById(`${type}-pagination`);
    
    if (state.currentPage === 0) {
      listElement.innerHTML = '';
    }

    const start = state.currentPage * state.itemsPerPage;
    const end = start + state.itemsPerPage;
    const itemsToRender = dataArray.slice(start, end);

    if (itemsToRender.length === 0 && state.currentPage === 0) {
        listElement.innerHTML = `<p class="text-text-muted p-4 col-span-full text-center">No content available.</p>`;
        return;
    }

    itemsToRender.forEach(item => {
      const card = createContentCard(item, type);
      listElement.appendChild(card);
    });
    
    lucide.createIcons();

    state.currentPage++;

    if (paginationElement) {
        paginationElement.innerHTML = '';
        if (end < dataArray.length) {
            const loadMoreBtn = document.createElement('button');
            loadMoreBtn.textContent = 'Load More';
            loadMoreBtn.className = 'bg-gradient-to-r from-accent-purple to-accent-cyan text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300';
            loadMoreBtn.onclick = () => renderPaginatedContent(type, dataArray);
            paginationElement.appendChild(loadMoreBtn);
        }
    }
  }

  function createContentCard(item, type) {
    const card = document.createElement('div');
    card.className = 'content-card bg-bg-main p-6 rounded-xl shadow-md border border-border-color transition-all duration-300 flex flex-col';
    
    let iconHtml = '', buttonText = 'Start', accentClass = '', percentageHtml = '';

    switch (type) {
        case 'lessons': 
            iconHtml = '<i data-lucide="book-open" class="w-10 h-10 text-accent-green mb-3 icon"></i>'; 
            buttonText = 'Start Lesson'; 
            accentClass = 'hover:border-accent-green'; 
            break;
        case 'exercises': 
            iconHtml = '<i data-lucide="code-2" class="w-10 h-10 text-accent-cyan mb-3 icon"></i>'; 
            buttonText = 'Start Exercise'; 
            accentClass = 'hover:border-accent-cyan'; 
            break;
        case 'challenges': 
            iconHtml = '<i data-lucide="trophy" class="w-10 h-10 text-accent-fire mb-3 icon"></i>'; 
            buttonText = 'Start Challenge'; 
            accentClass = 'hover:border-accent-fire'; 
            break;
        case 'exam':
            iconHtml = '<i data-lucide="file-text" class="w-10 h-10 text-accent-gold mb-3 icon"></i>';
            buttonText = 'Start Exam';
            accentClass = 'hover:border-accent-gold';
            const examPercentage = item.percentage !== undefined ? item.percentage : 0;
            let progressColor = examPercentage < 50 ? 'bg-accent-fire' : examPercentage < 75 ? 'bg-accent-yellow' : 'bg-accent-green';
            percentageHtml = `
                <div class="percentage-display mt-2">
                    <div class="w-full h-2.5 bg-border-color rounded-full overflow-hidden">
                        <div class="h-full rounded-full ${progressColor}" style="width: ${examPercentage}%;"></div>
                    </div>
                    <span class="text-sm font-bold text-text-primary mt-1 block text-right">${examPercentage}%</span>
                </div>`;
            break;
    }

    card.classList.add(accentClass);
    card.innerHTML = `
        <div class="flex-grow">
            ${iconHtml}
            <h3 class="text-xl font-semibold text-text-primary mb-2">${item.title}</h3>
            <p class="text-text-muted text-sm">${item.description}</p>
        </div>
        ${percentageHtml}
        <button class="w-full bg-gray-700/50 hover:bg-electric-blue text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 mt-4 card-action-button" data-type="${type}" data-id="${item.id || item.title}">${buttonText}</button>
    `;
    return card;
  }

  // =========================================================================
  // SECTION 5: MODAL LOGIC
  // =========================================================================
  function showToast(message, duration = 3000) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), duration);
  }

  function showDetails(item, type) {
    const modal = document.getElementById('details-modal');
    const modalContent = document.getElementById('modal-content');
    if (!modal || !modalContent) return;

    document.getElementById('modal-title').textContent = item.title;
    document.getElementById('modal-body').textContent = item.detailedDescription || item.description || '';

    const elements = {
        problem: document.getElementById('modal-problem-statement'),
        links: document.getElementById('modal-relevant-links'),
        func: document.getElementById('modal-function-to-implement'),
        main: document.getElementById('modal-main-function'),
        output: document.getElementById('modal-expected-output'),
        example: document.getElementById('modal-code-example'),
    };
    
    Object.values(elements).forEach(el => el.classList.add('hidden'));

    if (item.problemStatement) {
        elements.problem.querySelector('p').textContent = item.problemStatement;
        elements.problem.classList.remove('hidden');
    }
    if (item.relevantLinks && item.relevantLinks.length > 0) {
        const ul = elements.links.querySelector('ul');
        ul.innerHTML = item.relevantLinks.map(link => `<li><a href="${link}" target="_blank" class="text-accent-cyan hover:underline">${link}</a></li>`).join('');
        elements.links.classList.remove('hidden');
    }
    if (item.functionToImplement) {
        document.getElementById('modal-code-function').textContent = item.functionToImplement;
        elements.func.classList.remove('hidden');
    }
    if (item.mainFunction) {
        document.getElementById('modal-code-main').textContent = item.mainFunction;
        elements.main.classList.remove('hidden');
    }
    if (item.expectedOutput) {
        document.getElementById('modal-code-output').textContent = item.expectedOutput;
        elements.output.classList.remove('hidden');
    }
    if (item.codeExample) {
        document.getElementById('modal-code-lesson-example').textContent = item.codeExample;
        elements.example.classList.remove('hidden');
    }
    
    modal.querySelectorAll('pre code').forEach(block => hljs.highlightElement(block));
    
    modal.classList.remove('hidden');
    setTimeout(() => modalContent.classList.remove('scale-95', 'opacity-0'), 10);
  }

  function hideDetails() {
    const modal = document.getElementById('details-modal');
    const modalContent = document.getElementById('modal-content');
    if (!modal) return;
    modalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => modal.classList.add('hidden'), 300);
  }

  document.body.addEventListener('click', (e) => {
    const actionButton = e.target.closest('.card-action-button');
    if (actionButton) {
        const type = actionButton.dataset.type;
        const itemId = actionButton.dataset.id;
        const dataArray = window.globalData[type]; // Data is now guaranteed to be on window.globalData
        if (dataArray) {
            const item = dataArray.find(d => (d.id || d.title) === itemId);
            if (item) {
                showDetails(item, type);
                showToast(`Starting: ${item.title}`);
            }
        }
    }

    const closeModalBtn = e.target.closest('#modal-close-btn');
    const modalOverlay = e.target.closest('#details-modal');
    if (closeModalBtn || (modalOverlay && !e.target.closest('#modal-content'))) {
      hideDetails();
    }
  });

});
