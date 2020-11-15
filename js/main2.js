$(function(){
  var clipboard = new Clipboard('.clipboard');
  var title = [
    "Selenium",
    "pink flower",
    "orange fun",
    "digital water",
    "argon",
    "summer",
    "orange coral",
    "purpink",
    "dull",
    "broker hearts",
    "subu",
    "crimson tide",
    "alive",
    "relay",
    "meredian",
    "mello",
    "crystal clear",
    "sunkist",
    "html",
    "maldives",
    "celestial",
    "love and liberty",
    "CYFTLT",
    "honey dew",
    "roseanna",
    "easy med",
    "vice city",
    "ibiza sunset",
    "radar",
    "black rose",
    "cosmic fusion",
    "eds dunset gradient",
    "firewatch",
    "mauve",
    "dusk",
    "sweet morning",
    "tranquil",
    "deep space",
    "haikus",
    "purplin",
    "blush",
    "back to earth",
    "master card",
    "passion",
    "timber",
    "piglet",
    "flicker",
    "atals",
    "martini",
    "a lost memory",
    "blurry peach",
    "day tripper",
    "shrimpy",
    "bourbon",
    "clouds",
    "peach",
    "sea blitzz",
    "electric voilet",
    "juicy orange",
    "cherry",
    "sea weed",
    "boody mary",
    "intutive purple",
    "reds"
  ];

  var gradCode = ["background-color: #3C3B3F;background-image: -webkit-linear-gradient(-289deg, #3C3B3F, #605C3C);background-image: linear-gradient(19deg,#3C3B3F, #605C3C); ",
                  "background-color: #800080;background-image: -webkit-linear-gradient(-289deg, #800080, #ffc0cb);background-image: linear-gradient(19deg,#800080, #ffc0cb); ",

"  background-color: #fc4a1a;background-image: -webkit-linear-gradient(-289deg, #fc4a1a, #f7b733);  background-image: linear-gradient(19deg,#fc4a1a, #f7b733); ",
"  background-color: #74ebd5;  background-image: -webkit-linear-gradient(-289deg, #74ebd5, #ACB6E5);  background-image: linear-gradient(19deg,#74ebd5, #ACB6E5); ",

"  background-color: #03001e;  background-image: -webkit-linear-gradient(-289deg, #03001e, #7303c0, #ec38bc, #fdeff9);  background-image: linear-gradient(19deg,#03001e, #7303c0, #ec38bc, #fdeff9); ",

"  background-color: #22c1c3;  background-image: -webkit-linear-gradient(-289deg, #22c1c3, #fdbb2d);  background-image: linear-gradient(19deg,#22c1c3, #fdbb2d); ",

"  background-color: #ff9966;  background-image: -webkit-linear-gradient(-289deg, #ff9966, #ff5e62);  background-image: linear-gradient(19deg,#ff9966, #ff5e62); ",

"  background-color: #7F00FF;  background-image: -webkit-linear-gradient(-289deg, #7F00FF, #E100FF);  background-image: linear-gradient(19deg,#7F00FF, #E100FF); ",

"  background-color: #C9D6FF;  background-image: -webkit-linear-gradient(-289deg, #C9D6FF, #E2E2E2);  background-image: linear-gradient(19deg,#C9D6FF, #E2E2E2); ",

"  background-color: #d9a7c7;  background-image: -webkit-linear-gradient(-289deg, #d9a7c7, #fffcdc);  background-image: linear-gradient(19deg,#d9a7c7, #fffcdc); ",

"  background-color: #0cebeb;  background-image: -webkit-linear-gradient(-289deg, #0cebeb, #20e3b2, #29ffc6);  background-image: linear-gradient(19deg,#0cebeb, #20e3b2, #29ffc6); ",

"  background-color: #642B73;  background-image: -webkit-linear-gradient(-289deg, #642B73, #C6426E);  background-image: linear-gradient(19deg,#642B73, #C6426E); ",

"  background-color: #CB356B;  background-image: -webkit-linear-gradient(-289deg, #CB356B, #BD3F32);  background-image: linear-gradient(19deg,#CB356B, #BD3F32); ",

"  background-color: #3A1C71;  background-image: -webkit-linear-gradient(-289deg, #3A1C71, #D76D77, #FFAF7B);  background-image: linear-gradient(19deg,#3A1C71, #D76D77, #FFAF7B); ",

"  background-color: #283c86;  background-image: -webkit-linear-gradient(-289deg, #283c86, #45a247);  background-image: linear-gradient(19deg,#283c86, #45a247); ",

"  background-color: #c0392b;  background-image: -webkit-linear-gradient(-289deg, #c0392b, #8e44ad);  background-image: linear-gradient(19deg,#c0392b, #8e44ad); ",

"  background-color: #159957;  background-image: -webkit-linear-gradient(-289deg, #159957, #155799);  background-image: linear-gradient(19deg,#159957, #155799); ",

"  background-color: #F2994A;  background-image: -webkit-linear-gradient(-289deg, #F2994A, #F2C94C);  background-image: linear-gradient(19deg,#F2994A, #F2C94C); ",

"  background-color: #E44D26;  background-image: -webkit-linear-gradient(-289deg, #E44D26, #F16529);  background-image: linear-gradient(19deg,#E44D26, #F16529); ",

"  background-color: #B2FEFA;  background-image: -webkit-linear-gradient(-289deg, #B2FEFA, #0ED2F7);  background-image: linear-gradient(19deg,#B2FEFA, #0ED2F7); ",

"  background-color: #C33764;  background-image: -webkit-linear-gradient(-289deg, #C33764, #1D2671);  background-image: linear-gradient(19deg,#C33764, #1D2671); ",

"  background-color: #200122;  background-image: -webkit-linear-gradient(-289deg, #200122, #6f0000);  background-image: linear-gradient(19deg,#200122, #6f0000); ",

"  background-color: #4568DC;  background-image: -webkit-linear-gradient(-289deg, #4568DC, #B06AB3);  background-image: linear-gradient(19deg,#4568DC, #B06AB3); ",

"  background-color: #B06AB3;  background-image: -webkit-linear-gradient(-289deg, #B06AB3, #F8FFAE);  background-image: linear-gradient(19deg,#B06AB3, #F8FFAE); ",

"  background-color: #FFAFBD;  background-image: -webkit-linear-gradient(-289deg, #FFAFBD, #ffc3a0);  background-image: linear-gradient(19deg,#FFAFBD, #ffc3a0); ",

"  background-color: #DCE35B;  background-image: -webkit-linear-gradient(-289deg, #DCE35B, #45B649);  background-image: linear-gradient(19deg,#DCE35B, #45B649); ",

"  background-color: #3494E6;  background-image: -webkit-linear-gradient(-289deg, #3494E6, #EC6EAD);  background-image: linear-gradient(19deg,#3494E6, #EC6EAD); ",
"  background-color: #ee0979;  background-image: -webkit-linear-gradient(-289deg, #ee0979, #ff6a00);  background-image: linear-gradient(19deg,#ee0979, #ff6a00); ",

"  background-color: #CF8BF3;  background-image: -webkit-linear-gradient(-289deg, #CF8BF3, #FDB99B);  background-image: linear-gradient(19deg,#CF8BF3, #FDB99B); ",

"  background-color: #f4c4f3;  background-image: -webkit-linear-gradient(-289deg, #f4c4f3, #fc67fa);  background-image: linear-gradient(19deg,#f4c4f3, #fc67fa); ",

"  background-color: #ff00cc;  background-image: -webkit-linear-gradient(-289deg, #ff00cc, #333399);  background-image: linear-gradient(19deg,#ff00cc, #333399); ",

"  background-color: #ff7e5f;  background-image: -webkit-linear-gradient(-289deg, #ff7e5f, #feb47b);  background-image: linear-gradient(19deg,#ff7e5f, #feb47b); ",

"  background-color: #cb2d3e;  background-image: -webkit-linear-gradient(-289deg, #cb2d3e, #ef473a);  background-image: linear-gradient(19deg,#cb2d3e, #ef473a); ",

"  background-color: #42275a;  background-image: -webkit-linear-gradient(-289deg, #42275a, #734b6d);  background-image: linear-gradient(19deg,#42275a, #734b6d); ",

"  background-color: #ffd89b;  background-image: -webkit-linear-gradient(-289deg, #ffd89b, #19547b);  background-image: linear-gradient(19deg,#ffd89b, #19547b); ",

"  background-color: #FF5F6D;  background-image: -webkit-linear-gradient(-289deg, #FF5F6D, #FFC371);  background-image: linear-gradient(19deg,#FF5F6D, #FFC371); ",

"  background-color: #EECDA3;  background-image: -webkit-linear-gradient(-289deg, #EECDA3, #EF629F);  background-image: linear-gradient(19deg,#EECDA3, #EF629F); ",

"  background-color: #000000;  background-image: -webkit-linear-gradient(-289deg, #000000, #434343);  background-image: linear-gradient(19deg,#000000, #434343); ",

"  background-color: #fd746c;  background-image: -webkit-linear-gradient(-289deg, #fd746c, #ff9068);  background-image: linear-gradient(19deg,#fd746c, #ff9068); ",

"  background-color: #6a3093;  background-image: -webkit-linear-gradient(-289deg, #6a3093, #a044ff);  background-image: linear-gradient(19deg,#6a3093, #a044ff); ",

"  background-color: #B24592;  background-image: -webkit-linear-gradient(-289deg, #B24592, #F15F79);  background-image: linear-gradient(19deg,#B24592, #F15F79); ",

"  background-color: #00C9FF;  background-image: -webkit-linear-gradient(-289deg, #00C9FF, #92FE9D);  background-image: linear-gradient(19deg,#00C9FF, #92FE9D); ",

"  background-color: #f46b45;  background-image: -webkit-linear-gradient(-289deg, #f46b45, #eea849);  background-image: linear-gradient(19deg,#f46b45, #eea849); ",

"  background-color: #e53935;  background-image: -webkit-linear-gradient(-289deg, #e53935, #e35d5b);  background-image: linear-gradient(19deg,#e53935, #e35d5b); ",

"  background-color: #fc00ff;  background-image: -webkit-linear-gradient(-289deg, #fc00ff, #00dbde);  background-image: linear-gradient(19deg,#fc00ff, #00dbde); ",

"  background-color: #ee9ca7;  background-image: -webkit-linear-gradient(-289deg, #ee9ca7, #ffdde1);  background-image: linear-gradient(19deg,#ee9ca7, #ffdde1); ",

"  background-color: #ff0084;  background-image: -webkit-linear-gradient(-289deg, #ff0084, #33001b);  background-image: linear-gradient(19deg,#ff0084, #33001b); ",

"  background-color: #FEAC5E;  background-image: -webkit-linear-gradient(-289deg, #FEAC5E, #C779D0, #4BC0C8);  background-image: linear-gradient(19deg,#FEAC5E, #C779D0, #4BC0C8); ",

"  background-color: #FDFC47;  background-image: -webkit-linear-gradient(-289deg, #FDFC47, #24FE41);  background-image: linear-gradient(19deg,#FDFC47, #24FE41); ",

"  background-color: #DE6262;  background-image: -webkit-linear-gradient(-289deg, #DE6262, #FFB88C);  background-image: linear-gradient(19deg,#DE6262, #FFB88C); ",

"  background-color: #d53369;  background-image: -webkit-linear-gradient(-289deg, #d53369, #cbad6d);  background-image: linear-gradient(19deg,#d53369, #cbad6d); ",

"  background-color: #f857a6;  background-image: -webkit-linear-gradient(-289deg, #f857a6, #ff5858);  background-image: linear-gradient(19deg,#f857a6, #ff5858); ",

"  background-color: #e43a15;  background-image: -webkit-linear-gradient(-289deg, #e43a15, #e65245);  background-image: linear-gradient(19deg,#e43a15, #e65245); ",

"  background-color: #EC6F66;  background-image: -webkit-linear-gradient(-289deg, #EC6F66, #F3A183);  background-image: linear-gradient(19deg,#EC6F66, #F3A183); ",

"  background-color: #ECE9E6;  background-image: -webkit-linear-gradient(-289deg, #ECE9E6, #FFFFFF);  background-image: linear-gradient(19deg,#ECE9E6, #FFFFFF); ",

"  background-color: #ED4264;  background-image: -webkit-linear-gradient(-289deg, #ED4264, #FFEDBC);  background-image: linear-gradient(19deg,#ED4264, #FFEDBC); ",

"  background-color: #1CD8D2;  background-image: -webkit-linear-gradient(-289deg, #1CD8D2, #93EDC7);  background-image: linear-gradient(19deg,#1CD8D2, #93EDC7); ",

"  background-color: #4776E6;  background-image: -webkit-linear-gradient(-289deg, #4776E6, #8E54E9);  background-image: linear-gradient(19deg,#4776E6, #8E54E9); ",

"  background-color: #FF8008;  background-image: -webkit-linear-gradient(-289deg, #FF8008, #FFC837);  background-image: linear-gradient(19deg,#FF8008, #FFC837); ",

"  background-color: #EB3349;  background-image: -webkit-linear-gradient(-289deg, #EB3349, #F45C43);  background-image: linear-gradient(19deg,#EB3349, #F45C43); ",

"  background-color: #4CB8C4;  background-image: -webkit-linear-gradient(-289deg, #4CB8C4, #3CD3AD);  background-image: linear-gradient(19deg,#4CB8C4, #3CD3AD); ",

"  background-color: #FF512F;  background-image: -webkit-linear-gradient(-289deg, #FF512F, #DD2476);  background-image: linear-gradient(19deg,#FF512F, #DD2476); ",

"  background-color: #DA22FF;  background-image: -webkit-linear-gradient(-289deg, #DA22FF, #9733EE);  background-image: linear-gradient(19deg,#DA22FF, #9733EE); ",

"  background-color: #D31027;  background-image: -webkit-linear-gradient(-289deg, #D31027, #EA384D);  background-image: linear-gradient(19deg,#D31027, #EA384D); ",

"  background-color: #ec008c;  background-image: -webkit-linear-gradient(-289deg, #ec008c, #fc6767);  background-image: linear-gradient(19deg,#ec008c, #fc6767); "
  ];


    for(var j =1;j<=64;j++){
      $('.rows').append('<div class="boxc"><div class="grad-title"><span>'+title[j-1]+'</span></div><div class="box"><div class="copy-option clipboard"><span>SHOW</span></div><div class="grad-border"></div><div class="grad grad-'+j+'"></div></div></div>');
    }

    var whiteTheme = false;

    $('.rect-box').click(function(){
      if(whiteTheme == false){
        $('.rect-box').css("background-color","#222222");
        $('body').css("background-color","#dddddd");
        whiteTheme = true;
      }else{
        $('.rect-box').css("background-color","white");
        $('body').css("background-color","#222222");
        whiteTheme = false;
      }
      $('.main-back').toggleClass('white-theme');
      $('span').toggleClass('black-text');
    });

  $('.box').each(function(){
    $(this).hover(function(){
      var grad = $(this).find('.grad');
      var copyOption = $(this).find('.copy-option');
        TweenMax.to(grad,0.4,{x: '-4%',y: '-3%'});
        copyOption.css("opacity","0.4");
    },function(){
      var grad = $(this).find('.grad');
      var copyOption = $(this).find('.copy-option');
        TweenMax.to(grad,0.4,{x: '0%',y: '0%'});
        copyOption.css("opacity","0");
    });
  });

  $('.box').each(function(index){
    $(this).click(function(){
      $('.pp-code').text(gradCode[index]);
      $('.pp-heading').text(title[index]);
      console.log("this has been copied "+ gradCode[index]);
      $('.copy-option').css("background-color","#f66");
      setTimeout(function(){$('.copy-option').css("background-color","#ddd");},300);
      $('.pop-up').toggleClass("hidden");
    });
  });


  $('.close-btn').click(function(){
    $('.pop-up').toggleClass("hidden");
  });

});
