// 示例项目数据
const projects = [
    {
        title: '项目一',
        description: '这是一个示例项目描述...',
        image: 'https://via.placeholder.com/300x200',
        link: '#'
    },
    {
        title: '项目二',
        description: '这是另一个示例项目描述...',
        image: 'https://via.placeholder.com/300x200',
        link: '#'
    },
    {
        title: '项目三',
        description: '这是第三个示例项目描述...',
        image: 'https://via.placeholder.com/300x200',
        link: '#'
    }
];

// 动态加载项目卡片
function loadProjects() {
    const projectGrid = document.querySelector('.project-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" class="project-link">了解更多</a>
            </div>
        `;
        
        projectGrid.appendChild(projectCard);
    });
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
}); 