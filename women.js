//category - womens page js

// var scrollBtn = document.querySelector("#scrollTop");
// scrollBtn.addEventListener("click", function () {
//   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
// });

var productData = [

  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/f/a/fablestreet_dr529whit_1_1d0d6579.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/f/a/fablestreet_dr529whit_2_bde13ad2.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/f/a/fablestreet_dr529whit_3_3adc6465.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/f/a/fablestreet_dr529whit_4_5fd4b2ee.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/f/a/fablestreet_dr529whit_5_0cf36974.jpg?rnd=20200526195200",
    name: "FableStreet",
    desc: "Cotton Drop Shoulder Oversized Shirt Dress - White",
    oldPrice: "2995",
    newPrice: "2696",
    off: "10",
    category: "western",
    color: "white",
    size: "M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/j/k/jkpat3906_1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/j/k/jkpat3906_2.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/j/k/jkpat3906_3.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/j/k/jkpat3906_4.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/j/k/jkpat3906_5.jpg?rnd=20200526195200",
    name: "Jaipur Kurti",
    desc: "Yellow Embroidered Straight Handloom Kurta With Pants (Set of 2)",
    oldPrice: "2799",
    newPrice: "1045",
    off: "63",
    category: "indian",

    color: "yellow",
    size: "XS, S, M, L, XL, 2XL",
  },

  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/y/u/yufekset636bl-1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/y/u/yufekset636bl-2.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/y/u/yufekset636bl-3.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/y/u/yufekset636bl-4.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/y/u/yufekset636bl-5.jpg?rnd=20200526195200",
    name: "Yufta",
    desc: "Sky Blue Leheriya Dyed Straight Kurta",
    oldPrice: "1499",
    newPrice: "750",
    off: "50",
    category: "indian",
    color: "blue",
    size: "XS, S, M, L, XL, 2XL",
  },

  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/1/9/19aua10784-700501_1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/1/9/19aua10784-700501_2.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/1/9/19aua10784-700501_3.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/1/9/19aua10784-700501_4.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/1/9/19aua10784-700501_5.jpg?rnd=20200526195200",
    name: "Aurelia",
    desc: "Blue Round Neck Yarn-Dyed Kurta",
    oldPrice: "1899",
    newPrice: "950",
    off: "50",
    category: "indian",
    color: "blue",
    size: "XS, S, M, L, XL, 2XL",
  },

  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/m/m/mm-716_1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/m/mm-716_2.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/m/mm-716_3.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/m/mm-716_4.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/m/mm-716_5.jpg?rnd=20200526195200",
    name: "MISH",
    desc: "White Midi Dress",
    oldPrice: "2299",
    newPrice: "1380",
    off: "40",
    category: "western",
    color: "white",
    size: "M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/d/b/dbnset1667blk_1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/b/dbnset1667blk_2.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/b/dbnset1667blk_3.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/b/dbnset1667blk_4.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/b/dbnset1667blk_5.jpg?rnd=20200526195200",
    name: "Yufta",
    desc: "Black Solid Kurta With Palazzo & Dupatta (Set of 3)",
    oldPrice: "2999",
    newPrice: "1500",
    off: "50",
    category: "indian",

    color: "black",
    size: "XS, S, M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/g/1/g1031_1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/g/1/g1031_1.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/g/1/g1031_2.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/g/1/g1031_3.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/g/1/g1031_4.jpg?rnd=20200526195200",
    name: "Gerua ",
    desc: "Grey Solid One Side Pocket Cotton Straight Kurta",
    oldPrice: "2200",
    newPrice: "594",
    off: "73",
    category: "indian",

    color: "grey",
    size: "XS, S, M, L, XL, 2XL"
  },

  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/d/r/drf501370_1_df09a6e2.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/r/drf501370_2_be8362f1.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/r/drf501370_3_47751d7a.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/r/drf501370_4_c8d7ecd9.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/r/drf501370_5_79e02430.jpg?rnd=20200526195200",
    name: "The Vanca",
    desc: "Women's Blue Printed Flared Dress",
    oldPrice: "1799",
    newPrice: "936",
    off: "48",
    category: "western",

    color: "blue",
    size: "XS, S, M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/w/h/white-polka-dot-ruffle-fit-and-flare-short-dress_1_ae3828d6.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/w/h/white-polka-dot-ruffle-fit-and-flare-short-dress_2_80b1986e.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/w/h/white-polka-dot-ruffle-fit-and-flare-short-dress_3_0b590652.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/w/h/white-polka-dot-ruffle-fit-and-flare-short-dress_4_3db79504.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/w/h/white-polka-dot-ruffle-fit-and-flare-short-dress_5_f240d5e7.jpg?rnd=20200526195200",
    name: "Label Shaurya Sanadhya",
    desc: "White Polka Dot Ruffle Fit And Flare Short Dress",
    oldPrice: "2700",
    newPrice: "2160",
    off: "20",
    category: "western",
    color: "white",
    size: "M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/d/r/drs04110_1_36fdbaf1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/r/drs04110_2_f5d3c663.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/r/drs04110_3_e93f293d.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/r/drs04110_4_84120934.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/r/drs04110_5_4376e5e0.jpg?rnd=20200526195200",
    name: "Faballey",
    desc: "Navy Polka Belted Halter Maxi Dress",
    oldPrice: "2600",
    newPrice: "1300",
    off: "50",
    category: "western",

    color: "blue",
    size: "XS, S, M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/l/a/lavanyathelabel_lbl101ks70_1_68a0294f.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/a/lavanyathelabel_lbl101ks70_3_28251f9c.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/a/lavanyathelabel_lbl101ks70_4_5da34911.jpg?rnd=20200526195200",
    img3: "https://images-static.nykaa.com/fashion-prod-explore/posts/18174190918084653/urls/jqzlnptjkv_245330922_581282936422425_3433585581573493570_n.jpg",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/a/lavanyathelabel_lbl101ks70_1_68a0294f.jpg?rnd=20200526195200",
    name: "Lavanya The Label",
    desc: "Blue Solid Lehenga And Choli With Dupatta (Set of 3)",
    oldPrice: "6500",
    newPrice: "5850",
    off: "10",
    category: "indian",

    color: "blue",
    size: "XS, S, M, L, XL, 2XL"
  }
  , {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/l/a/lavanyathelabel_lbl101ks107_01_857f2b4d.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/a/lavanyathelabel_lbl101ks107_02_c612da3d.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/a/lavanyathelabel_lbl101ks107_03_226d7613.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/a/lavanyathelabel_lbl101ks107_04_fa160568.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/a/lavanyathelabel_lbl101ks107_01_857f2b4d.jpg?rnd=20200526195200",
    name: "Lavanya The Label",
    desc: "Red Saree With Stitched Blouse (Set of 2)",
    oldPrice: "6499",
    newPrice: "5850",
    off: "10",
    category: "indian",

    color: "red",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/o/n/onedp0001_1_b0a7e4e1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/o/n/onedp0001_2_a29e7c7f.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/o/n/onedp0001_3_fe22aa33.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/o/n/onedp0001_4_6c5f5e90.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/o/n/onedp0001_5_dce73359.jpg?rnd=20200526195200",
    name: "ONEWE INDIA",
    desc: "Roses Suit (Set of 3)",
    oldPrice: "4950",
    newPrice: "3550",
    off: "10",
    category: "indian",

    color: "white",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/p/o/powder-blue-floral-a-line-fit-and-flare-short-dress-with-back-bow-tie_1_cdc7c0c7.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/p/o/powder-blue-floral-a-line-fit-and-flare-short-dress-with-back-bow-tie_2_ab35ec6a.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/p/o/powder-blue-floral-a-line-fit-and-flare-short-dress-with-back-bow-tie_3_14908c16.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/p/o/powder-blue-floral-a-line-fit-and-flare-short-dress-with-back-bow-tie_4_b4378eeb.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/p/o/powder-blue-floral-a-line-fit-and-flare-short-dress-with-back-bow-tie_5_47b9873c.jpg?rnd=20200526195200",
    name: "Label Shaurya Sanadhya",
    desc: "Powder Blue Floral A-Line Fit And Flare Short Dress With Back Bow Tie",
    oldPrice: "2150",
    newPrice: "1720",
    off: "20",
    category: "western",

    color: "blue",
    size: "XS, S, M, L, XL, 2XL",
  },

  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/i/n/indoera-ie27kt0bl1670_0d47794a.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/i/n/indoera-ie27kt0bl1670_1_7db7573a.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/i/n/indoera-ie27kt0bl1670_2_5b389949.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/i/n/indoera-ie27kt0bl1670_3_f88e3338.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/i/n/indoera-ie27kt0bl1670_3-2_985be5ec.jpg?rnd=20200526195200",
    name: "Indo Era",
    desc: "Blue Printed Anarkali Kurta",
    oldPrice: "1499",
    newPrice: "945",
    off: "37",
    category: "indian",
    color: "blue",
    size: "XS, S, M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/f/e/festive16130aw20yel_1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/f/e/festive16130aw20yel_2.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/f/e/festive16130aw20yel_3.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/f/e/festive16130aw20yel_4.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/f/e/festive16130aw20yel_5.jpg?rnd=20200526195200",
    name: "Biba",
    desc: "Yellow Printed Kurta",
    oldPrice: "1699",
    newPrice: "1190",
    off: "30",
    category: "indian",
    color: "yellow",
    size: "S, M, L, XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/m/n/mnmfestive14102aw21yel_1_baf9ae78.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/n/mnmfestive14102aw21yel_2_481b60e4.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/n/mnmfestive14102aw21yel_3_d0c15bea.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/n/mnmfestive14102aw21yel_4_a80b8274.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/n/mnmfestive14102aw21yel_5_ae6c82dd.jpg?rnd=20200526195200",
    name: "Biba",
    desc: "Yellow Straight Viscose Kurtas",
    oldPrice: "1699",
    newPrice: "509",
    off: "70",
    category: "indian",
    color: "yellow",
    size: "S, M, L, XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/j/n/jne3294-kr.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/j/n/jne3294-kr_1.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/j/n/jne3294-kr_2.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/j/n/jne3294-kr_3.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/j/n/jne3294-kr_4.jpg?rnd=20200526195200",
    name: "Janasya",
    desc: "Yellow Poly Crepe Kurta",
    oldPrice: "2000",
    newPrice: "500",
    off: "75",
    category: "indian",
    color: "yellow",
    size: "S, M, L, XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/s/a/sai1-20160514_1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/a/sai1-20160514_2.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/a/sai1-20160514_3.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/a/sai1-20160514_2.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/a/sai1-20160514_3.jpg?rnd=20200526195200",
    name: "Aara",
    desc: "Blue Pleated Square Neck Dress",
    oldPrice: "1999",
    newPrice: "1000",
    off: "50",
    category: "western",

    color: "blue",
    size: "XS, S, M, L, XL, 2XL",
  },

  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/f/a/fashor_ka077b-2155391907_1_787f335e.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/f/a/fashor_ka077b-2155391907_2_d19d027d.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/f/a/fashor_ka077b-2155391907_3_f7d0a863.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/f/a/fashor_ka077b-2155391907_4_f2c88358.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/f/a/fashor_ka077b-2155391907_5_488da0d3.jpg?rnd=20200526195200",
    name: "FASHOR",
    desc: "Floral Khari Printed & Embroidered Straight",
    oldPrice: "2199",
    newPrice: "949",
    off: "57",
    category: "indian",
    color: "yellow",
    size: "S, M, L, XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/s/u/summere15562ss20wht_1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/u/summere15562ss20wht_2.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/u/summere15562ss20wht_3.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/u/summere15562ss20wht_4.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/u/summere15562ss20wht_5.jpg?rnd=20200526195200",
    name: "Biba",
    desc: "White Printed Kurta With Inner Slip (Set of 2)",
    oldPrice: "2299",
    newPrice: "1150",
    off: "50",
    category: "indian",
    color: "white",
    size: "XS, S, M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/z/_/z_zikury3458_1_a0bd282a.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/z/_/z_zikury3458_2_935d78fc.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/z/_/z_zikury3458_3_1227d728.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/z/_/z_zikury3458_4_ed8e25e3.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/z/_/z_zikury3458_5_00fce311.jpg?rnd=20200526195200",
    name: "Ziyaa",
    desc: "Women's White Color Screen Print Straight",
    oldPrice: "1853",
    newPrice: "834",
    off: "55",
    category: "indian",
    color: "white",
    size: "XS, S, M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/k/s/ksut12321001_1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/k/s/ksut12321001_2.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/k/s/ksut12321001_3.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/k/s/ksut12321001_4.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/k/s/ksut12321001_1.jpg?rnd=20200526195200",
    name: "KSUT",
    desc: "White Checks Kurta",
    oldPrice: "1399",
    newPrice: "621",
    off: "56",
    category: "indian",
    color: "white",
    size: "XS, S, M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/s/h/sh007re_1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/h/sh007re_2.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/h/sh007re_3.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/h/sh007re_4.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/h/sh007re_5.jpg?rnd=20200526195200",
    name: "Saadgi",
    desc: "Handwork Chikankari White Kurta",
    oldPrice: "3325",
    newPrice: "732",
    off: "78",
    category: "indian",
    color: "white",
    size: "XS, S, M, L, XL, 2XL",
  },

  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/d/0/d01437_1_37a0885e.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/0/d01437_2_ac7c55c5.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/0/d01437_3_2774c5c5.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/0/d01437_4_224150fa.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/0/d01437_5_cdc869e5.jpg?rnd=20200526195200",
    name: "Zink London",
    desc: "Women's Blue Polka Dots Dress",
    oldPrice: "2249",
    newPrice: "1125",
    off: "50",
    category: "western",

    color: "blue",
    size: "XS, S, M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/d/r/drf501963_1_44cb0348.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/r/drf501963_2_9b187897.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/r/drf501963_3_ebbcbe3b.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/r/drf501963_4_1e444559.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/r/drf501963_5_552618e3.jpg?rnd=20200526195200",
    name: "The Vanca",
    desc: "Women's Blue Solid Flared Dress",
    oldPrice: "2299",
    newPrice: "1035",
    off: "55",
    category: "western",

    color: "blue",
    size: "XS, S, M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/k/a/kaajh-k_216_1_d6728cf6.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/k/a/kaajh-k_216_2_56c4e705.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/k/a/kaajh-k_216_3_e04e0608.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/k/a/kaajh-k_216_4_f4387f73.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/k/a/kaajh-k_216_5_6a07c633.jpg?rnd=20200526195200",
    name: "KAAJH",
    desc: "Yellow Floral Printed Suit (Set of 3)",
    oldPrice: "3999",
    newPrice: "1600",
    off: "60",
    category: "indian",

    color: "yellow",
    size: "XS, S, M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/g/s/gs397_1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/g/s/gs397_2.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/g/s/gs397_3.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/g/s/gs397_4.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/g/s/gs397_5.jpg?rnd=20200526195200",
    name: "Gerua",
    desc: "Yellow Printed A-Line Kurta And Yellow Printed ",
    oldPrice: "2499",
    newPrice: "1000",
    off: "60",
    category: "indian",

    color: "yellow",
    size: "XS, S, M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/d/b/dbk0235_1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/b/dbk0235_2.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/b/dbk0235_3.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/b/dbk0235_4.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/b/dbk0235_5.jpg?rnd=20200526195200",
    name: "Divena",
    desc: "Yellow Embroidered Khadi Kurta",
    oldPrice: "2399",
    newPrice: "1175",
    off: "51",
    category: "indian",

    color: "yellow",
    size: "XS, S, M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/l/b/lbl101ks33_1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/b/lbl101ks33_2.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/b/lbl101ks33_3.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/b/lbl101ks33_4.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/b/lbl101ks33_5.jpg?rnd=20200526195200",
    name: "Lavanya The Label",
    desc: "Yellow Anarkali Style Kurta With Salwar & Dupatta (Set of 3)",
    oldPrice: "3999",
    newPrice: "3600",
    off: "10",
    category: "indian",

    color: "yellow",
    size: "XS, S, M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/k/s/kssl-9047_1_6e030538.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/k/s/kssl-9047_2_d2d4ba16.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/k/s/kssl-9047_3_7716f5a7.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/k/s/kssl-9047_4_8d107606.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/k/s/kssl-9047_5_cf91bb4a.jpg?rnd=20200526195200",
    name: "ISHIN",
    desc: "Black Embroidered Kurta And Trouser (Set of 2)",
    oldPrice: "3599",
    newPrice: "1692",
    off: "10",
    category: "indian",

    color: "black",
    size: "XS, S, M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/n/7/n752_1_fb81b068.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/n/7/n752_2_71c73523.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/n/7/n752_3_5730e09c.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/n/7/n752_4_559be353.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/n/7/n752_5_1662267d.jpg?rnd=20200526195200",
    name: "Gillori",
    desc: "Charming Black Kurta And Pant With Dupatta (Set of 3)",
    oldPrice: "2199",
    newPrice: "1980",
    off: "10",
    category: "indian",

    color: "black",
    size: "XS, S, M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/k/p/kpdhvka-7008_1_b7006836.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/k/p/kpdhvka-7008_2_74e228f2.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/k/p/kpdhvka-7008_3_be4c86f1.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/k/p/kpdhvka-7008_4_24b47539.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/k/p/kpdhvka-7008_5_92a60f57.jpg?rnd=20200526195200",
    name: "ISHIN",
    desc: "Black Gota Work Kurta And Trouser With Dupatta (Set of 3)",
    oldPrice: "2999",
    newPrice: "1590",
    off: "47",
    category: "indian",

    color: "black",
    size: "XS, S, M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/b/l/black-patialla-with-block-print_1_47b650aa.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/b/l/black-patialla-with-block-print_2_7a8ad8a1.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/b/l/black-patialla-with-block-print_3_9f1bb058.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/b/l/black-patialla-with-block-print_4_baf8a8b6.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/b/l/black-patialla-with-block-print_5_ed70fc65.jpg?rnd=20200526195200",
    name: "Label Shaurya Sanadhya",
    desc: "Black Patialla With Block Print",
    oldPrice: "2750",
    newPrice: "2200",
    off: "20",
    category: "indian",

    color: "black",
    size: "XS, S, M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/g/r/griffel_18901-black_1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/g/r/griffel_18901-black_2.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/g/r/griffel_18901-black_3.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/g/r/griffel_18901-black_4.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/g/r/griffel_18901-black_5.jpg?rnd=20200526195200",
    name: "Griffel",
    desc: "Black Printed Tracksuit",
    oldPrice: "3899",
    newPrice: "1999",
    off: "49",
    category: "sports",

    color: "black",
    size: "XS, S, M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/v/a/vanhe00001241_20a_1_0b4dfdab.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/v/a/vanhe00001241_20a_2_7e2e0e63.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/v/a/vanhe00001241_20a_3_dbc82100.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/v/a/vanhe00001241_20a_4_a9806ab5.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/v/a/vanhe00001241_20a_5_27ee9f57.jpg?rnd=20200526195200",
    name: "Van Heusen Athleisure",
    desc: "Van Heusen Intimates Absolute Comfort Slip on Sports Bra Style Number-44006 - Black",
    oldPrice: "1000",
    newPrice: "500",
    off: "50",
    category: "sports",

    color: "black",
    size: "XS, S, M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/m/t/mt21-blsb15_1_c19c8634.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/t/mt21-blsb15_2_312615d8.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/t/mt21-blsb15_3_effea808.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/t/mt21-blsb15_4_7f02c456.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/t/mt21-blsb15_5_0c31cac9.jpg?rnd=20200526195200",
    name: "Muscle Torque",
    desc: "Running/Workout High Impact Crisscross Back Sports Bra-Black",
    oldPrice: "1998",
    newPrice: "999",
    off: "50",
    category: "sports",

    color: "black",
    size: "XS, S, M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/g/r/griffel_18902-grey_1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/g/r/griffel_18902-grey_2.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/g/r/griffel_18902-grey_3.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/g/r/griffel_18902-grey_4.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/g/r/griffel_18902-grey_5.jpg?rnd=20200526195200",
    name: "Griffel",
    desc: "Grey Hooded Tracksuit",
    oldPrice: "3899",
    newPrice: "1999",
    off: "49",
    category: "sports",

    color: "grey",
    size: "XS, S, M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/g/r/greybct_1_a9e2881d.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/g/r/greybct_2_10502324.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/g/r/greybct_3_af4605f4.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/g/r/greybct_4_699c501a.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/g/r/greybct_5_8ce72fa1.jpg?rnd=20200526195200",
    name: "EVERDION",
    desc: "Grey Bust Crop Top",
    oldPrice: "1499",
    newPrice: "630",
    off: "58",
    category: "sports",

    color: "grey",
    size: "XS, S, M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/c/s/cssportb03greymilange_1_480f8fc2.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/c/s/cssportb03greymilange_2_ef0d5fe5.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/c/s/cssportb03greymilange_3_e2302af0.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/c/s/cssportb03greymilange_4_8e076eb4.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/c/s/cssportb03greymilange_1_480f8fc2.jpg?rnd=20200526195200",
    name: "Candyskin",
    desc: "Women's High Impact Cotton Padded Wirefree Sports Bra - Grey",
    oldPrice: "1499",
    newPrice: "960",
    off: "36",
    category: "sports",

    color: "grey",
    size: "XS, S, M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/v/a/vanhe00001245_20a_1_db47cc6b.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/v/a/vanhe00001245_20a_2_cd193e45.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/v/a/vanhe00001245_20a_3_df2a81b1.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/v/a/vanhe00001245_20a_4_d0eddeb4.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/v/a/vanhe00001245_20a_5_bbcbbaba.jpg?rnd=20200526195200",
    name: "Van Heusen Woman Lingerie and Athleisure",
    desc: "Van Heusen Intimates Absolute Comfort Slip on Sports Bra Style Number-44006 - Red",
    oldPrice: "1000",
    newPrice: "600",
    off: "40",
    category: "sports",

    color: "red",
    size: "XS, S, M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/t/at0154p09_1_325a9ebe.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/a/t/at0154p09_2_153b763f.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/a/t/at0154p09_3_6e66905a.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/a/t/at0154p09_4_f2970b87.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/a/t/at0154p09_5_cf537222.jpg?rnd=20200526195200",
    name: "Clovia",
    desc: "Activewear Short Sleeves Sports T-shirt - Red",
    oldPrice: "999",
    newPrice: "590",
    off: "41",
    category: "sports",

    color: "red",
    size: "XS, S, M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/g/r/griffel_19912-red_1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/g/r/griffel_19912-red_2.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/g/r/griffel_19912-red_3.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/g/r/griffel_19912-red_4.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/g/r/griffel_19912-red_5.jpg?rnd=20200526195200",
    name: "Griffel",
    desc: "Red Hooded Tracksuit",
    oldPrice: "",
    newPrice: "1999",
    off: "49",
    category: "sports",

    color: "red",
    size: "XS, S, M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/v/d/vdrf502374_1_236f9e69.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/v/d/vdrf502374_10_f20f914e.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/v/d/vdrf502374_2_b43c16ad.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/v/d/vdrf502374_3_960ed105.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/v/d/vdrf502374_4_f6a543ba.jpg?rnd=20200526195200",
    name: "The Vanca",
    desc: "Cream Printed Maternity Dress With Nursing Access - White",
    oldPrice: "2699",
    newPrice: "1755",
    off: "35",
    category: "maternity",

    color: "white",
    size: "XS, S, M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/s/1/s19168mabl01_1_a6d2c30c.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/1/s19168mabl01_2_c7e44aa4.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/1/s19168mabl01_3_74577cc5.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/1/s19168mabl01_4_e7bfd91a.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/1/s19168mabl01_5_d18a2776.jpg?rnd=20200526195200",
    name: "Oxolloxo",
    desc: "Floral Samara Plush Maternity Top - White",
    oldPrice: "1249",
    newPrice: "625",
    off: "50",
    category: "maternity",

    color: "white",
    size: "XS, S, M, L, XL, 2XL",
  },
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/m/t/mtaw081_1_84d7a429.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/t/mtaw081_2_83ac7dcd.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/t/mtaw081_3_74920da3.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/t/mtaw081_4_6274a676.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/t/mtaw081_5_7018ae3b.jpg?rnd=20200526195200",
    name: "Aaruvi ",
    desc: "Aaruvi Ruchi Verma Floral Maternity Dress White",
    oldPrice: "2799",
    newPrice: "1540",
    off: "45",
    category: "maternity",

    color: "white",
    size: "XS, S, M, L, XL, 2XL",
  },

  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/m/t/mtaw077_1_42b8062b.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/t/mtaw077_2_22523537.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/t/mtaw077_3_d7ca8f17.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/t/mtaw077_4_8992b2fc.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/t/mtaw077_5_23a421ba.jpg?rnd=20200526195200",
    name: "Floral ",
    desc: "Aaruvi Ruchi Verma Floral Border Maternity Dress",
    oldPrice: "2799",
    newPrice: "1400",
    off: "50",
    category: "maternity",

    color: "white",
    size: "XS, S, M, L, XL, 2XL",
  },

  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/v/d/vdrf502192_1_61db4bf1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/v/d/vdrf502192_2_a4157053.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/v/d/vdrf502192_3_1177dd0a.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/v/d/vdrf502192_4_a625ecd0.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/v/d/vdrf502192_5_4634b26a.jpg?rnd=20200526195200",
    name: "THE VANCA",
    desc: "Maternity Dress - Multi-Color",
    oldPrice: "2699",
    newPrice: "1431",
    off: "47",
    category: "maternity",

    color: "Multi-color",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/m/s/ms-223a_1_09a6ad4f.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/s/ms-223a_2_aff0fdf5.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/s/ms-223a_3_15a80e98.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/s/ms-223a_4_23dce055.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/s/ms-223a_5_ec323124.jpg?rnd=20200526195200",
    name: "Momsoon",
    desc: "Maternity The Samantha Dress Multi-Color",
    oldPrice: "3599",
    newPrice: "1799",
    off: "50",
    category: "maternity ",

    color: "Multi-Color",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/m/t/mtaw080_1_519bcb23.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/t/mtaw080_2_a9bc5fb5.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/t/mtaw080_3_b0fe8313.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/t/mtaw080_4_cc0eafb8.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/t/mtaw080_5_8bbd3a75.jpg?rnd=20200526195200",
    name: "Aaruvi Ruchi Verma",
    desc: "Aaruvi Ruchi Verma Tropical Maternity Dress",
    oldPrice: "2799",
    newPrice: "1540",
    off: "45",
    category: "maternity",

    color: "orange",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/m/s/ms-155_001_4a3eb906.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/s/ms-155_002_aef2790b.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/s/ms-155_003_7d584afe.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/s/ms-155_004_8f0a7bb5.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/s/ms-155_005_21116a0e.jpg?rnd=20200526195200",
    name: "Momsoon",
    desc: "Maternity The rough Dress - Multi-Color",
    oldPrice: "1699",
    newPrice: "1530",
    off: "10",
    category: "maternity",

    color: "Multi-Color",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/s/2/s21286madr02_1_bf361c80.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/2/s21286madr02_2_40f272f3.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/2/s21286madr02_3_848faeb3.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/2/s21286madr02_4_a18a3c18.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/2/s21286madr02_5_e5d69374.jpg?rnd=20200526195200",
    name: "Oxolloxo",
    desc: "Stripe Me Floral Maternity Shirt Dress - Multi-Color",
    oldPrice: "2599",
    newPrice: "1299",
    off: "50",
    category: "maternity",

    color: "Multi-Color",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/e/p/ep-07-107_1_7022f200.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/e/p/ep-07-107_2_04f33850.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/e/p/ep-07-107_3_74e0dff9.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/e/p/ep-07-107_4_996c872a.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/e/p/ep-07-107_2_04f33850.jpg?rnd=20200526195200",
    name: "Empress Pitara",
    desc: "EMPRESS PITARA Deep Red Brocade Kurta And Pant With Dupatta (Set of 3)",
    oldPrice: "5600",
    newPrice: "5040",
    off: "10",
    category: "indian",

    color: "Red",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/s/w/swtantra_086_1_0e4fd8c8.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/w/swtantra_086_2_9aa1b231.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/w/swtantra_086_3_e6671669.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/w/swtantra_086_4_ac39b517.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/w/swtantra_086_5_5adb7898.jpg?rnd=20200526195200",
    name: "Swtantra",
    desc: "Plum Satin Saree",
    oldPrice: "2999",
    newPrice: "2699",
    off: "10",
    category: "indian",

    color: "plum",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/b/a/bai_sss_32_1_9cb89e4a.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/b/a/bai_sss_32_2_322bf128.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/b/a/bai_sss_32_3_3c93cf65.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/b/a/bai_sss_32_4_2d08057a.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/b/a/bai_sss_32_5_ac4f1174.jpg?rnd=20200526195200",
    name: "Baisacrafts",
    desc: "Naava Bandhej Modal Kurta And Sharara With Dupatta (Set Of 3)",
    oldPrice: "8499",
    newPrice: "7650",
    off: "10",
    category: "indian",

    color: "green",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/r/t/rtor0020_1_d74bb6f3.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/r/t/rtor0020_2_70ab9744.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/r/t/rtor0020_3_076b7109.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/r/t/rtor0020_4_91009983.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/r/t/rtor0020_5_6b8032a2.jpg?rnd=20200526195200",
    name: "Rustorange",
    desc: "Maroon and Rust Polka and Jaal Festive Lehenga Crop Top (Set of 2)",
    oldPrice: "2899",
    newPrice: "1885",
    off: "10",
    category: "indian",

    color: "maroon",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/2/d/2d-tp1671_1_7270eebc.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/2/d/2d-tp1671_2_d320034f.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/2/d/2d-tp1671_3_30ddcfeb.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/2/d/2d-tp1671_4_85efc828.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/2/d/2d-tp1671_5_2669c6b6.jpg?rnd=20200526195200",
    name: "Twenty Dresses by Nykaa Fashion",
    desc: "Twenty Dresses By Nykaa Fashion Follow Them Stripes Sweater Top",
    oldPrice: "3195",
    newPrice: "2876",
    off: "10",
    category: "western",

    color: "green",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/m/m/mm-859_1_84d80f74.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/m/mm-859_2_88371f59.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/m/mm-859_3_80e5515d.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/m/mm-859_4_24215ea0.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/m/mm-859_5_ddaa2ca9.jpg?rnd=20200526195200",
    name: "MISH",
    desc: "Red Solid Ruffle Detail Maxi Dress",
    oldPrice: "3399",
    newPrice: "2040",
    off: "40",
    category: "western",

    color: "red",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/l/b/lbl102ds11_1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/b/lbl102ds11_2.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/b/lbl102ds11_3.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/b/lbl102ds11_4.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/b/lbl102ds11_5.jpg?rnd=20200526195200",
    name: "Lavanya The Label",
    desc: "Blue Floral Top, Palazzo And Shrug (Set of 3)",
    oldPrice: "5500",
    newPrice: "4950",
    off: "10",
    category: "indian",

    color: "blue",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/n/7/n724_1_bad65d5d.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/n/7/n724_2_c398e09a.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/n/7/n724_3_b41e5469.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/n/7/n724_4_8fe3e64a.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/n/7/n724_5_30fba020.jpg?rnd=20200526195200",
    name: "Gillori",
    desc: "Blossom Pink Evening Jacket Dress With Inner",
    oldPrice: "3999",
    newPrice: "3600",
    off: "10",
    category: "indian",

    color: "pink",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/l/a/lavan00000299_1_f581806d.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/a/lavan00000299_2_cd77727c.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/a/lavan00000299_3_2a4dd02f.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/a/lavan00000299_4_3ccc7297.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/a/lavan00000299_5_8826a15d.jpg?rnd=20200526195200",
    name: "Lavanya The Label",
    desc: "Green Printed Dress",
    oldPrice: "3900",
    newPrice: "1950",
    off: "50",
    category: "indian",

    color: "green",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/l/b/lbl101ks112_1_574fb31c.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/b/lbl101ks112_2_c4e9dfff.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/b/lbl101ks112_3_46335760.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/b/lbl101ks112_4_257f049e.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/b/lbl101ks112_1_574fb31c.jpg?rnd=20200526195200",
    name: "Lavanya The Label",
    desc: "Yellow Peplum Skirt Dupatta (Set of 3)",
    oldPrice: "6500",
    newPrice: "3750",
    off: "50",
    category: "indian",

    color: "yellow",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/1/0/1032a-a393_1_b64a43f8.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/1/0/1032a-a393_2_5ef79a1c.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/1/0/1032a-a393_3_6800955c.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/1/0/1032a-a393_4_8f6a22a8.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/1/0/1032a-a393_5_06fb9a99.jpg?rnd=20200526195200",
    name: "Ambraee",
    desc: "Pink Peony Hp Doria Dress",
    oldPrice: "3999",
    newPrice: "3600",
    off: "10",
    category: "western",

    color: "pink",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/l/tlc-229_8f14f324.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/t/l/tlc-229_1_2624e49b.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/t/l/tlc-229_2_7e3a3154.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/t/l/tlc-229_3_3196a17a.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/t/l/tlc-229_4_18fb2c34.jpg?rnd=20200526195200",
    name: "Tuna London",
    desc: "One Side Off Shoulder And Yoga Pants",
    oldPrice: "4950",
    newPrice: "3050",
    off: "20",
    category: "sports",

    color: "pink",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/c/o/combat123_1_c4932172.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/c/o/combat123_2_8c5f27be.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/c/o/combat123_3_f5517c9c.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/c/o/combat123_4_59ebeff1.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/c/o/combat123_5_2021fc35.jpg?rnd=20200526195200",
    name: "Clovia",
    desc: "Snug Fit High-Rise Active Shorts & Padded Sports Bra Set - Green",
    oldPrice: "2198",
    newPrice: "1011",
    off: "54",
    category: "sports",

    color: "green",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/n/y/nyk076-distresstie-dye1a_1_44709223.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/n/y/nyk076-distresstie-dye1a_2_8a268872.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/n/y/nyk076-distresstie-dye1a_3_f33084a0.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/n/y/nyk076-distresstie-dye1a_4_a0c4cba8.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/n/y/nyk076-distresstie-dye1a_1_44709223.jpg?rnd=20200526195200",
    name: "Nykd by Nykaa",
    desc: "On-Trend High Rise Legging With Key Pockets , Nykd All Day-NYK 076 - Multi-Color",
    oldPrice: "1799",
    newPrice: "1620",
    off: "10",
    category: "sports",

    color: "pink",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/v/a/vanhe3023_20a_1_ec7a5c57.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/v/a/vanhe3023_20a_2_f4d0cdfc.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/v/a/vanhe3023_20a_3_294ddb13.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/v/h/vh_authenticity-certificate_08669a50.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/v/a/vanhe3023_20a_1_ec7a5c57.jpg?rnd=20200526195200",
    name: "Van Heusen Woman Lingerie and Athleisure",
    desc: "Solid Jogger Style Number-66302 - Pink",
    oldPrice: "2099",
    newPrice: "1049",
    off: "50",
    category: "sports",

    color: "pink",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/p/u/puma-51949205_1_861d125f.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/p/u/puma-51949205_2_de626dc6.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/p/u/puma-51949205_5_e6affac9.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/p/u/puma-51949205_2_de626dc6.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/p/u/puma-51949205_1_861d125f.jpg?rnd=20200526195200",
    name: "Puma",
    desc: "Train Logo Hr 7 8 Womens Black Sports Tights",
    oldPrice: "3099",
    newPrice: "1599",
    off: "60",
    category: "sports",

    color: "Black",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/w/1/w139af_1_935772f1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/w/1/w139af_2_3aad6804.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/w/1/w139af_3_ac0dc19b.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/w/1/w139af_4_2d26d3e8.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/w/1/w139af_5_cd8833b5.jpg?rnd=20200526195200",
    name: "Silvertraq",
    desc: "Biker Shorts Angel falls - Blue",
    oldPrice: "3399",
    newPrice: "1699",
    off: "50",
    category: "sports",

    color: "blue",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/p/u/puma_52083602_1_e041742d.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/p/u/puma_52083602_2_5d3cc603.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/p/u/puma_52083602_3_5aba5743.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/p/u/puma_52083602_4_b648f58f.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/p/u/puma_52083602_1_e041742d.jpg?rnd=20200526195200",
    name: "Puma",
    desc: "Run Graphic White Womens Sports Hooded Jacket",
    oldPrice: "4999",
    newPrice: "4249",
    off: "15",
    category: "sports",

    color: "white",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/n/y/nyle_ether_01_291b5a3b.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/n/y/nyle_ether_02_f7719dfe.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/n/y/nyle_ether_03_7853132c.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/n/y/nyle_ether_04_7fe6e5f2.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/n/y/nyle_ether_01_291b5a3b.jpg?rnd=20200526195200",
    name: "Nykd by Nykaa",
    desc: "All Day, Supersoft Essential Tee-NYK 077 - Seafoam Green",
    oldPrice: "400",
    newPrice: "300",
    off: "40",
    category: "sports",

    color: "green",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/n/anti-culture-sc-2002-t.green_1_8b38eb15.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/a/n/anti-culture-sc-2002-t.green_2_87274df2.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/a/n/anti-culture-sc-2002-t.green_3_0f6a686b.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/a/n/anti-culture-sc-2002-t.green_4_dc52f1df.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/a/n/anti-culture-sc-2002-t.green_5_3258ae83.jpg?rnd=20200526195200",
    name: "Anti Culture",
    desc: "Women Cotton Fleece Round Neck Teal Green Tracksuit",
    oldPrice: "2479",
    newPrice: "1487",
    off: "40",
    category: "sports",

    color: "green",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/m/p/mpl-02blue-f20_1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/p/mpl-02blue-f20_2.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/p/mpl-02blue-f20_3.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/p/mpl-02blue-f20_4.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/p/mpl-02blue-f20_5.jpg?rnd=20200526195200",
    name: "Mamma Presto",
    desc: "Lace Detailed Feeding Nightwear Dress - Blue",
    oldPrice: "1699",
    newPrice: "1020",
    off: "40",
    category: "maternity",

    color: "blue",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/n/j/njs001-baroquerose-1_e600a89d.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/n/j/njs001-baroquerose-2_32699a11.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/n/j/njs001-baroquerose-3_ce7c5c6b.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/n/j/njs001-baroquerose-4_b8def798.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/n/j/njs001-baroquerose-1_e600a89d.jpg?rnd=20200526195200",
    name: "Nejo",
    desc: "Feeding/Nursing Maternity Night Dress - Pink",
    oldPrice: "1399",
    newPrice: "999",
    off: "29",
    category: "maternity",

    color: "pink",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/h/theka00003412__1_bad9f645.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/t/h/theka00003412__4_2c1d6a78.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/t/h/theka00003412__5_92b82e61.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/t/h/theka00003412__6_9d6f2869.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/t/h/theka00003412__7_52df9eb2.jpg?rnd=20200526195200",
    name: "The Kaftan Company",
    desc: "Pastel Florals Cotton Maternity And Nursing Kaftan - White",
    oldPrice: "2000",
    newPrice: "1000",
    off: "50",
    category: "maternity",

    color: "white",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/h/theka00003413__1_4513177b.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/t/h/theka00003413__10_05c38012.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/t/h/theka00003413__4_e7178931.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/t/h/theka00003413__5_d1dfa322.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/t/h/theka00003413__6_434f3531.jpg?rnd=20200526195200",
    name: "The Kaftan Company",
    desc: "Black Floral Print Maternity And Feeding Gown Set",
    oldPrice: "2999",
    newPrice: "1599",
    off: "50",
    category: "maternity",

    color: "black",
    size: "XS, S, M, L, XL, 2XL"
  }
  ,
  {
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/h/theka00002207__1_0c1cd1fa.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/t/h/theka00002207__3_057adb2b.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/t/h/theka00002207__4_5c0e14b2.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/t/h/theka00002207__5_6094dd00.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/t/h/theka00002207__6_82258e4e.jpg?rnd=20200526195200",
    name: "The Kaftan Company",
    desc: "Ditsy Floral Maternity And Nursing Nightdress - Black",
    oldPrice: "2499",
    newPrice: "1299",
    off: "50",
    category: "maternity",

    color: "black",
    size: "XS, S, M, L, XL, 2XL"
  }
];

