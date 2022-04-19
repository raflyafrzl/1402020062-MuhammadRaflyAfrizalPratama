"use strict";

const topUpItem = $(".top-up-item");
const noTelp = $(".no-telp");
const buttonBuy = $(".btn-buy");
const nominal = $(".nominal");
let index = 0;
let valuePilihan = "Pulsa";
$("document").ready(function () {
  const element = `  <option selected value="0" hidden class ="main-value"></option>
  <option value="1">1.000</option>
  <option value="2">3.000</option>
  <option value="3">5.000</option>
  <option value="4">10.000</option>
  <option value="5">20.000</option>
  <option value="6">25.000</option>
  <option value="7">50.000</option>
  <option value="8">100.000</option>`;

  const element2 = `  <option selected value="0"></option>
  <option value="1">Internet 10 GB/Rp30.500</option>
  <option value="2">Internet 15 GB/Rp43.000</option>
  <option value="3">
    Internet Combo Unlimited (Kuota Malem)/Rp20.000
  </option>
  <option value="4">Internet Combo Unlimited/Rp70.000</option>`;
  nominal.append(element);
  topUpItem.on("click", function () {
    valuePilihan = $(this).html();
    nominal.empty();
    noTelp.val("");

    nominal.append(valuePilihan === "Pulsa" ? element : element2);
    initCondition();
  });
});

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

function initCondition() {
  nominal.prop("disabled", true);
  noTelp.on("input", function (e) {
    if (noTelp.val().length > 3) {
      nominal.removeAttr("disabled");
      $(".main-value").html("Pilihan");
      $(".main-value").prop("hidden", true);
    } else {
      nominal.prop("disabled", true);
      $(".main-value").html("");
      nominal.prop("selectedIndex", 0);
    }
  });
  nominal.on("click", function () {});
  nominal.change(function (e) {
    e.preventDefault();
    console.log();
    buttonBuy.removeClass("disabled");
    buttonBuy.removeClass("btn-secondary");
    buttonBuy.css("background-color", "#ed7a21");
    buttonBuy.css("color", "#fff");
  });
}

$("document").ready(function () {
  initCondition();
  buttonBuy.click(function (e) {
    e.preventDefault();
  });
});

$("document").ready(function () {
  buttonBuy.on("click", function () {
    const nominalValue = $(".nominal option:selected").text();
    console.log(nominalValue);
    let confirmBuy;
    confirmBuy = confirm(
      `Pembelian ${valuePilihan === "Pulsa" ? "Pulsa" : "Paket Data"} ${
        valuePilihan === "Pulsa" ? "Sebesar" + nominalValue : nominalValue
      } `
    );

    if (confirmBuy) {
      if (valuePilihan === "Pulsa") {
        const spliceMoney = nominalValue.split(".");
        console.log(spliceMoney);

        if (Number(spliceMoney[0] >= 10)) {
          console.log(spliceMoney[0]);
          alert(
            `Total harga pulsa Rp. ${
              Number(spliceMoney[0]) + 2 + "." + spliceMoney[1]
            },- ke nomor ${noTelp.val()} sedang di proses. Terima kasih :)`
          );
        } else {
          alert(
            `Total harga pulsa Rp. ${
              Number(spliceMoney[0]) + 3 + "." + spliceMoney[1]
            },- ke nomor ${noTelp.val()} sedang di proses. Terima kasih :)`
          );
        }
      } else {
        console.log("OK!");
        if (confirmBuy) {
          alert(
            `Pembelian paket data ${
              nominalValue.split("/")[1]
            } ke nomor ${noTelp.val()} sedang di proses. Terima kasih :) `
          );
        }
      }
    }
  });
});
