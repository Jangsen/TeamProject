//마우스 오버 이미지 바꾸기

  const change_image = document.querySelector("#change_image");
  const image_box1 = document.querySelector(".side_image1");
  const image_box2 = document.querySelector(".side_image2");
  const image_box3 = document.querySelector(".side_image3");
  const button = document.querySelector("#num1");



// 마우스 오버되면 상세보기 끄기 / 이미지 바꾸기.
  image_box1.addEventListener("mouseover", function(){
    change_image.src="../img/청룡.png"
    const num = 1;
    const mydiv = document.getElementById('test'+num)
    mydiv.style.visibility = "hidden"
  },btnClick(mydiv));
  image_box2.addEventListener("mouseenter", function(){
    change_image.src="../img/2.png"
    const num = 2;
    const mydiv = document.getElementById('test'+num)
    mydiv.style.visibility = "hidden"
  },btnClick(mydiv));
  image_box3.addEventListener("mouseenter", function(){
    change_image.src="../img/3.png"
    const num = 3;
    const mydiv = document.getElementById('test'+num)
    mydiv.style.visibility = "hidden"
  },btnClick(mydiv));

  function btnClick(mydiv) {
    // const mydiv = document.getElementById('test'+num)
    
    if(mydiv.style.visibility === 'hidden') {
      mydiv.style.visibility = 'visible';

    }else {
      mydiv.style.visibility = 'hidden';
    }
  }



  //  image_box1.addEventListener("mouseleave", function(){
  //   change_image.src="images/왼쪽 이벤트1.png"
  //  })