var womenS = document.getElementById("Women");
var subMenu = document.getElementById("subMenu");
var More = document.getElementById("More");
var resetBtn = document.querySelector(".fClearAll");
More.addEventListener("mouseenter", function () {
  subMenu.style.display = "none";
  womenS.style.borderBottom = "none";
  womenS.style.color = "black";
});

womenS.addEventListener("mouseenter", function () {
  subMenu.style.display = "block";
  womenS.style.borderBottom = "2px solid #fd7685";
  womenS.style.color = "#fd7685";
});

//For showing the products on women's page

showData(productData);

function showData(data) {
  data.map(function (item) {
    var womenGallery = document.querySelector(".womenGallery");

    var anchorTag = document.createElement("a");
    anchorTag.setAttribute("class", "womenProductCard imgr");
    anchorTag.addEventListener("click", clickedProduct);
    function clickedProduct(event) {
      event.preventDefault();
      localStorage.setItem("clickedProduct", JSON.stringify(item));
      window.open("product.html", "_blank");
    }

    var productDiv = document.createElement("div");
    productDiv.setAttribute("class", "productImage");

    var imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "productImageDiv");
    var img = document.createElement("img");
    img.setAttribute("src", item.imageURL);
    img.style.height = "366px";
    img.style.width = "275px";
    imgDiv.append(img);

    var tagDiv = document.createElement("div");
    tagDiv.setAttribute("class", "tagDiv");
    var tagSpan = document.createElement("span");
    tagSpan.setAttribute("class", "tagSpan");
    var tagTitle = document.createElement("span");
    tagTitle.setAttribute("class", "tagTitle");
    tagTitle.textContent = "BESTSELLER";
    tagSpan.append(tagTitle);
    tagDiv.append(tagSpan);

    productDiv.append(imgDiv, tagDiv);

    var productDetail = document.createElement("div");
    productDetail.setAttribute("class", "productDetail");

    var productName = document.createElement("div");
    productName.setAttribute("class", "productName");
    productName.textContent = item.name;
    var productDescription = document.createElement("div");
    productDescription.setAttribute("class", "productDescription");
    productDescription.textContent = item.desc;

    var priceDiv = document.createElement("div");
    priceDiv.setAttribute("class", "priceDiv");
    var newPriceSpan = document.createElement("span");
    newPriceSpan.setAttribute("class", "newPriceSpan");
    newPriceSpan.innerHTML = `<span>₹<span>${item.newPrice}`;
    var oldPriceSpan = document.createElement("span");
    oldPriceSpan.setAttribute("class", "oldPriceSpan");
    oldPriceSpan.innerHTML = `<span>₹<span>${item.oldPrice}`;
    var disc = document.createElement("span");
    disc.setAttribute("class", "discount");
    disc.textContent = `${item.off} % off`;
    priceDiv.append(newPriceSpan, oldPriceSpan, disc);

    var size = document.createElement("p");
    size.setAttribute("class", "sizeS");
    size.textContent = item.size;

    productDetail.append(productName, productDescription, priceDiv, size);

    anchorTag.append(productDiv, productDetail);
    womenGallery.append(anchorTag);
  });
}

