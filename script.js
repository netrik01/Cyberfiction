function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./Image/male0001.png
     ./Image/male0002.png
     ./Image/male0003.png
     ./Image/male0004.png
     ./Image/male0005.png
     ./Image/male0006.png
     ./Image/male0007.png
     ./Image/male0008.png
     ./Image/male0009.png
     ./Image/male0010.png
     ./Image/male0011.png
     ./Image/male0012.png
     ./Image/male0013.png
     ./Image/male0014.png
     ./Image/male0015.png
     ./Image/male0016.png
     ./Image/male0017.png
     ./Image/male0018.png
     ./Image/male0019.png
     ./Image/male0020.png
     ./Image/male0021.png
     ./Image/male0022.png
     ./Image/male0023.png
     ./Image/male0024.png
     ./Image/male0025.png
     ./Image/male0026.png
     ./Image/male0027.png
     ./Image/male0028.png
     ./Image/male0029.png
     ./Image/male0030.png
     ./Image/male0031.png
     ./Image/male0032.png
     ./Image/male0033.png
     ./Image/male0034.png
     ./Image/male0035.png
     ./Image/male0036.png
     ./Image/male0037.png
     ./Image/male0038.png
     ./Image/male0039.png
     ./Image/male0040.png
     ./Image/male0041.png
     ./Image/male0042.png
     ./Image/male0043.png
     ./Image/male0044.png
     ./Image/male0045.png
     ./Image/male0046.png
     ./Image/male0047.png
     ./Image/male0048.png
     ./Image/male0049.png
     ./Image/male0050.png
     ./Image/male0051.png
     ./Image/male0052.png
     ./Image/male0053.png
     ./Image/male0054.png
     ./Image/male0055.png
     ./Image/male0056.png
     ./Image/male0057.png
     ./Image/male0058.png
     ./Image/male0059.png
     ./Image/male0060.png
     ./Image/male0061.png
     ./Image/male0062.png
     ./Image/male0063.png
     ./Image/male0064.png
     ./Image/male0065.png
     ./Image/male0066.png
     ./Image/male0067.png
     ./Image/male0068.png
     ./Image/male0069.png
     ./Image/male0070.png
     ./Image/male0071.png
     ./Image/male0072.png
     ./Image/male0073.png
     ./Image/male0074.png
     ./Image/male0075.png
     ./Image/male0076.png
     ./Image/male0077.png
     ./Image/male0078.png
     ./Image/male0079.png
     ./Image/male0080.png
     ./Image/male0081.png
     ./Image/male0082.png
     ./Image/male0083.png
     ./Image/male0084.png
     ./Image/male0085.png
     ./Image/male0086.png
     ./Image/male0087.png
     ./Image/male0088.png
     ./Image/male0089.png
     ./Image/male0090.png
     ./Image/male0091.png
     ./Image/male0092.png
     ./Image/male0093.png
     ./Image/male0094.png
     ./Image/male0095.png
     ./Image/male0096.png
     ./Image/male0097.png
     ./Image/male0098.png
     ./Image/male0099.png
     ./Image/male0100.png
     ./Image/male0101.png
     ./Image/male0102.png
     ./Image/male0103.png
     ./Image/male0104.png
     ./Image/male0105.png
     ./Image/male0106.png
     ./Image/male0107.png
     ./Image/male0108.png
     ./Image/male0109.png
     ./Image/male0110.png
     ./Image/male0111.png
     ./Image/male0112.png
     ./Image/male0113.png
     ./Image/male0114.png
     ./Image/male0115.png
     ./Image/male0116.png
     ./Image/male0117.png
     ./Image/male0118.png
     ./Image/male0119.png
     ./Image/male0120.png
     ./Image/male0121.png
     ./Image/male0122.png
     ./Image/male0123.png
     ./Image/male0124.png
     ./Image/male0125.png
     ./Image/male0126.png
     ./Image/male0127.png
     ./Image/male0128.png
     ./Image/male0129.png
     ./Image/male0130.png
     ./Image/male0131.png
     ./Image/male0132.png
     ./Image/male0133.png
     ./Image/male0134.png
     ./Image/male0135.png
     ./Image/male0136.png
     ./Image/male0137.png
     ./Image/male0138.png
     ./Image/male0139.png
     ./Image/male0140.png
     ./Image/male0141.png
     ./Image/male0142.png
     ./Image/male0143.png
     ./Image/male0144.png
     ./Image/male0145.png
     ./Image/male0146.png
     ./Image/male0147.png
     ./Image/male0148.png
     ./Image/male0149.png
     ./Image/male0150.png
     ./Image/male0151.png
     ./Image/male0152.png
     ./Image/male0153.png
     ./Image/male0154.png
     ./Image/male0155.png
     ./Image/male0156.png
     ./Image/male0157.png
     ./Image/male0158.png
     ./Image/male0159.png
     ./Image/male0160.png
     ./Image/male0161.png
     ./Image/male0162.png
     ./Image/male0163.png
     ./Image/male0164.png
     ./Image/male0165.png
     ./Image/male0166.png
     ./Image/male0167.png
     ./Image/male0168.png
     ./Image/male0169.png
     ./Image/male0170.png
     ./Image/male0171.png
     ./Image/male0172.png
     ./Image/male0173.png
     ./Image/male0174.png
     ./Image/male0175.png
     ./Image/male0176.png
     ./Image/male0177.png
     ./Image/male0178.png
     ./Image/male0179.png
     ./Image/male0180.png
     ./Image/male0181.png
     ./Image/male0182.png
     ./Image/male0183.png
     ./Image/male0184.png
     ./Image/male0185.png
     ./Image/male0186.png
     ./Image/male0187.png
     ./Image/male0188.png
     ./Image/male0189.png
     ./Image/male0190.png
     ./Image/male0191.png
     ./Image/male0192.png
     ./Image/male0193.png
     ./Image/male0194.png
     ./Image/male0195.png
     ./Image/male0196.png
     ./Image/male0197.png
     ./Image/male0198.png
     ./Image/male0199.png
     ./Image/male0200.png
     ./Image/male0201.png
     ./Image/male0202.png
     ./Image/male0203.png
     ./Image/male0204.png
     ./Image/male0205.png
     ./Image/male0206.png
     ./Image/male0207.png
     ./Image/male0208.png
     ./Image/male0209.png
     ./Image/male0210.png
     ./Image/male0211.png
     ./Image/male0212.png
     ./Image/male0213.png
     ./Image/male0214.png
     ./Image/male0215.png
     ./Image/male0216.png
     ./Image/male0217.png
     ./Image/male0218.png
     ./Image/male0219.png
     ./Image/male0220.png
     ./Image/male0221.png
     ./Image/male0222.png
     ./Image/male0223.png
     ./Image/male0224.png
     ./Image/male0225.png
     ./Image/male0226.png
     ./Image/male0227.png
     ./Image/male0228.png
     ./Image/male0229.png
     ./Image/male0230.png
     ./Image/male0231.png
     ./Image/male0232.png
     ./Image/male0233.png
     ./Image/male0234.png
     ./Image/male0235.png
     ./Image/male0236.png
     ./Image/male0237.png
     ./Image/male0238.png
     ./Image/male0239.png
     ./Image/male0240.png
     ./Image/male0241.png
     ./Image/male0242.png
     ./Image/male0243.png
     ./Image/male0244.png
     ./Image/male0245.png
     ./Image/male0246.png
     ./Image/male0247.png
     ./Image/male0248.png
     ./Image/male0249.png
     ./Image/male0250.png
     ./Image/male0251.png
     ./Image/male0252.png
     ./Image/male0253.png
     ./Image/male0254.png
     ./Image/male0255.png
     ./Image/male0256.png
     ./Image/male0257.png
     ./Image/male0258.png
     ./Image/male0259.png
     ./Image/male0260.png
     ./Image/male0261.png
     ./Image/male0262.png
     ./Image/male0263.png
     ./Image/male0264.png
     ./Image/male0265.png
     ./Image/male0266.png
     ./Image/male0267.png
     ./Image/male0268.png
     ./Image/male0269.png
     ./Image/male0270.png
     ./Image/male0271.png
     ./Image/male0272.png
     ./Image/male0273.png
     ./Image/male0274.png
     ./Image/male0275.png
     ./Image/male0276.png
     ./Image/male0277.png
     ./Image/male0278.png
     ./Image/male0279.png
     ./Image/male0280.png
     ./Image/male0281.png
     ./Image/male0282.png
     ./Image/male0283.png
     ./Image/male0284.png
     ./Image/male0285.png
     ./Image/male0286.png
     ./Image/male0287.png
     ./Image/male0288.png
     ./Image/male0289.png
     ./Image/male0290.png
     ./Image/male0291.png
     ./Image/male0292.png
     ./Image/male0293.png
     ./Image/male0294.png
     ./Image/male0295.png
     ./Image/male0296.png
     ./Image/male0297.png
     ./Image/male0298.png
     ./Image/male0299.png
     ./Image/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#home>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#home>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});

document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {

      gsap.to("#loader", {
          height: 0,
          y: -200,
          delay: 2,
          duration: 2,
          ease: Expo.easeInOut
      })
  }
})

gsap.to("#first",{
  scrollTrigger:{
    trigger:`#first`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#second",{
  scrollTrigger:{
    trigger:`#second`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#third",{
  scrollTrigger:{
    trigger:`#third`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})