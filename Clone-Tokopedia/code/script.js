"use strict";

const topUpItem = $(".top-up-item");
const noTelp = $(".no-telp");
const buttonBuy = $(".btn-buy");
const nominal = $(".nominal");
let index = 0;
let valuePilihan = "Pulsa";
$("document").ready(function () {
  const element = `  <option selected value="0"></option>
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
    nominal.append(valuePilihan === "Pulsa" ? element : element2);
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

$("document").ready(function () {
  buttonBuy.on("click", function () {
    const nominalValue = $(".nominal option:selected").text();
    let confirmBuy;
    if (confirmBuy) {
      if (valuePilihan === "Pulsa") {
        const spliceMoney = nominalValue.split(".");
        confirmBuy = confirm(`Pembelian pulsa sebesar ${nominalValue}`);

        if (Number(spliceMoney[0] >= 10)) {
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
      }
    } else {
      confirmBuy = confirm(
        `Pembelian paket data ${
          nominalValue.split("/")[0]
        } ke nomor ${noTelp.val()}`
      );
      if (confirmBuy) {
        alert(
          `Pembelian paket data ${
            nominalValue.split("/")[1]
          } ke nomor ${noTelp.val()} sedang di proses. Terima kasih :) `
        );
      }
    }
  });
});