//Updating the value of total no of items on top
document.querySelector(
  ".total_count"
).textContent = `(000${productData.length})`;

//Function to filter data according to discount
function offFun(num) {
  document.querySelector(".womenGallery").innerHTML = "";

  var filterdOff = productData.filter(function (item) {
    return item.off >= num;
  });
  resetBtn.style.visibility = "visible";
  showData(filterdOff);
}

//Function to filter data according to category
function catFun(cat) {
  document.querySelector(".womenGallery").innerHTML = "";

  var filterdCat = productData.filter(function (item) {
    return item.category === cat;
  });
  console.log(filterdCat);
  resetBtn.style.visibility = "visible";
  showData(filterdCat);
}

//Function to filter data accoridng to color
function colorFun(col) {
  document.querySelector(".womenGallery").innerHTML = "";

  var filterdCol = productData.filter(function (item) {
    return item.color === col;
  });
  resetBtn.style.visibility = "visible";
  showData(filterdCol);
}

// Function to sort, price low to high
document.querySelector(".sorting__element").addEventListener("click", function () {
  document.querySelector(".priceSortSS").style.display = "block";
});

document.getElementById("low").addEventListener("click", lowSort);
document.getElementById("high").addEventListener("click", highSort);

function lowSort() {
  document.querySelector(".womenGallery").innerHTML = "";
  var sortLow = productData.sort(function (a, b) {
    return a.newPrice - b.newPrice;
  });
  document.querySelector(".fClearAll").style.visibility = "visible";
  showData(sortLow);
}

