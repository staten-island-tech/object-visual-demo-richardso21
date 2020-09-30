const DOMSelectors = {
  container: document.querySelector(".container"),
};

const menu = [
// `menu` is actually an array [] containing objects {}
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

function init() {
  menu.forEach((el) => {
  // since the `menu` object is an array [],
  // we use the `forEach` method to iterate through
  // every element in the array. (in this case, each element is an object {})
  // in our callback function () => {}, we pass in `el`, which represents
  // the current element (object {}) being iterated
  // We can call the element's properties (`el.name`, `el.price`, etc.)

    DOMSelectors.container.insertAdjacentHTML(
    // `DOMSelectors` is an object defined at the top
    // `DOMSelectors.container` is our defined property we want to use

      "afterbegin",
      // we insert the bottom HTML code right after the beginning of
      // the `.container` element
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
      // Ternary operators ==> (if this) ? (then do this) : (else do this)
    );
  });
}
init();
// making `init()` and executing it (runs everytime the page loads)
