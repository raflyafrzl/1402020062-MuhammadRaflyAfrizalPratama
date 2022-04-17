const topUpItem = $(".top-up-item");
const noTelp = $(".no-telp");
const buttonBuy = $(".btn-buy");
const nominal = $(".nominal");
let index = 0;
$("document").ready(function () {
  for (let i = 0; i < topUpItem.length; i++) {
    topUpItem.eq(i).click(function () {
      if (index != i) {
        topUpItem.eq(i).addClass("item-bot");
        topUpItem.eq(index).removeClass("item-bot");
        index = i;
      } else {
        topUpItem.eq(i).addClass("item-bot");
      }
    });
  }
});
$("document").ready(function () {
  noTelp.on("input", function (e) {
    if (noTelp.val().length > 3) {
      nominal.removeAttr("disabled");
    } else {
      nominal.prop("disabled", true);
      nominal.prop("selectedIndex", 0);
    }
  });
  nominal.change(function (e) {
    e.preventDefault();
    buttonBuy.removeClass("disabled");
    buttonBuy.removeClass("btn-secondary");
    buttonBuy.css("background-color", "#ed7a21");
    buttonBuy.css("color", "#fff");
  });

  buttonBuy.click(function (e) {
    e.preventDefault();
  });
});