// Function to sort, price high to low
function highSort() {
  document.querySelector(".womenGallery").innerHTML = "";
  var sortHigh = productData.sort(function (a, b) {
    return b.newPrice - a.newPrice;
  });
  document.querySelector(".fClearAll").style.visibility = "visible";
  showData(sortHigh);
}

//Function to sort discount hight to low

function highDisc() {
  document.querySelector(".womenGallery").innerHTML = "";
  var highDisc = productData.sort(function (a, b) {
    return b.off - a.off;
  });
}
//For showing bag items in nav bar
var cartData = JSON.parse(localStorage.getItem("nykaaCartDataNew")) || [];
var total = 0;
for (var i = 0; i < cartData.length; i++) {
  total += cartData[i].qty;
}
document.querySelector(".itemValue").textContent = total;

//Function to uncheck all other boxes when clicked another
function uncheck() { }
// cart page js ======================

function show_cart() {
  var cartP = document.getElementById("cartPage");
  disableBodyScroll();
  cartP.style.visibility = "visible";
  cartP.style.right = "0px";
}
var cartP = document.getElementById("cartPage");
document.getElementById("cartBackBtn").addEventListener("click", function () {
  enableBodyScroll();

  cartP.style.right = "-400px";
  cartP.style.transition = "all 0.5s ease";
  cartP.style.visibility = "hidden";
});

