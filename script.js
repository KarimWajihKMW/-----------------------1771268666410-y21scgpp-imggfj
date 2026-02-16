console.log('Akwadra Super Builder Initialized');

// --- ORIGINAL FUNCTIONALITY PRESERVED ---
document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    if (card) {
        card.addEventListener('click', () => {
            console.log('تم النقر على البطاقة!');
            alert('أهلاً بك في عالم البناء بدون كود! استمتع بمنصة الفيديو الجديدة.');
        });
    }
});
// --------------------------------------

// --- NEW YOUTUBE PLATFORM LOGIC ---

// Dummy Data Generator
const videos = [
    {
        id: 1,
        title: "كيف تبدأ البرمجة في 2024؟ الدليل الشامل",
        channel: "أكوادرا تك",
        views: "120K",
        time: "قبل يومين",
        duration: "15:30",
        thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        avatar: "https://ui-avatars.com/api/?name=AT&background=0D8ABC&color=fff"
    },
    {
        id: 2,
        title: "أفضل 10 أماكن سياحية في العالم",
        channel: "سافر معنا",
        views: "450K",
        time: "قبل أسبوع",
        duration: "08:45",
        thumbnail: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        avatar: "https://ui-avatars.com/api/?name=Travel&background=FF5722&color=fff"
    },
    {
        id: 3,
        title: "مراجعة هاتف آيفون 15 برو ماكس",
        channel: "تقنية بلس",
        views: "1.2M",
        time: "قبل 3 أيام",
        duration: "12:20",
        thumbnail: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        avatar: "https://ui-avatars.com/api/?name=TP&background=4CAF50&color=fff"
    },
    {
        id: 4,
        title: "تعلم الطبخ: طريقة عمل الباستا الإيطالية",
        channel: "مطبخ الشيف",
        views: "89K",
        time: "قبل 5 ساعات",
        duration: "10:05",
        thumbnail: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        avatar: "https://ui-avatars.com/api/?name=Chef&background=E91E63&color=fff"
    },
    {
        id: 5,
        title: "موسيقى هادئة للدراسة والتركيز",
        channel: "LoFi World",
        views: "3.5M",
        time: "قبل شهر",
        duration: "1:00:00",
        thumbnail: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        avatar: "https://ui-avatars.com/api/?name=LoFi&background=673AB7&color=fff"
    },
    {
        id: 6,
        title: "ملخص مباراة ريال مدريد وبرشلونة",
        channel: "الكورة لايف",
        views: "2.1M",
        time: "قبل 12 ساعة",
        duration: "09:15",
        thumbnail: "https://images.unsplash.com/photo-1579952363873-27f3bde9be2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        avatar: "https://ui-avatars.com/api/?name=Sport&background=2196F3&color=fff"
    },
    {
        id: 7,
        title: "تصميم واجهات المستخدم UI/UX للمبتدئين",
        channel: "Akwadra Academy",
        views: "56K",
        time: "قبل 4 أيام",
        duration: "45:20",
        thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        avatar: "https://ui-avatars.com/api/?name=AA&background=000&color=fff"
    },
    {
        id: 8,
        title: "جولة في الفضاء: حقائق مذهلة",
        channel: "SpaceX Fan",
        views: "770K",
        time: "قبل أسبوعين",
        duration: "18:10",
        thumbnail: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        avatar: "https://ui-avatars.com/api/?name=SF&background=607D8B&color=fff"
    }
];

// Render Videos
function renderVideos() {
    const grid = document.getElementById('video-grid');
    if (!grid) return;

    let html = '';
    videos.forEach(video => {
        html += `
        <div class="flex flex-col gap-3 group cursor-pointer video-card" onclick="openVideoModal(${video.id})">
            <div class="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-200 shadow-sm">
                <img src="${video.thumbnail}" alt="${video.title}" class="w-full h-full object-cover transition-transform duration-500 video-image">
                <div class="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity thumbnail-overlay flex items-center justify-center">
                    <div class="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center text-white backdrop-blur-sm">
                        <svg class="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                </div>
                <span class="absolute bottom-2 left-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded font-medium font-sans">${video.duration}</span>
            </div>
            <div class="flex gap-3 items-start">
                <img src="${video.avatar}" alt="${video.channel}" class="w-9 h-9 rounded-full mt-1 object-cover border border-gray-100">
                <div class="flex flex-col">
                    <h3 class="font-bold text-gray-900 leading-tight group-hover:text-indigo-600 transition-colors line-clamp-2">${video.title}</h3>
                    <div class="text-sm text-gray-500 mt-1">
                        <p class="hover:text-gray-800 transition-colors">${video.channel}</p>
                        <p>${video.views} مشاهدة • ${video.time}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    grid.innerHTML = html;
}

// Sidebar Toggle
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const main = document.querySelector('main');

if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', () => {
        // Desktop Toggle
        if (window.innerWidth >= 1024) {
            sidebar.classList.toggle('lg:block');
            sidebar.classList.toggle('hidden');
            main.classList.toggle('lg:mr-64');
        } else {
            // Mobile Toggle Logic (Simplified)
             alert('Sidebar toggle for mobile would go here (or simple visibility toggle)');
        }
    });
}

// Modal Logic
const modal = document.getElementById('video-modal');
const closeModalBtn = document.getElementById('close-modal');

window.openVideoModal = function(id) {
    const video = videos.find(v => v.id === id);
    if (video && modal) {
        // Update Modal Content
        document.getElementById('modal-thumbnail').src = video.thumbnail;
        document.getElementById('modal-title').textContent = video.title;
        document.getElementById('modal-channel').textContent = video.channel;
        document.getElementById('modal-avatar').src = video.avatar;
        document.getElementById('modal-views').textContent = video.views;
        
        // Show Modal
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            modal.querySelector('div').classList.remove('scale-95');
            modal.querySelector('div').classList.add('scale-100');
        }, 10);
    }
};

if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => {
        modal.classList.add('opacity-0');
        modal.querySelector('div').classList.remove('scale-100');
        modal.querySelector('div').classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalBtn.click();
        }
    });
}

// Initialize
renderVideos();
