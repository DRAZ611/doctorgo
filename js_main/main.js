lucide.createIcons();

 // --- GLOBAL DATA INITIALIZATION ---
 if (typeof window.globalData === 'undefined') {
     window.globalData = {};
 }
 window.globalData.lessons = typeof lessons !== 'undefined' ? lessons : [];
 window.globalData.exercises = typeof exercises !== 'undefined' ? exercises : [];
 window.globalData.challenges = typeof challenges !== 'undefined' ? challenges : [];
 window.globalData.exam = typeof exam !== 'undefined' ? exam : [];
 // تمت إضافة بيانات المشاريع هنا
 window.globalData.projects = typeof projects !== 'undefined' ? projects : [];


 // --- USER PROGRESS SYSTEM ---
 const XP_VALUES = {
     Easy: 10,
     Medium: 25,
     Hard: 50,
     Very_Hard: 100,
     Expert: 150,
     Elementary: 5
 };

 let userProgress = JSON.parse(localStorage.getItem('userProgress')) || {
     xp: 0,
     level: 1,
     completed: [],
     completedStats: {
         lessons: 0,
         exercises: 0,
         challenges: 0,
         exams: 0
     }
 };
 userProgress.completed = new Set(userProgress.completed);

 function saveProgress() {
     const progressToSave = {...userProgress,
         completed: [...userProgress.completed]
     };
     localStorage.setItem('userProgress', JSON.stringify(progressToSave));
 }

 function calculateLevel(xp) {
     return Math.floor(Math.sqrt(xp / 100)) + 1;
 }

 function getItemXp(item) {
     if (item.difficulty) {
         return XP_VALUES[item.difficulty.replace(' ', '_')] || 0;
     } else if (item.category) {
         return XP_VALUES[item.category] || 0;
     }
     return 0;
 }

 function completeItem(item, type) {
     if (userProgress.completed.has(item.title)) return;
     userProgress.completed.add(item.title);
     userProgress.xp += getItemXp(item);
     userProgress.level = calculateLevel(userProgress.xp);
     switch (type) {
         case 'lessons':
             userProgress.completedStats.lessons++;
             break;
         case 'exercises':
             userProgress.completedStats.exercises++;
             break;
         case 'challenges':
             userProgress.completedStats.challenges++;
             break;
         case 'exam':
             userProgress.completedStats.exams++;
             break;
     }
     saveProgress();
     showSection(lastViewedSection);
 }

 // --- THEME SWITCHER LOGIC ---
 const settingsButton = document.getElementById('settings-button');
 const themeMenu = document.getElementById('theme-menu');
 const themeButtons = document.querySelectorAll('.theme-btn');

 const applyTheme = (theme) => {
     const htmlEl = document.documentElement;
     if (theme === 'dark') {
         htmlEl.classList.add('dark');
         document.body.classList.add('dark');
         scientificBgController.start();
     } else if (theme === 'light') {
         htmlEl.classList.remove('dark');
         document.body.classList.remove('dark');
         scientificBgController.stop();
     } else {
         if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
             htmlEl.classList.add('dark');
             document.body.classList.add('dark');
             scientificBgController.start();
         } else {
             htmlEl.classList.remove('dark');
             document.body.classList.remove('dark');
             scientificBgController.stop();
         }
     }
 };

 settingsButton.addEventListener('click', (e) => {
     e.stopPropagation();
     themeMenu.classList.toggle('hidden');
     document.getElementById('profile-menu').classList.add('hidden');
 });

 themeButtons.forEach(button => {
     button.addEventListener('click', () => {
         const theme = button.dataset.theme;
         localStorage.setItem('theme', theme);
         applyTheme(theme);
         themeMenu.classList.add('hidden');
     });
 });

 // --- PROFILE MENU LOGIC ---
 const profileButton = document.getElementById('profile-button');
 const profileMenu = document.getElementById('profile-menu');

 profileButton.addEventListener('click', (e) => {
     e.stopPropagation();
     profileMenu.classList.toggle('hidden');
     document.getElementById('theme-menu').classList.add('hidden');
 });

 window.addEventListener('click', (e) => {
     if (!document.getElementById('settings-menu-container').contains(e.target)) {
         themeMenu.classList.add('hidden');
     }
     if (!document.getElementById('profile-menu-container').contains(e.target)) {
         profileMenu.classList.add('hidden');
     }
 });

 window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
     if (localStorage.getItem('theme') === 'system') {
         applyTheme('system');
     }
 });

 // --- NAVIGATION AND CONTENT RENDERING LOGIC ---
 const navLinks = document.querySelectorAll('#sidebar-nav > ul:first-of-type a');
 const pageTitle = document.getElementById('page-title');
 const mainContent = document.getElementById('main-content');
 const footer = document.getElementById('page-footer');
 let lastViewedSection = 'dashboard';

 const sections = {
     dashboard: `
                <div id="dashboard-section" class="space-y-8">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="card border-l-transparent p-5"><div class="flex items-center"><div class="p-3 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300 mr-4"><i data-lucide="book-open-check"></i></div><div><p class="text-sm font-medium text-gray-500 dark:text-gray-400">Completed Lessons</p><p id="stat-lessons" class="text-2xl font-bold">0</p></div></div></div>
                        <div class="card border-l-transparent p-5"><div class="flex items-center"><div class="p-3 rounded-full bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300 mr-4"><i data-lucide="trophy"></i></div><div><p class="text-sm font-medium text-gray-500 dark:text-gray-400">Experience Points</p><p id="stat-xp" class="text-2xl font-bold">0</p></div></div></div>
                        <div class="card border-l-transparent p-5"><div class="flex items-center"><div class="p-3 rounded-full bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-300 mr-4"><i data-lucide="star"></i></div><div><p class="text-sm font-medium text-gray-500 dark:text-gray-400">Current Level</p><p id="stat-level" class="text-2xl font-bold">1</p></div></div></div>
                        <div class="card border-l-transparent p-5"><div class="flex items-center"><div class="p-3 rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300 mr-4"><i data-lucide="shield"></i></div><div><p class="text-sm font-medium text-gray-500 dark:text-gray-400">Challenges Passed</p><p id="stat-challenges" class="text-2xl font-bold">0</p></div></div></div>
                    </div>
                     <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div class="lg:col-span-2 space-y-8">
                             <div class="card card-lesson p-6"><h3 class="font-bold text-xl mb-4">Performance Summary</h3><div class="h-96"><canvas id="performance-chart"></canvas></div></div>
                             <div><h3 class="font-bold text-xl mb-4">Latest Challenges</h3><div id="latest-challenges-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-6"></div></div>
                             <div><h3 class="font-bold text-xl mb-4">Latest Exams</h3><div id="latest-exams-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-6"></div></div>
                             <div><h3 class="font-bold text-xl mb-4">Latest Lessons</h3><div id="latest-lessons-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-6"></div></div>
                             <div><h3 class="font-bold text-xl mb-4">Latest Exercises</h3><div id="latest-exercises-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-6"></div></div>
                        </div>
                        <div class="space-y-8">
                             <div class="card p-6 border-l-transparent"><h3 class="font-bold text-xl mb-4">Progress Overview</h3><div id="progress-overview-container" class="space-y-5"></div></div>
                             <div class="card p-6 border-l-transparent"><h3 class="font-bold text-xl mb-4">Recent Activity</h3><ul class="space-y-5"><li class="flex items-center gap-4"><div class="p-2.5 rounded-full bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300"><i data-lucide="check-circle-2"></i></div><p class="text-sm">Completed: <span class="font-semibold text-[var(--text-primary)]">"Variables"</span></p></li><li class="flex items-center gap-4"><div class="p-2.5 rounded-full bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-300"><i data-lucide="shield-check"></i></div><p class="text-sm">Passed: <span class="font-semibold text-[var(--text-primary)]">"FizzBuzz"</span></p></li><li class="flex items-center gap-4"><div class="p-2.5 rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300"><i data-lucide="file-text"></i></div><p class="text-sm">Finished: <span class="font-semibold text-[var(--text-primary)]">"Go Basics"</span></p></li></ul></div>
                        </div>
                    </div>
                </div>`,
     progress: `
                <div id="progress-section" class="space-y-8">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div class="card border-l-green-500 p-5"><h4 class="text-sm font-medium text-gray-500 dark:text-gray-400">Total Exercises Completed</h4><p id="progress-exercises" class="text-3xl font-bold">0</p></div>
                        <div class="card border-l-red-500 p-5"><h4 class="text-sm font-medium text-gray-500 dark:text-gray-400">Challenges Passed</h4><p id="progress-challenges" class="text-3xl font-bold">0</p></div>
                        <div class="card border-l-purple-500 p-5"><h4 class="text-sm font-medium text-gray-500 dark:text-gray-400">Exams Passed</h4><p id="progress-exams" class="text-3xl font-bold">0</p></div>
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div class="lg:col-span-2 space-y-8"><div class="card p-6"><h3 class="font-bold text-xl mb-4">Skills Overview</h3><div class="relative w-full h-80 flex items-center justify-center"><canvas id="skills-radar-chart"></canvas></div></div></div>
                        <div class="card p-6"><h3 class="font-bold text-xl mb-4">Achievements</h3><div class="grid grid-cols-3 gap-4 text-center"><div class="flex flex-col items-center p-2 rounded-lg bg-[var(--hover-bg)]" title="Completed 10 exercises"><i data-lucide="swords" class="w-10 h-10 text-green-500"></i><span class="text-xs mt-1 font-medium">Warrior</span></div><div class="flex flex-col items-center p-2 rounded-lg bg-[var(--hover-bg)]" title="7-day streak"><i data-lucide="flame" class="w-10 h-10 text-orange-500"></i><span class="text-xs mt-1 font-medium">On Fire</span></div><div class="flex flex-col items-center p-2 rounded-lg bg-[var(--hover-bg)]" title="Passed first exam"><i data-lucide="graduation-cap" class="w-10 h-10 text-blue-500"></i><span class="text-xs mt-1 font-medium">Graduate</span></div><div class="flex flex-col items-center p-2 rounded-lg bg-[var(--hover-bg)] opacity-40" title="Night Owl (Code at night)"><i data-lucide="moon-star" class="w-10 h-10 text-gray-500"></i><span class="text-xs mt-1 font-medium">Night Owl</span></div></div></div>
                    </div>
                </div>`
 };

 // --- SYNTAX HIGHLIGHTING ---
 function highlightGoCode(code) {
     let escapedCode = code.replace(/</g, "&lt;").replace(/>/g, "&gt;");
     const patterns = {
         comment: /(\/\/.*|\/\*[\s\S]*?\*\/)/g,
         string: /(".*?")/g,
         keyword: /\b(package|import|func|return|const|var|if|else|for|range|switch|case|default|type|struct|interface|go|defer|select|chan|map|fallthrough|break|continue)\b/g,
         type: /\b(string|int|int8|int16|int32|int64|uint|uint8|uint16|uint32|uint64|uintptr|float32|float64|complex64|complex128|bool|byte|rune|error)\b/g,
         number: /\b([0-9]+(\.[0-9]+)?)\b/g,
     };
     const placeholders = [];
     escapedCode = escapedCode.replace(patterns.comment, (match) => {
         placeholders.push(`<span class="code-comment">${match}</span>`);
         return `__PLACEHOLDER_${placeholders.length - 1}__`;
     });
     escapedCode = escapedCode.replace(patterns.string, (match) => {
         placeholders.push(`<span class="code-string">${match}</span>`);
         return `__PLACEHOLDER_${placeholders.length - 1}__`;
     });
     escapedCode = escapedCode.replace(patterns.keyword, '<span class="code-keyword">$1</span>');
     escapedCode = escapedCode.replace(patterns.type, '<span class="code-type">$1</span>');
     escapedCode = escapedCode.replace(patterns.number, '<span class="code-number">$1</span>');
     for (let i = 0; i < placeholders.length; i++) {
         escapedCode = escapedCode.replace(`__PLACEHOLDER_${i}__`, placeholders[i]);
     }
     return escapedCode;
 }

 function createItemCard(item, type) {
     const card = document.createElement('div');
     const isCompleted = userProgress.completed.has(item.title);

     card.className = 'card p-6 flex flex-col';

     let cardAccentClass = '';
     switch (type) {
         case 'lessons':
             cardAccentClass = 'card-lesson';
             break;
         case 'exercises':
             cardAccentClass = 'card-exercise';
             break;
         case 'challenges':
             cardAccentClass = 'card-challenge';
             break;
         case 'exam':
             cardAccentClass = 'card-exam';
             break;
         // تمت إضافة حالة للمشاريع هنا
         case 'projects':
             cardAccentClass = 'card-project';
             break;
     }
     card.classList.add(cardAccentClass);

     if (isCompleted) {
         card.classList.add('card-completed');
     }

     let detailsHtml = '';

     const topicsHtml = (item.relevantTopics && item.relevantTopics.length > 0) ? `<div class="mt-auto pt-4 border-t border-[var(--border-color)]"><h5 class="text-xs font-semibold text-[var(--text-muted)] mb-2">Topics</h5><div class="flex flex-wrap">${item.relevantTopics.map(topic => `<span class="topic-tag bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300">${topic}</span>`).join('')}</div></div>` : '';
            
            if (type === 'exercises' || type === 'challenges' || type === 'projects') {
                const difficultyColor = item.difficulty === 'Medium' ? 'text-yellow-500' : item.difficulty === 'Hard' ? 'text-red-500' : 'text-green-500';
                detailsHtml += `<div class="text-sm font-medium ${difficultyColor} mb-2">${item.difficulty}</div>`;
            } else if (type === 'exam') {
                detailsHtml += `<div class="text-sm font-semibold text-indigo-500 mb-2">${item.category} - ${item.percentage}%</div>`;
            }

            const description = item.description || item.problemStatement || '';
            card.innerHTML = `<div class="flex-grow"><h3 class="font-bold text-lg mb-2">${item.title}</h3>${detailsHtml}<p class="text-sm text-[var(--text-muted)] mb-4">${description}</p></div>${topicsHtml}`;
            const button = document.createElement('a');
            button.href = '#';
            if (isCompleted) {
                button.className = 'btn-completed font-semibold py-2 px-4 rounded-lg text-sm mt-auto self-start flex items-center';
                button.innerHTML = `<i data-lucide="check-circle-2" class="mr-2 w-4 h-4"></i>Completed`;
            } else {
                button.className = 'btn-primary font-semibold py-2 px-4 rounded-lg text-sm mt-auto self-start';
                button.textContent = 'Start';
            }
            button.onclick = (e) => { e.preventDefault(); showDetailView(item, type); };
            card.appendChild(button);
            return card;
        }

        function renderContent(container, items, type) {
            if (!items || items.length === 0) {
                container.innerHTML = `<div class="card p-10 text-center text-[var(--text-muted)] col-span-full">No ${type} available.</div>`;
                return;
            }
            const grid = document.createElement('div');
            grid.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6';
            items.forEach(item => { grid.appendChild(createItemCard(item, type)); });
            container.appendChild(grid);
        }
        
        function renderLatestItems(containerSelector, items, type, count) {
            const container = document.querySelector(containerSelector);
            if (!container) return;
            if (!items || items.length === 0) {
                container.innerHTML = `<p class="text-sm text-[var(--text-muted)] col-span-full">No items to display.</p>`;
                return;
            }
            const latestItems = items.slice(-count).reverse();
            latestItems.forEach(item => { container.appendChild(createItemCard(item, type)); });
        }

        function setActiveLink(sectionId) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.dataset.section === sectionId) {
                    link.classList.add('active');
                    const titleElement = link.querySelector('span');
                    if (titleElement) { pageTitle.textContent = titleElement.textContent; }
                }
            });
        }
        
        // --- DETAIL VIEW LOGIC (UPDATED) ---
        function showDetailView(item, type) {
            lastViewedSection = document.querySelector('.sidebar-item.active').dataset.section;
            pageTitle.textContent = item.title;
            footer.style.display = 'none'; // Hide footer on detail view

            const isCompleted = userProgress.completed.has(item.title);
            let actionButtonHtml = '';
            if (isCompleted) {
                actionButtonHtml = `<button class="btn-completed w-full py-3 rounded-lg font-semibold flex items-center justify-center"><i data-lucide="check-circle-2" class="mr-2 w-5 h-5"></i>Completed</button>`;
            } else {
                actionButtonHtml = `<button id="complete-item-btn" class="btn-primary w-full py-3 rounded-lg font-semibold">Mark as Complete</button>`;
            }

            let infoDetailsHtml = '';
            const xpGained = getItemXp(item);
            infoDetailsHtml += `<div class="flex justify-between items-center"><span class="text-sm font-medium text-[var(--text-muted)]">XP Reward:</span><span class="font-bold text-green-500">+${xpGained} XP</span></div>`;
            if (item.difficulty) {
                 const difficultyColor = item.difficulty === 'Medium' ? 'text-yellow-500' : item.difficulty === 'Hard' ? 'text-red-500' : 'text-green-500';
                 infoDetailsHtml += `<div class="flex justify-between items-center mt-2"><span class="text-sm font-medium text-[var(--text-muted)]">Difficulty:</span><span class="font-semibold ${difficultyColor}">${item.difficulty}</span></div>`;
            }
            if (item.category) {
                 infoDetailsHtml += `<div class="flex justify-between items-center mt-2"><span class="text-sm font-medium text-[var(--text-muted)]">Category:</span><span class="font-semibold text-indigo-500">${item.category}</span></div>`;
            }
            if (item.percentage) {
                 infoDetailsHtml += `<div class="flex justify-between items-center mt-2"><span class="text-sm font-medium text-[var(--text-muted)]">Percentage:</span><span class="font-semibold text-purple-500">${item.percentage}%</span></div>`;
            }

            const description = item.detailedDescription || item.problemStatement || item.description || '';
            const relevantTopics = item.relevantTopics || [];
            const relevantLinks = item.relevantLinks || [];
            
            let relevantInfoHtml = '';
            if (relevantTopics.length > 0 || relevantLinks.length > 0) {
                relevantInfoHtml = `
                <div class="card p-4 border-l-transparent">
                    <h4 class="font-bold text-md mb-3">Relevant Information</h4>
                    ${relevantTopics.length > 0 ? `
                        <h5 class="text-sm font-semibold text-[var(--text-muted)] mb-2">Topics</h5>
                        <div class="flex flex-wrap">
                            ${relevantTopics.map(topic => `<span class="topic-tag bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300">${topic}</span>`).join('')}
                        </div>
                    ` : ''}
                    ${relevantLinks.length > 0 ? `
                        <h5 class="text-sm font-semibold text-[var(--text-muted)] mt-3 mb-2">Links</h5>
                        <ul class="list-disc list-inside space-y-1">
                            ${relevantLinks.map(link => `<li><a href="${link}" target="_blank" class="text-blue-500 hover:underline break-all">${link}</a></li>`).join('')}
                        </ul>
                    ` : ''}
                </div>`;
            }
            
            let mainHtml = `
                <div>
                    <button id="back-btn" class="btn-secondary mb-6 flex items-center self-start"><i data-lucide="arrow-left" class="mr-2 w-4 h-4"></i>Back to ${lastViewedSection}</button>
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div class="lg:col-span-2 space-y-6">
                            <div>
                                <h2 class="font-bold text-3xl md:text-4xl mb-4 text-blue-600 dark:text-blue-400">${item.title}</h2>
                                <p class="text-[var(--text-muted)] text-lg leading-relaxed">${description}</p>
                            </div>
                            ${item.functionToImplement ? `
                            <div>
                                <h3 class="font-bold text-xl mb-3 mt-6 border-b border-[var(--border-color)] pb-2">Function to Implement</h3>
                                <div class="code-editor">
                                    <pre><code>${highlightGoCode(item.functionToImplement)}</code></pre>
                                </div>
                            </div>` : ''}
                            ${item.mainFunction ? `
                            <div>
                                <h3 class="font-bold text-xl mb-3 mt-6 border-b border-[var(--border-color)] pb-2">Main Function (for testing)</h3>
                                <div class="code-editor">
                                    <pre><code>${highlightGoCode(item.mainFunction)}</code></pre>
                                </div>
                            </div>` : ''}
                            ${item.expectedOutput ? `
                            <div>
                                <h3 class="font-bold text-xl mb-3 mt-6 border-b border-[var(--border-color)] pb-2">Expected Output</h3>
                                <div class="code-editor">
                                    <pre><code>${highlightGoCode(item.expectedOutput)}</code></pre>
                                </div>
                            </div>` : ''}
                            ${item.codeExample ? `
                            <div>
                                <h3 class="font-bold text-xl mb-3 mt-6 border-b border-[var(--border-color)] pb-2">Example</h3>
                                <div class="code-editor">
                                    <pre><code>${highlightGoCode(item.codeExample)}</code></pre>
                                </div>
                            </div>` : ''}
                        </div>
                        <div class="lg:col-span-1 space-y-4">
                            <div class="lg:sticky top-28 space-y-4">
                                <div class="card p-4 border-l-transparent">
                                    <h4 class="font-bold text-md mb-3">Details</h4>
                                    <div class="space-y-2">${infoDetailsHtml}</div>
                                </div>
                                ${relevantInfoHtml}
                                <div class="card p-4 border-l-transparent">
                                    <h4 class="font-bold text-md mb-2">Action</h4>
                                    ${actionButtonHtml}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            mainContent.innerHTML = mainHtml;
            if (!isCompleted) {
                document.getElementById('complete-item-btn').onclick = () => {
                    completeItem(item, type);
                    showDetailView(item, type);
                };
            }
            document.getElementById('back-btn').onclick = () => showSection(lastViewedSection);
            lucide.createIcons();
        }
        
        // --- Learning Map Logic ---
        function renderMap(container) {
            container.innerHTML = ''; // Clear previous content
            container.id = 'map-background';
            
            const mapData = [
                { id: '1', title: 'Intro to Go', status: 'completed', pos: { x: 10, y: 50 }, dependencies: [] },
                { id: '2', title: 'Variables & Types', status: 'completed', pos: { x: 25, y: 35 }, dependencies: ['1'] },
                { id: '3', title: 'Control Structures', status: 'unlocked', pos: { x: 25, y: 65 }, dependencies: ['1'] },
                { id: '4', title: 'Functions', status: 'locked', pos: { x: 45, y: 35 }, dependencies: ['2'] },
                { id: '5', title: 'Arrays & Slices', status: 'locked', pos: { x: 45, y: 65 }, dependencies: ['3'] },
                { id: '6', title: 'Maps & Structs', status: 'locked', pos: { x: 65, y: 50 }, dependencies: ['4', '5'] },
                { id: '7', title: 'Interfaces', status: 'locked', pos: { x: 85, y: 50 }, dependencies: ['6'] }
            ];

            const mapContainer = document.createElement('div');
            mapContainer.className = 'relative w-full h-auto min-h-screen p-4';
            mapContainer.id = 'map-container';

            const svgNS = "http://www.w3.org/2000/svg";
            const svg = document.createElementNS(svgNS, "svg");
            svg.setAttribute('class', 'absolute top-0 left-0 w-full h-full');
            
            const nodeElements = {};

            mapData.forEach(node => {
                const nodeEl = document.createElement('div');
                nodeEl.id = `node-${node.id}`;
                nodeEl.className = 'glass-card absolute p-4 w-48 text-center text-white cursor-pointer';
                
                let icon = '';
                let statusClasses = [];
                if (node.status === 'completed') {
                    icon = '<i data-lucide="check-circle-2" class="mx-auto mb-2 text-green-300"></i>';
                    statusClasses = ['border-green-300'];
                } else if (node.status === 'unlocked') {
                    icon = '<i data-lucide="unlock" class="mx-auto mb-2 text-yellow-300"></i>';
                    statusClasses = ['border-yellow-300'];
                } else {
                    icon = '<i data-lucide="lock" class="mx-auto mb-2 text-red-300"></i>';
                    statusClasses = ['border-red-300', 'opacity-60'];
                }

                nodeEl.innerHTML = `
                    ${icon}
                    <h4 class="font-bold text-sm">${node.title}</h4>
                `;
                nodeEl.style.left = `${node.pos.x}%`;
                nodeEl.style.top = `${node.pos.y}%`;
                nodeEl.style.transform = 'translate(-50%, -50%)';
                nodeEl.classList.add(...statusClasses);
                
                mapContainer.appendChild(nodeEl);
                nodeElements[node.id] = nodeEl;
            });

            container.appendChild(mapContainer);
            mapContainer.appendChild(svg);

            // Delay drawing lines to ensure elements are rendered
            setTimeout(() => {
                mapData.forEach(node => {
                    if (node.dependencies) {
                        node.dependencies.forEach(depId => {
                            const startNode = nodeElements[depId];
                            const endNode = nodeElements[node.id];
                            if(startNode && endNode) {
                                const line = document.createElementNS(svgNS, 'line');
                                const startX = startNode.offsetLeft + startNode.offsetWidth / 2;
                                const startY = startNode.offsetTop + startNode.offsetHeight / 2;
                                const endX = endNode.offsetLeft + endNode.offsetWidth / 2;
                                const endY = endNode.offsetTop + endNode.offsetHeight / 2;

                                line.setAttribute('x1', startX);
                                line.setAttribute('y1', startY);
                                line.setAttribute('x2', endX);
                                line.setAttribute('y2', endY);
                                line.setAttribute('stroke', 'rgba(255, 255, 255, 0.4)');
                                line.setAttribute('stroke-width', '2');
                                line.setAttribute('stroke-dasharray', '5, 5');
                                svg.appendChild(line);
                            }
                        });
                    }
                });
                lucide.createIcons();
            }, 100);
        }

        function showSection(sectionId) {
            lastViewedSection = sectionId; // Keep track of the current section
            mainContent.innerHTML = ''; // Clear previous content
            mainContent.id = 'main-content'; // Reset ID
            setActiveLink(sectionId);
            
            const footer = document.getElementById('page-footer');
            if (footer) {
                footer.style.display = sectionId === 'dashboard' ? 'block' : 'none';
            }
            
            if (sectionId === 'map') {
                renderMap(mainContent);
                return;
            }

            const sectionHTML = sections[sectionId];
            if (sectionHTML) {
                mainContent.innerHTML = sectionHTML;
                
                if (sectionId === 'dashboard') {
                    document.getElementById('stat-lessons').textContent = userProgress.completedStats.lessons;
                    document.getElementById('stat-xp').textContent = userProgress.xp;
                    document.getElementById('stat-level').textContent = userProgress.level;
                    document.getElementById('stat-challenges').textContent = userProgress.completedStats.challenges;
                    renderLatestItems('#latest-challenges-grid', window.globalData.challenges, 'challenges', 2);
                    renderLatestItems('#latest-exams-grid', window.globalData.exam, 'exam', 2);
                    renderLatestItems('#latest-lessons-grid', window.globalData.lessons, 'lessons', 2);
                    renderLatestItems('#latest-exercises-grid', window.globalData.exercises, 'exercises', 2);
                    const progressContainer = document.getElementById('progress-overview-container');
                    progressContainer.innerHTML = `
                        <div><div class="flex justify-between mb-1"><span class="text-base font-medium text-[var(--text-secondary)]">Lessons</span><span class="text-sm font-medium text-[var(--text-secondary)]">${userProgress.completedStats.lessons} / ${window.globalData.lessons.length}</span></div><div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5"><div class="bg-blue-600 h-2.5 rounded-full" style="width: ${userProgress.completedStats.lessons / (window.globalData.lessons.length||1) * 100}%"></div></div></div>
                        <div><div class="flex justify-between mb-1"><span class="text-base font-medium text-[var(--text-secondary)]">Exercises</span><span class="text-sm font-medium text-[var(--text-secondary)]">${userProgress.completedStats.exercises} / ${window.globalData.exercises.length}</span></div><div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5"><div class="bg-green-500 h-2.5 rounded-full" style="width: ${userProgress.completedStats.exercises / (window.globalData.exercises.length||1) * 100}%"></div></div></div>
                        <div><div class="flex justify-between mb-1"><span class="text-base font-medium text-[var(--text-secondary)]">Challenges</span><span class="text-sm font-medium text-[var(--text-secondary)]">${userProgress.completedStats.challenges} / ${window.globalData.challenges.length}</span></div><div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5"><div class="bg-red-500 h-2.5 rounded-full" style="width: ${userProgress.completedStats.challenges / (window.globalData.challenges.length||1) * 100}%"></div></div></div>
                        <div><div class="flex justify-between mb-1"><span class="text-base font-medium text-[var(--text-secondary)]">Exams</span><span class="text-sm font-medium text-[var(--text-secondary)]">${userProgress.completedStats.exams} / ${window.globalData.exam.length}</span></div><div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5"><div class="bg-indigo-500 h-2.5 rounded-full" style="width: ${userProgress.completedStats.exams / (window.globalData.exam.length||1) * 100}%"></div></div></div>`;
                    const ctx = document.getElementById('performance-chart')?.getContext('2d');
                    if (ctx) new Chart(ctx, { type: 'bar', data: { labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], datasets: [{ label: 'Exercises Completed', data: [12, 19, 3, 5, 2, 3], backgroundColor: 'rgba(34, 197, 94, 0.5)', borderColor: 'rgba(34, 197, 94, 1)', borderWidth: 1 }, { label: 'Exams Passed', data: [2, 3, 1, 2, 1, 0], backgroundColor: 'rgba(139, 92, 246, 0.5)', borderColor: 'rgba(139, 92, 246, 1)', borderWidth: 1 }] }, options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true } } } });
                }
                if (sectionId === 'progress') {
                    document.getElementById('progress-exercises').textContent = userProgress.completedStats.exercises;
                    document.getElementById('progress-challenges').textContent = userProgress.completedStats.challenges;
                    document.getElementById('progress-exams').textContent = userProgress.completedStats.exams;
                    const radarCtx = document.getElementById('skills-radar-chart')?.getContext('2d');
                    if(radarCtx) new Chart(radarCtx, { type: 'radar', data: { labels: ['Syntax', 'Data Structures', 'Concurrency', 'Testing', 'Standard Library', 'Tooling'], datasets: [{ label: 'Your Skills', data: [65, 59, 90, 81, 56, 55], fill: true, backgroundColor: 'rgba(59, 130, 246, 0.2)', borderColor: 'rgb(59, 130, 246)', pointBackgroundColor: 'rgb(59, 130, 246)' }] }, options: { maintainAspectRatio: false } });
                }
            } else {
                // تم تحديث هذا الجزء ليشمل المشاريع
                const dataMap = { lessons: window.globalData.lessons, exercises: window.globalData.exercises, challenges: window.globalData.challenges, exam: window.globalData.exam, projects: window.globalData.projects };
                renderContent(mainContent, dataMap[sectionId], sectionId);
            }
            lucide.createIcons();
        }
        
        // Initial load
        showSection('dashboard');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionId = e.currentTarget.dataset.section;
                if (sectionId) {
                    showSection(sectionId);
                    if(window.innerWidth < 768) { // Close sidebar on mobile after click
                        sidebar.classList.add('-translate-x-full');
                    }
                }
            });
        });

        // --- MOBILE SIDEBAR TOGGLE ---
        const sidebar = document.getElementById('sidebar');
        const sidebarToggleBtn = document.getElementById('sidebar-toggle-btn');
        const sidebarCloseBtn = document.getElementById('sidebar-close-btn');

        sidebarToggleBtn.addEventListener('click', () => { sidebar.classList.remove('-translate-x-full'); });
        sidebarCloseBtn.addEventListener('click', () => { sidebar.classList.add('-translate-x-full'); });

        // --- FEEDBACK FORM LOGIC ---
        document.getElementById('feedback-send-btn').addEventListener('click', function() {
            const comment = document.getElementById('feedback-textarea').value;
            const status = document.getElementById('feedback-status');
            
            if (!comment.trim()) {
                status.textContent = 'Please enter a comment.';
                status.style.color = 'red';
                return;
            }

            // The email is "encrypted" using Base64 to deter simple bots.
            const encodedEmail = 'ZGlzYWJkbzA3MkBnbWFpbC5jb20=';
            const email = atob(encodedEmail); // Decode the email
            
            const subject = 'Feedback for DOCTORAZ';
            const body = encodeURIComponent(comment);
            
            const mailtoHref = `mailto:${email}?subject=${subject}&body=${body}`;
            
            const mailtoLink = document.getElementById('mailto-link');
            mailtoLink.href = mailtoHref;
            mailtoLink.click();

            status.textContent = 'Opening your email client...';
            status.style.color = 'green';
            setTimeout(() => { status.textContent = ''; }, 3000);
        });
        
        // --- SCIENTIFIC BACKGROUND ANIMATION CONTROLLER ---
        const scientificBgController = (() => {
            const canvas = document.getElementById('scientific-bg');
            if (!canvas) return { start: () => {}, stop: () => {} };

            const ctx = canvas.getContext('2d');
            let particles = [];
            let animationFrameId;

            function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }

            function getParticleColor() {
                const isDark = document.documentElement.classList.contains('dark');
                return isDark ? 'rgba(229, 231, 235, 0.7)' : 'rgba(55, 65, 81, 0.7)';
            }

            class Particle {
                constructor(x, y, directionX, directionY, size, color) {
                    this.x = x;
                    this.y = y;
                    this.directionX = directionX;
                    this.directionY = directionY;
                    this.size = size;
                    this.color = color;
                }
                draw() {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                    ctx.fillStyle = this.color;
                    ctx.fill();
                }
                update() {
                    if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
                    if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;
                    this.x += this.directionX;
                    this.y += this.directionY;
                    this.draw();
                }
            }

            function init() {
                particles = [];
                let numberOfParticles = (canvas.height * canvas.width) / 9000;
                let color = getParticleColor();
                for (let i = 0; i < numberOfParticles; i++) {
                    let size = (Math.random() * 2) + 1;
                    let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
                    let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
                    let directionX = (Math.random() * .4) - .2;
                    let directionY = (Math.random() * .4) - .2;
                    particles.push(new Particle(x, y, directionX, directionY, size, color));
                }
            }

            function connect() {
                let opacityValue = 1;
                let color = getParticleColor();
                for (let a = 0; a < particles.length; a++) {
                    for (let b = a; b < particles.length; b++) {
                        let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
                                     + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
                        if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                            opacityValue = 1 - (distance / 20000);
                            let strokeStyle = getParticleColor().replace(/, [0-9\.]+\)$/, `, ${opacityValue})`);
                            ctx.strokeStyle = strokeStyle;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(particles[a].x, particles[a].y);
                            ctx.lineTo(particles[b].x, particles[b].y);
                            ctx.stroke();
                        }
                    }
                }
            }

            function animate() {
                animationFrameId = requestAnimationFrame(animate);
                ctx.clearRect(0, 0, innerWidth, innerHeight);
                for (let i = 0; i < particles.length; i++) {
                    particles[i].update();
                }
                connect();
            }
            
            function start() {
                if (!animationFrameId) {
                    canvas.style.display = 'block';
                    resizeCanvas();
                    init();
                    animate();
                }
            }

            function stop() {
                if (animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                    animationFrameId = null;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    canvas.style.display = 'none';
                }
            }

            window.addEventListener('resize', () => {
                if (animationFrameId) {
                    resizeCanvas();
                    init();
                }
            });
            
            return { start, stop };
        })();
        
        // Initial theme setup
        const initialTheme = localStorage.getItem('theme') || 'system';
        applyTheme(initialTheme);