// if(location.reload(true)){
//   cartP.style.right = "-400px";
// }

if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  cartP.style.right = "-400px";
  cartP.style.transition = "all 0.5s ease";
  cartP.style.visibility = "hidden";
} else {
  console.info("This page is not reloaded");
}
// dinesh js end==============
// show and hide dropdown list item on button click

function show_hide() {
  var click = document.getElementById("list-items");
  if (click.style.display === "none") {
    click.style.display = "block";
  } else {
    click.style.display = "none";
  }
}

function signUp_page() {
  var page = document.getElementById("sign_page");
  document.getElementById("list-items").style.display = "none";
  disableBodyScroll();
  if (page.style.top < "0px") {
    page.style.top = "0px";
    // document.querySelector("body").style.opacity= 0.2;
  }
}

document.getElementById("close").addEventListener("click", function () {
  var page = document.getElementById("sign_page");
  enableBodyScroll();
  if (page.style.top == "0px") {
    page.style.top = "-1000px";
    // document.querySelector("body").style.opacity= 1;
  }
});

document.getElementById("signupBtn").addEventListener("click", function () {
  document.getElementById("loginContainer").style.display = "none";
  document.getElementById("accSginUp").style.display = "block";
  document.getElementById("close").style.display = "none";
  document.querySelector(".signUpAndSignInText").textContent =
    "Signup using mobile";
});

