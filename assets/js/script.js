document.addEventListener('DOMContentLoaded', () => {
    
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');
    const hoverables = document.querySelectorAll('.hoverable, a, button, input');

    if(cursorDot && cursorOutline) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            cursorOutline.animate({ left: `${posX}px`, top: `${posY}px` }, { duration: 500, fill: "forwards" });
        });

        const addHoverListeners = () => {
            document.querySelectorAll('.hoverable, a, button, input').forEach(el => {
                el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
                el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
            });
        };
        addHoverListeners();
    }

    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5; 
            const rotateY = ((x - centerX) / centerX) * 5;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale(1)`;
        });
    });

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";
    const textElement = document.querySelector('.scramble-text');
    if(textElement) {
        textElement.onmouseover = event => {  
            let iteration = 0;
            let interval = setInterval(() => {
                event.target.innerText = event.target.innerText
                    .split("").map((letter, index) => {
                        if(index < iteration) return event.target.dataset.value[index];
                        return letters[Math.floor(Math.random() * 26)];
                    }).join("");
                if(iteration >= event.target.dataset.value.length) clearInterval(interval);
                iteration += 1 / 3;
            }, 30);
        }
    }

    const scanForm = document.getElementById('scanForm');
    const scanInput = document.getElementById('scanInput');
    const scanBtn = document.getElementById('scanBtn');
    const scanLoading = document.getElementById('scanLoading');
    const scanResult = document.getElementById('scanResult');

    if(scanForm) {
        scanForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if(!scanInput.value.trim()) return;

            scanBtn.disabled = true;
            scanBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i>';
            scanLoading.classList.remove('hidden');
            scanResult.classList.add('hidden');

            setTimeout(() => {
                scanBtn.disabled = false;
                scanBtn.innerHTML = '<span>SCAN</span><i class="fa-solid fa-bolt"></i>';
                scanLoading.classList.add('hidden');
                
                scanResult.classList.remove('hidden');
                
            }, 2000);
        });
    }

    const ctx = document.getElementById('trendChart');
    if(ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Politik', 'Kesehatan', 'Penipuan', 'SARA', 'Lainnya'],
                datasets: [{
                    label: 'Laporan',
                    data: [65, 40, 55, 30, 20],
                    backgroundColor: [
                        'rgba(239, 68, 68, 0.8)', 
                        'rgba(132, 204, 22, 0.8)', 
                        'rgba(6, 182, 212, 0.8)', 
                        'rgba(168, 85, 247, 0.8)', 
                        'rgba(148, 163, 184, 0.5)'
                    ],
                    borderColor: 'transparent',
                    borderRadius: 4,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: {
                        grid: { color: 'rgba(255, 255, 255, 0.05)' },
                        ticks: { color: '#64748b' }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { color: '#94a3b8' }
                    }
                }
            }
        });
    }

    const observerOptions = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.counter');
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    const duration = 2000; // ms
                    const increment = target / (duration / 20);
                    
                    let current = 0;
                    const updateCounter = () => {
                        current += increment;
                        if(current < target) {
                            counter.innerText = Math.ceil(current);
                            setTimeout(updateCounter, 20);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCounter();
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const trendsSection = document.getElementById('trends');
    if(trendsSection) observer.observe(trendsSection);
});
