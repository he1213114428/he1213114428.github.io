var myBg = new xkTool(
  "/imgs/bg1.jpg",true
);

myBg.cheatTitle();
myBg.magicCirle();
myBg.footFish();
myBg.consoleAnchor();

myBg.aplayer({
  meting: true,
  autoplay: true,
  order: 'random',
  volume: 0.4,
  fixed: true,
  mini: true,
});
myBg.meting("2916766519", "netease", "playlist");
console.log(myBg.aplayer);
console.log(myBg.meting);