document.getElementById("loginBtn").addEventListener("click", function () {
  document.getElementById("loginContainer").style.display = "none";
  document.getElementById("accSginUp").style.display = "block";
  document.getElementById("close").style.display = "none";
  document.querySelector(".signUpAndSignInText").textContent =
    "Signin using mobile";
});

document.getElementById("backBtn").addEventListener("click", function () {
  document.getElementById("loginContainer").style.display = "block";
  document.getElementById("loginContainer").style.marginTop = "50px";
  document.getElementById("accSginUp").style.display = "none";
  document.getElementById("close").style.display = "block";
});

document.getElementById("submit").addEventListener("click", function () {
  var numLength = document.querySelector("#mob").value;
  console.log(numLength);
  console.log("herrerere");
  if (numLength.length == 10) {
    document.getElementById(
      "mobNum"
    ).textContent = `Enter the six digit OTP sent to +91-${numLength}`;

    document.getElementById("accSginUp").style.display = "none";
    document.getElementById("close").style.display = "none";
    document.getElementById("backBtn2").style.display = "block";
    document.getElementById("optContainer").style.display = "block";
  } else {
    document.querySelector(".valid").textContent =
      "Mobile number is not valid!";
  }
});

document.getElementById("backBtn2").addEventListener("click", function () {
  document.getElementById("optContainer").style.display = "none";
  document.getElementById("backBtn2").style.display = "none";
  document.getElementById("accSginUp").style.display = "block";
  document.getElementById("backBtn").style.display = "block";
});

