// GLOBAL REAL-TIME DATA LOGIC ENTRIES
let incomeSourceValue = 75000;
let transactionHistory = [
    { date: '2026-06-08', desc: 'Zomato Delivery', category: 'Food', amount: 450, type: 'expense' },
    { date: '2026-06-05', desc: 'Salary Credited', category: 'Income', amount: 75000, type: 'income' }
];

// REAL-TIME CATEGORY TARGET MATRIX LIMITS CONFIGURATIONS
const globalCategoryBudgetTargets = {
    'Food': 15000,
    'Utilities': 8000,
    'Entertainment': 6000,
    'Shopping': 12000,
    'Travel': 5000
};

// GLOBAL CHART INSTANCE VARIABLE HOLDERS TO PREVENT INITIALIZATION COLLISION CRASHES
let activeDashboardChartInstance = null;
let activeAnalyticsPieChartInstance = null;
let activeAnalyticsBarChartInstance = null;

// TAB NAVIGATION SWITCHER ENGINE
function switchTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.style.display = 'none';
        content.classList.remove('active');
    });

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    const currentTab = document.getElementById(tabId);
    if(currentTab) {
        currentTab.style.display = 'block';
        currentTab.classList.add('active');
    }

    const activeBtn = document.querySelector(`[onclick="switchTab('${tabId}')"]`);
    if (activeBtn) activeBtn.classList.add('active');
}

// REALTIME FINANCIAL BALANCE LOGIC UPDATES & AUTOMATIC SAVINGS CALCULATION ENGINE
function updateDynamicMetricBalances() {
    let computedExpenses = 0;
    
    // Process matching summation iteration for expense logs
    transactionHistory.forEach(item => {
        if(item.type === 'expense') {
            computedExpenses += item.amount;
        }
    });

    // The logic requested: Income minus All Expenses equals Net Savings
    let computedBalance = incomeSourceValue - computedExpenses;
    let netSavingsAutomated = incomeSourceValue - computedExpenses; 
    
    // Math extraction logic processing for savings efficiency percentage ratios evaluation parameters
    let savingsRatePercentage = Math.round((netSavingsAutomated / incomeSourceValue) * 100);

    // Dashboard main display metrics sync updates text operations configurations safely checked
    const dashTotalExpensesEl = document.getElementById('dashTotalExpenses');
    const dashTotalBalanceEl = document.getElementById('dashTotalBalance');

    if (dashTotalExpensesEl) dashTotalExpensesEl.innerText = `₹${computedExpenses.toLocaleString('en-IN')}.00`;
    if (dashTotalBalanceEl) dashTotalBalanceEl.innerText = `₹${computedBalance.toLocaleString('en-IN')}.00`;

    // -------------------------------------------------------------
    // AUTOMATIC SAVINGS DISPLAY EXTENSION INJECTIONS
    // -------------------------------------------------------------
    const automatedSavingsBox = document.getElementById('automatedSavingsBox');
    const savingsPercentageIndicator = document.getElementById('savingsPercentageIndicator');
    const savingsStatusMessage = document.getElementById('savingsStatusMessage');

    if(automatedSavingsBox) {
        automatedSavingsBox.innerText = `₹${netSavingsAutomated.toLocaleString('en-IN')}.00`;
    }

    if(savingsPercentageIndicator) {
        savingsPercentageIndicator.innerHTML = `<i class="fa-solid fa-piggy-bank"></i> ${savingsRatePercentage}% of Income Saved`;
    }

    if(savingsStatusMessage) {
        if(savingsRatePercentage >= 50) {
            savingsStatusMessage.innerText = `Excellent financial control, Shivani! You have saved ${savingsRatePercentage}% of your active monthly income token limits. Your surplus funds accumulation is in the optimal growth matrix safety corridor zone configurations.`;
        } else if (savingsRatePercentage >= 20 && savingsRatePercentage < 50) {
            savingsStatusMessage.innerText = `Healthy baseline metrics tracker status. Saving ${savingsRatePercentage}% meets standard portfolio growth setups metrics rules configuration guidelines. Try logging lower expense ratios next week.`;
        } else {
            savingsStatusMessage.innerText = `Alert notification condition threshold criteria warning rules. Your savings dropped to ${savingsRatePercentage}% due to active outgoing spikes registers. Consider auditing your category limits profiles immediately.`;
        }
    }
}

