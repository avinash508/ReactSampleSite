const data = [{
    id: 1,
    name: "Pilot G2 Retractable Premium Gel Ink Roller Ball Pens, Fine Point, Black, 12-Pack (31020)",
    price: "$11.89",
    summary: "G2 writes longer than the average of the top branded gel ink pens. Independent third party ISO testing. Average of G2 write out (all point sizes) compared to the average of the top branded gel ink pens tested (all point sizes).",
    description: "G2 writes longer than the average of the top branded gel ink pens. Independent third party ISO testing. Average of G2 write out (all point sizes) compared to the average of the top branded gel ink pens tested (all point sizes). Data on file with Pilot Corporation of America. Contoured rubber grip for writing comfort Box of 12 fine point pens with black ink. Dynamic Gel Ink Formula that's smooth writing and smear-proof - Retractable and refillable - Pilot G2 refill model #77240 sold separately",
    images: {
      small: 'http://placehold.it/160?text=Image',
      large: 'http://placehold.it/350?text=Image'
    }
  },
  {
    id: 2,
    name: "Paper Mate InkJoy 300RT Retractable Ballpoint Pens, Medium Point, Assorted Ink, 8 Pack (1945921)",
    price: "$4.99",
    summary: "Ultra-smooth ink in 8 Vivid shades keeps the fun and ideas flowing. Reliable and fluid 1.0mm medium tip draws bold lines from beginning to end",
    description: "Ultra-smooth ink in 8 Vivid shades keeps the fun and ideas flowing. Reliable and fluid 1.0mm medium tip draws bold lines from beginning to end. Retractable design is ready to write with just a click. Comfortable grip feels good in your hand. Includes: 1 magenta, 1 red, 1 orange, 1 green, 1 turquoise, 1 blue, 1 purple and 1 black ballpoint pen",
    images: {
      small: 'http://placehold.it/160?text=Image',
      large: 'http://placehold.it/350?text=Image'
    }
  },
  {
    id: 3,
    name: "BIC Round Stic Xtra Life Ball Pen, Medium Point (1.0 mm), Black, 60-Count",
    price: '$8.78',
    summary: "Writes 40% longer on average than the leading competitor. Writes First Time, Every Time!.",
    description: "Writes 40% longer on average than the leading competitor. Writes First Time, Every Time!. Frosted cap and translucent barrel for visible ink supply. Flexible round barrel for writing comfort",
    images: {
      small: 'http://placehold.it/160?text=Image',
      large: 'http://placehold.it/350?text=Image'
    }
  },
  {
    id: 4,
    name: "Lamy Safari Fountain Pen - Charcoal - Fine",
    price: "#33.93",
    summary: "Charcoal Black ABS coloured plastic body. Black coated steel nib; fine point.",
    description: "Charcoal Black ABS coloured plastic body. Black coated steel nib; fine point. Includes one Lamy T10 Blue Cartridge. Accepts Z24 cartridge converter, sold separately.",
    images: {
      small: 'http://placehold.it/160?text=Image',
      large: 'http://placehold.it/350?text=Image'
    }
  }];

const DURATION = 1000;

const Api = {
  fetchProducts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, DURATION);
    });
  },

  fetchProductByid(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(_getById(id));
      }, DURATION);
    });
  }
};

function _getById(id) {
  let l = data.length;
  while(l--) {
    if(data[l].id === id) {
      return data[l]
    }
  }
}

export default Api;