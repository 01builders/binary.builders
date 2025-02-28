document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const scrollContainer = document.querySelector('.posts-scroll');
    const prevBtn = document.querySelector('.posts-list .scroll-arrow:first-child');
    const nextBtn = document.querySelector('.posts-list .scroll-arrow:last-child');

    if (!scrollContainer || !prevBtn || !nextBtn) {
        console.log('Missing required elements');
        return;
    }

    // Functions
    function checkButtons() {
        const scrollLeft = scrollContainer.scrollLeft;
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        
        prevBtn.disabled = scrollLeft <= 0;
        nextBtn.disabled = scrollLeft >= maxScroll;
    }

    function getSnapPoints() {
        const items = Array.from(scrollContainer.children);
        return items.map(item => item.offsetLeft);
    }

    function scrollLeft() {
        const currentScroll = scrollContainer.scrollLeft;
        const snapPoints = getSnapPoints();
        const targetPoint = snapPoints.reverse().find(point => point < currentScroll);
        
        if (targetPoint !== undefined) {
            scrollContainer.scrollTo({
                left: targetPoint,
                behavior: 'smooth'
            });
        }
    }

    function scrollRight() {
        const currentScroll = scrollContainer.scrollLeft;
        const snapPoints = getSnapPoints();
        const targetPoint = snapPoints.find(point => point > currentScroll);
        
        if (targetPoint !== undefined) {
            scrollContainer.scrollTo({
                left: targetPoint,
                behavior: 'smooth'
            });
        }
    }

    // Event Listeners
    prevBtn.addEventListener('click', scrollLeft);
    nextBtn.addEventListener('click', scrollRight);
    scrollContainer.addEventListener('scroll', checkButtons);

    // Initial check
    checkButtons();
}); 