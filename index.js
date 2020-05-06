// container 
const blockDownText = document.querySelector('.block-down_text');
// block-up

// btn 
$('.boldBtn').click(function() {
  document.querySelector('.block-down_text').classList.toggle('bold');
});

$(".signBtn").attr("disabled","disabled");

$('.italicBtn').click(function() {
  document.querySelector('.block-down_text').classList.toggle('italic');
});

$('.formatBtn').click(function() {
  document.querySelector('.block-down_text').classList.toggle('underline');
});

$('.strikeBtn').click(function() {
  document.querySelector('.block-down_text').classList.toggle('line-through');
});

$('.leftBtn').click(function() {
  $('.block-down_text').css({'text-align': 'left'});
});

$('.centerBtn').click(function() {
  $('.block-down_text').css({'text-align': 'center'});
});

$('.rightBtn').click(function() {
  $('.block-down_text').css({'text-align': 'right'});
});

// select 

let styleFontFamily = () => {
  const fontSelected = document.getElementById("fontFamily");
  let showSelectFont = fontSelected.options[fontSelected.selectedIndex].value;
  blockDownText.style.fontFamily = `${showSelectFont}`;
}

let styleTextSize = () => {
  const sizeSelected = document.getElementById("sizeText");
  let showSelectSize = sizeSelected.options[sizeSelected.selectedIndex].value;
  blockDownText.style.fontSize = `${showSelectSize}`;
}

// block color 
document.querySelector('.paintBtn').addEventListener('click', () => {
  $('block-color-down-grid').show();
  $('.block-color-text').show();
  $('.block-down').css({'opacity': '20%'});
  $('.block-up').css({'opacity': '20%'});

  $('.block').click((event) => {

    const color = event.originalEvent.toElement.classList[1];
    $('.block-down_text').css({'color': color});
  })
});

$('.block-color-up-btn').click(function() {
  $('.block-color-text').hide();
  $('.block-down').css({'opacity': '1'});
  $('.block-up').css({'opacity': '1'});
});

// block background and img  
$('.imgBtn').click(() => {
  $('.block-background-style').show();
  $('.block-down').css({'opacity': '20%'});
  $('.block-up').css({'opacity': '20%'});
  $('.block-color-down-images').hide();
  $('.block-color-down-grid-color').show();
  $('.block-color-down-file').hide();
});

$('.block-background-style-up-btn').click(function() {
  $('.block-background-style').hide();
  $('.block-down').css({'opacity': '1'});
  $('.block-up').css({'opacity': '1'});
});

// background-color 

$('.choose-color').click(function() {
  $('.block-color-down-grid-color').show();
  $('.block-color-down-images').hide();
  $('.block-color-down-file').hide();

  $('.block-background').click((event) => {
    const color = event.originalEvent.toElement.classList[1];

    $('.block-down').css({'background-color': color, 'background-image': 'none'});
  })
})

// img 
$('.choose-img').click(function() {
  $('.block-color-down-grid-color').hide();
  $('.block-color-down-images').show();
  $('.block-color-down-file').hide();

  $(".img_first").click(() => {
    $('.block-down').css({'background-image': 'url(./img/1.jpg)'});
  });
  $(".img_second").click(() => {
    $('.block-down').css({'background-image': 'url(./img/2.jpg)'});
  });
  $(".img_third").click(() => {
    $('.block-down').css({'background-image': 'url(./img/3.jpg)'});
  });
  $(".img_fourth").click(() => {
    $('.block-down').css({'background-image': 'url(./img/4.jpg)'});
  });
  $(".img_fifth").click(() => {
    $('.block-down').css({'background-image': 'url(./img/5.jpg)'});
  });
  $(".img_sixth").click(() => {
    $('.block-down').css({'background-image': 'url(./img/6.jpg)'});
  });
});

// file

$('.choose-file').click(() => {
  $('.block-color-down-grid-color').hide();
  $('.block-color-down-images').hide();
  $('.block-color-down-file').show();
});

function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          $('.block-down').css('background', 'transparent url('+e.target.result +') left top no-repeat');
      }

      reader.readAsDataURL(input.files[0]);
  }
}

