$(function () {
  const latestProduct = [
    {
      id: 1,
      name: "Black Fashion Zapda",
      original: 106.97,
      promotion: 53.49,
      tag: ["NEW", "HOT", "SALE"],
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/001_2048x.png?v=1585880989",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 2,
      name: "Coneco Product Sample",
      original: 106.97,
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/1_3aec512d-bba7-4e15-82ba-a8e457e00bd9_2048x.png?v=1585880988",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 3,
      name: "Daltex Product Example",
      original: 133.72,
      promotion: 106.97,
      tag: ["SALE"],
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/002_c7294946-8824-4b93-8cae-7ac4b9444642_2048x.png?v=1585880994",
      currency: "$",
      status: "ADD  TO CART",
    },
    {
      id: 4,
      name: "Dentoex Product Example",
      original: 262.08,
      promotion: 106.97,
      tag: ["SALE"],
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/003_fec695c3-c0ee-4427-ab76-1848d2fdf3a3_2048x.png?v=1585880987",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 5,
      name: "Dentotam Product Sample",
      original: 106.32,
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/004_0bcd958d-3842-4b52-920a-96f8062c6b78_540x.png?v=1585880985",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 6,
      name: "Dentotam Product Sample",
      original: 425.29,
      promotion: 318.97,
      tag: ["SALE"],
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/005_2048x.png?v=1585880987",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 7,
      name: "Faxtex Product Sample",
      original: 526.3,
      promotion: 478.45,
      tag: ["SALE"],
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/5_9e4f0531-1da4-43e2-8611-efc3e25d150c_2048x.png?v=1585880985",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 8,
      name: "Hotex Product Sample",
      original: 366.28,
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/8_dacdf437-63f6-4267-8e2b-500ba7c21f5c_540x.png?v=1585880987",
      currency: "$",
      status: "SELECT OPTION",
    },
  ];
  const bestSeller = [
    {
      id: 1,
      name: "Irene Royal Product",
      original: 106.97,

      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/11_09c49474-9c27-4885-b329-100de196ada1_2048x.png?v=1585880986",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 2,
      name: "Product Example",
      original: 106.97,
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/072_2048x.png?v=1585881004",
      currency: "$",
      status: "OUT OF STOCK",
    },
    {
      id: 3,
      name: "Newity Product Sample",
      original: 133.72,

      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/069_2048x.png?v=1585881004",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 4,
      name: "Lexizimin Product Sample",
      original: 262.08,
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/074_2048x.png?v=1585881005",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 5,
      name: "Lexizimin Product Sample",
      original: 262.08,
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/030_0fa23121-c7de-4344-8459-3f225eaa1894_2048x.png?v=1585880984",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 6,
      name: "Fixair Product Sample",
      original: 637.94,
      promotion: 584.78,
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/051_aa8d36f6-6417-4263-9a95-0e060cef3f90_2048x.png?v=1585880988",
      currency: "$",
      tag: ["SALE"],
      status: "SELECT OPTION",
    },
    {
      id: 7,
      name: "Dentoex Product Sample",
      original: 260.49,
      promotion: 212.65,
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/003_fec695c3-c0ee-4427-ab76-1848d2fdf3a3_720x.png?v=1585880987",
      currency: "$",
      tag: ["SALE"],
      status: "SELECT OPTION",
    },
    {
      id: 8,
      name: "Lexizimin Product Sample",
      original: 106.32,
      promotion: 53.16,
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/001_2048x.png?v=1585880989",
      currency: "$",
      tag: ["NEW", "HOT", "SALE"],
      status: "SELECT OPTION",
    },
  ];
  const productTab = [
    {
      id: 1,
      name: "Fixair Product Sample",
      original: 638.23,
      promotion: 585.05,
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/051_aa8d36f6-6417-4263-9a95-0e060cef3f90_320x.png?v=1585880988",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 2,
      name: "Hot Com Product Sample",
      original: 797.79,
      promotion: 664.83,
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/035_a9f57501-1545-4302-8100-817607bca883_2048x.png?v=1585880985",
      currency: "$",
      status: "ADD TO CART",
    },
    {
      id: 3,
      name: "Hotex Product Sample",
      original: 366.98,

      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/8_dacdf437-63f6-4267-8e2b-500ba7c21f5c_2048x.png?v=1585880987",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 4,
      name: "Gold Diamond Chain",
      original: 366.98,
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/084_1ec35392-df1d-4f92-a3f8-46f95c14254d_2048x.png?v=1585880984",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 5,
      name: "Lexizimin Product Sample",
      original: 186.15,
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/030_0fa23121-c7de-4344-8459-3f225eaa1894_2048x.png?v=1585880984",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 6,
      name: "Kaydex Product Sample",
      original: 292.52,
      promotion: 260.61,
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/012_0d41df45-c2d7-456e-bc82-20d25b695bcd_2048x.png?v=1585880985",
      currency: "$",
      status: "ADD TO CART",
    },
    {
      id: 7,
      name: "Dentoex Product Sample",
      original: 106.37,
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/004_0bcd958d-3842-4b52-920a-96f8062c6b78_2048x.png?v=1585880985",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 8,
      name: "Lexizimin Product Sample",
      original: 473.36,
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/074_2048x.png?v=1585881005",
      currency: "$",
      status: "SELECT OPTION",
    },
  ];
  const featuredTab = [
    {
      id: 1,
      name: "Black Fashion Zapda",
      original: 106.97,
      promotion: 53.49,
      tag: ["NEW", "HOT", "SALE"],
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/001_2048x.png?v=1585880989",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 2,
      name: "Coneco Product Sample",
      original: 106.97,
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/1_3aec512d-bba7-4e15-82ba-a8e457e00bd9_2048x.png?v=1585880988",
      currency: "$",
      status: "ART TO CART",
    },
    {
      id: 3,
      name: "Daltex Product Example",
      original: 133.72,
      promotion: 106.97,
      tag: ["SALE"],
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/002_c7294946-8824-4b93-8cae-7ac4b9444642_2048x.png?v=1585880994",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 4,
      name: "Dentoex Product Example",
      original: 262.08,
      promotion: 106.97,
      tag: ["SALE"],
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/003_fec695c3-c0ee-4427-ab76-1848d2fdf3a3_2048x.png?v=1585880987",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 5,
      name: "Dentotam Product Sample",
      original: 106.32,
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/004_0bcd958d-3842-4b52-920a-96f8062c6b78_540x.png?v=1585880985",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 6,
      name: "Dentotam Product Sample",
      original: 425.29,
      promotion: 318.97,
      tag: ["SALE"],
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/005_2048x.png?v=1585880987",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 7,
      name: "Faxtex Product Sample",
      original: 526.3,
      promotion: 478.45,
      tag: ["SALE"],
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/5_9e4f0531-1da4-43e2-8611-efc3e25d150c_2048x.png?v=1585880985",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 8,
      name: "Hotex Product Sample",
      original: 366.28,
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/8_dacdf437-63f6-4267-8e2b-500ba7c21f5c_540x.png?v=1585880987",
      currency: "$",
      status: "SELECT OPTION",
    },
  ];
  const newestTab = [
    {
      id: 1,
      name: "Irene Royal Product",
      original: 106.97,

      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/11_09c49474-9c27-4885-b329-100de196ada1_2048x.png?v=1585880986",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 2,
      name: "Product Example",
      original: 106.97,
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/072_2048x.png?v=1585881004",
      currency: "$",
      status: "OUT OF STOCK",
    },
    {
      id: 3,
      name: "Newity Product Sample",
      original: 133.72,

      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/069_2048x.png?v=1585881004",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 4,
      name: "Lexizimin Product Sample",
      original: 262.08,
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/074_2048x.png?v=1585881005",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 5,
      name: "Lexizimin Product Sample",
      original: 186.15,
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/030_0fa23121-c7de-4344-8459-3f225eaa1894_2048x.png?v=1585880984",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 6,
      name: "Fixair Product Sample",
      original: 638.23,
      promotion: 585.05,
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/051_aa8d36f6-6417-4263-9a95-0e060cef3f90_320x.png?v=1585880988",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 7,
      name: "Dentoex Product Example",
      original: 262.08,
      promotion: 106.97,
      tag: ["SALE"],
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/003_fec695c3-c0ee-4427-ab76-1848d2fdf3a3_2048x.png?v=1585880987",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 8,
      name: "Black Fashion Zapda",
      original: 106.97,
      promotion: 53.49,
      tag: ["NEW", "HOT", "SALE"],
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/001_2048x.png?v=1585880989",
      currency: "$",
      status: "SELECT OPTION",
    },
  ];
  const searchProduct = [
    {
      id: 1,
      name: "Black Fashion Zapda",
      original: 106.97,
      promotion: 53.49,
      tag: ["NEW", "HOT", "SALE"],
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/001_2048x.png?v=1585880989",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 2,
      name: "Coneco Product Sample",
      original: 106.97,
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/1_3aec512d-bba7-4e15-82ba-a8e457e00bd9_2048x.png?v=1585880988",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 3,
      name: "Daltex Product Example",
      original: 133.72,
      promotion: 106.97,
      tag: ["SALE"],
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/002_c7294946-8824-4b93-8cae-7ac4b9444642_2048x.png?v=1585880994",
      currency: "$",
      status: "ADD  TO CART",
    },
    {
      id: 4,
      name: "Dentoex Product Example",
      original: 262.08,
      promotion: 106.97,
      tag: ["SALE"],
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/003_fec695c3-c0ee-4427-ab76-1848d2fdf3a3_2048x.png?v=1585880987",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 5,
      name: "Dentotam Product Sample",
      original: 106.32,
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/004_0bcd958d-3842-4b52-920a-96f8062c6b78_540x.png?v=1585880985",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 6,
      name: "Dentotam Product Sample",
      original: 425.29,
      promotion: 318.97,
      tag: ["SALE"],
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/005_2048x.png?v=1585880987",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 7,
      name: "Faxtex Product Sample",
      original: 526.3,
      promotion: 478.45,
      tag: ["SALE"],
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/5_9e4f0531-1da4-43e2-8611-efc3e25d150c_2048x.png?v=1585880985",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 8,
      name: "Hotex Product Sample",
      original: 366.28,
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/8_dacdf437-63f6-4267-8e2b-500ba7c21f5c_540x.png?v=1585880987",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 9,
      name: "Irene Royal Product",
      original: 106.97,

      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/11_09c49474-9c27-4885-b329-100de196ada1_2048x.png?v=1585880986",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 10,
      name: "Product Example",
      original: 106.97,
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/072_2048x.png?v=1585881004",
      currency: "$",
      status: "OUT OF STOCK",
    },
    {
      id: 11,
      name: "Newity Product Sample",
      original: 133.72,

      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/069_2048x.png?v=1585881004",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 12,
      name: "Lexizimin Product Sample",
      original: 262.08,
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/074_2048x.png?v=1585881005",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 13,
      name: "Lexizimin Product Sample",
      original: 262.08,
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/030_0fa23121-c7de-4344-8459-3f225eaa1894_2048x.png?v=1585880984",
      currency: "$",
      status: "SELECT OPTION",
    },
    {
      id: 14,
      name: "Fixair Product Sample",
      original: 637.94,
      promotion: 584.78,
      img: "https://cdn.shopify.com/s/files/1/0264/8421/1735/products/051_aa8d36f6-6417-4263-9a95-0e060cef3f90_2048x.png?v=1585880988",
      currency: "$",
      tag: ["SALE"],
      status: "SELECT OPTION",
    },
  ];
  let cart = [];

  let visualDispCart = [];
  console.log($("#latest-id").hasClass("latest-product"));
  // if($("#latest-id").hasClass("latest-product")){
  //   renderLastestProduct(latestProduct)
  // }
  // if($("#seller-id").hasClass("best-seller")){

  //   renderBestSeller(bestSeller)
  // }
  if ($("#latest-id").hasClass("latest-product")) {
    renderProduct("latest", latestProduct);
  }
  if ($("#seller-id").hasClass("best-seller")) {
    renderProduct("best_seller", bestSeller);
  }
  if ($("#tab-id").hasClass("tabs")) {
    renderProduct("p-tabs", productTab);
  }
  // if($("#searching").hasClass("searchVal")){
  //   renderProduct('search-product', searchProduct)

  // }

  $("body").on("click", ".pro-tab", function () {
    $(".pt-row").empty();
    renderProduct("p-tabs", productTab);
    $(".pro-tab").toggleClass("tab-active");
    $("h1.pro-tab").siblings().removeClass("tab-active");
  });
  $("body").on("click", ".featured-tab", function () {
    $(".pt-row").empty();

    renderProduct("f-tabs", featuredTab);

    $(".featured-tab").toggleClass("tab-active");
    $("h1.featured-tab").siblings().removeClass("tab-active");
  });
  $("body").on("click", ".newest-tab", function () {
    $(".pt-row").empty();

    renderProduct("n-tabs", newestTab);
    $(".newest-tab").toggleClass("tab-active");
    $("h1.newest-tab").siblings().removeClass("tab-active");
  });
  //console.log(products)
  $("#owl-carousel1").owlCarousel({
    items: 1,
    nav: true,
    dots: false,
  });
  $("#owl-carousel3").owlCarousel({
    items: 4,
    nav: true,
    dots: false,

    autoplay: true,
    autoplayTimeout: 3000,
  });
  $("#owl-carousel2").owlCarousel({
    items: 4,
    nav: true,
    dots: false,
  });
  $("#owl-carousel4").owlCarousel({
    items: 3,
  });
  $("#review-owl").owlCarousel({
    items: 1,
    dots: true,
  });

  $(window).scroll(function () {
    const currentPos = $("html").scrollTop();
    if (currentPos > 500) {
      $(".totop").fadeIn(800);
    } else {
      $(".totop").fadeOut();
    }
  });

  $(window).scroll(function () {
    const navPos = $("html").scrollTop();
    //console.log(navPos)
    if (navPos > 500) {
      $(".nav-bar-adj").fadeIn(50);
      $(".nav-bar-adj").css("position", "fixed");
      $(".nav-bar-adj").css(
        "box-shadow",
        " rgba(136, 136, 136, 0.65) 0px 0px 15px 0px"
      );
    } else {
      $(".nav-bar-adj").css("position", "relative");
      $(".nav-bar-adj").css("box-shadow", "none");
    }
  });

  function startfilter() {
    let searchInput = $(".searchVal").val();
    let searchPro = filteredSearch(searchInput);
    coloringText(searchInput, searchPro);
    if (!searchInput) {
      $(".search-form").empty();
      $("div.height-container").removeClass("triangle");
      $(".search-form").css("border", "none");
    } else {
      $(".search-form").css("border", "1px solid #ddd");
      $("div.height-container").addClass("triangle");
    }
  }

  function filteredSearch(searchInput) {
    $(".search-form").empty();

    console.log(searchInput);
    const filterbySearching = searchProduct.filter((val, index) => {
      let tempName = val.name;
      if (tempName.toLowerCase().includes(searchInput.toLowerCase())) {
        return val.name;
      }
    });
    return filterbySearching;
  }

  function coloringText(searchInput, searchPro) {
    const filteredProducts = searchPro.map((val) => {
      let pName = val.name;
      // RegExp is how we define a variable to be used in regex,
      let re = new RegExp(searchInput, "gi");
      // so if i have a re=/[searchInput]/gi so it would be like this
      // i is for case insensitive, coz a and A is different

      // match is to find a specific string and return it in kind of array
      // new Set is used to remove all duplicates in an array
      // the result is in another form of object, so we need to convert it to array using Array.from.
      //console.log(re);
      let searches = [...new Set(val.name.match(re))];
      //console.log(searches);
      searches.map((val) => {
        if (val != "") {
          re = new RegExp(val + "(?![^<]*>)", "g");

          pName = pName.replace(
            re,
            `<span style="color:#06bec7">${val}</span>`
          );
        }
      });
      return {
        ...val,
        name: pName,
      };
    });

    renderSearch(filteredProducts);
  }

  $(".searchVal").keyup(function (e) {
    e.preventDefault();
    startfilter();
  });
  let itemtoal;
  let products = searchProduct;

  $("body").on("click", ".pro-status", function () {
    const id = $(this).parents(".pro-item").data("id");
    const item = products.find((val) => val.id === id);
    const idx = visualDispCart.findIndex((val) => val.id === id);
    let totalPrice;
    if (idx === -1) {
      item.quantity = 1;
      if (item.promotion) {
        item.total = item.quantity * item.promotion;
      } else {
        item.total = item.quantity * item.original;
      }

      visualDispCart.push(item);
      cart.push(item);
    } else {
      visualDispCart[idx].quantity += 1;
      if (item.promotion) {
        visualDispCart[idx].total =
          visualDispCart[idx].quantity * visualDispCart[idx].promotion;
        visualDispCart[idx].total = visualDispCart[idx].total.toFixed(2);
      } else {
        visualDispCart[idx].total =
          visualDispCart[idx].quantity * visualDispCart[idx].original;
        visualDispCart[idx].total = visualDispCart[idx].total.toFixed(2);
      }
    }

    renderCart(visualDispCart);

    localStorage.setItem("cart", JSON.stringify(cart));
  });

  $("body").on("click", ".discard", function () {
    const itemID = $(this).data("id");
    console.log(itemID);
    visualDispCart.filter((val, index) => {
      if (val.id === itemID) {
        visualDispCart.splice(index, 1);
      }
    });
    renderCart(visualDispCart);
  });
});