// TRANSACTION LOG LIST RENDERING ENGINE
function renderTransactions() {
    const tableBody = document.getElementById('transactionTableBody');
    const dashActivityList = document.getElementById('dashboardRecentActivity');
    
    if(!tableBody || !dashActivityList) return;

    tableBody.innerHTML = '';
    dashActivityList.innerHTML = '';

    transactionHistory.forEach(item => {
        const isExpense = item.type === 'expense';
        const amtSign = isExpense ? `- ₹${item.amount}` : `+ ₹${item.amount}`;
        const amtClass = isExpense ? 'neg' : 'pos';
        const badgeColorClass = !isExpense ? 'inc' : item.category.toLowerCase();
        
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const displayDate = new Date(item.date).toLocaleDateString('en-IN', options);

        // Grid Table rendering history module 
        const row = `<tr>
            <td>${displayDate}</td>
            <td>${item.desc}</td>
            <td><span class="badge ${badgeColorClass}">${item.category}</span></td>
            <td class="${amtClass}">${amtSign}</td>
            <td class="status-comp">Completed</td>
        </tr>`;
        tableBody.innerHTML += row;

        // Mini Quick Dashboard Logger Activity system integration entries
        if(isExpense) {
            const iconMap = {
                'Food': 'fa-shopping-bag',
                'Utilities': 'fa-bolt',
                'Entertainment': 'fa-film',
                'Shopping': 'fa-shirt',
                'Travel': 'fa-car'
            };
            const currentIcon = iconMap[item.category] || 'fa-wallet';

            const dashItem = `<li>
                <span><i class="fa-solid ${currentIcon}" style="color:var(--accent); margin-right:10px;"></i>${item.desc}</span> 
                <span class="neg">${amtSign}</span>
            </li>`;
            dashActivityList.innerHTML += dashItem;
        }
    });

    // Sync execute sequential processing calculations live matrix pipelines
    updateDynamicMetricBalances();
    renderCategoryWiseBudgets();
    updateSystemCoreAnalyticsCharts();
}

// LIVE RENDER CATEGORY BUDGETS METRICS ENGINE (THE BUDGET SYSTEM REBUILT)
function renderCategoryWiseBudgets() {
    const budgetContainer = document.getElementById('automatedBudgetCardsContainer');
    if(!budgetContainer) return;

    budgetContainer.innerHTML = ''; // Reset core HTML inner fields safely

    // Initialize data logs dictionary structure object array counters
    let categorySpentSummation = {
        'Food': 0,
        'Utilities': 0,
        'Entertainment': 0,
        'Shopping': 0,
        'Travel': 0
    };

    // Aggregate values out of active records arrays loop context processing
    transactionHistory.forEach(item => {
        if(item.type === 'expense' && categorySpentSummation.hasOwnProperty(item.category)) {
            categorySpentSummation[item.category] += item.amount;
        }
    });

    // Run string loop injections context map UI interface parameters mapping values
    for (let category in globalCategoryBudgetTargets) {
        let allocatedAmount = globalCategoryBudgetTargets[category];
        let totalSpentAmount = categorySpentSummation[category];
        
        let spentPercentage = Math.round((totalSpentAmount / allocatedAmount) * 100);
        if(spentPercentage > 100) spentPercentage = 100;

        let budgetStatusColor = "var(--accent)"; 
        let remainingBalanceString = `₹${(allocatedAmount - totalSpentAmount).toLocaleString('en-IN')} remaining`;
        let alertModifierClass = "";

        if(totalSpentAmount >= allocatedAmount) {
            budgetStatusColor = "var(--danger)";
            remainingBalanceString = `Over budget by ₹${Math.abs(allocatedAmount - totalSpentAmount).toLocaleString('en-IN')}!`;
            alertModifierClass = "danger-alert-glow";
        } else if(spentPercentage >= 80) {
            budgetStatusColor = "#ffa500";
            alertModifierClass = "warning-alert-glow";
        }

        const budgetCardMarkup = `
            <div class="stat-card glass ${alertModifierClass}" style="border-left: 4px solid ${budgetStatusColor}; margin-bottom: 1.25rem; padding: 1.25rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                    <strong style="font-size: 1.1rem; color: var(--text-main);">${category} Quota</strong>
                    <span style="font-size: 0.8rem; font-weight:700; color: ${budgetStatusColor};">${spentPercentage}% Spent</span>
                </div>
                <div style="font-size: 1.5rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.25rem;">
                    ₹${totalSpentAmount.toLocaleString('en-IN')} <span style="font-size: 0.85rem; font-weight: 400; color: var(--text-muted);">/ ₹${allocatedAmount.toLocaleString('en-IN')}</span>
                </div>
                <div style="font-size: 0.85rem; color: ${totalSpentAmount >= allocatedAmount ? 'var(--danger)' : 'var(--success)'}; font-weight: 500; margin-bottom: 0.75rem;">
                    ${remainingBalanceString}
                </div>
                <div class="progress-bar" style="background: rgba(255,255,255,0.06); height: 8px; border-radius: 4px; overflow: hidden;">
                    <div class="progress" style="width: ${spentPercentage}%; background: ${budgetStatusColor}; height: 100%; border-radius: 4px;"></div>
                </div>
            </div>
        `;
        budgetContainer.innerHTML += budgetCardMarkup;
    }
}

