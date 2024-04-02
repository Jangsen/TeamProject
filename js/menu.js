document.getElementById('menutap').addEventListener('click', function() {
  var menuTap = document.getElementById('menutap');
  if (menuTap.style.display === 'none') {
      menuTap.style.display = 'block'; // 메뉴를 보이게 함
      this.textContent = '메뉴 닫기';
  } else {
      menuTap.style.display = 'none'; // 메뉴를 숨김
      this.textContent = '메뉴 열기';
  }
});