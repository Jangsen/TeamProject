//마우스 오버 이미지 바꾸기

  const change_image = document.querySelector("#change_image");
  const image_box1 = document.querySelector(".side_image1");
  const image_box2 = document.querySelector(".side_image2");
  const image_box3 = document.querySelector(".side_image3");
  const button1 = document.querySelector("#num1");
  const button2 = document.querySelector("#num2");
  const button3 = document.querySelector("#num3");
  const mydiv1 = document.querySelector('.test1')
  const mydiv2 = document.querySelector('.test2')
  const mydiv3 = document.querySelector('.test3')

// 마우스 오버되면 상세보기 끄기 / 이미지 바꾸기
  image_box1.addEventListener("mouseover", function(){
    change_image.src="../img/청룡.png"
    mydiv2.style.visibility = "hidden"
    mydiv3.style.visibility = "hidden"
    //마우스 오버 시 div 클래스 변경
    button1.style.visibility ="visible"
    button2.style.visibility ="hidden"
    button3.style.visibility ="hidden"
    
  });
  image_box2.addEventListener("mouseover", function(){
    change_image.src="../img/2.png"
    //마우스오버 상세정보 사라지기
    mydiv1.style.visibility = "hidden"
    mydiv3.style.visibility = "hidden"

    //마우스오버 버튼 남기기
    button1.style.visibility ="hidden"
    button2.style.visibility ="visible"
    button3.style.visibility ="hidden"
  });
  image_box3.addEventListener("mouseenter", function(){
    change_image.src="../img/3.png"
    
    //마우스오버 상세정보 사라지기
    mydiv1.style.visibility = "hidden"
    mydiv2.style.visibility = "hidden"
    
    //마우스오버 버튼 남기기
    button1.style.visibility ="hidden"
    button2.style.visibility ="hidden"
    button3.style.visibility ="visible"
  });

//버튼으로 상세 정보 출력
  function btnClick1() {
    const mydiv = document.querySelector('.test1');

    if(mydiv.style.visibility === 'hidden') {
      mydiv.style.visibility = 'visible';
    }else {
      mydiv.style.visibility = 'hidden';
    }
  }
  function btnClick2() {
    const mydiv = document.querySelector('.test2');

    if(mydiv.style.visibility === 'hidden') {
      mydiv.style.visibility = 'visible';
    }else {
      mydiv.style.visibility = 'hidden';
    }
  }
  function btnClick3() {
    const mydiv = document.querySelector('.test3');

    if(mydiv.style.visibility === 'hidden') {
      mydiv.style.visibility = 'visible';
    }else {
      mydiv.style.visibility = 'hidden';
    }
  }






  //  image_box1.addEventListener("mouseleave", function(){
  //   change_image.src="images/왼쪽 이벤트1.png"
  //  })