function checkTriangle() {
  if ($("div").hasClass("search-form")) {
    $("div.height-container").addClass("triangle");
  } else {
    $("div.height-container").removeClass("triangle");
  }
}

function renderCart(visualDispCart) {
  const totalItem = visualDispCart.reduce((acc, val) => {
    return acc + val.quantity;
  }, 0);
  if (totalItem) {
    $(".item-quantity").text(totalItem);
  } else {
    $(".item-quantity").text(visualDispCart.length);
  }
  if (visualDispCart.length) {
    $(".cart-list").empty();
    visualDispCart.map((val) => {
      $(`
        <div class="item-container">
          <div class="check-out-img"><img src="${val.img}" alt=""></div>
          <div class="item-description">
            <div> <a href="">${val.name}</a></div>
            <div>QTY: ${val.quantity}</div>
            <div class="item-price">R$${val.total}</div>
          </div>
          <span class="discard" data-id=${val.id}>x</span>
        </div>
      `).appendTo(".cart-list");
    });
    console.log(visualDispCart);
    const totalCart = visualDispCart.reduce((acc, val) => {
      return acc + val.total;
    }, 0);
    $(".check-out").empty();
    $(`
      <div class="check-out">
          <p class="check-out-total">Total R$ ${totalCart}</p>
          <div class="button-holder">
            <button><a href="checkout.html">VIEW CART</a></button>
            <button><a href="">PROCEED TO CHECKOUT</a></button>
          </div>
        </div>
      `).appendTo(".cart-list");
  } else {
    $(".cart-list").empty();
    $(`
        <p>Your cart is currently empty</p>
    `).appendTo(".cart-list");
  }
}
function renderSearch(filterbySearching) {
  filterbySearching.map((val) => {
    //$(".search-form").empty()
    let promotionHtml = "";
    let originalPrice = `<span class="original">R${val.currency}${val.original}</span>`;
    if (val.promotion) {
      originalPrice = `<span class="original" style="text-decoration:line-through; font-weight:normal">R${val.currency}${val.original}</span>`;
      promotionHtml = `<span class="promotion" style="color:#06bec7">R${val.currency}${val.promotion}</span>`;
    }

    $(`
    
    <div class="search-content">
      <div id="search_${val.id}" class="search-item flex"  data-id=${val.id}>
        <a href="" class="hover-link-latest"><img src="${val.img}" alt=""></a>
        <div class="search-detail">
          <span class="pro-name">${val.name}</span><br>
          <div class="search-margin-adj"></div>
          ${originalPrice}
          ${promotionHtml}
        </div>
      </div>
    </div>
    
    `).appendTo(".search-form");
  });
}
function renderProduct(type, products) {
  let targetClass = "";
  let additionalClass = "";
  $(targetClass).empty();
  // let targetClass = (type == 'best_seller') ? '.bs-lastest-row' : '.lastest-row';
  // let additionalClass = (type == 'best_seller') ? 'bs-latest-item' : 'latest-item';
  //  let targetClass=".bs-latest-row";
  //  let additionalClass="bs-latest-item";
  switch (type) {
    case "latest":
      targetClass = ".latest-row";
      additionalClass = "latest-item";
      break;
    case "best_seller":
      targetClass = ".bs-latest-row";
      additionalClass = "bs-latest-item";
      break;
    case "p-tabs":
      targetClass = ".pt-row";
      additionalClass = "pt-item";
      break;
    case "f-tabs":
      targetClass = ".pt-row";
      additionalClass = "pt-item";
      break;
    case "n-tabs":
      targetClass = ".pt-row";
      additionalClass = "pt-item";
      break;
  }
  // if(type=="latest"){
  //   targetClass=".latest-row";
  //   additionalClass="latest-item";
  // }
  console.log($(window).width());
  products.map((val, index) => {
    let promotionHtml = "";
    let originalPrice = `<span class="original">R${val.currency}${val.original}</span>`;
    if (val.promotion) {
      originalPrice = `<span class="original" s>R${val.currency}${val.original}</span>`;
      promotionHtml = `<span class="promotion" style="color:#06bec7">R${val.currency}${val.promotion}</span>`;
    }

    $(`
      
      <div class="col-sm-3">
        <div id="${type}_${val.id}" class="${additionalClass} pro-item"  data-id=${val.id}>
          <a href="" class="hover-link-latest"><img src="${val.img}" alt=""></a>
          <ul class="tag-container"></ul>
          <div class="interest-icon">
            <span><i class="fas fa-exchange-alt"></i></span>
            <span><i class="fas fa-heart"></i></span>
            <span><i class="fas fa-search"></i></span>
          </div>
          <span class="pro-name">${val.name}</span><br>
          ${originalPrice}
          ${promotionHtml}
          <span class="pro-status">${val.status}</span>
        </div>
      </div>
      
      `).appendTo(targetClass);

    renderTag2(`${type}_${val.id}`, val.tag);
  });
}

// function renderTag(array){
//   if (array) {
//     const newValue=array.map((val,index)=>{
//       $(`
//           <div class="tag tag-${val}"
//             <span>${val}</span>
//           </div>
//           `).appendTo(".tag-container")
//     });
//   }
// }

function renderTag2(id, tags) {
  if (tags != undefined) {
    const newValue = tags.map((val, index) => {
      $(`
        <li class="tag tag-${val}">
         ${val}
        </li>
      `).appendTo(`#${id} .tag-container`);
    });
  }
}

// $(".myModal").on(events, function () {
//   $(".myModal").css("display", "block");
// });

// Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
