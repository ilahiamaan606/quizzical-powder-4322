let container = document.getElementById("listedproduct");
let cartdata=JSON.parse(localStorage.getItem("cart_data")) || [];

async function fetching() {
    try {
        let res = await fetch("http://localhost:9090/product/boy", { method: "GET", });
        data = await res.json()
        console.log(data)
        rendercard(data)
    } catch (error) {
        console.log(error)
    }

}
fetching()


function rendercard(data) {
    container.innerHTML = null;

    data.forEach(element => {
        let card = document.createElement("div");
        card.setAttribute("class", "imgdiv");

        let img = document.createElement("img");
        img.src = element.image1;

        let div1 = document.createElement("div");
        div1.setAttribute("class", "pricediv");
        let div4 = document.createElement("div");
        let h3 = document.createElement("h2");
        h3.innerText = "$ " + element.price;

        // let div5 = document.createElement("div");
        // div5.setAttribute("class", "offdiv");
        // let p0 = document.createElement("s");
        // p0.innerText = "$" + Math.floor(element.price + 11);
        // let off = document.createElement("p");
        // if (element.price > 1 && element.price <= 10) {
        //     off.innerText = "10%off"
        // } else if (element.price > 10 && element.price <= 20) {
        //     off.innerText = "16%off"
        // } else if (element.price > 20 && element.price <= 25) {
        //     off.innerText = "21%off"
        // } else {
        //     off.innerText = "37%off"
        // }

        // div5.append(p0, off)
        div4.append(h3);
        // let button = document.createElement("button");
        // button.setAttribute("class", "addtofav")
        // button.innerText = "❤️";

        // button.addEventListener("click", (e) => {
        //     e.preventDefault();
        //     let added = false;
        //     for (let i = 0; i < lsdata.length; i++) {
        //         if (element._id == lsdata[i].id) {
        //             added = true;
        //             break;
        //         }
        //     }
        //     if (added == true) {
        //         alert("PRODUCT ALREADY ADDED TO FAVORITE")
        //     } else {
        //         lsdata.push(element);
        //         localStorage.setItem("fav_data", JSON.stringify(lsdata));
        //         alert("PRODUCT ADDED TO FAVORITE SUSSFULLY");
        //     }


        // })

        div1.append(div4);

        let div2 = document.createElement("div");
        div2.setAttribute("class", "description");
        let p1 = document.createElement("p");
        p1.innerText = element.name;
        let p2 = document.createElement("p");
        p2.innerText = element.category;

        let btn = document.createElement("button");
        btn.setAttribute("class", "buyitem");
        btn.innerText = "Add to Cart";

        btn.addEventListener("click", (e) => {
            e.preventDefault();
            let added = false;
            for (let i = 0; i < cartdata.length; i++) {
                if (element._id == cartdata[i]._id) {
                    added = true;
                    break;
                }
            }
            if (added == true) {
                alert("PRODUCT ALREADY ADDED TO CART")
            } else {
                cartdata.push(element);
                localStorage.setItem("cart_data", JSON.stringify(cartdata));
                alert("PRODUCT ADDED TO CART SUCCESSFULLY");
            }
        })

        div2.append(p1, p2);

        card.append(img, div1, div2, btn);
        container.append(card);
    });
}