$("#file").change(function() {
  readURL(this);
});

/* sign up  */
const signLogin = document.getElementById('sign-in-login');
const signPassword = document.getElementById('sign-in-password');
const validLogin = /^[a-zA-Z][^#&<>\"~;$^%{}?]{5,20}$/;
const validPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;

$('.padlockBtn').click(() => {
  $('.sign-up').show();
  $('.block-down').css({'opacity': '20%'});
  $('.block-up').css({'opacity': '20%'});
});

$('.sign-in-btn').click(() => {
  // login and password
  if (signLogin.value.match(validLogin) && signPassword.value.match(validPassword)) {
    $('.warning-empty').hide();
    $('.warning-wrong').hide();
    $('.sign-up').hide();
    $('.block-down').css({'opacity': '1'});
    $('.block-up').css({'opacity': '1'});
    document.querySelector(".signBtn").removeAttribute("disabled");
  } else if (signLogin.value.length === 0 && signPassword.value.length === 0) {
    $('.warning-empty').show();
    $('.warning-wrong').hide();
    signLogin.style.border = '3px double rgb(241, 24, 144)';
  }
  else {
    $('.warning-wrong').show();
    $('.warning-empty').hide();
    signLogin.style.border = '3px double rgb(241, 24, 144)';
    signPassword.style.border = '3px double rgb(241, 24, 144)';
  }
});

// signBtn 

$('.signBtn').click(() => {
  $('.block-down').css({
    'background':'inherit',
    'color': 'black'
  });
  $('.block-down_text').hide();
  $('.block-up_items').hide();
  $('.block-down_html').show();
  $('.block-up_icons').css({'display': 'flex'});

  document.getElementById('textarea').value = document.querySelector('.block-down_text').innerHTML;
});

$('.save').click(() => {
  $('.block-down_text').css({'display':'block'});
  $('.block-up_items').show();
  $('.block-down_html').hide();
  $('.block-up_icons').hide();

  document.querySelector('.block-down_text').innerHTML = document.getElementById('textarea').value;
  console.log( document.getElementById('textarea').value)
  console.log()
});

// table 

$('.menu').click(() => {
  $('.table').show();
  $('.block-down').css({'opacity': '20%'});
  $('.block-up').css({'opacity': '20%'});
});

$('.table-up-btn').click(function() {
  $('.table').hide();
  $('.block-down').css({'opacity': '1'});
  $('.block-up').css({'opacity': '1'});
});

$('.reset').click(() => {
  document.forms['border-style'].reset();
  document.forms['formSecond'].reset();
  document.forms['formFirst'].reset();
});

// create table 
$('.save-table').click(() => {
  const trCount = document.forms["formFirst"].countTr.value;
  const tdCount = document.forms["formSecond"].countTd.value;

  const borderWidthValue = document.forms["formFirst"].borderWidth.value;

  const borderTypeSelected = document.getElementById("borderType");
  let showSelectType = borderTypeSelected.options[borderTypeSelected.selectedIndex].value;

  const borderColorSelected = document.getElementById("borderColor");
  let showSelectColor = borderColorSelected.options[borderColorSelected.selectedIndex].value;

  const tdWidth = document.forms["formFirst"].widthTD.value;
  const tdHeight = document.forms["formSecond"].heightTD.value;

  let tbl = document.createElement("table");
  let tblBody = document.createElement("tbody");

  for (let i = 0; i < trCount; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < tdCount; j++) {
      let cell = document.createElement("td");
      let cellText = document.createTextNode("TD");
      cell.style.border = `${borderWidthValue}px ${showSelectType} ${showSelectColor}`;
      cell.style.width = `${tdWidth}px`;
      cell.style.height = `${tdHeight}px`;
      row.style.border = `${borderWidthValue}px ${showSelectType} ${showSelectColor}`;
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  tbl.style.borderCollapse = "collapse";
  tbl.style.border = `${borderWidthValue}px ${showSelectType} ${showSelectColor}`;
  document.getElementById('textarea').value += `<table>${tbl.innerHTML}</table>`;
  $('.block-down_text').innerHTML += document.getElementById('textarea').value;
  
  $('.table').hide();
  $('.block-down').css({'opacity': '1'});
  $('.block-up').css({'opacity': '1'});
});

// tools 
$('.tools').click(() => {
  $('.tools-block').show();
  $('.block-down').css({'opacity': '20%'});
  $('.block-up').css({'opacity': '20%'});
});

$('.tools-up-btn').click(function() {
  $('.tools-block').hide();
  $('.block-down').css({'opacity': '1'});
  $('.block-up').css({'opacity': '1'});
});

$('.reset-tools').click(() => {
  document.forms['tools-form'].reset();
});

// create tools 
$('.create-tools').click(() => {
  document.querySelector('.block-down_text').innerHTML += document.getElementById('textarea').value;

  if (document.querySelector('.tools-down-inp').value.length === 0) {
    $('.warning-tools').show();
    document.querySelector('.tools-down-inp').style.border = '3px double rgb(241, 24, 144)';  
  } else {
    $('.tools-block').hide();
    $('.sign-up').hide();
    $('.block-down').css({'opacity': '1'});
    $('.block-up').css({'opacity': '1'});
  }

  $('#toolsType option').each(() => {
    if($(this).selected === true) {
      $('.tools-block').hide();
      $('.sign-up').hide();
      $('.block-down').css({'opacity': '1'});
      $('.block-up').css({'opacity': '1'});
    } else {
      $('.warning-tools').show();
      document.getElementById('toolsType').style.border = '3px double rgb(241, 24, 144)'; 
    }
  })

  const countLiValue = document.forms["tools-form"].liTools.value;
  const marksSelected = document.getElementById("toolsType");
  let showSelectMark = marksSelected.options[marksSelected.selectedIndex].value;

  let ol = document.createElement("ol");
  for (let k = 0; k < countLiValue; k++) {
    let li = document.createElement("li");
    let liTxt = document.createTextNode(`item ${k}`);
    li.style.listStyleType = `${showSelectMark}`;
    li.appendChild(liTxt);
    ol.appendChild(li);
    ol.style.display = 'block';
  }
  document.getElementById('textarea').appendChild(ol);
  document.getElementById('textarea').value += ol.innerHTML;
});

// list 
$('.list').click(() => {
  $('.list-block').show();
  $('.block-down').css({'opacity': '20%'});
  $('.block-up').css({'opacity': '20%'});
});

$('.list-up-btn').click(function() {
  $('.list-block').hide();
  $('.block-down').css({'opacity': '1'});
  $('.block-up').css({'opacity': '1'});
});

$('.reset-list').click(() => {
  document.forms['list-form'].reset();
});

// create list 
$('.create-list').click(() => {
  document.querySelector('.block-down_text').innerHTML += document.getElementById('textarea').value;

  if (document.querySelector('.list-down-inp').value.length === 0) {
    $('.warning-list').show();
    document.querySelector('.list-down-inp').style.border = '3px double rgb(241, 24, 144)';
  } else {
    $('.list-block').hide();
    $('.sign-up').hide();
    $('.block-down').css({'opacity': '1'});
    $('.block-up').css({'opacity': '1'});
  }

  $('#listType option').each(() => {
    if($(this).selected === true) {
      $('.list-block').hide();
      $('.sign-up').hide();
      $('.block-down').css({'opacity': '1'});
      $('.block-up').css({'opacity': '1'});
    } else {
      $('.warning-list').show();
      document.getElementById('listType').style.border = '3px double rgb(241, 24, 144)'; 
    }
  })

  const countLiValue = document.forms["list-form"].liList.value;
  const marksSelected = document.getElementById("listType");
  let showSelectMark = marksSelected.options[marksSelected.selectedIndex].value;

  let ul = document.createElement("ul");
  for (let k = 0; k < countLiValue; k++) {
    let li = document.createElement("li");
    let liTxt = document.createTextNode(`item ${k}`);
    li.style.listStyleType = `${showSelectMark}`;
    li.appendChild(liTxt);
    ul.appendChild(li);
    ul.style.display = 'block';
  }
  document.getElementById('textarea').appendChild(ul);
  document.getElementById('textarea').value += ul.innerHTML;
});
