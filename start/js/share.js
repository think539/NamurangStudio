const url =

function setShare(){\
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = '심리테스트로 알아보는 나만의 산책길';
  const shareDes = infoList[resultAlt].name;
  const shareImage = url + 'img/image-' + resultAlt + '.png';
  const shareURL = url + 'page/result-' + resultAlt + '.html';
}

function kakaoShare(){
  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: shareDes,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: shareURL,
        wedUrl: shareURL
      },
    },
    buttons: [
      {
        title: '결과확인하기',
        link: {
          mobileWebUrl: shareURL,
          wedUrl: shareURL
        },
      },
    ]
  });
}
