// 댓글 스크립트 --------------
    //댓글 목록에 추가하기
    const comment = document.querySelector("#comment");
    const client = document.querySelector("#client");
    const comment_save= document.querySelector("#comment-save");
    const comment_list= document.querySelector(".comment-list");

    comment_save.addEventListener("click", function(e){
      e.preventDefault();

      const cmt = document.createElement("li");
      cmt.innerHTML = `
      ${client.value} - ${comment.value}
      <span class="delButton"> 삭제</span>
      `;
      comment_list.appendChild(cmt);

      comment.value ="";
      client.value="";
      
      //댓글 삭제하기
      //삭제 버튼 가져오기
      const delButtons = document.querySelectorAll(".delButton"); // '삭제' 버튼 모두 가져오기

for (let delButton of delButtons) {
  delButton.addEventListener("click", function () {
    this.parentNode.parentNode.removeChild(this.parentNode);
    // 아래와 같이 변수를 사용할 수도 있음
    // let list = this.parentNode;
    // list.parentNode.removeChild(list);
  });
}
});

//좋아요 스크립트 --------------
let likeBtn = document.getElementById('likeBtn');
let likeCount = document.getElementById('likeCount');
let isLiked = false;
let likes = 0;

likeBtn.addEventListener('click', function() {
  if (!isLiked) {
    isLiked = true;
    likes++;
    likeBtn.style.backgroundColor = '#dc3545';
    likeBtn.textContent = '좋아요 취소';
  } else {
    isLiked = false;
    likes--;
    likeBtn.style.backgroundColor = '#007bff';
    likeBtn.textContent = '좋아요';
  }
  likeCount.textContent = likes;
});

var mapContainer = document.getElementById('map'), // 지도를 표시할 div
mapOption = {
    center: new daum.maps.LatLng(37.537187, 127.005476), // 지도의 중심좌표
    level: 5 // 지도의 확대 레벨
};
//----------------------------------------------------------------------지도
//지도를 미리 생성
var map = new daum.maps.Map(mapContainer, mapOption);
//주소-좌표 변환 객체를 생성
var geocoder = new daum.maps.services.Geocoder();
//마커를 미리 생성
var marker = new daum.maps.Marker({
position: new daum.maps.LatLng(37.537187, 127.005476),
map: map
});