document.getElementById("otpBtn").addEventListener("click", function () {
  var otp1 = document.getElementById("ist").value;
  var otp2 = document.getElementById("sec").value;
  var otp3 = document.getElementById("third").value;
  var otp4 = document.getElementById("fourth").value;
  var otp5 = document.getElementById("fifth").value;
  var otp6 = document.getElementById("sixth").value;

  if (
    otp1 == "1" &&
    otp2 == "2" &&
    otp3 == "3" &&
    otp4 == "4" &&
    otp5 == "5" &&
    otp6 == "6"
  ) {
    document.querySelector("#singupShow").style.display = "none";
    document.querySelector("#signOut").style.display = "block";
    document.querySelector(".mobileShow").textContent =
      document.getElementById("mob").value;
    document.getElementById("sign_page").style.display = "none";
  }
});

document.getElementById("logoutBtn").addEventListener("click", function () {
  location.reload(true);
  document.querySelector("#signOut").style.display = "none";
});

function clickEvent(first, last) {
  if (first.value.length) {
    document.getElementById(last).focus();
  }
}

function disableBodyScroll() {
  const element = document.querySelector("body");
  element.classList.add("stop-scroll");
}

function enableBodyScroll() {
  const element = document.querySelector("body");
  element.classList.remove("stop-scroll");
}