// REBUILT ARCHITECTURE FOR REGENERATING ADVANCED MULTI-CHART CANVAS ANALYTICS SYSTEMS
function updateSystemCoreAnalyticsCharts() {
    try {
        // --- 1. PREPARE MATHEMATICAL STRUCTURAL CHART CHUNKS DATA AGGREGATIONS ---
        let weeklyMetricsSum = [0, 0, 0, 0];
        let categoryChartValuesMap = { 'Food': 0, 'Utilities': 0, 'Entertainment': 0, 'Shopping': 0, 'Travel': 0 };
        let totalIncomeAccumulated = incomeSourceValue;

        transactionHistory.forEach(item => {
            if(item.type === 'expense') {
                // Calculate week sorting boundaries lines based on date registers parameters
                const dayParsed = new Date(item.date).getDate();
                if(dayParsed <= 7) weeklyMetricsSum[0] += item.amount;
                else if(dayParsed <= 14) weeklyMetricsSum[1] += item.amount;
                else if(dayParsed <= 21) weeklyMetricsSum[2] += item.amount;
                else weeklyMetricsSum[3] += item.amount;

                // Category allocation splitting mapping logs
                if(categoryChartValuesMap.hasOwnProperty(item.category)) {
                    categoryChartValuesMap[item.category] += item.amount;
                }
            }
        });

        let currentTotalExpensesSum = Object.values(categoryChartValuesMap).reduce((a, b) => a + b, 0);

        // --- 2. CANVAS ELEMENT RENDERING PIPELINES INITIALIZATION ---
        
        // [A] Dashboard Quick Overview Line Chart Canvas Target Integration
        const canvasDashLine = document.getElementById('dashChart');
        if (canvasDashLine) {
            if (activeDashboardChartInstance !== null) activeDashboardChartInstance.destroy();
            activeDashboardChartInstance = new Chart(canvasDashLine.getContext('2d'), {
                type: 'line',
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    datasets: [{
                        label: 'Expenditure Tracking (₹)',
                        data: weeklyMetricsSum,
                        borderColor: '#6c5ce7',
                        borderWidth: 3,
                        tension: 0.4,
                        fill: false
                    }]
                },
                options: { responsive: true, plugins: { legend: { display: false } } }
            });
        }

        // [B] Analytics Section Tab: Structural Pie Chart Renderer Injections
        const canvasAnalyticsPie = document.getElementById('analyticsPieChart');
        if (canvasAnalyticsPie) {
            if (activeAnalyticsPieChartInstance !== null) activeAnalyticsPieChartInstance.destroy();
            activeAnalyticsPieChartInstance = new Chart(canvasAnalyticsPie.getContext('2d'), {
                type: 'pie',
                data: {
                    labels: Object.keys(categoryChartValuesMap),
                    datasets: [{
                        data: Object.values(categoryChartValuesMap),
                        backgroundColor: ['#ff4757', '#1e90ff', '#ffa500', '#00fa9a', '#6c5ce7'],
                        borderWidth: 1,
                        borderColor: 'rgba(255,255,255,0.1)'
                    }]
                },
                options: { responsive: true, maintainAspectRatio: false }
            });
        }

        // [C] Analytics Section Tab: Dual Balance Bar Chart Comparison Matrix
        const canvasAnalyticsBar = document.getElementById('analyticsBarChart');
        if (canvasAnalyticsBar) {
            if (activeAnalyticsBarChartInstance !== null) activeAnalyticsBarChartInstance.destroy();
            activeAnalyticsBarChartInstance = new Chart(canvasAnalyticsBar.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['Income Pool Target', 'Active Expenses Sum'],
                    datasets: [{
                        label: 'Financial Flow Ratios Evaluation (₹)',
                        data: [totalIncomeAccumulated, currentTotalExpensesSum],
                        backgroundColor: ['#00fa9a', '#ff4757'],
                        borderRadius: 5
                    }]
                },
                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
            });
        }

    } catch (chartLoopCrashDeferredError) {
        console.warn("Chart components injection pipeline deferred sync boundaries:", chartLoopCrashDeferredError);
    }
}

