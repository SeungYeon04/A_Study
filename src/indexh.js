document.addEventListener('DOMContentLoaded', function() {
    const darkToggle = document.getElementById('dark-toggle');
    const whileToggle = document.getElementById('while-toggle');

    // 로컬 스토리지에서 darkMode와 whileMode 상태를 가져옴
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const isWhileMode = localStorage.getItem('whileMode') === 'true';

    // darkMode 상태에 따라 다크 모드 설정
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    } 

    // 다크 모드 토글 이벤트
    darkToggle.addEventListener('click', function() {
        // 다크 모드 상태를 토글하여 저장
        const currentMode = document.body.classList.contains('dark-mode');
        if (!currentMode) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', true);
            // 화이트 모드 비활성화
            document.body.classList.remove('while-mode');
            localStorage.setItem('whileMode', false);
        }
    });

    // whileMode 상태에 따라 화이트 모드 설정
    if (isWhileMode) {
        document.body.classList.add('while-mode');
    }

    // 화이트 모드 토글 이벤트
    whileToggle.addEventListener('click', function() {
        // 화이트 모드 상태를 토글하여 저장
        const currentMode = document.body.classList.contains('while-mode');
        if (!currentMode) {
            document.body.classList.add('while-mode');
            localStorage.setItem('whileMode', true);
            // 다크 모드 비활성화
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', false);
        }
    });
});