var womenS = document.getElementById("Women");
var subMenuStyle = document.getElementById("subMenu");
var topBanner = document.getElementById("banner");
// var More = document.getElementById("More");

document.getElementById("Women").addEventListener("mouseenter", function () {
  console.log(subMenuStyle);

  topBanner.style.marginTop = "10px";
  if (subMenu.style.display == "none") {
    subMenuStyle.style.display = "flex";

    womenS.style.borderBottom = "2px solid #fd7685";
  } else {
    subMenuStyle.style.display === "none";
    womenS.style.borderBottom = " 2px solid white";
  }
});

// cart page js ======================

function show_cart() {
  var cartP = document.getElementById("cartPage");
  disableBodyScroll();
  cartP.style.visibility = "visible";
  cartP.style.right = "0px";
  cartP.style.transition = "all 0.5s ease";
}
var cartP = document.getElementById("cartPage");
document.getElementById("cartBackBtn").addEventListener("click", function () {
  enableBodyScroll();

  cartP.style.right = "-400px";
  cartP.style.transition = "all 0.5s ease";
  cartP.style.visibility = "hidden";
});

// if(location.reload(true)){
//   cartP.style.right = "-400px";
// }
window.onload = function () {
  show_hide();
};

if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  cartP.style.right = "-400px";
  cartP.style.transition = "all 0.5s ease";
  cartP.style.visibility = "hidden";
} else {
  console.info("This page is not reloaded");
}

// Function for reset button
document.querySelector(".fClearAll").addEventListener("click", function () {
  window.location.reload();
})
