const DOMSelectors = {
  container: document.querySelector(".container"),
  resetBtn: document.querySelector(".reset-btn"),
  fullBtn: document.querySelector(".full-btn"),
  veggieBtn: document.querySelector(".veg-btn"),
  stockBtn: document.querySelector(".stock-btn"),
};

const menu = [
  {
    name: "Pizza Slice",
    vegetarian: true,
    price: 2.0,
    img:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    inStock: true,
  },
  {
    name: "Salad",
    vegetarian: true,
    price: 5.0,
    img:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    inStock: true,
  },
  {
    name: "Soup",
    vegetarian: true,
    price: 3.0,
    img:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    inStock: true,
  },
  {
    name: "Grilled Cheese",
    vegetarian: true,
    price: 4,
    img:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
    inStock: false,
  },
  {
    name: "Roast Chicken",
    vegetarian: false,
    price: 8.0,
    img:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    inStock: true,
  },
  {
    name: "Steak",
    vegetarian: false,
    price: 10.0,
    img:
      "https://images.unsplash.com/photo-1574969884448-fe5bce3d0d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
    inStock: false,
  },
  {
    name: "Cheeseburger",
    vegetarian: false,
    price: 6,
    img:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80",
    inStock: true,
  },
  {
    name: "Ice Cream",
    vegetarian: false,
    price: 3.0,
    img:
      "https://images.unsplash.com/photo-1566454419290-57a64afe30ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    inStock: true,
  },
];

function resetContainer() {
  DOMSelectors.container.innerHTML = "";
}

function display(option = "") {
  // remove all the items in the container before displaying
  resetContainer();

  // set `result` as a variable that will store our (potentially) filtered array
  let result;
  // check if the `display` function has an option parameter
  switch (option) {
    case "veggie":
      // filter only items that are vegeterian if option=="veggie"
      result = menu.filter((item) => item.vegetarian === true);
      break;

    case "stock":
      // filter only items that are in stock if option=="stock"
      result = menu.filter((item) => item.inStock === true);
      break;

    default:
      // if no option parameter is passed, it defaults to keeping all items
      // used by "full-btn" element
      result = menu;
      break;
  }

  // display filtered array onto html
  result.forEach((el) => {
    DOMSelectors.container.insertAdjacentHTML(
      "afterbegin",
      `
        <ul class="item-list">
          <li class="item-name item-value">${el.name}</li>
          <li class="item-price item-value">$${el.price}</li>
          <li class="item-vegetarian item-value">
            ${el.vegetarian ? "Vegetarian" : "Not Vegetarian"}
          </li>
          <li class="item-image">
            <img
              class="item-image"
              src="${el.img}"
              alt=""
            />
          </li>
          <li class="item-in-stock item-value">
            ${el.inStock ? "In Stock" : "Out of Stock"}
          </li>
        </ul>
      `
    );
  });
}

function init() {
  // Set DOM event listeners to every button using the `display()` function
  // since this is the `init()` function, these event listeners are set
  // everytime the webpage loads
  DOMSelectors.fullBtn.addEventListener("click", () => {
    display();
  });
  DOMSelectors.veggieBtn.addEventListener("click", () => {
    display("veggie");
  });
  DOMSelectors.stockBtn.addEventListener("click", () => {
    display("stock");
  });
  DOMSelectors.resetBtn.addEventListener("click", () => {
    resetContainer();
  });

  // [optional] display all items at first
  display();
}

// run `init()` function
init();
