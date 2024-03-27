const textElement1 = document.getElementById("text1");
const imageElement = document.getElementById("image");

textElement1.addEventListener("mouseover", function() {
  imageElement.src="img/seoulcafe1.png";
});

const textElement2 = document.getElementById("text2");

textElement2.addEventListener("mouseover", function() {
  imageElement.src = "img/seoulcafe2.png";
});
const textElement3 = document.getElementById("text3");

textElement3.addEventListener("mouseover", function() {
  imageElement.src = "img/seoulcafe3.png";
});
const textElement4 = document.getElementById("text4");

textElement4.addEventListener("mouseover", function() {
  imageElement.src = "img/namsan.png";
});
const textElement5 = document.getElementById("text5");

textElement5.addEventListener("mouseover", function() {
  imageElement.src = "img/wolmido.png";
});
const textElement6 = document.getElementById("text6");

textElement6.addEventListener("mouseover", function() {
  imageElement.src = "img/Oworld.png";
});
const textElement7 = document.getElementById("text7");

textElement7.addEventListener("mouseover", function() {
  imageElement.src = "img/kingsejong.png";
});

// mouseover

let currentIndex = 0;
        const categoryItems = document.querySelectorAll('.intro .center .list');
        const totalItems = categoryItems.length;

        function showCategory(index) {
            categoryItems.forEach(item => {
                item.style.display = 'none';
            });
            categoryItems[index].style.display = 'inline-block';
        }

        function prevCategory() {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            showCategory(currentIndex);
        }

        function nextCategory() {
            currentIndex = (currentIndex + 1) % totalItems;
            showCategory(currentIndex);
        }

        // 페이지 로드 시 첫 번째 카테고리 항목 보이기
        showCategory(currentIndex);