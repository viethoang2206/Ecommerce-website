$(function () {
    const cart=JSON.parse(localStorage.getItem("cart"));
    
    
    renderCart(cart);
    let visualDispCart=[];
    $("body").on("click",".pro-in", function () {
      const id=$(this).parents(".item-container").data("id")
      const item=cart.find((val)=> val.id===id);
      const idx=cart.findIndex((val)=> val.id===id);
      console.log(cart)
      console.log(item)
      if(idx===-1){
        console.log(visualDispCart)
        item.quantity=1;
        if(item.promotion){
          item.total=item.quantity*item.promotion;
    
        }
        else{
          item.total=item.quantity*item.original;
        }
        
        
      }
      else{
        cart[idx].quantity+=1;
        if(item.promotion){
          cart[idx].total=(cart[idx].quantity*cart[idx].promotion);
          cart[idx].total=cart[idx].total.toFixed(2)
        }
        else{
          cart[idx].total=(cart[idx].quantity*cart[idx].original);
          cart[idx].total=cart[idx].total.toFixed(2)
        }
      }
      localStorage.setItem("cart",JSON.stringify(cart));
      renderCart(cart);
    });
    $("body").on("click",".pro-de", function () {
      const id=$(this).parents(".item-container").data("id")
      const item=cart.find((val)=> val.id===id);
      const idx=cart.findIndex((val)=> val.id===id);
      console.log(cart)
      console.log(item)
        if(cart[idx].quantity>1){
          cart[idx].quantity-=1;
          if(item.promotion){
            cart[idx].total=(cart[idx].quantity*cart[idx].promotion);
            cart[idx].total=cart[idx].total.toFixed(2)
          }
          else{
            cart[idx].total=(cart[idx].quantity*cart[idx].original);
            cart[idx].total=cart[idx].total.toFixed(2)
          }
        
          localStorage.setItem("cart",JSON.stringify(cart));
          renderCart(cart);
      }
        
    });
    $("body").on("click",".discard", function () {
      const itemID=$(this).data("id");
      console.log(itemID);
      cart.filter((val,index)=>{
        if(val.id===itemID){
          cart.splice(index,1);
        }
      })
      console.log(cart)
      renderCart(cart)
    });
    $("body").on("click",".cart-clear", function () {
      $(".checkout-item-description").empty();
      $(`
          <p>Your cart is currently empty</p>
      `).appendTo(".checkout-item-description")
    
    });
});

function renderCart(visualDispCart){
    const totalItem=visualDispCart.reduce((acc,val)=>{
    return acc+val.quantity;
  },0);
  if(totalItem){
    $(".item-quantity").text(totalItem);
  }else{
    $(".item-quantity").text(visualDispCart.length);
  }
    if(visualDispCart.length){
      $(".checkout-item-description").empty();
      visualDispCart.map((val)=>{
        let originalPrice = `<div class="original">R${val.currency}${val.original}</div>`;
      if (val.promotion) {
        originalPrice = `<div class="original">R${val.currency}${val.promotion}</div>`;
      
      }
        $(`
        <span class="discard" data-id=${val.id}>x</span>
          <div class="item-container" data-id=${val.id}>
            <div class="check-out-img"><img src="${val.img}" alt=""></div>
              <div> <a href="">${val.name}</a></div>
              ${originalPrice}
              <div class="flex">
                <button class="pro-de">-</button>
                <div class="item-quantity">${val.quantity}</div>
                <button class="pro-in">+</button>
              </div>
              <div class="item-price">R$${val.total}</div>
            
            
          </div>
        `).appendTo(".checkout-item-description");
      });
        
        const totalCart=visualDispCart.reduce((acc,val)=>{
          return acc+val.total;
        },0);
        $(".check-out").empty();
        $(`
        <div class="check-out">
            <div class="button-holder">
              <div>
              <button class="back-shopping"><a href="index.html">CONTINUE SHOPPING</a></button>
              </div>
              <div>
              <button class="cart-clear">CLEAR CART</button>
              </div>
            </div>
          </div>
        `).appendTo(".checkout-item-description")
    }
    else{
      $(".checkout-item-description").empty();
      $(`
          <p>Your cart is currently empty</p>
      `).appendTo(".checkout-item-description")
    }
  }