// PROFILE SYSTEM ACTIONS CORE ENGINES
function updateLiveIdentity() {
    const freshName = document.getElementById('inputProfileName').value;
    const freshEmail = document.getElementById('inputProfileEmail').value;

    if(freshName.trim() === "" || freshEmail.trim() === "") {
        alert("Fields cannot be empty!");
        return;
    }

    document.getElementById('displayUserName').innerText = freshName;
    document.getElementById('displayUserEmail').innerText = freshEmail;
    document.getElementById('dashboardGreeting').innerText = `Welcome back, ${freshName}`;

    alert("Identity sync successfully completed!");
}

// ENGINE CONTROL MATRIX INTERFACES
function updateSystemTier() {
    const selectedTierValue = document.getElementById('selectTierEngine').value;
    document.getElementById('displayUserTier').innerText = `${selectedTierValue} Level Token`;
    
    let shortBadgeText = "Pro Plus";
    let badgeColor = "#00fa9a"; 
    
    if(selectedTierValue.includes("Basic")) {
        shortBadgeText = "Basic";
        badgeColor = "#a4b0be";
    } else if(selectedTierValue.includes("Pro")) {
        shortBadgeText = "Pro";
        badgeColor = "#1e90ff";
    } else if(selectedTierValue.includes("Omega")) {
        shortBadgeText = "Omega";
        badgeColor = "#ff4757"; 
    }

    const badgeIndicatorElement = document.getElementById('tierBadgeIndicator');
    if(badgeIndicatorElement) {
        badgeIndicatorElement.innerText = shortBadgeText;
        badgeIndicatorElement.style.backgroundColor = badgeColor;
    }

    const leftSidebarTag = document.getElementById('sidebarUserTag');
    if(leftSidebarTag) {
        leftSidebarTag.innerText = shortBadgeText + " Active";
        leftSidebarTag.style.color = badgeColor;
    }

    alert(`System Engine configuration updated: ${shortBadgeText}`);
}

// INITIAL DOM SYSTEMS EXECUTION SETUP CONFIGURATIONS CHECK
document.addEventListener("DOMContentLoaded", function () {
    // Call unified sequence loop triggers early initialization maps parameters
    renderTransactions(); 
    switchTab('dashboard');

    const formElement = document.getElementById('expenseForm');
    if(formElement) {
        formElement.addEventListener('submit', function(e) {
            e.preventDefault(); 

            const amt = document.getElementById('expAmount').value;
            const cat = document.getElementById('expCategory').value;
            const dt = document.getElementById('expDate').value;
            const ds = document.getElementById('expDesc').value;

            transactionHistory.unshift({
                date: dt,
                desc: ds,
                category: cat,
                amount: parseFloat(amt),
                type: 'expense'
            });

            renderTransactions(); // This internally updates charts, balances, and budgets dynamically
            formElement.reset(); 
            switchTab('dashboard'); 
        });
    }
});